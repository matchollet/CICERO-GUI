import React from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import { Grid, Row, Col } from "react-bootstrap";
import StandaloneReport from "./StandaloneReport.jsx";
import HomeTest from "./HomeTest.jsx";
import { Switch, Route } from "react-router";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/meme" component={HomeTest} />
        <Route path="/report/:sessionid/:rtype" component={StandaloneReport} />
      </div>
    );
  }
}
