import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card, CardBody, Container, Row } from "shards-react";
import { TopTen } from '../components/search';
import '../components/styles.css'

export function TopTenArtists() {
  return (
    <div style={{height: '100%', margin: '5rem'}}>
      <Row style={{height: '100%'}}>
      <TopTen />
      </Row>
    </div>
  );
};
