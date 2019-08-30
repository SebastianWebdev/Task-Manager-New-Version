import React from 'react';
import './css/MainScreen.css'
import { Switch, Route } from 'react-router-dom';
import InitMainView from './components/InitMainView'
import ListView from './components/ListView'
import UserView from './components/UserView'
const MainScreen = props => {
    return (
        <section className="main__window">
            <Switch>
                <Route path='/list' render={props => <ListView {...props} />} />
                <Route path='/user' render={props => <UserView {...props} />} />
                <Route path='/' render={props => <InitMainView {...props} />} />
            </Switch>
        </section>
    );
}

export default MainScreen;