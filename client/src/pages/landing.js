import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "shards-react";
import AudioPlayer from '../components/audioPlayer';


export function Landing() {
    return (
        <Container className="dr-example-container">
            <Row>
                <Col>
                    <Card className="topCard">
                        <CardBody>
                            <CardTitle>SoundStream</CardTitle>
                            <CardSubtitle>account name</CardSubtitle>
                            favorites playlist
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Container className="musicPlayer">                                             
                            <Card>
                                <CardBody>
                                    <CardTitle>Song Title</CardTitle>
                                    <CardSubtitle>Artist</CardSubtitle>
                                    Album / Genre / Discography.
                                    Song Art
                                    <CardImg top src="https://i.ytimg.com/vi/cjF-9In3hqU/maxresdefault.jpg" />
                                    <AudioPlayer />
                                </CardBody>
                            </Card>
                        
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardBody className="bottomCard">
                        <CardTitle>news in music section</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        napster.com
                    </CardBody>
                </Col>
            </Row>
        </Container>
    );
}
// }