import React from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import VideoPlayer from "./VideoPlayer.jsx";
import SummaryGraph from "./SummaryGraph.jsx";
import SummaryTabs from "./SummaryTabs.jsx";
import ActionUnitGraph from "./ActionUnitGraph.jsx";
import MBUGraph from "./MBUGraph.jsx";

class StandaloneReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session_id: null,
      video_file_name: null,
      action_unit_bar_state: false,
      gaze_direction : [],
      hesitations : null,
      transcript : null,
      AU6: [],
      AU12: [],
    };

    this.setSessionId = this.setSessionId.bind(this);
    this.setVideoFileName = this.setVideoFileName.bind(this);
    this.getAUData = this.getAUData.bind(this);
    this.getAudioMetaData = this.getAudioMetaData.bind(this);
    this.getAttentionData = this.getAttentionData.bind(this);
    this.toggleActionUnitBar = this.toggleActionUnitBar.bind(this);
    this.dataSafeCheck = this.dataSafeCheck.bind(this);
  }

  getAttentionData(session_id){
    fetch('http://127.0.0.1:8000/api/pml/' + session_id)
    .then(response => {
      response.json().then(data=>{
        this.setState({
          gaze_direction : data.map(item=>{
            return item.gaze_direction;
          })
        })
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  getAUData(session_id) {
    fetch("http://127.0.0.1:8000/api/pml/" + session_id + "/audata")
      .then(response => {
        response
          .json()
          .then(data => {
            this.setState({
              AU6: data.map(e => {
                return e.action_unit_evidence[4];
              }),
              AU12: data.map(e => {
                return e.action_unit_evidence[8];
              })
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAudioMetaData(session_id){
    fetch("http://127.0.0.1:8000/api/sessions/" + session_id)
    .then(response => {
      response.json().then(data=>{
        this.setState({
          hesitations : data.hesitations,
          transcript : data.transcript
        })
      });
    })
    .catch(err=>{
      console.log(err);
    })
  }


  //Toggling the Action Unit Bar
  toggleActionUnitBar() {
    this.setState({
      action_unit_bar_state: !this.state.action_unit_bar_state
    });
  }

  //Setting session_id to Component state from passed params in router url
  setSessionId(id) {
    this.setState({
      session_id: id
    });
  }

  setVideoFileName(session_id) {
    fetch("http://127.0.0.1:8000/api/session/" + session_id)
      .then(response => {
        response
          .json()
          .then(data => {
            this.setState({
              video_file_name: data.video_file_id
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.setSessionId(this.props.match.params.sessionid);
    this.getAUData(this.props.match.params.sessionid);
    this.getAudioMetaData(this.props.match.params.sessionid);
    this.getAttentionData(this.props.match.params.sessionid);
    this.setVideoFileName(this.props.match.params.sessionid);
  }

  dataSafeCheck(){
    return this.state.AU6.length !== 0 && this.state.AU12.length !== 0 && this.state.gaze_direction.length !== 0 && this.state.hesitations !== null && this.state.transcript!==null;
  }

  render() {
    // var player = <div></div>;
    // if(this.state.video_file_id !=null){
    //     player = <VideoPlayer video_file_id={this.state.video_file_id}></VideoPlayer>
    // }
    var summary_tabs = <div></div>;
    console.log(this.dataSafeCheck());
    if(this.dataSafeCheck()){
        var summary_tabs = <SummaryTabs
          data={{
            smile: {
              AU6: this.state.AU6,
              AU12: this.state.AU12
            },

            audio : {
              hesitations : this.state.hesitations,
              transcript : this.state.transcript
            },

            gaze : this.state.gaze_direction
          }}
        />
    }

    return (
      <Grid>
        <Row>
          <Col lg={12} md={12} xs={12} className="text-center">
            <h1>After-Action-Report</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={3} xs={0}/>
          <Col lg={6} md={6} xs={12}>
            <VideoPlayer
              video_file_name={this.state.video_file_name}
              session={this.state.session_id}
            />
          </Col>
          <Col lg={3} md={3} xs={0}/>
        </Row>
        <hr />
        <Row>
          <Col lg={12} md={12}>
            {summary_tabs}
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
            <MBUGraph data={this.state.AU6} />
            <MBUGraph data={this.state.AU12} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default StandaloneReport;
