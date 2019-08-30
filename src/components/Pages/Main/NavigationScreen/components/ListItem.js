import React from 'react';

import { connect } from 'react-redux'
import { setActiveList } from '../../../../../redux/actions/index'

import { NavLink } from 'react-router-dom'
const NavigationListItem = props => {
    const { tittle, setActiveList, listId, temp_id } = props
    const itemHandler = e => {
        setActiveList({ _id: listId, temp_id })
    }
    return (
        <NavLink to="list">
            <div onClick={itemHandler} className="navigation__item">
                {tittle}
            </div>
        </NavLink>
    );
}
const mapStateToProps = state => {
    return { activeList: state.activeList }
}
export default connect(mapStateToProps, { setActiveList })(NavigationListItem);