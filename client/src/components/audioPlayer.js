import React from "react";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default function AudioPlayer() {
  return (
    <div style={styles}>
      <ReactAudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        autoPlay={false}
        controls        
      >       
      </ReactAudioPlayer>
    </div>
  )

};




