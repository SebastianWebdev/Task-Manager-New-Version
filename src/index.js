import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/styles/animations.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// importing react redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import thunk from 'redux-thunk'
// setup redux store
const store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
