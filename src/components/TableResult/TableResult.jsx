import React from 'react';
import PropTypes from 'prop-types';
import Row from "./Row";


const TableResult = ( { listMediaOrPersonFinded } ) => {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title/Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">image</th>
                </tr>
            </thead>
            <tbody>
                {listMediaOrPersonFinded.map( ( item, index ) =>
                    <Row key={index} item={item} index={index} />
                )}
            </tbody>
        </table>
    );
}

TableResult.propTypes = {
    listMediaOrPersonFinded: PropTypes.array
}

export default TableResult;
