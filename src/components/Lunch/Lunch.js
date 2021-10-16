import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import UseMeal from '../../Hooks/UseMeal';
import ServiceLunch from '../ServiceLunch/ServiceLunch';

const Lunch = () => {
    const [meal]=UseMeal([]);

    const newLunch=meal.slice(6,12)
    
    return (
        <div style={{marginTop:"80px"}}>
        <Container>
        <Row xs={1} md={3} className="g-4">
            {
                newLunch.map((meal)=><ServiceLunch
                key={meal.id}
                meal={meal}
                ></ServiceLunch>)
            }
            
        </Row>
        </Container>

    </div>
    );
};

export default Lunch;