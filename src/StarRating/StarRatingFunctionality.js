import React, { Fragment, useMemo, useReducer, useRef, useState } from "react";
import { AiFillStar } from 'react-icons/ai';
import './starRating.css';
import axios from 'axios';
const RatingStart = props => {
    const [rating, setRating] = useState(0);
    const [allStars] = useState([...Array(5)]);
    const [productUUID] = useState(props.UUID);


    var shouldBrightUp = (index) => {
        if (index <= rating) {
            return "gold";
        }
        return "black";
    };

    var sendBackTheRating = async (index) => {
        try {
            setRating(index + 1);
            // const resp = await axios.post("/someBackEnd/rating", { rating, productUUID }); this is a sample of sending the data to the backend
        } catch (e) {
            console.error(e.message);
        }
    };


    let run = useRef(true);
    useMemo(() => {
        if (run.current) {
            run.current = false;
            return;
        }
        console.log(`You have chosen the item with ${productUUID} with the rating ${rating} `);
    }, [rating]);


    return (
        <Fragment>
            <div >
                {
                    allStars.map((star, i) => {
                        return (
                            <label key={i}>
                                <button onClick={() => sendBackTheRating(i)} key={i} className="startButton" type="button" />
                                <AiFillStar className="star" style={{ color: shouldBrightUp(i + 1) }} />
                            </label>
                        );

                    })
                }
            </div>
        </Fragment>
    );
};




export default RatingStart;