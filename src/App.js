import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorModel from './data-model/ActorModel'
import ActorsView from './components/ActorsView/ActorsView.js';


function App() {

  return (
<     div class="container">
        <ActorsView/>
      </div>
  );
}

export default App;