import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
 import image1 from "../../Images/Image/adult-blur-blurred-background-687824.png"
 import image2 from "../../Images/Image/architecture-building-city-2047397.png"
 import image3 from "../../Images/Image/chef-cook-food-33614.png"
const Services = () => {
    return (
        <div style={{marginTop:"100px",overflowX:"hidden",marginBottom:"60px"}}>

            <h1 className="text-center fw-bold">Why Choose Us</h1>

            <Row xs={1} md={3} className="g-3" style={{marginTop:"80px"}}>
 
    <Col >
      <Card style={{border:"none"}}>
        <Card.Img  variant="top" src={image1} />
        <Card.Body>
          <Card.Title>Fast Delivery</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{border:"none"}}>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>Home delivery</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{border:"none"}}>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>Good Chief</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>
        </div>
    );
};

export default Services;