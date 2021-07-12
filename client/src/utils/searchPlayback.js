
import "jquery";
import 'shards-react';
import axios from 'axios';


export default function SearchPlayback(artist) {
    const KEY = "MDEwYzIwZmEtZDMxNy00YzJmLTk0MWUtMmEwNWE1YjUwZWI4";
    return axios({
        method: "GET",
        url: `https://api.napster.com/v2.2/artists/${artist}/tracks/top?apikey=${KEY}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(results => results.data.tracks.map(track => [track.previewURL, track.name]));
}

