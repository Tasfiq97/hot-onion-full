import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Cart = () => {
    const {cartId}=useParams()
    const [meal,setMeal]=useState([])

    const history= useHistory()
    useEffect(()=>{
        fetch("/fakedata.json")
        .then(res=>res.json())
        .then(data=>setMeal(data))
    },[])
    const describeCart= meal.find(ml=>ml.id==cartId)
    console.log(describeCart)
    const {name,image,price}=describeCart ||{}
    const [validated, setValidated] = useState(false);
const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  else{
    history.push("/delivery")
  }
  setValidated(true);
  };


    return (
        <div>
             <Container style={{marginBottom:"40px"}}>
  <Row>
    <Col>
    <h3 style={{borderBottom:"2px solid gray"}}>Delivery details</h3>
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide email
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Division</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid division.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Button  variant="danger" type="submit">Confirm Order</Button>
    </Form>
    </Col>
    <Col>
    <Card  style={{width:"18rem",border:"none"}}>
  <Card.Img className="img-fluid" variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title> $: {price}</Card.Title>
     
  </Card.Body>
</Card>

    
    </Col>
  </Row>
  </Container>

        </div>
    );
};

export default Cart;