import React, { useState } from 'react';
import '../style/style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Home from './pages/Home';
import TextSearchContext from './ContextAPI/TextSearchContext';
import Footer from './pages/Footer';
import MoviesPages from './pages/MoviesPage';
import TvPage from './pages/TvPage';
import SearchPage from './pages/SearchPage';
import Actors from './pages/Actors';
import Detail from './pages/Detail';
import MediaTypeContext from './ContextAPI/MediaTypeContext';
import DetailContext from './ContextAPI/DetailContext';

const App = () => {
  const [ query, setQuery ] = useState( '' );
  const [ mediaType, setMediaType ] = useState( '' );
  const [ objet, setObjet ] = useState( {} );

  const queryValueContext = {
    query,
    updateQuery: setQuery
  };

  const mediaTypeContext = {
    mediaType,
    updatemediaType: setMediaType
  };

  const detaitObject = {
    objet,
    updateObjet: setObjet
  };

  return (
    <DetailContext.Provider value={detaitObject}>
      <MediaTypeContext.Provider value={mediaTypeContext}>
        <TextSearchContext.Provider value={queryValueContext}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/films" component={MoviesPages} />
              <Route path="/series" component={TvPage} />
              <Route path="/acteurs" component={Actors} />
              <Route path="/recherche" component={SearchPage} />
              <Route path="/detail" component={Detail} />
            </Switch>
            <Footer />
          </Router>
        </TextSearchContext.Provider>
      </MediaTypeContext.Provider>
    </DetailContext.Provider>
  );
}

export default App;
