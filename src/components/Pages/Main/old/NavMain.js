import '../../styles/Nav.css'
import './components Css/NavMain.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ListNavItem from "./ListNavItem;"
const NavMain = (props) => {
    const { lists, userName, addListHandler, handler, deleteList, avatar } = props
    const ReactLists = lists.map(list => <ListNavItem key={list._id ? list._id : list.temp_id} name={list.tittle} id={list._id ? list._id : list.temp_id} handler={handler} deleteList={deleteList} />)
    return (
        <nav className=" nav nav2">
            <div className="nav-user"><img src={avatar} alt="" className="avatar-thumbnail" /> <NavLink to="/user">{userName}</NavLink></div>
            {ReactLists}
            <button onClick={addListHandler} className="btn-rec" id="add-list">+</button>
        </nav>
    )
}
export default NavMain