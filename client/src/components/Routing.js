  
import { Switch, Route } from "react-router-dom";
import {About} from "../pages/About";
import {Account} from "../pages/Account";
import {Landing} from "../pages/landing";
import {TopTen} from "../components/search";
import SearchResults from "../pages/searchResults";

export function Routing() {
    return (
        <Switch>           
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} /> 
            <Route path="/topTen" component={TopTen} />              
            <Route path="/" component={Landing}/>   
            <Route path="/searchResults" component={SearchResults} />
        </Switch>
    );
}