import React from "react";
import ReactDOM from "react-dom";
//import WelcomeMessage from './components/WelcomeMessage.jsx';
import EntryBox from "./components/EntryBox.jsx";
import App from "./components/App.jsx";
import { Grid, Row, Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("container")
);
