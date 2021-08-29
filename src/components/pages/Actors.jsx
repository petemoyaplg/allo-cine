import React from 'react';
import { POPULAR_ACTORS } from '../API/TMDBApi.js';
import ListCard from '../ListCard/ListCard';

const Actors = () => {
    return (
        <div className="actors">
            <ListCard url={POPULAR_ACTORS} />
        </div>
    )
}

export default Actors
