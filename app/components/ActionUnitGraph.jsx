import React from "react";
import {
  VictoryTheme,
  VictoryContainer,
  VictoryChart,
  VictoryArea
} from "victory";

class ActionUnitGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VictoryChart
        containerComponent={<VictoryContainer responsive={false} />}
        theme = {VictoryTheme.material}
      >
        <VictoryArea
            style = {{data:{fill:"#c43a31"}}}
            data = {this.props.data}
        >
        </VictoryArea>
      
      </VictoryChart>
    );
  }
}

export default ActionUnitGraph;
