import React from "react";
import {Container, Row, Col} from 'reactstrap';
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
      smiling_scores: [],
      frowning_scores: [],
      attention_scores: [],
      AU6: [],
      AU12: []
    };

    this.setSessionId = this.setSessionId.bind(this);
    this.setVideoFileName = this.setVideoFileName.bind(this);
    this.getGraphData = this.getGraphData.bind(this);
    this.getAUData = this.getAUData.bind(this);
    this.toggleActionUnitBar = this.toggleActionUnitBar.bind(this);
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

  getGraphData(session_id) {
    fetch("http://127.0.0.1:8000/api/mbu/" + session_id + "/data")
      .then(response => {
        response
          .json()
          .then(data => {
            this.setState({
              smiling_scores: data.map(e => {
                return e.smiling_score;
              }),
              frowning_scores: data.map(e => {
                return e.frowning_score;
              }),
              attention_scores: data.map(e => {
                return e.attention_score;
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
    this.getGraphData(this.props.match.params.sessionid);
    this.getAUData(this.props.match.params.sessionid);
    this.setVideoFileName(this.props.match.params.sessionid);
  }

  render() {
    // var player = <div></div>;
    // if(this.state.video_file_id !=null){
    //     player = <VideoPlayer video_file_id={this.state.video_file_id}></VideoPlayer>
    // }

    return (
      <Container>
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
            <SummaryTabs
              data={{
                smile: {
                  AU6: this.state.AU6,
                  AU12: this.state.AU12
                }
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
            <MBUGraph data={this.state.AU6} />
            <MBUGraph data={this.state.AU12} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StandaloneReport;
