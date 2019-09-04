import React, { useEffect, useState } from 'react';

import '../css/Tasks.css'

import Task from './Task'

import Sortable from 'sortablejs';
import { connect } from 'react-redux'
import { updateTaskStage, deleteTask } from '../../../../../redux/actions'

const Tasks = props => {
    const draggableContainer = React.createRef()
    const { loginData, activeStage, activeList, updateTaskStage, deleteTask } = props

    const tasks = loginData.tasks
    const handleStage = (newStage, index) => {
        updateTaskStage({ index, stage: newStage })
    }
    const handleDeleteTask = (index, id) => {
        deleteTask({ index, id })
    }

    const TasksReact = tasks.map((T, i) => <Task handleDelete={handleDeleteTask} handleStage={handleStage} key={T.temp_Id} task={T} index={i} />)

    const tasksForList = TasksReact.filter(t => activeList._id === t.props.task.list || activeList.temp_Id === t.props.task.list)

    useEffect(() => {
        Sortable.create(draggableContainer.current,
            {
                ghostClass: "sortable-ghost",
                handle: ".my-handle",
                dragClass: "sortable-drag",
                animation: 150,
                swapThreshold: 1,
                invertSwap: true,
            }
        )
    }, [])
    const tasksToRender = tasksForList.filter(task => task.props.task.stage === activeStage * 1)

    return (
        <ul ref={draggableContainer} className="tasks__view">
            {tasksToRender}
        </ul>
    );
}
const mapStateToProps = (state) => {
    return { loginData: state.loginData }
}
export default connect(mapStateToProps, { updateTaskStage, deleteTask })(Tasks) 