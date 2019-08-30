import React from 'react';
import './components Css/TaskFull.css'
const TaskFull = (props) => {
    const { _id, stage } = props.task.task
    const { handler, activeTaskInputs } = props
    const { name, description } = activeTaskInputs
    return (
        <div className="taskFull-wrapp" id={_id} data-type="taskFull" data-stage={stage}>
            <div className="task-close" onClick={handler} data-name="close"><i className="fas fa-times"></i></div>
            <input onChange={handler} className="input-disp task-imput task-input-name" name='name' type="text" placeholder={name} value={name} />
            <textarea onChange={handler} className="input-disp task-imput task-input-desc" name='description' value={description} placeholder={description} type="text" />
            <div className="taskFull-buttons" onClick={handler} >
                <button data-type="save">Zapisz</button>
                <button data-type="delete">Usuń</button>
            </div>
        </div>
    );
}

export default TaskFull;