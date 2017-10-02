import React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const brandStyle = {
    fontSize : '70px',  
    letterSpacing : '10px',
    textAlign : 'center'
}

const labelStyle = {
    fontSize : '30px',
    textAlign : 'center'
}


export default class Login extends React.Component{
    render(){
        return(
            <div>
                <h1 style={brandStyle}>
                    CICERO
                </h1>
                <hr></hr>
                <h3 style = {labelStyle}>
                    Enter User ID
                </h3>
                <form>
                    <FormGroup bsSize="large">
                        <FormControl type="text"/>
                        <br></br>
                        <Link style={{display : 'block'}} to='/sessions'>
                            <Button bsSize='large' className="center-block">Login</Button>
                        </Link>
                    </FormGroup>
                </form>
            </div>
        )
    }
}