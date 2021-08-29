import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Pagination = ( { totalPages, setCurrentPage } ) => {

    const paginationConfig = {
        previousLabel: 'previous',
        nextLabel: 'next',
        breakLabel: '...',
        breakClassName: 'break-me',
        previousClassName: 'prev',
        nextClassName: 'next',
        pageClassName: 'page',
        pageLinkClassName: 'plgLink',
        pageCount: totalPages,
        marginPagesDisplayed: 1,
        pageRangeDisplayed: 3,
        onPageChange: ( e ) => setCurrentPage( e.selected + 1 ),
        containerClassName: 'pagination',
        activeClassName: 'activePage'
    }
    return (
        <div className="pagination-container">
            <ReactPaginate  {...paginationConfig} />
        </div>
    )
}

Pagination.propTypes = {
    totalPages: PropTypes.number,
    setCurrentPage: PropTypes.func
}

export default Pagination
