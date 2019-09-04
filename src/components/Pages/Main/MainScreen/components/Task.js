import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateTask } from '../../../../../redux/actions'
import updateTaskToDatabase from '../../../../../utils/updateTaskToDatabase'
const Task = props => {
    const { task, updateTask, index, handleDelete } = props
    const date = new Date(task.createdAt)
    const [taskName, setTaskName] = useState(task.name)
    const [taskDescription, setTaskDescription] = useState(task.description)
    const [isTaskChange, setIsTaskChange] = useState(false)

    const dateValues = { year: date.getFullYear(), month: date.getMonth(), day: date.getDate(), houer: date.getHours(), minuts: date.getMinutes() }

    const ref = React.createRef()

    const handleTaskName = e => {
        setTaskName(e.target.value)
        setIsTaskChange(true)
    }

    const handleTaskDescription = e => {
        setTaskDescription(e.target.value)
        setIsTaskChange(true)
    }
    const handleTaskBtnSave = e => {
        setIsTaskChange(false)
        updateTask({ taskName, description: taskDescription, index })
        const body = {
            name: taskName,
            description: taskDescription
        }
        updateTaskToDatabase({ body, id: task._id, type: "patch" })
    }
    const handleTaskStage = e => {
        const newStage = e.target.value * 1
        props.handleStage(newStage, index)
    }
    const handleDeleteBtn = e => {
        handleDelete(index, task._id)
        updateTaskToDatabase({ id: task._id, type: "delete" })
    }

    return (
        <li ref={ref} className="task--wrapp" >
            <div className="my-handle">
                <i class="fas fa-grip-vertical"></i>
            </div>
            <div className="task__head">
                <input onChange={handleTaskName} value={taskName} type="text" className="task-name" />
            </div>

            <div className="task__body">
                <p className="task-date"> Data utworzenia:
                <br />
                    {dateValues.year} {dateValues.month < 10 ? `-0${dateValues.month}` : dateValues.month} {dateValues.day < 10 ? `-0${dateValues.day}` : dateValues.day}
                </p>

                <form action="">
                    <select onChange={handleTaskStage} className="app__select" name="task__moveTo" id="">
                        <option value="">Przenieś do:</option>
                        <option value="1">Do zrobienia</option>
                        <option value="2">W trakcie </option>
                        <option value="3">Zrobione</option>
                    </select>
                </form>
            </div>
            <div className="task__icons">
                <i onClick={handleDeleteBtn} className="fas fa-trash-alt"></i>
                <i className="fas fa-sort-down"></i>
            </div>

            {isTaskChange ? <button onClick={handleTaskBtnSave} className="task__btn--save" >Zapisz</button> : null}
        </li>
    );
}
const mapStateToProps = state => {
    return {}

}
export default connect(mapStateToProps, { updateTask })(Task)