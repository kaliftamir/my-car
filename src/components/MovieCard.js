import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion,Card,Button } from 'react-bootstrap';



function MovieCard (props) {

    const {src,name,bday,imdb,age}=props; //detructuring assignment  
    
  
    return (

        
    //   <div className="card">      
  
    //     <img src={src}></img>
    //     <h3>{name}</h3>
    //     <p>{bday}</p>
    //     <p>{age}</p>
    //     <a href={imdb} target={"_blank"}>Imdb</a>      
  
    //   </div>  

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
               Movie1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Content1
              </Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>
     
  
    )
    
  };

  export default MovieCard;