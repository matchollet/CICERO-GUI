import React from 'react';
import ReactDOM from 'react-dom';
//import WelcomeMessage from './components/WelcomeMessage.jsx';
import EntryBox from './components/EntryBox.jsx';
import App from './components/App.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index.js';

const defaultState = {
    user : {
        user_id : null,
        logged_in : false
    }
}

const store = createStore(rootReducer, defaultState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </Provider>
    , document.getElementById("container")
);