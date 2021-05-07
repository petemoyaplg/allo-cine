import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../style/style.css";
import Preloader from "./Preloader/Loader";
import Movies from "./Movies";
import ReactPaginate from 'react-paginate';

const end = '&page=1&include_adult=false';
const baseUrl = 'https://api.themoviedb.org/3/'
const language = [ 'language=en-US', 'language=fr-FR' ];
const KEY = "a177bb80c59989ba946d472a3c8c5fce";
const SEARCH = `${ baseUrl }search/movie?api_key=${ KEY }&${ language[ 1 ] }&query=`;
const CONFIGURATION = `${ baseUrl }configuration?api_key=${ KEY }`;
const URL_IMG = `${ baseUrl }movie/{movie_id}/images?api_key=${ KEY }&${ language[ 1 ] }`
const URL_GENRE = `${ baseUrl }genre/movie/list?api_key=${ KEY }&${ language[ 1 ] }`;
const API_URL = `${ baseUrl }discover/movie?api_key=${ KEY }&${ language[ 1 ] }&sort_by=popularity.desc&&include_video=true&page=`;

const App = () => {
  const [ moviesPerPage, setMoviesPerPage ] = useState( 20 );
  const [ offset, setOffset ] = useState( 0 );
  const [ movies, setMovies ] = useState( [] );
  const [ numberOfPages, setNumberOfPages ] = useState( 0 );
  const [ currentPage, setCurrentPage ] = useState( Math.floor( Math.random() * 500 + 1 ) );
  const [ pageCount, setPageCount ] = useState( 0 );
  const [ loading, setLoading ] = useState( false );
  const [ searchText, setSearchTex ] = useState( '' );

  useEffect( () => {
    axios.get( API_URL + currentPage )
      .then( ( response ) => {
        if ( response.status === 200 ) {
          const data = response.data;
          const results = data.results;
          const page = data.page;
          const totalPages = data.total_pages;
          const totalResults = data.total_results;
          setMovies( results );
          setCurrentPage( page );
          setNumberOfPages( totalPages );
          setPageCount( totalResults );
        } else {
          setLoading( true );
        }

      } )
  }, [] )

  const [ configuration, setConfiguration ] = useState( {} );

  useEffect( () => {
    axios.get( CONFIGURATION )
      .then( ( response ) => {
        setConfiguration( configuration => response.data );
      } )
  }, [] )

  const handleChange = ( evt ) => {
    setSearchTex( evt.target.value );
  }

  const handleSubmit = ( evt ) => {
    evt.preventDefault();
    axios.get( SEARCH + searchText + end )
      .then( ( response ) => {
        if ( response.status === 200 ) {
          const data = response.data;
          const results = data.results;
          const page = data.page;
          const totalPages = data.total_pages;
          const totalResults = data.total_results;
          setMovies( results );
          setCurrentPage( page );
          setNumberOfPages( totalPages );
          setPageCount( totalResults );
        } else {
          setLoading( true );
        }
      } );
  }

  const handlePageClick = ( e ) => {
    const selectedPage = e.selected + 1;
    const offset = selectedPage * moviesPerPage;
    // const slice = currentData.items.slice( offset, currentData.dataPerPage );
    axios.get( API_URL + selectedPage )
      .then( ( response ) => {
        if ( response.status === 200 ) {
          const data = response.data;
          const results = data.results;
          const page = data.page;
          const totalPages = data.total_pages;
          const totalResults = data.total_results;
          setMovies( results );
          setCurrentPage( page );
          setNumberOfPages( totalPages );
          setPageCount( totalResults );
        } else {
          setLoading( true );
        }
      } );
  }

  if ( loading ) {
    return <Preloader />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="input_text" type="search" data-length="10" value={searchText} onChange={handleChange} />
            <label htmlFor="input_text">SearchText</label>
          </div>
        </div>
      </form>
      <div className="row">
        {movies.map( ( movie, index ) => <Movies key={index} movie={movie} /> )}
      </div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={numberOfPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        onPageChange={handlePageClick}
      />
    </div>
  );
}

export default App;
