import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container, Row, Col } from "shards-react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
// import AudioCard from '../components/audioPlayer';
import { TopTen } from '../components/search';
// import { SearchBar } from '../components/searchBar'
// import logo from "../favicon-32x32.png";
// import SearchResults from "../pages/searchResults";
import UserInput from "../components/userInput";

// import Youtube from "../components/vimeo"
// import ArtistSearch from "../components/searchArtistCall";



export function Landing() {
    return (
        <Container className="dr-example-container">
            <Row>
                <Col>
                    <Card className="topCard">
                        <CardBody>
                            <CardTitle>SoundStream</CardTitle>
                            <CardSubtitle>account name</CardSubtitle>
                            <UserInput />
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Container className="musicPlayer">
                        <Card>
                            <CardBody className="cardScroll" style={{ borderRadius: '15px' }}>
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