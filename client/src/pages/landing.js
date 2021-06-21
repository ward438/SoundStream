import React from "react";
import { ListGroup, ListGroupItem } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";


export function Landing() {
    //   return (
    //     <ListGroup>
    //       <ListGroupItem>This is the landing page</ListGroupItem>
    //       <ListGroupItem>HOORAY</ListGroupItem>
    //       <ListGroupItem>Morbi leo risus</ListGroupItem>
    //       <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    //       <ListGroupItem>Vestibulum at eros</ListGroupItem>
    //     </ListGroup>
    //   );
    // }
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
                    <Container className="landingBox">
                        test container: This is an imaginary box
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