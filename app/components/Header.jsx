import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand style={{ fontSize : '25px', letterSpacing:'3px' }}>CICERO</Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <LinkContainer to="/"><NavItem>Login</NavItem></LinkContainer>
                        </Nav>
                        <Nav pullRight>     
                            <LinkContainer to="/sessions"><NavItem>Sessions</NavItem></LinkContainer>
                            <LinkContainer to="/new"><NavItem>New</NavItem></LinkContainer>
                        </Nav>
                    </Navbar>
            </header>
        )
    }
}