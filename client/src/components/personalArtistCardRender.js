import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import PropTypes from 'prop-types';

export default function PersonalArtistCardRender(props) {

    return (
        <Card style={{ maxWidth: props.maxWidth }}>
            <CardHeader></CardHeader>
            <CardImg src={props.img} />           
            
        </Card>

    )
}
PersonalArtistCardRender.defaultProps = {
    maxWidth: '300px'
}

PersonalArtistCardRender.propTypes = {
    img: PropTypes.string.isRequired,
    maxWidth: PropTypes.string
}


