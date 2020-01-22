import React from 'react';
import { useSelector } from 'react-redux';

import './room.css';

const Room = () => {
    const details = useSelector(state => state.world)

    console.log(details);

    return(
        <div className="details">
            <h2>{details.title}</h2>
            <p>{details.description}</p>
        </div>
    )
}

export default Room;