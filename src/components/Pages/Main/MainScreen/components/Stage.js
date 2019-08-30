import React from 'react';

import Task from './Task'

const Stage = props => {
    const { tasks, name } = props
    const Tasks = tasks.map(task => <Task key={task._id} task={task} />)

    return (
        <div className="task-stage" >
            <div className="stage--info">
                {name}
            </div>
            <div className="stage__tasks-wrapper">
                {Tasks}
            </div>
        </div>
    );
}

export default Stage;