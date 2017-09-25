import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import EntryBox from './components/EntryBox.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
//import Center from 'react-center';

//Add some navbar options?

ReactDOM.render(
    <Grid className="center-container">
        <Row>
            <Col leg={6} lgOffset={3}>
                <h1>Welcome to CICERO</h1> 
            </Col>
        </Row>
        <Row>
            <Col lg={6} lgOffset={3}> 
                    <EntryBox></EntryBox>
            </Col>
        </Row>
    </Grid>
    , document.getElementById("container")
);