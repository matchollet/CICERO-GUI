import React from "react";
import { Player } from "video-react";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Player
                src={'http://127.0.0.1:8000/video/' + this.props.session + '/' + this.props.session + '.mp4'}
        />
      </div>
    );
  }
}

export default VideoPlayer;
