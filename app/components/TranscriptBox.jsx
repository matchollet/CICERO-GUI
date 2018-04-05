import React from "react";
import ScrollArea from "react-scrollbar";

class TranscriptBox extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <ScrollArea
          horizontal={false}
          style = {{
            fontSize : '16px',
            color : 'brown',
          }}
          vertical={true}>
          <div>{this.props.trans}</div>
        </ScrollArea>
      </div>
    )
  }
}

export default TranscriptBox;
