import React, { Fragment, useState } from 'react';
import image from '../image.png';
import RatingStart from '../StarRating/StarRatingFunctionality';
import "./item.css";

const Item = props => {
    const [UUID] = useState(props.UUID) // we assume we got the UUID from the backend in a real world sample

    return (
        <Fragment>
            
            <div className = "bundle">
                <img src={image} />
                <RatingStart UUID = {props.UUID} />
            </div>

        </Fragment>
    );
};


export default Item;