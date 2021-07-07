
import React, { useState } from "react";
import SearchField from "react-search-field";
// import SearchResults from "../pages/searchResults";
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicSearch from "../utils/musicSearch";
import AudioCard from "./audioCard";
// import AlbumCall from "../utils/albumsCall";

export default function UserInput(props) {
    const [searchReturn, setSearchReturn] = useState([]);
    const handleMusicSearch = (artist) => {
        MusicSearch(artist).then(response => {
            // console.log(response);
            setSearchReturn(response);
        })
    }

    // debugger;
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
                aristImageReturn={`https://api.napster.com/imageserver/v2/artists/${item?.id}/images/200x200.jpg`} 
                src={item.links.topTracks.href} 
                // playlists={}            

                // albums={item.albumGroups.singlesAndEPs}

                info={null}
            />)
        }

    </React.Fragment>

}