import React from "react";
import {Tab, Tabs} from "react-bootstrap";

class SummaryTabs extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        };
    }


    render(){
        return(
            <div>
                <Tabs defaultActiveKey={1} id="summarytab">
                    <Tab eventKey={1} title="Smile"></Tab>
                    <Tab eventKey={2} title="Attention"></Tab>
                    <Tab eventKey={3} title="Hesitation"></Tab> 
                </Tabs>
            </div>
        )
    }
}

export default SummaryTabs;