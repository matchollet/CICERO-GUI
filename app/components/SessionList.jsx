import React from 'react';
import {connect} from 'react-redux';

class SessionList extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h3 style={{textAlign:'center'}}>You have logged in as {this.props.user.user_id}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
};

export default connect(mapStateToProps)(SessionList);