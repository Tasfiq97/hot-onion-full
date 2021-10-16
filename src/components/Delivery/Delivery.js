import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import biker from "../../Images/Image/Group 1151.png"
import burger from "../../Images/Image/Group 1152.png"
const Delivery = () => {
    const history =useHistory()
    const handleBack=()=>{
        history.push("/home")
    }
    return (
        <div>
            <h1 className="text-center text-danger">Hurray!! Your Order is Done</h1>
           <Container>
  <Row>
    <Col>
    <div className="mb-5 mt-5">
        <img src={biker} alt="" />
    </div>
    </Col>
    <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>15 minutes ....</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Delivery Estimated Time</Card.Subtitle>
  <div className="text-center mt-5">
          <img className="w-50" src={burger} alt="" />
                <h6 className="mt-3">please wait for your delicius meal </h6>
                <p>Your rider cantact number</p>
                <p>+0018273092</p>
                <Button onClick={handleBack} variant="dark">Go To Home</Button>
  </div>
  </Card.Body>
</Card>
    
    </Col>
  </Row>
  </Container>
        </div>
    );
};

export default Delivery;