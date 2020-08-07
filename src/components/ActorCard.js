import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function ActorCard (props) {

    const {src,name,bday,imdb,age}=props; //detructuring assignment  
    
  
    return (
      <div className="card">      
  
        <a href=""><img src={src}></img></a>
        <h3>{name}</h3>
        <p>{bday}</p>
        <p>{age}</p>
        <a href={imdb} target={"_blank"}>Imdb</a>      
  
      </div>  
  
    )
    
  };

  export default ActorCard;