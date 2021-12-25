import React, { Fragment, useState } from 'react';
import Item from './item';
import "./item.css"
const listOfUUIDs = ["12345", "222323", "321332", "3213"]

const Items = props => {
    return(
        <Fragment>
            <div >
                <ul className="allItems">
                {
                    listOfUUIDs.map(item=>{
                        return(
                                <li key={item}>
                                    <Item UUID={item}/>
                                </li>
                        )
                    })
                }
                </ul>
            
            </div>
        </Fragment>
    )
};

export default Items;