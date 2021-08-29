import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = ( url ) => {
    const [ state, setState ] = useState( {
        items: [],
        itemsPerPage: [],
        dataPerPage: 10,
        loading: true
    } );

    useEffect( () => {
        console.log( url );
        axios.get( url )
            .then( ( response ) => {
                if ( response.status === 200 ) {
                    setState( {
                        items: response.data.results,
                        loading: false
                    } );
                    console.log( 'données réçu : ' + response.status )
                }
                else {
                    setState( state => ( { ...state, loading: false } ) );
                    console.log( 'données non réçu : ' + response.status )
                }
            } )
    }, [ url ] )
    return [ state.items, state.loading ];
}

export default Fetch;