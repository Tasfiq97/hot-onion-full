import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./ServiceBreakfast.css"

const ServiceBreakfast = ({meal}) => {
    const {name,slogan,price,image,id}=meal;
  const history =useHistory();
    const handleOrder=(id)=>{
       history.push(`/placeorder/${id}`)
    }
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
          <Card.Text style={{color:"black",fontWeight:"bolder",fontSize:"30px"}}>
            $: {price}
          </Card.Text>
          <Button onClick={()=>handleOrder(id)} variant="danger">Place Order</Button>
        </Card.Body>
      </Card>
    </Col>
             
        </div>
    );
};

export default ServiceBreakfast;