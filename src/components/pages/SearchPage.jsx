import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";
import TextSearchContext from '../ContextAPI/TextSearchContext';
import Pagination from '../utils/Pagination';
import { MULTI_SEARCH } from '../API/TMDBApi.js';
import Loader from "../Loader/Loader";
import TableResult from '../TableResult/TableResult';


const SearchPage = () => {
    const { query } = useContext( TextSearchContext );
    const [ listMediaOrPersonFinded, setListMediaOrPersonFinded ] = useState( [] );
    const [ totalPages, setTotalPages ] = useState();
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ loading, setLoading ] = useState( false );

    useEffect( () => {
        getData( MULTI_SEARCH + query + '&page=' + currentPage + '&include_adult=false' );
    }, [ query, currentPage ] );

    const getData = ( url ) => {
        axios.get( url ).then( ( response ) => {
            if ( response.status === 200 ) {
                const data = response.data;
                setListMediaOrPersonFinded( data.results );
                setCurrentPage( data.page );
                setTotalPages( data.total_pages );
            } else {
                setLoading( true );
            }
        } );
    }

    if ( loading ) {
        return <Loader />;
    }


    return (
        <div className="search container">
            <TableResult listMediaOrPersonFinded={listMediaOrPersonFinded} />
            {totalPages > 1 && < Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />}
        </div>
    );
}

export default SearchPage;