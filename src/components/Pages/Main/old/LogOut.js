import React from 'react'
import './components Css/LogOut.css'
const LogOut = (props) => {
    return (
        <div onClick={props.logOutHandler} className="logOut-wrap">
            <p className="log-out-text">Logout</p>
            <i className="fas fa-sign-out-alt log-out-ico"></i>
        </div>
    );
}
export default LogOut;