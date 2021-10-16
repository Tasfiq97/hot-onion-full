import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceLunch = ({meal}) => {
    const {name,price,image,slogan}=meal;

    return (
         <div >
             <Col>
      <Card className="card-hover">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{fontWeight:"bold"}}>{name}</Card.Title>
          <Card.Text style={{color:"gray"}}>
            {slogan}
          </Card.Text>
          <Card.Text style={{color:"black",fontWeight:"bolder"}}>
            $: {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
             
        </div>
    );
};

export default ServiceLunch;