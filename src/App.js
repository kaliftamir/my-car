import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorModel from './data-model/ActorModel'
import ActorsView from './components/ActorsView/ActorsView.js';



function App() {

  const carsData = [];
  carsData.push(new ActorModel("Toyota", "Yaris", 2002, 230000));
  carsData.push(new ActorModel("Toyota", "Corola", 2015, 105000));
  carsData.push(new ActorModel("Hyundai", "i30", 2010, 150000));

  return (
    <div>
      <ActorsView cars={carsData}/>
    </div>

        // <div class="row">

        //   <div class="col-sm-4">
        //     <ActorsView src="img1.jpg" title="tamir" text="blabla" numOfDots={3} position={0}/>
        //   </div>
        //   <div class="col-sm-4">
        //     <ActorsView src="img2.jpg" title="lalala" text="blablapppppp" numOfDots={3} position={1}/>
        //   </div>
        //   <div class="col-sm-4">
        //     <ActorsView src="img3.jpg" title="mama" text="blablagggggg" numOfDots={3} position={2}/>            
        //   </div>

        // </div>
  );
}

export default App;