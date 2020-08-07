import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion,Card,Button } from 'react-bootstrap';



function MovieCard (props) {

    const {name,length,poster,director,stars}=props; //detructuring assignment  
    
  
    return (

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
               {name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>{`Length: ${length}`}</p>
                <img src={poster}></img>
                <p>{stars}</p>
              </Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>
     
  
    )
    
  };

  export default MovieCard;