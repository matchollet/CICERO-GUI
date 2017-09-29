import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import EntryBox from './components/EntryBox.jsx';
import App from './components/App.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
//import {ThemeSwitcher} from 'react-bootstrap-theme-switcher';
//import Center from 'react-center';

//Add some navbar options?

ReactDOM.render(
        <BrowserRouter themePath='./themes' defaultTheme="solar">
            <App></App>
        </BrowserRouter>
    , document.getElementById("container")
);