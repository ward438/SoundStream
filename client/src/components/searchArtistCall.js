
// import React, { useState, useEffect, onSubmit} from "react";
// import "jquery";
// // import $, { data } from 'jquery';
// // import tracksTemplate from '../utils/napsterMeta';
// // import $tracks from '../utils/napsterMeta'
// // import NapsterMeta from '../utils/napsterMeta';
// import { Container, Button, Card, CardHeader, CardBody, CardFooter } from 'shards-react';
// import 'shards-react';
// import axios from 'axios';
// import SearchField from "react-search-field";
// import AudioCard from './audioCard';

// // import SearchResults from "../pages/searchResults"

// export function ArtistSearch(query) {
//     const [result, setResult] = useState([]);
//     key = 'apikey=ZTc0ZmZiYWMtY2NjZS00M2YzLWIyYTQtOWVhZjYwYzQxZDY2';
    
//     axios({
//         method: "GET",
//         url: `https://api.napster.com/v2.2/search?query=${query}${key}`,
//         // url: 'https://api.napster.com/v2.2/tracks/isrc/USIR10400084/apikey=ZTc0ZmZiYWMtY2NjZS00M2YzLWIyYTQtOWVhZjYwYzQxZDY2',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json;charset=UTF-8'
//         }
//     })
//         .then(response => {
//             console.log(response.data)
//             let data = response.data;
//             // setTop10(data);

//         })
//     return (
//         <React.Fragment>
//             <SearchField
//                 placeholder="Search for your favorite Artist(s)..."
//                 onEnter={onSubmit}
//                 onSearchClick={onSubmit}
//                 searchText=""
//                 classNames="test-class"
//             />

//             SEARCH RESULTS
//             {result.map((track) => <AudioCard
//                 key={track.id}
//                 src={track.previewURL}
//                 title={track.name}
//                 artist={track.artistName}
//                 imgSrc={`https://api.napster.com/imageserver/v2/albums/${track.albumId}/images/200x200.jpg` + '?apikey=ZTc0ZmZiYWMtY2NjZS00M2YzLWIyYTQtOWVhZjYwYzQxZDY2'}
//                 info={null}
//             />)}
//         </React.Fragment >
//     )




// };


