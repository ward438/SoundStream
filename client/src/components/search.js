
import React, { useState, useEffect } from "react";
import "jquery";
import $, { data } from 'jquery';
import tracksTemplate from '../utils/napsterMeta';
import $tracks from '../utils/napsterMeta'
import NapsterMeta from '../utils/napsterMeta';
import { Container, Button, Card } from 'shards-react';
import axios from 'axios';

// import SearchResults from "../pages/searchResults"

export function TopTen() {
    const [top10, setTop10] = useState([]);
    useEffect(() => {
        axios({
            method: "GET",
            url: 'https://api.napster.com/v2.1/tracks/top?apikey=ZTc0ZmZiYWMtY2NjZS00M2YzLWIyYTQtOWVhZjYwYzQxZDY2',

        })
            .then(response => {
                // setTop10(response);
                console.log(response.data);

            }
            )
    }, []);
    return (
        <React.Fragment>
            {
                top10.map(top => {
                    return <Card key={top.artistId}>
                        <Card.Body>
                            <Card.Title>{top.artistId}</Card.Title>
                            {/* <Card.Img variant="top" src={`https://react-portfolio-rob.s3.amazonaws.com/${}.png`} style={{ marginBottom: "10px" }} /> */}
                            <Card.Text>
                                { }
                            </Card.Text>
                        </Card.Body>
                        <a href={`${top.previewURL}`}></a><br />
                    </Card>
                })
            }
        </React.Fragment >
    )
}