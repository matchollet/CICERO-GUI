import React from "react";
import { Player, LoadingSpinner } from "video-react";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Player
                src={'http://127.0.0.1:8000/video/' + this.props.session + '/' + this.props.session + '.mp4'}
            >

                <LoadingSpinner disabled/>
            </Player>
      </div>
    );
  }
}

export default VideoPlayer;
