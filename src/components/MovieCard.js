import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion,Card,Button } from 'react-bootstrap';



function MovieCard (props) {

    const {name,length,poster,director,stars}=props; //detructuring assignment  
    
  
    return (

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header className="row col-lg-12">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
               {name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="row">
               
                <img className="col-lg-6" src={poster}></img>
                  
                <div className="col-lg-6">
                    <p>{`Length: ${length}`}</p>
                    <p>{`Director: ${director}`}</p>
                    <p>{`Stars: ${stars}`}</p>
                                   
                </div>
 
              </Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>
     
  
    )
    
  };

  export default MovieCard;