
import React from "react";
// import '../utils/apiCall'
// import AddData from '../utils/addData';
import { Card, CardBody, Button, CardImg,CardTitle } from "shards-react";
import UserInput from "../components/userInput";
import AudioPlayer from '../components/audioPlayer';

export default function SearchResults(props) {
    return (
        <React.Fragment>
            <Card style={{ width: '18rem' }} >
                {/* <CardImg variant="top" src={props.images} /> */}
                <CardBody>
                    <CardTitle>Artist: {props.name}</CardTitle>
                    <CardTitle>Albums: {props.albums}</CardTitle>
                    {/* <p>Stations: {props.stations}</p> */}
                    {/* <p>Top Tracks: {props.topTracks}</p> */}
                </CardBody>
            </Card>
            <Button type="submit" onClick={() => UserInput(props)} style={{margin: '2em'}}> Add: {props.title} </Button>
        </React.Fragment>

    )
}