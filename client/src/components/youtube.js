
// import React, { useState, useEffect } from "react";
// import "jquery";

// import { Container, Button, Card, CardHeader, CardBody, CardFooter } from 'shards-react';
// import 'shards-react';
// import axios from 'axios';
// import YoutubeCard from './youtubeCard'
// // import AudioCard from './audioCard';

// export default function Youtube() {

//     const [vids, setVids] = useState([]);
//     const KEY = 'AIzaSyDfsNpor9FxACWbZPoGa2ZXQOiLCgrqPZM';
//     useEffect(() => {
//         axios({
//             method: "GET",
//             url: `https://www.googleapis.com/youtube/v3/search/`,
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json;charset=UTF-8'
//             },
//             params: {
//                 part: 'snippet',
//                 maxResults: 5,
//                 key: KEY
//             }

//         })
//             .then(res => {
//                 // console.log(res.data.items)
//                 let data = res.data.items;
//                 setVids(data);
//                 console.log(data[0].snippet.description)
//                 console.log(data)

//             })
//     }, []);

//     return (
//         <React.Fragment>
//             {vids.map((item) => <YoutubeCard
//                 key={item.videoId}
//                 channelTitle={item.channelTitle}
//                 etag={item.etag}
//                 // description={item.snippet}
//             />)}
//         </React.Fragment >
//     )
// }









