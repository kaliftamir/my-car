


function ActorCard (props) {

    const {numOfDots,position}=props; //detructuring assignment
  
    const dotsArr = [];
      for (let i = 0; i <= numOfDots-1; i++) {
        if(i===position) {
          dotsArr.push(<div class="dot selected"></div>);
  
  
        } else {
          dotsArr.push(<div class="dot"></div>);
  
        }
      }    
  
    return (
      <div className="Item">
  
        <div className="Dots flex">{dotsArr}</div>  
       
  
      </div>  
  
    )
    
  };

  export default ActorCard;