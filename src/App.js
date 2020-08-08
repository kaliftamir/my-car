import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorsView from './components/ActorsView';

import MoviesView from './components/MoviesView';



function App(props) {

  const{selectedActor,actorChanged} = props
  const [selectedActorIndex, setSelectedActorIndex] = React.useState(1);
  
  function selectedActorChanged(event) {
    setSelectedActorIndex(event.id)  
    alert(selectedActorIndex)  
  }


  

  return (
<     div className="container">
        <ActorsView selectedActor={setSelectedActorIndex}
         actorChanged={selectedActorChanged}/> 
        <MoviesView/>

      </div>
  );
}

export default App;