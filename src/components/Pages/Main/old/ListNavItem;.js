import React from 'react';
import { NavLink } from 'react-router-dom'
const ListNavItem = (props) => {
    return (
        <NavLink to={'list'} id={props.id} name={props.name} onClick={props.handler} className="list-item">
            <div className="list-item">
                <i className="fas fa-list"></i>
                <p className="list-name">{props.name}</p>
                <button data-listid={props.id} className="btn-rec btn-rec-small" id="delete-list" onClick={props.deleteList}>-</button>
            </div>
        </NavLink>
    );
}
export default ListNavItem;