import React, { useState, useEffect, useContext } from 'react';
import { MoviesPopular, TvPopular } from '../API/TMDBApi.js';
import { setIcon } from '../Icon';
import ListCard from '../ListCard/ListCard';
import TextSearchContext from '../ContextAPI/TextSearchContext';
import Banner from '../Banner/Banner.jsx';

const Home = () => {
    const [ areFirstListMediaVisible, setAreFirstListMediaVisible ] = useState( true );
    const [ areSecondListMediaVisible, setAreSecondListMediaVisible ] = useState( true );
    const { updateQuery } = useContext( TextSearchContext );

    useEffect( () => {
        updateQuery( '' );
    }, [ updateQuery ] )

    return (
        <div className="div-home">
            <Banner urlMovies={MoviesPopular} urlTv={TvPopular} />
            <h2 className="item-title"
                onClick={() => { setAreFirstListMediaVisible( !areFirstListMediaVisible ) }}>
                {setIcon( areFirstListMediaVisible )}
                {'Films'}
            </h2>
            <div className={areFirstListMediaVisible ? "active" : "hidden"}>
                <ListCard url={MoviesPopular} />
            </div>
            <h2 className="item-title"
                onClick={() => { setAreSecondListMediaVisible( !areSecondListMediaVisible ) }}>
                {setIcon( areSecondListMediaVisible )}
                {'Séries'}
            </h2>
            <div className={areSecondListMediaVisible ? "active" : "hidden"}>
                <ListCard url={TvPopular} />
            </div>
        </div>
    );
}

export default Home;