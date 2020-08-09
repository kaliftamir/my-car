import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorsView from './components/ActorsView';

import MoviesView from './components/MoviesView';



function App() {

  

  return (
<     div className="container">
        <ActorsView/> 
        {/* <MoviesView/> */}

      </div>
  );
}

export default App;