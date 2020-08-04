import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorModel from './data-model/ActorModel'
import ActorsView from './components/ActorsView/ActorsView.js';



function App() {

  const actorsData = [];
  actorsData.push(new ActorModel("Jedd", "Bridges", 1949 , "","https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0"));
  

  return (
    <div>
      <ActorsView actors={actorsData}/>
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