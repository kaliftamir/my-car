import React from 'react';
import {Container, Table} from 'react-bootstrap'


function ActorView (props) {

    const {cars} = props;


    function getHighestKMPerYear() {
        let highestKmPerYear = cars[0];
        for (let i = 1; i < cars.length; i++) {
            if (cars[i].kmPerYear() > highestKmPerYear.kmPerYear()) {
                highestKmPerYear = cars[i];
            }
        }
        return highestKmPerYear;
    }

    

        let contentToRender;
        if (cars && cars.length >= 1) {
            // I have cars render a table with cars
            let highestKmPerYear = getHighestKMPerYear();

            const carTableRows = cars.map(car => 
                <tr key={car} className={car === highestKmPerYear ? "bg-danger" : ""}>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.km}</td>
                    <td>{car.year}</td>
                    <td>{parseInt(car.kmPerYear())}</td>
                </tr>);

            contentToRender =                 
                <Table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>KM</th>
                            <th>Year</th>
                            <th>Km Per Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carTableRows}
                    </tbody>
                </Table>

        } else {
            // I don't have cars render a message
            contentToRender = 
                <p style={{textAlign: "center"}}>No Cars to Show</p>
        }

        return (
            <Container>
                {contentToRender}
            </Container>        
        );
    
}

export default ActorView;