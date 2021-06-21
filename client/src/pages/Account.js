import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Container
} from "shards-react";
import Login from "../components/loginButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './pages.css'


export function Account() {
  return (
    <Container className="center">
      <Card style={{ maxWidth: "300px" }} >
        <CardHeader>Username</CardHeader>
        <CardImg src="https://place-hold.it/300x200" />
        <CardBody>
          <CardTitle>Account Info</CardTitle>
          <li>Date Joined</li>
          <li></li>
          <li></li>
          <li></li>
          {/* <Button>Read more &rarr;</Button> */}
          <Login></Login>
        </CardBody>
        <CardFooter>Card footer</CardFooter>
      </Card>
    </Container>

  );
}

