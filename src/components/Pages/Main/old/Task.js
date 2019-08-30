import React from 'react';
const Task = (props) => {
    const { task, stageHandler, fullTaskHandler, listName, listId } = props
    return (
        <div className="task" data-listtittle={listName} data-listid={listId} data-stage={task.stage} data-type="taskSmall" id={task._id} onClick={fullTaskHandler} >
            <h1 className="task-tittle">{task.name}</h1>
            {task.stage !== 3 ? <button data-type="move" onClick={stageHandler} className="task-btn done-btn"><i data-type="move" className="fas fa-arrow-right"></i></button> : null}
        </div>
    );
}

export default Task;