import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
    Card,
    CardBody,    
    CardSubtitle,
    Container,    
    Form,    
} from "shards-react";
import { AuthContext } from '@ryanar/react-auth-provider';

function handleSubmit(setAuthenticated, e) {
    e.preventDefault()
    const { username, password } = e.target.elements
    console.log({ username: username.value, password: password.value })
    setAuthenticated(true);
}

export function Login() {
    const { setAuthenticated } = React.useContext(AuthContext);

    return (
        <Container>
            <Card className="topCard" style={{margin: '2rem', border: '1px solid', boxShadow: '5px 5px #01101848'}}>
                <CardBody>
                    <CardSubtitle>SoundStream Login</CardSubtitle>
                    <p>Please enter your credentials</p>
                    <Form onSubmit={(e)=>handleSubmit(setAuthenticated, e)}>
                        <input type="text" id="username" placeholder="CoolGuy419" />
                        <input type="password" id="password" placeholder="********" />
                        <input type="submit" value="Login" />
                    </Form>
                </CardBody>
            </Card>
        </Container>

    );

}



