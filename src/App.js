import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorModel from './data-model/ActorModel'
import ActorView from './components/ActorView/ActorView.js';

function App() {

  const actorData = [];
  actorData.push(new ActorModel("Jeff", "Bridges", 1949, "https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0",""));
  actorData.push(new ActorModel("Tamir", "Kalif", 1975, "https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0",""));
 
  console.log("tamir")

  return (
    <div class="container">

      {/* <Title text="Tamir" font="Arial" color="red"/>
      <Title text="Kalif" font="fantas" color="blue"/> */}

      {/* <Box text="fresh" className="box green"/>
      <Box text="calm" className="box blue"/>
      <Box text="adveturous" className="box pink"/>
      <Box text="happy" className="box purple"/> */}


      <div class="row">

        <div class="col-sm-4">
          <Item src="img1.jpg" title="tamir" text="blabla" numOfDots={3} position={0}/>
        </div>
        <div class="col-sm-4">
          <Item src="img2.jpg" title="lalala" text="blablapppppp" numOfDots={3} position={1}/>
        </div>
        <div class="col-sm-4">
          <Item src="img3.jpg" title="mama" text="blablagggggg" numOfDots={3} position={2}/>            
        </div>

      </div>

      {/* <div>
          <Nav/>
        </div>

        <div class="row">
          <Title/>
        </div>

        <div class="row">

          <div class="col-sm-4">
            <Slot src={"dog1.jpg"} subTitle={"Dog Very Cute"} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
          </div>

          <div class="col-sm-4">
            <Slot src={"dog2.jpg"} subTitle={"Cute Dog"}  text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
          </div>

          <div class="col-sm-4">
            <Slot src={"dog3.jpg"} subTitle={"Super Cute"}  text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
          </div>                    

        </div> */}


        {/* <div class="row">
          <div>
            <Shape size={"small"}/>
          </div>
          <div>
            <Shape size={"mid"}/>
          </div>
          <div>
            <Shape size={"large"}/>
          </div>
          <div>
            <Shape size={"mid"}/>
          </div>
          <div>
            <Shape size={"small"}/>
          </div>           

        </div>

        <div class="row">
          <div>
            <Shape size={"huge"}/>
          </div>             

        </div> */}
       

                    
    </div>
  );
}
}

export default App;