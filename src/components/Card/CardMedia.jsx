import React from 'react';
import PropTypes from 'prop-types';
import { SECURE_BASE_URL } from '../API/TMDBApi.js';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import imgNotFound from '../../images/img-not-found.jpg';
import { useContext } from "react";
import MediaTypeContext from "../ContextAPI/MediaTypeContext";
import DetailContext from "../ContextAPI/DetailContext";

const CardMedia = ( { media } ) => {
    const { updatemediaType } = useContext( MediaTypeContext );
    const { updateObjet } = useContext( DetailContext )
    const history = useHistory();
    const { poster_path, profile_path, title, name, vote_average, release_date, first_air_date } = media;
    const path = `/detail`;

    const getPath = () => {
        if ( release_date ) {
            return path + '/film/' + media.id;
        }
        if ( first_air_date ) {
            return path + '/serie/' + media.id;
        }
        if ( profile_path ) {
            return path + '/acteur/' + media.id;
        }
    }

    const showDetail = ( e ) => {
        e.preventDefault();
        if ( release_date ) {
            updatemediaType( 'Film' );
        }
        if ( first_air_date ) {
            updatemediaType( 'Série' );
        }
        if ( profile_path ) {
            updatemediaType( 'Acteur' );
        }
        updateObjet( media )
        history.push( path );
    }

    const getImage = () => {
        return (
            ( poster_path || profile_path ) ?
                <Link to={getPath()} onClick={showDetail}>
                    <img
                        className="card-img-top"
                        src={SECURE_BASE_URL + 'w342' + ( poster_path || profile_path )}
                        alt={title || name}
                        title={title || name}
                    />
                </Link>
                :
                <Link to={getPath()} onClick={showDetail} className="img-no-found">
                    <img
                        className="card-img-top"
                        src={imgNotFound}
                        alt={title || name}
                    />
                </Link>
        );
    }

    return (
        <div className="card text-center">
            <div className="card-img">
                {getImage()}
            </div>
            <div className="card-body text-dark">
                <h3 className="card-title" ><Link to={getPath()} onClick={showDetail}>{title || name}</Link></h3>
                <div>
                    <p>{release_date || first_air_date}</p>
                    <p className={vote_average < 5 ? 'bad-vote' : ''}>{vote_average}</p>
                </div>
            </div>
        </div>
    );

};

CardMedia.propTypes = {
    media: PropTypes.object.isRequired
}

export default CardMedia;