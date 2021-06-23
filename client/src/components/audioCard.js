
import React from "react";

import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "shards-react";
import AudioPlayer from './audioPlayer';

export default function AudioCard(props) {
    return (
        <Card style={{margin: '10px'}}>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.artist}</CardSubtitle>
                {props.info}
                <CardImg top src={props.imgSrc} className="audio-card-img" />
                <AudioPlayer src={props.src} style={{}}/>
            </CardBody>
        </Card>
    )
}