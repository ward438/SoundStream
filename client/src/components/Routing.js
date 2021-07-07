
import { Switch, Route, Redirect } from "react-router-dom";
import React, { Component, useState } from 'react';
import { About } from "../pages/About";
import { Account } from "../pages/Account";
import { Landing } from "../pages/landing";
import { TopTen } from "../components/search";
// import SearchResults from "../pages/searchResults";
import { Login } from "../pages/Login";
import { useHistory } from 'react-router-dom';
import { AuthProvider } from '@ryanar/react-auth-provider';
import { AuthContext } from '@ryanar/react-auth-provider';




export function Routing() {
    const [isAuth, setIsAuth] = useState(false);
    const history = useHistory();
    const { setAuthenticated } = React.useContext(AuthContext);
    console.log('asfdasfd')
    function AuthRoute(props) {
        console.log(isAuth);
        if (!isAuth) {
            return <Redirect to="/login" />;
        }
    
        const { component: Component, ...rest } = props;
    
        return <Component {...rest} />;
    }

    


    const handleLogin = () => {
        setIsAuth(true);
        setAuthenticated(true);
        history.push('/');
    };

    const handleLogout = () => {
        // debugger;
        // setIsAuth(false);
        // setAuthenticated(false);
        history.push('/login');
    };
    return (
        <React.Fragment>
            <AuthProvider onLogin={handleLogin} onLogout={handleLogout} defaultAuthenticated={isAuth}>
            <Switch>
                <Route path="/login" exact component={Login} />
                <AuthRoute path="/" exact component={Landing} />
                <AuthRoute path="/about" exact component={About} />
                </Switch>
            </AuthProvider>
        </React.Fragment>
    );
}