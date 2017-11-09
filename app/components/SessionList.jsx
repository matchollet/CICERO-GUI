import React from "react";
import { connect } from "react-redux";
import { Request } from "superagent";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class SessionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionList: []
    };
  }

  componentWillMount() {
    fetch("http://127.0.0.1:8000/api/sessions/" + this.props.user.user_id)
      .then(response => {
        response
          .json()
          .then(data => {
            this.setState({
              sessionList: data
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

  render() {
    //console.log(this.state.sessionList);
    const sessionListItems = this.state.sessionList.map(session => {
      return (
        <tr>
          <td>{session.session_id}</td>
          <td>{session.start_time}</td>
          <td>{session.end_time}</td>
          <td>{session.audio_file_id}</td>
          <td>{session.video_file_id}</td>
          <td>
            <LinkContainer to={"/report/" + session.session_id}>
                <Button>Report</Button>
            </LinkContainer>
          </td>
        </tr>
      );
    });

    console.log(sessionListItems);

    return (
      <div>
        <Table>
          <tbody>
            <tr>
              <th>Session ID</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Audio File ID</th>
              <th>Video File ID</th>
            </tr>
            {sessionListItems}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(SessionList);
