import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand style={{ fontSize : '25px', letterSpacing:'3px' }}>CICERO</Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <NavItem><Link style={{ textDecoration: 'none' }} to='/'>Login</Link></NavItem>
                        </Nav>
                        <Nav pullRight>     
                            <NavItem><Link style={{ textDecoration: 'none' }} to='/sessions'>Sessions</Link></NavItem>
                            <NavItem><Link style={{ textDecoration: 'none', color : 'red' }} to='/new'>New</Link></NavItem>
                        </Nav>
                    </Navbar>
            </header>
        )
    }
}