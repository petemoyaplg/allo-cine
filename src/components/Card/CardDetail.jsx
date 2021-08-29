import React from 'react';
import { SECURE_BASE_URL } from '../API/TMDBApi.js';
import imgNotFound from '../../images/img-not-found.jpg';
import { propTypes } from 'react-bootstrap/esm/Image';

const CardDetail = ( { poster, title } ) => {
    return (
        (
            poster ?
                (
                    <img
                        className="img-detail"
                        src={SECURE_BASE_URL + 'w500' + poster}
                        alt={title}
                        title={title}
                    />
                )
                :
                (
                    <img
                        className="img-detail"
                        src={imgNotFound}
                        alt={title}
                        title={title}
                    />
                )
        )
    )
}

CardDetail.propTypes = {
    poster: propTypes.string,
    title: propTypes.string
}

export default CardDetail;
