import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ActorModel from './data-model'
import ActorCard from './components/ActorsView';
// import axios from 'axios';



function ActorsView (props) {

    const {src,name,bday,imdb,age}=props; //detructuring assignment
  
    
  
    const actorsData = [];
    actorsData.push(new ActorModel("Jeff", "ZBridges", 1949 , "Jeff.jpg","https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0"));
    actorsData.push(new ActorModel("Laura", "Dern", 1967 , "laura.jpg","https://www.imdb.com/name/nm0000368/mediaviewer/rm4228886528?ref_=nm_ov_ph"));
    actorsData.push(new ActorModel("John", "Turturro", 1957 , "john.jpg","https://www.imdb.com/name/nm0001806/?ref_=tt_cl_t15"));
    actorsData.push(new ActorModel("Julianne", "Moore", 1951 , "juli.jpg","https://www.imdb.com/name/nm0000194/?ref_=tt_cl_t3"));
  
    console.log(actorsData)
  
    const [sortedData, setSortedData] = React.useState(actorsData);
    const [iname, setIname] = React.useState("");
    //const [isSorted, setIsSorted] = React.useState(false);
    
    
  
    
    function updateIname(event) {
      
      setIname(event.target.value)  
      
    }
    
    function sortByName()
    
    {   
       const newSortedData = sortedData.sort((a,b)=> a.lname > b.lname ? 1:-1)
       setSortedData(newSortedData)
       console.log(sortedData)      
    }
  
    console.log(iname)
  
    
    const actorsToRender = sortedData.map(actor => 
      (actor.fname.toLowerCase().startsWith(iname)
      || actor.lname.toLowerCase().startsWith(iname)) ?
  
      <div class="col-lg-3 col-md-6">
        <div class="card">
                        
          <ActorCard src={actor.img} name={`${actor.fname} ${actor.lname}`} bday={actor.bday} imdb={actor.imdb} age={`Age: ${actor.age()}`}/>
  
        </div>
  
      </div>: <div></div>);
    
    
    return (
  
      <div class="container">
            <input value={iname} onChange={updateIname}></input>
            <button onClick={sortByName}>Filter</button>
            <div class="row">
  
               {actorsToRender} 
  
            </div>
            
                                  
      </div>
  
    )
    
  };
  

export default ActorsView;