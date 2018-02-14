import React from "react";
import {
  VictoryTheme,
  VictoryContainer,
  VictoryChart,
  VictoryArea,
  VictoryLine
} from "victory";

class MBUGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VictoryChart
        width={1200}
        height={250}
        containerComponent={<VictoryContainer responsive={false} />}
        theme={VictoryTheme.material}
      >
        <VictoryLine
            data={this.props.data}
            interpolation = "basis"
        />
      </VictoryChart>
    );
  }
}

export default MBUGraph;
