import React from 'react';

import { connect } from 'react-redux'
import { setActiveList } from '../../../../../redux/actions/index'

import { NavLink } from 'react-router-dom'
const NavigationListItem = props => {
    const { tittle, setActiveList, listId, temp_id, handleRemove } = props
    const itemHandler = e => {
        setActiveList({ _id: listId, temp_id })
    }
    const handleDeleteBtn = e => {
        handleRemove(listId, temp_id)
    }
    return (
        <NavLink to="list">
            <div className="listItem-wrap">
                <div onClick={itemHandler} className="navigation__item">
                    {tittle}
                </div>
                <i onClick={handleDeleteBtn} className="fas fa-trash-alt"></i>

            </div>
        </NavLink>
    );
}
const mapStateToProps = state => {
    return { activeList: state.activeList }
}
export default connect(mapStateToProps, { setActiveList })(NavigationListItem);