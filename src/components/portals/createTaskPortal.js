import React from 'react';
import ReactDOM from 'react-dom';
const portalRoot = document.getElementById('create-task-root');
const CreateTaskPortal = props => {
    const { children } = props
    return ReactDOM.createPortal(children, portalRoot);
}

export default CreateTaskPortal;