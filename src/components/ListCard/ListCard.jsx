import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Loader from "../Loader/Loader";
import Pagination from '../utils/Pagination';
import CardMedia from "../Card/CardMedia";

const ListCard = ( { url } ) => {
    const [ listMediaOrPerson, setTistMediaOrPerson ] = useState( [] );
    const [ totalPages, setTotalPages ] = useState();
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ loading, setLoading ] = useState( false );

    const getData = ( url ) => {
        axios.get( url ).then( ( response ) => {
            if ( response.status === 200 ) {
                const data = response.data;
                setTistMediaOrPerson( data.results || data.cast );
                setCurrentPage( data.page );
                setTotalPages( data.total_pages );
            } else {
                setLoading( true );
            }
        } );
    }

    useEffect( () => {
        getData( url + currentPage );
    }, [ currentPage, url ] );

    const renderList = ( data ) => {
        if ( data !== undefined && data.length !== 0 ) {
            // const { gender } = data[ 0 ];
            return data.map( ( media, index ) => <CardMedia key={index} media={media} /> )
        }
    }

    if ( loading ) {
        return <Loader />;
    }

    return (
        <>
            <span className="detail-pagination">{currentPage}/{totalPages}</span>
            <div className="container-fluid">
                {renderList( listMediaOrPerson )}
            </div>
            {totalPages > 1 && < Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />}
        </>
    );
};

ListCard.propTypes = {
    url: PropTypes.string.isRequired
};

export default ListCard;
