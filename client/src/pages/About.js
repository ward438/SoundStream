import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import axios from "axios";
import PersonalArtistCard from '../components/personalArtistCard'
import { Row } from "shards-react";

export function About() {
  const [data, setData] = useState({ favoriteArtists: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/userData`
    }).then(response => {
      let data = response.data;
      // console.log(data)
      // setData(data) must be last after completing code block
      setData(data);
    });
  }, []);


  return (
    <React.Fragment>
      <Row>
        {data.favoriteArtists.map((artist, index) =>
          <div style={{margin: '1rem'}}>
            <PersonalArtistCard
              key={index}
              artist={artist}
            />
          </div>
        )}
      </Row>

    </React.Fragment>
  );

};
