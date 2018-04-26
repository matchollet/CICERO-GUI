import React from "react";
import {
  VictoryTheme,
  VictoryContainer,
  VictoryChart,
  VictoryArea,
  VictoryLine,
  VictoryAxis,
  VictoryLabel
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
        <VictoryAxis dependentAxis crossAxis
          tickValues = {[-1.0, 0, 1.0, 2.0, 3.0, 4.0 , 5.0]}
          domain = {[-1.0, 5.0]}
          label = {this.props.atype}
          axisLabelComponent = {<VictoryLabel text = {'Smile'} dy={-20}/>}
          //range = {[-1.0, 5.0]}
        />

        <VictoryAxis crossAxis
          label = {'Time'}
          //axisLabelComponent = {<VictoryLabel text = {'Time'}/>}
        />

        <VictoryLine
            data={this.props.data}
            interpolation = "basis"
        />
      </VictoryChart>
    );
  }
}

export default MBUGraph;
