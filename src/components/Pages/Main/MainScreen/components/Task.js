import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateTask } from '../../../../../redux/actions'
import updateTaskToDatabase from '../../../../../utils/updateTaskToDatabase'
const Task = props => {

    const { task, updateTask, tasks, index } = props
    const date = new Date(task.createdAt)

    const [isOpen, setIsOpen] = useState(false)
    const [taskName, setTaskName] = useState(task.name)
    const [taskDescription, setTaskDescription] = useState(task.description)
    const [isTaskChange, setIsTaskChange] = useState(false)

    const dateValues = { year: date.getFullYear(), month: date.getMonth(), day: date.getDate(), houer: date.getHours(), minuts: date.getMinutes() }

    const ref = React.createRef()
    // handle opening task
    const handleTask = e => {
        setIsOpen(true)
        e.currentTarget.classList.add("active")
    }

    const handleTaskName = e => {
        setTaskName(e.target.value)
        setIsTaskChange(true)
    }

    const handleTaskDescription = e => {
        setTaskDescription(e.target.value)
        setIsTaskChange(true)
    }
    const handleTaskClose = e => {
        e.stopPropagation()
        setIsOpen(false)
        ref.current.classList.remove("active")
    }
    const handleTaskBtnSave = e => {
        setIsTaskChange(false)
        updateTask({ taskName, description: taskDescription, index })
        const body = {
            name: taskName,
            description: taskDescription
        }
        updateTaskToDatabase({ body, id: task._id })

    }

    return (
        <li ref={ref} className="task--wrapp" onClick={handleTask}>
            <div className="my-handle"></div>
            <div className="task__head">
                <input onChange={handleTaskName} value={taskName} type="text" className="task-name" />
            </div>

            <div className="task__body">
                <p className="task-date"> Data utworzenia:
                <br />
                    {dateValues.year} {dateValues.month < 10 ? `-0${dateValues.month}` : dateValues.month} {dateValues.day < 10 ? `-0${dateValues.day}` : dateValues.day}
                </p>
                <div className="task__options">
                    <div className="task__option"></div>
                    <div className="task__option"></div>
                    <div className="task__option"></div>
                </div>
                <form action="">
                    <select className="app__select" name="task__moveTo" id="">
                        <option value="">Przenieś do:</option>
                        <option value="1">Do zrobienia</option>
                        <option value="2">W trakcie </option>
                        <option value="3">Zrobione</option>
                    </select>
                </form>
            </div>

            {isTaskChange ? <button onClick={handleTaskBtnSave} className="task__btn--save" >Zapisz</button> : null}
        </li>
    );
}
const mapStateToProps = state => {
    return { tasks: state.loginData.tasks }

}
export default connect(mapStateToProps, { updateTask })(Task)