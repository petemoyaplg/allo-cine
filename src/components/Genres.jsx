import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setIcon } from './Icon';

const Genres = ( { url, mediaType, setGenreId } ) => {
    const [ genres, setGenres ] = useState( [] );
    const [ areGenreVisible, setAreGenreVisible ] = useState( true );
    const [ areYearsVisible, setAreYearsVisible ] = useState( false );

    useEffect( () => {
        axios.get( url ).then( res => { setGenres( res.data.genres ) } )
    }, [ url ] );

    const getYears = ( year ) => {
        const yearArray = [];
        for ( let i = year; i >= 1980; i-- ) {
            yearArray.push( i );
        }
        return yearArray;
    }

    return (
        <>
            <div className="row-fluid">
                <p className="genre" onClick={() => { setAreGenreVisible( !areGenreVisible ) }} >
                    {setIcon( areGenreVisible )} Genre
                </p>
                <ul className={areGenreVisible ? "genres-list active" : "genres-list hidden"}>
                    {
                        genres.map( ( genre, index ) =>
                            <li onClick={() => { setGenreId( genre.id ) }} key={index}>
                                <Link to={`/${ mediaType }/${ genre.name }`} >
                                    {genre.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="row-fluid">
                <p onClick={() => { setAreYearsVisible( !areYearsVisible ) }}>
                    {setIcon( areYearsVisible )} Année de sortie
                </p>
                <ul className={areYearsVisible ? "years-list active" : "years-list hidden"} >
                    {
                        getYears( new Date().getFullYear() ).map( ( year, index ) =>
                            <li key={index}>
                                <Link to={`/${ mediaType }/${ year }`}>
                                    {year}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

Genres.propTypes = {
    url: PropTypes.string.isRequired,
    mediaType: PropTypes.string.isRequired,
    setGenreId: PropTypes.func.isRequired
}

export default Genres
