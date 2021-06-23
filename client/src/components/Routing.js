  
import { Switch, Route } from "react-router-dom";
import {About} from "../pages/About";
import {Account} from "../pages/Account";
import {Landing} from "../pages/landing";
import {TopTen} from "../components/search";


export function Routing() {
    return (
        <Switch>           
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />            
            <Route path="/" component={Landing}/>  
            <Route path="/search" component={TopTen} />          
        </Switch>
    );
}