import React from "React";
import ActionUnitGraph from "./ActionUnitGraph.jsx";

class ActionUnitGraphBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ActionUnitGraph></ActionUnitGraph>
                <ActionUnitGraph></ActionUnitGraph>
                <ActionUnitGraph></ActionUnitGraph>
                <ActionUnitGraph></ActionUnitGraph>
            </div>
        )
    }
}

export default ActionUnitGraph;