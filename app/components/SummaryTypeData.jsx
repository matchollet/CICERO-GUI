import React from "react";
import {Col} from "react-bootstrap";

class SummaryTypeData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smile_data : this.props.summary_data
    }

  }

  render() {

    var summary_data;

    switch(this.props.type){
      case "smile":
        summary_data = <div style={{
          fontSize : "20px"
        }}>
          <br/>
          <p>Research has shown that smiling boosts your confidence, and makes you more competent and attractive</p>
          <p>You smiled 30% of the time, keep up the good work</p>
        </div>
      break;

      case "hes":
      summary_data = <div style={{
        fontSize : "20px"
      }}>
        <br/>
        <p>Research suggests that clean and fluent speech shows preparation and confidence</p>
        <p>You hesitated 2% of the time. You speak extremly fluently, great job!</p>
      </div>
      break;

      case "attn":
      summary_data = <div style={{
        fontSize : "20px"
      }}>
        <br/>
        <p>Research shows that sustained and focused eye contact makes the audience feel more invited.</p>
        <p>You looked at the audience 60% of the time, great job engaging the audience</p>
      </div>
      break;

    }

    return (
      <Col lg={12} style={{textAlign : "center"}}>
        {summary_data}
      </Col>
    );
  }
}

export default SummaryTypeData;
