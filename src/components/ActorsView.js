import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorModel from '../data-model/ActorModel'

import ActorCard from './ActorCard';




function ActorsView (props) {

  const {id,selectedActor,actorChanged}=props; //detructuring assignment

  const JSONactors = [
    {
      "id":1,
      "fname":"Jeff",
      "lname":"Bridges",
      "bday":1949,
      "img":"Jeff.jpg",
      "imdb":"https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0"
    },
    {
      "id":2,
      "fname":"Laura",
      "lname":"Dern",
      "bday":1967,
      "img":"laura.jpg",
      "imdb":"https://www.imdb.com/name/nm0000368/mediaviewer/rm4228886528?ref_=nm_ov_ph"
    },
    {
      "id":3,
      "fname":"John",
      "lname":"Turturro",
      "bday":1957,
      "img":"John.jpg",
      "imdb":"https://www.imdb.com/name/nm0001806/?ref_=tt_cl_t15"
    },
    {
      "id":4,
      "fname":"Julianne",
      "lname":"Moore",
      "bday":1951,
      "img":"Juli.jpg",
      "imdb":"https://www.imdb.com/name/nm0000194/?ref_=tt_cl_t3"
    }
  ];

  const actorsData = [];
  for (let i=0;i<=3;i++) {
    
    actorsData.push(new ActorModel(JSONactors[i].id,JSONactors[i].fname,JSONactors[i].lname,JSONactors[i].bday,JSONactors[i].img,JSONactors[i].imdb))

  }
  

  // actorsData.push(new ActorModel(1,"Jeff", "Bridges", 1949 , "Jeff.jpg","https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0"));
  // actorsData.push(new ActorModel(2,"Laura", "Dern", 1967 , "laura.jpg","https://www.imdb.com/name/nm0000368/mediaviewer/rm4228886528?ref_=nm_ov_ph"));
  // actorsData.push(new ActorModel(3,"John", "Turturro", 1957 , "john.jpg","https://www.imdb.com/name/nm0001806/?ref_=tt_cl_t15"));
  // actorsData.push(new ActorModel(4,"Julianne", "Moore", 1951 , "juli.jpg","https://www.imdb.com/name/nm0000194/?ref_=tt_cl_t3"));

  //actorsData.push(<div className={i === selectedDot ? "selected" : ""}></div>);
  console.log(actorsData)

  const [sortedData, setSortedData] = React.useState(false);
  const [iname, setIname] = React.useState("");
  //const [isSelected, setIsSelected] = React.useState(actorsData[0]);
  
  // console.log(`isSelected: ${isSelected.value}`)
  // function changeSelected(event) {

  //   console.log(`isSelected2: ${event.currentTarget.id}`)
  //  // setIsSelected(actorsData[event])
    
  // }


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
    (actor===selectedActor) ?

    <div key={actor.id} className="col-lg-3 col-md-6 selected">
      <div className="card">
                      
        <ActorCard id={id} src={actor.img} name={`${actor.fname} ${actor.lname}`} bday={actor.bday} imdb={actor.imdb} age={`Age: ${actor.age()}`}>
         
        </ActorCard>
      
      </div>

    </div> :
    <div key={actor.id} onClick={() => {actorChanged(actor)}} className="col-lg-3 col-md-6">
        <div className="card">
                        
          <ActorCard id={id} src={actor.img} name={`${actor.fname} ${actor.lname}`} bday={actor.bday} imdb={actor.imdb} age={`Age: ${actor.age()}`}>
           
          </ActorCard>
        
        </div>
  
      </div>);
  
  
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