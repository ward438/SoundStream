import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card, CardBody, CardTitle, Container, Row, Col } from "shards-react";
import { TopTen } from '../components/search';
import UserInput from "../components/userInput";
import '../components/styles.css'




export function Landing() {
    return (
        <Container className="dr-example-container">
            <Row>
                <Col>
                    <Card className="topCard" style={{ }} >
                        <CardBody>
                            <CardTitle>Artist Search</CardTitle>                            
                            <UserInput />
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Container className="musicPlayer">
                        <Card>
                            <CardBody className="cardScroll" style={{  }}>
                                <TopTen />
                            </CardBody>
                        </Card>
                    </Container>                    
                </Col>
            </Row>

        </Container>
    );
}
// }