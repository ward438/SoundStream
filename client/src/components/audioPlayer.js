import React,{useEffect,useState,useRef} from 'react';

import axios from 'axios';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



function Audio() {
    const [song,setSong] = useState('');
    const player = useRef();
    useEffect(()=>{
      axios.get('http://localhost:8000/songs/').then(res=>setSong(res.data[0].track))
    },[]);
    const audiofunction = () => {  
      player.current.audio.current.play();  
    };
    return (
      <div className="App">  
        <AudioPlayer 
     preload='metadata'
      src={song}
      onPlay={e => console.log("onPlay")}
      ref={player}
    />
  
     <button onClick={audiofunction}>play</button>
      </div>
    );
  }
  
  export default Audio;