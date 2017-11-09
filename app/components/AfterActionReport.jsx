import React from "react";

class AfterActionReport extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            session_id : this.props.match.params.session_id,
            video_file_id : null,
            pml_file_ids : [],
        }
    }

    render(){
        console.log(this.props);
        return (
            <div>
            </div>
        )
    }
}

export default AfterActionReport;