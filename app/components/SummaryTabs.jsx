import React from "react";
import {Tab, Tabs} from "react-bootstrap";
import SummaryTypeData from "./SummaryTypeData.jsx";

class SummaryTabs extends React.Component{

    constructor(props){
        super(props);

        
    }


    render(){
        return(
            <div>
                <Tabs defaultActiveKey={1} id="summarytab">
                    <Tab eventKey={1} title="Smile"><SummaryTypeData type="smile" data={this.props.data.smile} /></Tab>
                    <Tab eventKey={2} title="Attention"><SummaryTypeData type="attn"/></Tab>
                    <Tab eventKey={3} title="Hesitation"><SummaryTypeData type="hes"/></Tab> 
                </Tabs>
            </div>
        )
    }
}

export default SummaryTabs;