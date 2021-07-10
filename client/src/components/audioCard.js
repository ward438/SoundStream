
import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "shards-react";
import AudioPlayer from './audioPlayer';
import AddArtist from '../utils/addArtist';

export default function AudioCard(props) {






    // console.log(props.albums)
    return (
        <Card style={{ margin: '10px' }}>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.artist}</CardSubtitle>
                {props.info}   {props.src}
                <CardImg top src={props.aristImageReturn} className="audio-card-img" />
                <CardImg top src={props.imgSrc} className="audio-card-img" />
                <AudioPlayer src={props.src} style={{}} />
                <AddArtist artistId={props.id} />
                <p>{props.id}</p>

            </CardBody>

        </Card>
    )
}