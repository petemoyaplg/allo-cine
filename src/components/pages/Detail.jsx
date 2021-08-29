import React, { useContext, useEffect, useState } from 'react';
import {
    PREFIX_SIMILAR_MOVIES, PREFIX_SIMILAR_TV, SECURE_BASE_URL, SIMILAR_MOVIES,
    SIMILAR_TV, CREDITS_MOVIES, PREFIX_CREDITS_MOVIES, PREFIX_CREDITS_TV, CREDITS_TV
} from '../API/TMDBApi.js';
import CardDetail from "../Card/CardDetail";
import DetailContext from "../ContextAPI/DetailContext";
import MediaTypeContext from "../ContextAPI/MediaTypeContext";
import ProgressbarComponent from "../utils/ProgressbarComponent";
import ListCard from "../ListCard/ListCard";

const Detail = () => {
    const { mediaType } = useContext( MediaTypeContext );
    const { objet } = useContext( DetailContext );
    const [ background, setBackground ] = useState( '' );
    const {
        id,
        poster_path,
        profile_path,
        backdrop_path,
        title,
        name,
        release_date,
        first_air_date,
        vote_average,
        overview } = objet;
    useEffect( () => {
        setBackground( `${ SECURE_BASE_URL }original${ backdrop_path }` );
    }, [ backdrop_path ] )

    const backgroundStyle = {
        backgroundImage: `url(${ background }), linear-gradient(black, black)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        <div className="detail">
            <div className="row" style={backgroundStyle}>
                <div className="div-opaque"></div>
                <div className="col-lg-4 col-md-4 col-sm-5" >
                    <CardDetail poster={poster_path || profile_path} title={title || name} />
                </div>
                <div className="detail-container col-lg-8 col-md-8 col-sm-7">
                    <h2>{title || name} {`(${ mediaType })`}</h2>
                    <p>Date de sorti : {release_date || first_air_date}</p>
                    <p><ProgressbarComponent note={vote_average} /></p>
                    {overview && <p>Résumé : {overview}</p>}
                </div>
            </div>
            <div className="row" >
                <h3>{`${ "Tête d'afiche" }`}</h3>
                {
                    mediaType === 'Film' ?
                        <ListCard url={PREFIX_CREDITS_MOVIES + id + CREDITS_MOVIES} />
                        :
                        <ListCard url={PREFIX_CREDITS_TV + id + CREDITS_TV} />
                }
            </div>
            <div className="row" >
                {
                    mediaType === 'Film' ?
                        <ListCard url={PREFIX_SIMILAR_MOVIES + id + SIMILAR_MOVIES} />
                        :
                        <ListCard url={PREFIX_SIMILAR_TV + id + SIMILAR_TV} />
                }
            </div>
        </div>
    );
}

export default Detail;
