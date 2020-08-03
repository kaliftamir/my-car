import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorModel from './data-model/ActorModel'
import ActorView from './components/ActorView/ActorView.js';

function App() {

  const actorData = [];
  actorData.push(new ActorModel("Jeff", "Bridges", 1949, "https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0",""));
  actorData.push(new ActorModel("Tamir", "Kalif", 1975, "https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0",""));
 

  return (
    <div>
      <ActorView actors={actorData}/>
    </div>
  );
}

export default App;