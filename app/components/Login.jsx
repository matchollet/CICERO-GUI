import React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionConnectors} from 'react';
import * as userActions from '../actions/userActions.js';

const brandStyle = {
    fontSize : '70px',  
    letterSpacing : '10px',
    textAlign : 'center'
}

const labelStyle = {
    fontSize : '30px',
    textAlign : 'center'
}


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInputField : ''
        };
        //this.updateUserField = this.updateUserField.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleLogin(user){
        this.props.userLogin(user);
        console.log(this.props);
    }

    handleChange(e){
        console.log(e.target.value);
        this.setState({
            userInputField : e.target.value
        });
    }

    

    render(){
        return(
            <div>
                <h1 style={brandStyle}>
                    CICERO
                </h1>
                <h1></h1>
                <hr></hr>
                <h3 style = {labelStyle}>
                    Enter User ID
                </h3>
                <form>
                    <FormGroup bsSize="large">
                        <FormControl type="text" onChange={this.handleChange}/>
                        <br></br>
                    </FormGroup>
                    <Link style={{display : 'block'}} to='/sessions' onClick = {() => {this.handleLogin({user_id : this.state.userInputField , logged_in : true})}}>
                            <Button bsSize='large' className="center-block">Login</Button>
                    </Link>
                </form>
            </div>
        )
    }
}


//Mapping the state from the store to the props, for easy access
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

//Mapping the actions to the props, for easy access
const mapDispatchToProps = (dispatch) => {
    return{
        userLogin : (user) => dispatch(userActions.userLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);