
import React from "react";

import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "shards-react";


export default function YoutubeCard(props) {
    return (
        <Card style={{margin: '10px'}}>
            <CardBody>
                <CardTitle>{props.channelTitle}</CardTitle>
                <CardSubtitle>{props.etag}</CardSubtitle>
                <p>{props.description}</p>
                {/* <CardImg top src={props.imgSrc} className="audio-card-img" /> */}
                
            </CardBody>
        </Card>
    )
}