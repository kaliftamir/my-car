import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorModel from '../data-model/ActorModel'

import ActorCard from './ActorCard';




function ActorsView (props) {

  const {id,name,bday, img, imdb,age}=props; //detructuring assignment

  

  const actorsData = [];
  actorsData.push(new ActorModel(1,"Jeff", "Bridges", 1949 , "Jeff.jpg","https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0"));
  actorsData.push(new ActorModel(2,"Laura", "Dern", 1967 , "laura.jpg","https://www.imdb.com/name/nm0000368/mediaviewer/rm4228886528?ref_=nm_ov_ph"));
  actorsData.push(new ActorModel(3,"John", "Turturro", 1957 , "john.jpg","https://www.imdb.com/name/nm0001806/?ref_=tt_cl_t15"));
  actorsData.push(new ActorModel(4,"Julianne", "Moore", 1951 , "juli.jpg","https://www.imdb.com/name/nm0000194/?ref_=tt_cl_t3"));

  console.log(actorsData)

  const [sortedData, setSortedData] = React.useState(false);
  const [iname, setIname] = React.useState("");
  //const [isSorted, setIsSorted] = React.useState(false);
  
  

  
  function updateIname(event) {
    
    setIname(event.target.value)  
    
  }
 

   let sortedArr =  actorsData;
  if (sortedData===true) {

     sortedArr = actorsData.sort((a,b)=> a.lname > b.lname ? 1:-1)

  } else {
     sortedArr = actorsData
  }
  

  function sortByName() {     
     
     setSortedData(true)
     console.log(sortedData)      
  }

  console.log(sortedData)

  
  const actorsToRender = sortedArr.map(actor => 
    (actor.fname.toLowerCase().startsWith(iname)
    || actor.lname.toLowerCase().startsWith(iname)) ?

    <div key={actor.id} className="col-lg-3 col-md-6">
      <div className="card">
                      
        <ActorCard src={actor.img} name={`${actor.fname} ${actor.lname}`} bday={actor.bday} imdb={actor.imdb} age={`Age: ${actor.age()}`}/>

      
      </div>

    </div>: <div></div>);
  
  
  return (

    <div className="container">
          <input value={iname} onChange={updateIname}></input>
          <button onClick={sortByName}>Sort</button>
          <div className="row">

             {actorsToRender} 

          </div>
          
                                
    </div>

  )
  
};


  export default ActorsView;