import React, { useEffect, useState } from 'react';

import '../css/Tasks.css'

import Task from './Task'

import Sortable from 'sortablejs';
import { connect } from 'react-redux'
import { updateTaskStage, deleteTask } from '../../../../../redux/actions'

import sortTasksBy from '../../../../../utils/sortTasksBy'

const Tasks = props => {
    const draggableContainer = React.createRef()
    const { loginData, activeStage, activeList, updateTaskStage, deleteTask, sortBy } = props

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
    const sortedByDateUp = (item, item2) => {
        const time = Date.parse(item.props.task.createdAt)
        const time2 = Date.parse(item2.props.task.createdAt)
        return time2 - time
    }
    const sortedByDateDown = (item, item2) => {

        const time = Date.parse(item.props.task.createdAt)
        const time2 = Date.parse(item2.props.task.createdAt)
        return time - time2
    }
    const sortedByTittleUp = (item, item2) => {
        const compare1 = item.props.task.name < item2.props.task.name
        const compare2 = item.props.task.name > item2.props.task.name
        const compare3 = item.props.task.name === item2.props.task.name
        if (compare1) {
            return -1
        }
        if (compare2) {
            return 1
        }
        if (compare3) {
            return 0
        }

    }
    const sortedByTittleDown = (item, item2) => {
        const compare1 = item.props.task.name < item2.props.task.name
        const compare2 = item.props.task.name > item2.props.task.name
        const compare3 = item.props.task.name === item2.props.task.name
        if (compare1) {
            return 1
        }
        if (compare2) {
            return -1
        }
        if (compare3) {
            return 0
        }
    }

    const sortOptions = [
        { sortType: 1, callback: sortedByDateUp },
        { sortType: 2, callback: sortedByDateDown },
        { sortType: 3, callback: sortedByTittleUp },
        { sortType: 4, callback: sortedByTittleDown },
        { sortType: 'default', callback: sortedByDateUp }
    ];
    const sortedTasks = sortTasksBy(sortBy, tasksToRender, sortOptions)
    return (
        <ul ref={draggableContainer} className="tasks__view">
            {sortedTasks}
        </ul>
    );
}
const mapStateToProps = (state) => {
    return { loginData: state.loginData }
}
export default connect(mapStateToProps, { updateTaskStage, deleteTask })(Tasks) 