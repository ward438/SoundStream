import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, Button } from "shards-react";
import AudioCard from '../components/audioPlayer';



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
                                   Placeholder
                                </CardBody>                                
                            </Card>                        
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardBody className="bottomCard">
                        <CardTitle>news in music section</CardTitle>
                        <CardSubtitle><Button href="/topTen">Napster Top 10</Button></CardSubtitle>
                        napster.com
                    </CardBody>
                </Col>
            </Row>
        </Container>
    );
}
// }