import React, { useState } from 'react';

import { connect } from 'react-redux'

import Tasks from './TasksStage'
import Task from './Task'
import findList from '../../../../../utils/findActiveList'


const ListView = props => {
    const [activeStage, setActiveStage] = useState(1)
    const { tasksLists, activListId, listTempId, tasks } = props
    const list = findList(activListId, tasksLists, listTempId)

    const TasksReact = tasks.map((T, i) => <Task key={T.temp_Id} task={T} index={i} />)
    const tasksForList = TasksReact.filter(t => activListId === t.props.task.list || listTempId === t.props.task.list)

    const handleSelect = e => {
        setActiveStage(e.target.value)
    }


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
            </nav>
            {list ? <Tasks activeList={list} activeStage={activeStage} tasks={tasksForList} /> : <p>Wybierz jakąś listę zadań</p>}
        </div>
    );
}
const mapStateToProps = state => {
    return { activListId: state.activeList._id, tasksLists: state.loginData.tasksLists, listTempId: state.activeList.temp_id, tasks: state.loginData.tasks }
}
export default connect(mapStateToProps)(ListView);