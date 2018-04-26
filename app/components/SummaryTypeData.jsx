import React from "react";
import {Col} from "react-bootstrap";
import MBUGraph from "./MBUGraph.jsx";

class SummaryTypeData extends React.Component {
  constructor(props) {
    super(props);

  }


  calculate

  render() {

    var summary_data;
    var inner_paragraph;
    var research_paragaph=<div></div>;
    var graph =<div></div>;
    var freq = Math.round(this.props.freq);
    var rtype = this.props.rtype;
    switch(this.props.type){
      case "smile":

        if(rtype == 1){
          inner_paragraph = <p>When you smile at another person they will almost always return the smile, which causes positive feelings in both you and them. Studies prove that most encounters will run more smoothly, last longer, have more positive outcomes and dramatically improve relationships when you make a point of regularly smiling and laughing.
                            <a>http://westsidetoastmasters.com/</a></p>;
        } else if(freq < 15){
          inner_paragraph = <p>You smiled {freq}% of the time. You should smile more!</p>;
        } else if (freq < 30){
          inner_paragraph = <p>You smiled {freq}% of the time. You are doing great, but you can do better! </p>;
        } else {
          inner_paragraph = <p>You smiled {freq}% of the time. Keep up the good work!</p>;
        }

        if(rtype == 2){
          research_paragaph = <p>Research has shown that smiling boosts your confidence and makes you more
          competent and attractive. </p>;
          graph = <MBUGraph atype = "Smile" data = {this.props.data.smile.AU6_data}/>;
        }

        summary_data = <div style={{
          fontSize : "20px"
        }}>
          <br/>
          {research_paragaph}
          {inner_paragraph}
          <br/>
          {graph}
        </div>
      break;

      case "hes":


        if(rtype == 1){
          inner_paragraph = <div>
                            <p>It is important, when speaking in public, to not use too many filler words, such as “err” or “um”.</p>
                            <p>“Most beginning speakers are afraid of pauses. They believe their audience will think they are inarticulate if they pause to think of what to say next, so they use filler words to avoid the silence.”</p>;
                            <p>“Filler words are insidious because they are invisible to the speaker, but not to the listener. To help members become aware of this verbal clutter, Toastmasters clubs designate an Ah-Counter, who tracks filler words used by all speakers during a meeting and then discloses the results at the end.”
                            (Toastmasters magazine, February 2011, “Cutting out filler words”)</p>
                            </div>
        }
        else if(freq < 10){
          inner_paragraph = <p>You hesitated {freq} times. You speak very fluently, great job!</p>
        } else if (freq < 30) {
          inner_paragraph = <p>You hesitated {freq} times. You can speak slowly to articulate your speech better </p>
        } else {
          inner_paragraph = <p>You hesitated {freq} times. You can work on your speech fluency</p>
        }

        if(rtype == 2){
            research_paragaph = <p>Research suggests that clean and fluent speech shows preparation and confidence</p>;
        }

        summary_data = <div style={{
          fontSize : "20px"
        }}>
          <br/>
          {research_paragaph}
          {inner_paragraph}
        </div>
        break;

      case "attn":

        if(rtype == 1){
            inner_paragraph = <div><p>How a public speaker looks at his audience is very important. Here are a few quotes from toastmasters:</p>
                              <p>“Don’t just pass your gaze throughout the room; try to focus on individual listeners and create a bond with them by looking them directly in the eyes for five to 10 seconds.” <a href="http://www.toastmasters.org">http://www.toastmasters.org</a></p>
                              <p>Maintain eye contact with your audience. Make friends with the group in the center, but remember everyone in the room.”
                              <a href="http://www.addisonsinglestoastmasters.com">http://www.addisonsinglestoastmasters.com/</a></p>
                              </div>
        }
        else if(freq < 20){
          inner_paragraph = <p>You looked at the audience {freq}% of the time. You should look at your audience more</p>
        } else if (freq < 50){
          inner_paragraph = <p>You looked at the audience {freq}% of the time. You are doing great, but you could look ar your audience a bit more! </p>
        } else {
          inner_paragraph = <p>You looked at the audience {freq}% of the time. Great job engaging the audience</p>
        }

        if(rtype == 2){
          research_paragaph = <p>Research shows that sustained and focused eye contact makes the audience feel more invited.</p>;
          graph = <MBUGraph atype = "Attention" data = {this.props.data.gaze.map((e)=>{
            return e[1] === 'central' ? 1 : 0 ;
          })} />
        }



      summary_data = <div style={{
        fontSize : "20px"
      }}>
        <br/>
        {research_paragaph}
        {inner_paragraph}
        <br/>
        {graph}
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
