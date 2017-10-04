import React from 'react';
import {connect} from 'react-redux';
import {Request}  from 'superagent';

class SessionList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            sessionList : []
        }
    }

    // componentDidMount(){
    //     fetch('http://127.0.0.1:8000/api/sessions/BKC40506')
    //     .then(res=>{
    //         res.json();
    //     })
    //     .then(json=>{
    //         console.log(json);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // }
    
    render(){
        return(
            <div>
                {this.props.user.user_id}
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