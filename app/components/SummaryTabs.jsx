import React from "react";
import {Tabs, Tab} from "react-bootstrap";
import SummaryTypeData from "./SummaryTypeData.jsx";

class SummaryTabs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          smile_fr : null,
          attn_fr : null,
          hes_fr : null
        }
        this.calculateScores = this.calculateScores.bind(this);
    }

    calculateScores(){

      //smile
      var smile_data = this.props.data.smile;
      var smile_activations = 0;
      //console.log(this.props);
      for(var i=0; i<smile_data.AU6.length; i++){
        if(smile_data.AU6[i] > 1.1 && smile_data.AU12[i] > 0.82){
          smile_activations ++;
        }
      }


      this.setState({
        smile_fr : (smile_activations / smile_data.AU6.length)*100
      });

      //attention
      var gaze_data = this.props.data.gaze;
      var attention_freq = 0;
      for(var i=2; i<gaze_data.length-1; i++){
        if(gaze_data[i][1] === 'central'){
          attention_freq ++;
        }
      }


      this.setState({
        attn_fr : (attention_freq/gaze_data.length)*100
      })

      //hesitations
      this.setState({
        hes_fr : (this.props.data.audio.hesitations/this.props.data.audio.transcript.length)/100
      })

    }

    componentWillMount(){
      this.calculateScores();
    }

    render(){
        return(
            <div>
                <Tabs defaultActiveKey={1} id="summarytab">
                    <Tab eventKey={1} title="Smile"><SummaryTypeData type="smile"  /></Tab>
                    <Tab eventKey={2} title="Attention"><SummaryTypeData type="attn" /></Tab>
                    <Tab eventKey={3} title="Hesitation"><SummaryTypeData type="hes" /></Tab>
                </Tabs>
            </div>
        )
    }
}

export default SummaryTabs;
