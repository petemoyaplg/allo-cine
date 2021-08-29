import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SearchInput from 'react-search-input';
import TextSearchContext from './ContextAPI/TextSearchContext';

const Form = () => {
    const { query, updateQuery } = useContext( TextSearchContext );
    const history = useHistory();
    const handleSubmit = ( e ) => {
        e.preventDefault();
        updateQuery( e.target[ 0 ].value );
        history.push( '/recherche' );

    };
    return (
        <form className="form-input-search" onSubmit={handleSubmit}>
            <SearchInput
                className="float-end search-input"
                placeholder="Entrer un terme de recherche"
                value={query}
            />
        </form>
    );
}

export default Form;