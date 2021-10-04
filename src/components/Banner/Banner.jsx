import React from 'react'
import PropTypes from 'prop-types'

const Banner = ( { urlMovies, urlTv } ) => {
    console.log( { urlMovies, urlTv } );
    return (
        <div>

        </div>
    )
}

Banner.propTypes = {
    urlMovies: PropTypes.string.isRequired,
    urlTv: PropTypes.string.isRequired
}

export default Banner

