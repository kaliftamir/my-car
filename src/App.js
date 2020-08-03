import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorModel from './data-model/ActorModel'
import ActorView from './components/ActorView/ActorView.js';

function App() {

  const actorData = [];
  actorData.push(new ActorModel("Mazda", "Yaris", 2002, 230000));
  actorData.push(new ActorModel("Toyota", "Corola", 2015, 105000));
  actorData.push(new ActorModel("Hyundai", "i30", 2010, 150000));

  return (
    <div>
      <ActorView cars={actorData}/>
    </div>
  );
}

export default App;