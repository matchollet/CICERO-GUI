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
      <VictoryChart
        polar
        theme={VictoryTheme.material}
        containerComponent={<VictoryContainer responsive={false} />}
        height={450}
        width={450}
        domain={{y:[0,100]}}
      >
        <VictoryArea data={this.props.data} style={{ data: { fill: "red", width: 30 } }}/>
        {
          ["Smile", "Attention", "Hesitation"].map((d, i)=> {
            return(
              <VictoryPolarAxis dependentAxis 
                key = {i}
                label = {d}
                labelPlacement = "perpendicular"
                axisValue = {i}
                style = {{
                  axis : {
                    stroke : "none"
                  }
                }}
              />
            );
          })

        }
      </VictoryChart>
    );
  }
}

export default SummaryGraph;
