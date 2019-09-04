import React, { useEffect, useState } from 'react';
import '../css/CreateTask.css'

import Sortable from 'sortablejs';

import createLocalTask from '../../../../../utils/createLocalTask';
import updateTaskToDatabase from '../../../../../utils/updateTaskToDatabase';
import { connect } from 'react-redux'
import { addTask } from '../../../../../redux/actions/index'
const CreateTask = props => {
    const { activeList, data, addTask, close } = props
    useEffect(() => {
        /*Sortable(document.getElementById("body"),
            {
                dragClass: "sortable-drag--createTask",
                animation: 150,
            }
        )*/
        console.log(document.getElementById("body"));
    }, [])
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const handleSaveTask = async e => {
        e.preventDefault()
        if (!taskName) {
            alert('Task has to have name')
        } else {
            const task = createLocalTask(taskName, taskDescription, activeList)
            setTaskName("");
            setTaskDescription("");
            const response = await updateTaskToDatabase({ body: task, type: "add" })
            addTask({ task: response });
            close(false)
        }
    }
    const handleName = e => {
        setTaskName(e.target.value)
    }
    const handleDescription = e => {
        setTaskDescription(e.target.value)
    }
    return (
        <div className="portal-wrapp sortable-drag--createTask">
            <h1>Create New Task</h1>
            <form onSubmit={handleSaveTask} className="create-task_form" action="">
                <label htmlFor="create-task-name">Task Name</label>
                <input onChange={handleName} value={taskName} type="text" id="create-task-name" />
                <label htmlFor="create-task-description">Task Description</label>
                <input onChange={handleDescription} value={taskDescription} type="text" id="create-task-description" />
                <input type="submit" />

            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { data: state.loginData }
}
export default connect(mapStateToProps, { addTask })(CreateTask);