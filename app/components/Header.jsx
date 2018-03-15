import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';

class Header extends React.Component{

    constructor(props){
        super(props);
    }    

    render(){

        const isLoggedIn = this.props.user.logged_in;
        let actions = null;

        //Conditional rendering of actions once user has logged in
        if(isLoggedIn){

            actions =   <Nav pullRight>
                            <LinkContainer to="/sessions"><NavItem>Sessions</NavItem></LinkContainer>
                            <LinkContainer to="/new"><NavItem>New</NavItem></LinkContainer>
                        </Nav>;
        } 

        return(
            <header>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand style={{ fontSize : '25px', letterSpacing:'3px' }}>CICERO</Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <LinkContainer to="/"><NavItem>Login</NavItem></LinkContainer>
                        </Nav>
                        {actions}
                    </Navbar>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Header);