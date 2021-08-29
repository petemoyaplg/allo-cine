import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const ProgressbarComponent = ( { note: percentage } ) => {
    return (
        <CircularProgressbar
            value={percentage}
            text={`${ percentage * 10 }%`}
            className="progress"
            styles={buildStyles( {
                rotation: 0.25,
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(62, 152, 199, ${ percentage / 100 })`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            } )}
        />
    )
}

ProgressbarComponent.propTypes = {
    note: PropTypes.number.isRequired
}

export default ProgressbarComponent
