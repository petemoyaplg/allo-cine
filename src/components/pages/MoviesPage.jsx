import React, { useEffect, useState, useContext } from 'react';
import { GENRE_MOVIE, TrendingMovies, searchMoviesByGenre } from '../API/TMDBApi.js';
import TextSearchContext from '../ContextAPI/TextSearchContext';
import ListCard from '../ListCard/ListCard';
import Genres from '../Genres';

const MoviesPages = () => {
    const [ genreId, setGenreId ] = useState( 0 );
    const { updateQuery } = useContext( TextSearchContext );

    useEffect( () => {
        updateQuery( '' );
    }, [ updateQuery ] )

    const getUrl = () => {
        return genreId === 0 ? TrendingMovies : searchMoviesByGenre + genreId + '&page=';
    }

    return (
        <div className="media">
            <div className="row">
                <div className="genre-container col-lg-2 col-md-4 col-sm-5">
                    <Genres url={GENRE_MOVIE} mediaType="films" setGenreId={setGenreId} />
                </div>
                <div className="col-lg-10 col-md-8 col-sm-7">
                    <ListCard url={getUrl()} />
                </div>
            </div>
        </div>
    );
}

export default MoviesPages;