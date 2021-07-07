import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import axios from 'axios';
import {
    Card,
    CardBody,
    // CardTitle,
    CardSubtitle,
    Container,
    // Row,
    // Col,
    Form,
    // FormGroup,
    // FormInput
} from "shards-react";
import { AuthContext } from '@ryanar/react-auth-provider';

function handleSubmit(setAuthenticated, e) {
    e.preventDefault()

    const { username, password } = e.target.elements
    console.log({ username: username.value, password: password.value })
    setAuthenticated(true);
    // axios.post('/api/userData/login', { username: username.value, password: password.value })
    //     .then(response => { 
    //         // if successful
    //         setAuthenticated(true);
    //         // else
    //         setAuthenticated(false);
    //     })

}

export function Login() {
    const { setAuthenticated } = React.useContext(AuthContext);

    return (
        <Container>
            <Card className="topCard">
                <CardBody>
                    <CardSubtitle>SoundStream Login</CardSubtitle>
                    <p>Please enter your SoundStream credentials</p>
                    <Form onSubmit={(e)=>handleSubmit(setAuthenticated, e)}>
                        <input type="text" id="username" placeholder="Username" />
                        <input type="password" id="password" placeholder="Password" />
                        <input type="submit" value="Login" />
                    </Form>
                </CardBody>
            </Card>
        </Container>

    );

}



