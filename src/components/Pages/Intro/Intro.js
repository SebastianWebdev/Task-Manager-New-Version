import React, { useState } from 'react';
import Welcome from './Welcome';
import Nav from '../../Nav';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Intro = props => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Nav location='' />
            <Switch>
                <Route path="/login" render={props => <LoginPage {...props} />} />
                <Route path="/register" render={props => <RegisterPage {...props} />} />
                <Route path="/" render={props => <Welcome {...props} />} />
            </Switch>
        </Router >
    );
}

export default Intro;