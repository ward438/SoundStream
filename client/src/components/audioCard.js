
import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "shards-react";
import AudioPlayer from './audioPlayer';
import AddArtist from '../utils/addArtist';

export default function AudioCard(props) {
    let tmpUrls = props.src;
    if (typeof tmpUrls != 'object') {
        tmpUrls = [[tmpUrls, '']];
    }

    const [songUrls, setSongUrls] = useState(tmpUrls);
    return (
        <Card style={{ margin: '10px', color: 'red'}}>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.artist}</CardSubtitle>
                {props.info}
                <CardImg top src={props.artistImageReturn} className="audio-card-img" />
                <CardImg top src={props.imgSrc} className="audio-card-img" />
                {songUrls.map((songUrl, index) => <div key={index}>{songUrl[1]} <AudioPlayer src={songUrl[0]} style={{}} /></div>)}
                <AddArtist artistId={props.id} />
            </CardBody>

        </Card>
    )
}