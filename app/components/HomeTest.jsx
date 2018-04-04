import React from 'react';
import {Button, Tooltip, TooltipContent} from 'reactstrap';

class HomeTest extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            This is a <a href="#" id="TooltipExample">tooltip</a> example.
              <Tooltip target="TooltipExample">
                <TooltipContent/>
              </Tooltip>
            </div>
        )
    }
}

export default HomeTest;
