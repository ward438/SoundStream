
import axios from "axios";

export default async function MusicSearch(artist) {
    // const [userSearch, setUserSearch] = useState([]);
    const KEY = "MDEwYzIwZmEtZDMxNy00YzJmLTk0MWUtMmEwNWE1YjUwZWI4";       
    const results = await axios({
        method: "GET",
        url: `https://api.napster.com/v2.2/search?query=${artist}&type=artist&per_type_limit=5&apikey=${KEY}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })   

    // console.log(results)    
    // console.log(results.data.search.data.artists[0])
    console.log(results.data.search.data.artists[0].links.albums.href)
    // console.log(results.data.search.data.artists)

    return results.data.search.data.artists;
}




