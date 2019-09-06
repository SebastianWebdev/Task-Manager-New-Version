import React, { useState } from 'react';

import { connect } from 'react-redux'

import Tasks from './TasksStage'
import CreateTask from './CreateTask'
import findList from '../../../../../utils/findActiveList'
import CreateTaskPortal from '../../../../portals/createTaskPortal'
import DropDown from '../../../../DropDown'
const ListView = props => {
    const [activeStage, setActiveStage] = useState(1)
    const [isNewTaskCreating, setIsNewTaskCreating] = useState(false)
    const [sortBy, setSortBy] = useState("default")
    const { tasksLists, activListId, listTempId } = props
    const list = findList(activListId, tasksLists, listTempId)
    const handleSelect = e => {
        setActiveStage(e.target.value)
    }
    const handleAddTaskBtn = e => {
        if (activListId) {
            setIsNewTaskCreating(true)
        }

    }

    const dropDownCallback = (id) => {
        setSortBy(id)
    }
    const dropOptions = [
        { tittle: "Od najnowszych", id: 1 },
        { tittle: "Od najstarszych", id: 2 },
        { tittle: "A-Z", id: 3 },
        { tittle: 'Z-A', id: 4 }
    ]
    return (
        <div className="main__content-wrapper main__content--list ">
            <nav className="main__active-list--info">
                <h1>{list.tittle}</h1>
                <form className="listView__form--stages" action="">
                    <label htmlFor="stagesSelect">Stages</label>
                    <select className="app__select" onChange={handleSelect} name="stages" id="stagesSelect">
                        <option value="1">Do Zrobienia</option>
                        <option value="2">W trakcie</option>
                        <option value="3">Zrobione</option>
                    </select>
                </form>
                {activListId ? <button onClick={handleAddTaskBtn} className="add_btn add_btn--task">Add Task</button> : null}

                <DropDown options={dropOptions} name="to jest lista rozwijana" callback={dropDownCallback} defaultOption={{ tittle: "Sortowanie domyślne", id: 'default' }} activeOptionStyles={{ backgroundColor: 'red' }} />
            </nav>
            {list ? <Tasks sortBy={sortBy} activeList={list} activeStage={activeStage} /> :
                <p>Wybierz jakąś listę zadań</p>
            }
            {isNewTaskCreating ?
                <CreateTaskPortal>
                    <CreateTask close={setIsNewTaskCreating} activeList={activListId} />
                </CreateTaskPortal>
                : null}
        </div>
    );
}
const mapStateToProps = state => {
    return { activListId: state.activeList._id, tasksLists: state.loginData.lists, listTempId: state.activeList.temp_id }
}
export default connect(mapStateToProps)(ListView);