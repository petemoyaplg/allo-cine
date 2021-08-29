import React from 'react';
import PropTypes from 'prop-types';
import { SECURE_BASE_URL } from '../API/TMDBApi.js';
import imgNotFound from "../../images/img-not-found.jpg";

const Row = ( { item, index } ) => {
    const { poster_path, profile_path, title, name, media_type } = item;

    const getImage = () => {
        return (
            ( poster_path || profile_path ) ?
                <img
                    className="card-img-top"
                    src={SECURE_BASE_URL + 'w154' + ( poster_path || profile_path )}
                    alt={title || name}
                />
                :
                <img
                    className="card-img-top"
                    src={imgNotFound}
                    alt={title || name}
                />
        );
    }

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{title || name}</td>
            <td>{media_type}</td>
            <td>
                {getImage()}
            </td>
        </tr>
    )
}

Row.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number
}

export default Row;
