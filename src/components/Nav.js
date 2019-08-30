import './styles/Nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = props => {
    const { location } = props
    switch (location) {
        case 'register':
            return (
                <nav className=" nav nav1" >
                    <NavLink to="/">
                        <div className="logo-wrap"> < h1 className="logo" >Logo</h1></div>
                    </NavLink>
                    <div className="buttons">
                        <div className="btn" >< NavLink to="login" > Login </NavLink></div>
                    </div>
                </nav>
            )
        case 'login':
            return (
                <nav className=" nav nav1" >
                    <NavLink to="/">
                        <div className="logo-wrap"> < h1 className="logo" >Logo</h1></div>
                    </NavLink>
                    <div className="buttons">
                        <div className="btn" >< NavLink to="register" > Register </NavLink></div>
                    </div>
                </nav>
            )
        default:
            return (
                <nav className=" nav nav1" >
                    <NavLink to="/">
                        <div className="logo-wrap"> < h1 className="logo" >Logo</h1></div>
                    </NavLink>
                    <div className="buttons"><div className="btn" >< NavLink to="register" > Register </NavLink></div><div className="btn" >< NavLink to="login" > Login </NavLink></div ></div>
                </nav>
            )
    }

}


export default Nav