
import React from "react";

import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "shards-react";
import AudioPlayer from './audioPlayer';

export default function AudioCard(props) {
    console.log(props.albums)
    return (
        <Card style={{margin: '10px'}}>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.artist}</CardSubtitle>
                {props.info}
                <p>{props.albums}</p>
                {props.albums && <CardImg top src={props.albums} className="audio-card-img" />}
                <CardImg top src={props.imgSrc} className="audio-card-img" />
                <AudioPlayer src={props.src} style={{}}/>
            </CardBody>
        </Card>
    )
}