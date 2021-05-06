import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../style/style.css"
import Preloader from "./Preloader/Preloader"

const end = '&page=1&include_adult=false';
const baseUrl = 'https://api.themoviedb.org/3/'
const language = [ 'language=en-US', 'language=fr-FR' ];
const KEY = "a177bb80c59989ba946d472a3c8c5fce";
// const API_URL = "https://api.themoviedb.org/3/movie/550?api_key=";
const SEARCH = `${ baseUrl }search/movie?api_key=${ KEY }&${ language[ 1 ] }&query=`;
const CONFIGURATION = "https://api.themoviedb.org/3/configuration?api_key=a177bb80c59989ba946d472a3c8c5fce"
const URL_IMG = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=a177bb80c59989ba946d472a3c8c5fce&language=en-US"
const URL_GENRE = "https://api.themoviedb.org/3/genre/movie/list?api_key=a177bb80c59989ba946d472a3c8c5fce&language=en-US"
const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=a177bb80c59989ba946d472a3c8c5fce&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

const App = () => {
  const [ movies, setMovies ] = useState( [] );
  const [ state, setState ] = useState( {
    items: [],
    totalPages: 0,
    totalRusult: 0,
    dataPerPage: 20,
    currentPage: 1,
    loading: true
  } );
  const [ configuration, setConfiguration ] = useState( {} );
  const [ searchText, setSearchTex ] = useState( '' );
  useEffect( () => {
    axios.get( API_URL )
      .then( ( response ) => {
        // setMovies( movies => response.data.results );
        setState( { items: response.data.results, totalRusult: response.data.total_results } )
        console.log( response.data )
      } )
  }, [] )
  useEffect( () => {
    axios.get( CONFIGURATION )
      .then( ( response ) => {
        setConfiguration( configuration => response.data );
        // console.log( response.data )
      } )
  }, [] )

  const handleChange = ( evt ) => {
    setSearchTex( evt.target.value );
  }

  const handleSubmit = ( evt ) => {
    evt.preventDefault();
    axios.get( SEARCH + searchText + end )
      .then( ( response ) => {
        setState( { items: response.data.results } )
      } );
  };
  const nextPage = ( numPage ) => {
    axios.get( SEARCH + searchText + end + '&page=' + numPage )
      .then( ( response ) => {
        setState( { items: response.data.results, currentPage: numPage } )
      } );
  }
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
      <Preloader />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="input_text" type="search" data-length="10" value={searchText} onChange={handleChange} />
            <label htmlFor="input_text">SearchText</label>
          </div>
        </div>
      </form>
      <div className="row">
        {state.items.map( ( movie, index ) => <Movies key={index} movies={movie} configuration={configuration} /> )}
      </div>
      <ul className="pagination">
        <li className="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li className="active"><a href="#!">1</a></li>
        <li className="waves-effect"><a href="#!">2</a></li>
        <li className="waves-effect"><a href="#!">3</a></li>
        <li className="waves-effect"><a href="#!">4</a></li>
        <li className="waves-effect"><a href="#!">5</a></li>
        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  );
}

const Movies = ( props ) => {

  const { movies, configuration } = props;
  const { poster_path, title, overview, vote_average } = movies;
  // const { images } = configuration;
  // const { secure_base_url, poster_sizes } = images;


  return (
    <div className="col s12 m6 l3">
      {/* <img src={"https://image.tmdb.org/t/p/w500" + poster_path} alt={title} /> */}
      {/* {console.log( secure_base_url )} */}
      <div>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={"https://image.tmdb.org/t/p/w500" + poster_path} alt={title} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {title}
            </span>
            <p><a href="#">{vote_average}</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
