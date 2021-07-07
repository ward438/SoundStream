
import axios from "axios";

export default async function AlbumCall(albums) {
    // const [userSearch, setUserSearch] = useState([]);
    const KEY = "MDEwYzIwZmEtZDMxNy00YzJmLTk0MWUtMmEwNWE1YjUwZWI4";       
    const results = await axios({
        method: "GET",
        url: `https://api.napster.com/imageserver/v2/albums/${albums}/images/200x200.jpg&apikey=${KEY}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })  
    
    console.log(results)
    return results;
}



