import React from "react";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios"


export default function AudioPlayer(props) {

  return (
    <div >
      <ReactAudioPlayer
        src={props.src}
        autoPlay={false}
        controls
        style={{ width: '12em' }}
      >
      </ReactAudioPlayer>
    </div>
  )

};




