
import React, { useState, useEffect } from "react";
import "jquery";
import 'shards-react';
import axios from 'axios';
import AudioCard from './audioCard';



export function TopTen() {
    const [top10, setTop10] = useState([]);
    const KEY = "MDEwYzIwZmEtZDMxNy00YzJmLTk0MWUtMmEwNWE1YjUwZWI4"
    useEffect(() => {        
        axios({
            method: "GET",
            url: `https://api.napster.com/v2.1/tracks/top?apikey=${KEY}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
            .then(res => {
                let data = res.data.tracks;
                setTop10(data);
                console.log(data)

            })
    }, []);

    return (
        <React.Fragment>
            {top10.map((track) => <AudioCard
                key={track.id}
                src={track.previewURL}
                title={track.name}
                artist={track.artistName}
                imgSrc={`https://api.napster.com/imageserver/v2/albums/${track.albumId}/images/200x200.jpg` + '?apikey=ZTc0ZmZiYWMtY2NjZS00M2YzLWIyYTQtOWVhZjYwYzQxZDY2'}
                info={null}
            />)}
        </React.Fragment >
    )
}