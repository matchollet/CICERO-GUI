import React from "react";
import {Col} from "react-bootstrap";

class SummaryTypeData extends React.Component {
  constructor(props) {
    super(props);

  }


  calculate

  render() {

    var summary_data;
    var inner_paragraph;
    var freq = Math.round(this.props.freq);
    switch(this.props.type){
      case "smile":

        if(freq < 15){
          inner_paragraph = <p>You smiled {freq}% of the time. You should smile more!</p>
        } else if (freq < 30){
          inner_paragraph = <p>You smiled {freq}% of the time. You are doing great, but you can do better! </p>
        } else {
          inner_paragraph = <p>You smiled {freq}% of the time. Keep up the good work!</p>
        }

        summary_data = <div style={{
          fontSize : "20px"
        }}>
          <br/>
          <p>Research has shown that smiling boosts your confidence and makes you more
          competent and attractive. </p>
          {inner_paragraph}
        </div>
      break;

      case "hes":

      if(freq < 10){
        inner_paragraph = <p>You hesitated {freq} times. You speak very fluently, great job!</p>
      } else if (freq < 30) {
        inner_paragraph = <p>You hesitated {freq} times. You can speak slowly to articulate your speech better </p>
      } else {
        inner_paragraph = <p>You hesitated {freq} times. You can work on your speech fluency</p>
      }

      summary_data = <div style={{
        fontSize : "20px"
      }}>
        <br/>
        <p>Research suggests that clean and fluent speech shows preparation and confidence</p>
        {inner_paragraph}
      </div>
      break;

      case "attn":

      if(freq < 20){
        inner_paragraph = <p>You looked at the audience {freq}% of the time. You should look at your audience more</p>
      } else if (freq < 50){
        inner_paragraph = <p>You looked at the audience {freq}% of the time. You are doing great, but you could look ar your audience a bit more! </p>
      } else {
        inner_paragraph = <p>You looked at the audience {freq}% of the time. Great job engaging the audience</p>
      }


      summary_data = <div style={{
        fontSize : "20px"
      }}>
        <br/>
        <p>Research shows that sustained and focused eye contact makes the audience feel more invited.</p>
        {inner_paragraph}
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
