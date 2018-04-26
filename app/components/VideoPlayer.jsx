import React from "react";
import { DefaultPlayer as Video } from 'react-html5video';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <video width="600" height="540" controls>
          <source src={'http://127.0.0.1:8000/video/' + this.props.session + '/' + this.props.session + '.mp4'} type="video/mp4"/>
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
