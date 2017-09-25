import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';


export default class EntryBox extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           value : ""
       };

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }


    getValidationState(){
        const length = this.state.value.length;
        if(length == 0) return 'error';
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        });
    }

    handleSubmit(event){
        s
    }

    render(){
        return(
            <form>
                <FormGroup
                    controlId="InitialPage"
                    validationState = {this.getValidationState()}
                    bsSize = "large"
                >
                    <FormControl
                        type = "text"
                        value = {this.state.value}
                        placeholder="Enter User ID"
                        onChange={this.handleChange}
                    >
                    </FormControl>
                </FormGroup>
            </form>
        )
    }
}