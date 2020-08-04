import React from 'react';
import {Container, Table} from 'react-bootstrap'



// function ActorView (props) {

//     const {actors} = props;


//     function getHighestAge() {
//         let highestAge = actors[0];
//         for (let i = 1; i < actors.length; i++) {
//             if (actors[i].Age() > highestAge.Age()) {
//                 highestAge = actors[i];
//             }
//         }
//         return highestAge;
//     }

    

//         let contentToRender;
//         if (actors && actors.length >= 1) {
//             // I have actors render a table with actors
//             let highestAge = getHighestAge();

//             const actorTableRows = actors.map(actor => 
//                 <tr key={actor} className={actor === highestAge ? "bg-danger" : ""}>
//                     <td>{actor.fname}</td>
//                     <td>{actor.lname}</td>
//                     <td>{actor.bday}</td>      
//                     <td>{actor.image}</td>
//                     <td>{actor.imdb}</td>
//                     <td>{parseInt(actor.Age())}</td>
//                 </tr>);

//             contentToRender =                 
//                 <Table>
//                     <thead>
//                         <tr>
//                             <th>First Name</th>
//                             <th>Last name</th>
//                             <th>Birthday</th>
//                             <th>Image</th>
//                             <th>IMDB</th>
//                             <th>Age</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {actorTableRows}
//                     </tbody>
//                 </Table>

//         } else {
//             // I don't have actors render a message
//             contentToRender = 
//                 <p style={{textAlign: "center"}}>No actors to Show</p>
//         }

//     return (
//         <Container>
//              {contentToRender}
//         </Container>        
//     );
    
    
// }

function ActorView (props) {

    const {src,title,text,numOfDots,position}=props; //detructuring assignment
  
    return (
  
      <div className="App">
        <div class="Item">
          <img src={src}/>
          <h4>{title}</h4>
          <p>{text}</p>
          <div>
                   
            <Dots numOfDots={numOfDots} position={position}/>  
            {/* <Dots.numOfDots/>
            <Dots.position/> */}
  
  
            
          </div>
          
        </div>
  
      </div>
  
    )
    
  };

export default ActorView;