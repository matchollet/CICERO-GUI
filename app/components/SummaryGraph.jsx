import React from "react";
import {
  VictoryTheme,
  VictoryAxis,
  VictoryArea,
  VictoryContainer,
  VictoryChart,
  VictoryPolarAxis,
  VictoryPie
} from "victory";

import ReactSpeedometer from "react-d3-speedometer";


class SummaryGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
       <ReactSpeedometer
        width = {400}
        height = {400}
        minValue = {0}
        maxValue = {100}
        value = {30}
       />
    );
  }
}

export default SummaryGraph;
