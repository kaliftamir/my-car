
function ActorCard (props) {

    const {src,name,bday,imdb,age}=props; //detructuring assignment  
    
  
    return (
      <div class="card">      
  
        <img src={src}></img>
        <h3>{name}</h3>
        <p>{bday}</p>
        <p>{age}</p>
        <a href={imdb} target={"_blank"}>Imdb</a>      
  
      </div>  
  
    )
    
  };

  export default ActorCard;