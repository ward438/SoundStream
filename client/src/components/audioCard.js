
import React, { useState } from "react";
import { Accordion, Button, Card as BootstrapCard } from 'react-bootstrap';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "shards-react";
import AddArtist from '../utils/addArtist';
import AudioPlayer from './audioPlayer';

export default function AudioCard(props) {
    let tmpUrls = props.src;
    if (typeof tmpUrls != 'object') {
        tmpUrls = [[tmpUrls, '']];
    }
    const [songUrls, setSongUrls] = useState(tmpUrls);
    return (
        <Card style={{ margin: '10px', color: 'red' }}>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.artist}</CardSubtitle>
                {props.info}
                <CardImg top src={props.artistImageReturn ? props.artistImageReturn : props.imgSrc} className="audio-card-img" />
                <Accordion>
                    <BootstrapCard>
                        <BootstrapCard.Header>
                            <div style={{ display: 'flex' }}>
                                <Accordion.Toggle as={Button} variant="warning" eventKey="0" style={{marginRight: '1rem'}}>
                                    Preview Songs
                                </Accordion.Toggle>
                                <AddArtist artistId={props.id} />
                            </div>
                        </BootstrapCard.Header>
                        <Accordion.Collapse eventKey="0">
                            <BootstrapCard.Body>
                                {songUrls.map((songUrl, index) => <div key={index}>{songUrl[1]} <AudioPlayer src={songUrl[0]} style={{}} /></div>)}
                            </BootstrapCard.Body>
                        </Accordion.Collapse>
                    </BootstrapCard>
                </Accordion>


            </CardBody>

        </Card>
    )
}