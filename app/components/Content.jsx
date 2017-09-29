import React from 'react';
import Login from './Login.jsx';
import SessionList from './SessionList.jsx';
import NewSession from './NewSession.jsx';
import { Switch, Route } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Content extends React.Component{
    render(){
        return(
            <main>
                <Grid>
                    <Switch>
                        <Route exact path='/' component = {Login} ></Route>
                        <Route path='/sessions' component = {SessionList}></Route>
                        <Route path='/new' component = {NewSession}></Route>
                    </Switch>
                </Grid>
            </main>
        )
    }
}