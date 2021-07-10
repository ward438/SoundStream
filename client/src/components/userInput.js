
import React, { useState } from "react";
import SearchField from "react-search-field";
// import SearchResults from "../pages/searchResults";
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicSearch from "../utils/musicSearch";
import AudioCard from "./audioCard";
import SearchPlayback from "../utils/searchPlayback";
// import AlbumCall from "../utils/albumsCall";

export default function UserInput(props) {
    const [searchReturn, setSearchReturn] = useState([]);

    const handleMusicSearch = (artist) => {
        MusicSearch(artist).then(artists => {
            Promise.all(artists.map(artistItem => SearchPlayback(artistItem.id))).then(songUrls => {
                artists = artists.map((artist, index) => {
                    artist.songUrls = songUrls[index];
                    return artist
                })
                setSearchReturn(artists);
                console.log(artists)
            });
        })
    }
    console.log(searchReturn);
    return <React.Fragment>
        <SearchField
            placeholder="Enter an artist..."
            onEnter={data => handleMusicSearch(data)}
            onSearchClick={data => handleMusicSearch(data)}
            searchText=""
            classNames="test-class"
        />
        {
            searchReturn.map((item) => <AudioCard
                id={item.id}
                key={item.id}
                artist={item.name}
                artistImageReturn={`https://api.napster.com/imageserver/v2/artists/${item?.id}/images/200x200.jpg`}
                src={item.songUrls}
                info={null}
            />)
        }

    </React.Fragment>

}