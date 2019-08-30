import React, { useEffect, useState } from 'react';

import '../css/Tasks.css'

import Sortable from 'sortablejs';

const Tasks = props => {
    const draggableContainer = React.createRef()

    const { tasks, activeStage } = props

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
    const tasksToRender = tasks.filter(task => task.props.task.stage === activeStage * 1)



    return (
        <ul ref={draggableContainer} className="tasks__view">
            {tasksToRender}
        </ul>
    );
}

export default Tasks