import React from 'react';
import './css/NavigationScreen.css'
import NavigationListItem from './components/ListItem'

import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { addList, deleteList } from '../../../../redux/actions'
import taskAppApi from '../../../../APIs/taskAppApi'

const NavigationScreen = props => {


    const { lists } = props.loginData
    const { avatar, name } = props.loginData.user
    const handleRemoveList = async (listId, temp_id) => {

        const token = localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token')
        try {
            const response = await taskAppApi.delete(`/lists/${listId}`, { headers: { Authorization: `Bearer ${token}` } })

            const newTasksLists = await taskAppApi.get(`/lists`, { headers: { Authorization: `Bearer ${token}` } })

            props.deleteList(newTasksLists.data)

        } catch (e) {
            console.log(e);

        }

    }
    const mapedLists = lists.map(list => <NavigationListItem handleRemove={handleRemoveList} key={list._id} listId={list._id} tittle={list.tittle} temp_id={list.temp_id} />)
    const handleAddBtn = async e => {
        //e.stopPropagaction()
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token')
        //console.log(token);

        const body = {
            tittle: "Nowa Lista",
            description: "opis",
            temp_id: new Date().getTime()
        }
        try {
            const listFromServer = await taskAppApi.post("/lists", body, { headers: { Authorization: `Bearer ${token}` } })
            // console.log(listFromServer.data, "dane z pobrania");

            props.addList(listFromServer.data)
        } catch (e) {
            console.log(e);
        }



    }

    return (
        <div className="main__navigaction">
            <NavLink to="user" className="navigaction__user--wrapper">
                <div className="navigaction__user" >
                    <img className="navigation__thumbnail" src={`data:image/jpg;base64,${avatar}`} />
                    <p className="navigation__username">{name}</p>
                </div>
            </NavLink>
            <button onClick={handleAddBtn} className="btn nav-btn--add">Add</button>
            <ul className="navigaction__list">
                {mapedLists}
            </ul>
        </div>
    );
}
const mapStateToProps = state => {
    return { loginData: state.loginData }
}
export default connect(mapStateToProps, { addList, deleteList })(NavigationScreen);