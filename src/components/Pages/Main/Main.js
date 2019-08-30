import React from 'react';

import './css/Main.css'

import MainScreen from './MainScreen/MainScreen'
import NavigationScreen from './NavigationScreen/NavigationScreen'
import Logout from "./Logout"

import { BrowserRouter as Router } from 'react-router-dom'

import { connect } from 'react-redux'

const Main = props => {
    return (
        <div className="main-wraper">
            <Router basename={process.env.PUBLIC_URL}>
                <NavigationScreen />
                <MainScreen />
            </Router>
            <Logout />
        </div>
    );
}
const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps)(Main);