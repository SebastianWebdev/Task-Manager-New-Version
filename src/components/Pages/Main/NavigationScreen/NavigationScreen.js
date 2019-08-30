import React from 'react';
import './css/NavigationScreen.css'
import NavigationListItem from './components/ListItem'

import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
const NavigationScreen = props => {
    const { avatar, userName } = props
    console.log(props, "props z navigaction screen");

    const lists = props.lists.map(list => <NavigationListItem key={list._id} listId={list._id} tittle={list.tittle} temp_id={list.temp_id} />)
    return (
        <div className="main__navigaction">
            <NavLink to="user" className="navigaction__user--wrapper">
                <div className="navigaction__user" >
                    <img className="navigation__thumbnail" src={`data:image/jpg;base64,${avatar}`} />
                    <p className="navigation__username">{userName}</p>
                </div>
            </NavLink>
            <ul className="navigaction__list">
                {lists}
            </ul>
        </div>
    );
}
const mapStateToProps = state => {
    return { lists: state.loginData.lists, avatar: state.loginData.user.avatar, userName: state.loginData.user.name }
}
export default connect(mapStateToProps)(NavigationScreen);