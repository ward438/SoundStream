import React from "react";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default function AudioPlayer(props) {

  return (
    <div style={styles}>
      <ReactAudioPlayer
        src={props.src}
        autoPlay={false}
        controls        
      >       
      </ReactAudioPlayer>
    </div>
  )

};




