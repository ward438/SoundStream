
import React, { useState, useEffect } from "react";
import "jquery";
// import $, { data } from 'jquery';
// import tracksTemplate from '../utils/napsterMeta';
// import $tracks from '../utils/napsterMeta'
// import NapsterMeta from '../utils/napsterMeta';
import { Container, Button, Card, CardHeader, CardBody, CardFooter } from 'shards-react';
import 'shards-react';
import axios from 'axios';
import AudioCard from './audioCard';

// import SearchResults from "../pages/searchResults"

export function SearchBar() {
    const [top10, setTop10] = useState([]);
    useEffect(() => {
        // console.log(setTop10)
        // console.log(top10)
        axios({
            method: "GET",
            url: 'https://api.napster.com/v2.2/tracks/isrc/USIR10400084/apikey=ZTc0ZmZiYWMtY2NjZS00M2YzLWIyYTQtOWVhZjYwYzQxZDY2',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
            .then(res => {
                let data = res.data.tracks;
                setTop10(data);

            })
    }, []);

    return (
        <React.Fragment>
            SEARCH RESULTS
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