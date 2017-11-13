import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer.jsx";
import SummaryGraph from "./SummaryGraph.jsx";

class AfterActionReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session_id: null,
      video_file_name: null,
      pml_file_ids: [],
      sample_data: [
        {
          x: 1,
          y: 1,
          label: "first",
          symbol: "star",
          opacity: 0.5,
          fill: "blue"
        },
        {
          x: 2,
          y: 2,
          label: "second",
          symbol: "circle",
          opacity: 0.8,
          fill: "red"
        },
        {
          x: 3,
          y: 3,
          label: "third",
          symbol: "square",
          fill: "white",
          stroke: "black",
          strokeWidth: 2
        },
        { x: 4, y: 4, label: "fourth", symbol: "diamond", fill: "green" }
      ]
    };

    this.setSessionId = this.setSessionId.bind(this);
    this.setVideoFileName = this.setVideoFileName.bind(this);
  }

  //Setting session_id to Component state from passed params in router url
  setSessionId(id) {
    this.setState({
      session_id: id
    });
  }

  setVideoFileName(session_id) {
    console.log(session_id);

    fetch("http://127.0.0.1:8000/api/video/session/" + session_id)
      .then(response => {
        response
          .json()
          .then(data => {
            this.setState({
              video_file_name: data.video_file_name
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
    this.setVideoFileName(this.props.match.params.sessionid);
  }

  render() {
    // var player = <div></div>;
    // if(this.state.video_file_id !=null){
    //     player = <VideoPlayer video_file_id={this.state.video_file_id}></VideoPlayer>
    // }
    return (
      <Grid>
        <Row>
          <Col lg={6} md={6}>
            <VideoPlayer video_file_name={this.state.video_file_name} />
          </Col>
          <Col lg={6} md={6}>
            <h3>Summary</h3>
            <SummaryGraph data={this.state.sample_data} />
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} />
        </Row>
      </Grid>
    );
  }
}

export default AfterActionReport;