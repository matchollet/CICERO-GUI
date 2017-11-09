import React from "react";
import {Player} from "video-react";

class VideoPlayer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Player>
                    <source src={"https://localhost:8000/video/" + this.props.video_file_id}/>
                </Player>
            </div>
        );
    }

}

export default VideoPlayer;