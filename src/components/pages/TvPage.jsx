import React, { useEffect, useState, useContext } from "react";
import { GENRE_TV, searchTvByGenre, TrendingTv } from '../API/TMDBApi.js';
import TextSearchContext from '../ContextAPI/TextSearchContext';
import ListCard from '../ListCard/ListCard';
import Genres from "../Genres";

const TvPage = () => {
    const [ genreId, setGenreId ] = useState( 0 );
    const { updateQuery } = useContext( TextSearchContext );

    useEffect( () => {
        updateQuery( '' );
    }, [ updateQuery ] )
    const getUrl = () => {
        return genreId === 0 ? TrendingTv : searchTvByGenre + genreId + '&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&page=';
    }

    return (
        <div className="media">
            <div className="row">
                <div className="genre-container col-lg-2 col-md-4 col-sm-5">
                    <Genres url={GENRE_TV} mediaType="series" setGenreId={setGenreId} />
                </div>
                <div className="col-lg-10 col-md-8 col-sm-7">
                    <ListCard url={getUrl()} />
                </div>
            </div>
        </div>
    );
}

export default TvPage;