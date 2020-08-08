import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




function ActorCard (props) {

    const {id,src,name,bday,imdb,age}=props; //detructuring assignment  
    

  
    return (
      <div className="card">    
  
        <img src={src} alt="actor"></img>
        <h3>{name}</h3>
        <p>{bday}</p>
        <p>{age}</p>
        <p>{id}</p>
        <a href={imdb}>Imdb</a>
        <p>{id}</p>      
  
      </div>  
  
    )
    
  };

  export default ActorCard;