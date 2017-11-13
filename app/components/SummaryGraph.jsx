import React from "react";
import {
  VictoryTheme,
  VictoryAxis,
  VictoryArea,
  VictoryContainer,
  VictoryChart,
  VictoryPolarAxis
} from "victory";

class SummaryGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       
        <VictoryChart
          polar
          theme={VictoryTheme.material}
          containerComponent={<VictoryContainer responsive={false}
          height = {300}
          width = {300}
           />}
        >
          <VictoryArea data={this.props.data} />
          <VictoryPolarAxis />
        </VictoryChart>
      </div>
    );
  }
}

export default SummaryGraph;
