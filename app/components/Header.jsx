import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                    <Navbar collapseOnSelect>
                        <Nav>
                            <NavItem><Link to='/'>Change User</Link></NavItem>
                        </Nav>
                        <Nav pullRight>     
                            <NavItem><Link to='/sessions'>Sessions</Link></NavItem>
                            <NavItem><Link to='/new'>New</Link></NavItem>
                        </Nav>
                    </Navbar>
            </header>
        )
    }
}