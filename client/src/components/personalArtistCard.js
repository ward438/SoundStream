import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardImg,
//   CardBody,
//   CardFooter,
//   Button
// } from "shards-react";
import PersonalArtistCardRender from './personalArtistCardRender'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default function PersonalArtistCard(props) {
  const KEY = "MDEwYzIwZmEtZDMxNy00YzJmLTk0MWUtMmEwNWE1YjUwZWI4"
  const maxWidth = '356px';
  const placeHolderUrl = `https://place-hold.it/${maxWidth.replace('px', '')}x237`
  const [data, setData] = useState(placeHolderUrl);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.napster.com/v2.2/artists/${props.artist}/images?apikey=${KEY}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
      .then(response => {
        // Ternary operator - Question ? return If True : return If False
        setData(response.data.images?.length > 0 ? response.data.images[0].url : placeHolderUrl);
      })
  }, []);

  return (
    <React.Fragment>
      {/* {<pre>{JSON.stringify(data)}</pre>} */}
      < PersonalArtistCardRender
        img={data}
        maxWidth={maxWidth}
      />
    </React.Fragment>

  );
}

