
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import React, { useState } from 'react';
import { About } from "../pages/About";
import { Landing } from "../pages/landing";
import { Login } from "../pages/Login";
import { AuthContext, ToastContainer, AuthProvider } from '@ryanar/react-auth-provider';
import 'react-toastify/dist/ReactToastify.css';


export function Routing() {
    const [isAuth, setIsAuth] = useState(false);
    const history = useHistory();
    const { setAuthenticated } = React.useContext(AuthContext);

    function AuthRoute(props) {
        console.log('authenticated Routing.js')
        console.log(isAuth);
        if (!isAuth) {
            return <Redirect to="/login" />;
        }
        const { component: Component, ...rest } = props;
        return <Component {...rest} />;
    }

    const handleLogin = () => {
        // create Post to check credentials against the DB, ensure JSON response comes back with credentials including session cookies
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
            <ToastContainer />
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