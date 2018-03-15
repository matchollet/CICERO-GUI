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
            src="http://127.0.0.1:8000/video/011316_Frontal_S11_OSS_P2.mp4"
        />
      </div>
    );
  }
}

export default VideoPlayer;
