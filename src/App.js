import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorModel from './data-model/ActorModel'
import ActorsView from './components/ActorsView/ActorsView';

function App() {

  const carsData = [];
  carsData.push(new ActorModel("Toyota", "Yaris", 2002, 230000));
  carsData.push(new ActorModel("Toyota", "Corola", 2015, 105000));
  carsData.push(new ActorModel("Hyundai", "i30", 2010, 150000));

  return (
    <div>
      <ActorsView cars={carsData}/>
    </div>
  );
}

export default App;