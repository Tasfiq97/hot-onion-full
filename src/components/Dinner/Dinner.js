import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseMeal from '../../Hooks/UseMeal';
import ServiceDinner from '../ServiceDinner/ServiceDinner';

const Dinner = () => {
    const [meal]=UseMeal([])
    const newDinner=meal.slice(12,18)

    return (
        <div style={{marginTop:"80px"}}>
        <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    newDinner.map((meal)=><ServiceDinner
                    key={meal.id}
                    meal={meal}
                    ></ServiceDinner>)
                }
                
                
                
            </Row>
           
            </Container>
        </div>
    );
};

export default Dinner;