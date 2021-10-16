import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';

const PlaceOrder = () => {

    const {mealId}=useParams()
 
    const history=useHistory()
 
    const [meal,setMeal]=useState([]);

    useEffect(()=>{
        fetch("/fakedata.json")
        .then(res=>res.json())
        .then(data=>setMeal(data));
    },[])
    const selectedMeal=meal.find((ml)=>ml.id==mealId)
    
 const {name,description,image,price,id}=selectedMeal ||{}
 
    const [addMeal,setAddMeal]=useState(0);
    const [newPrice,setNewPrice]=useState(0);

    const handleIncrease=()=>{
        setAddMeal(addMeal+1)
        setNewPrice(newPrice+price)
    selectedMeal.newPrice=newPrice+price;
         
    }

    const handleDecrease=()=>{
        setAddMeal(addMeal===0 ?addMeal: addMeal-1 )
        setNewPrice( addMeal===0 ?newPrice:newPrice-price)
        selectedMeal.newPrice=newPrice===price? newPrice: newPrice-price;
        console.log(selectedMeal)
    }
 
const handleCart=(id)=>{
  history.push(`/cart/${id}`)
 
}
  
    return (
        <div className="mt-5">
            <Container>
  <Row>
    <Col>
    <h2 className="fw-bold">{name}</h2>
    <p className="mt-5 text-justify">{description}</p>
     <h1>$ { newPrice>0? newPrice: price}</h1> 
     <div className="border rounded-pill w-50 text-center fs-5 mb-3 mt-3">   
     <span className="ml-5">
         <Button variant="primary" onClick={handleDecrease}> - </Button>
         </span> 
      <span className="p-5">{addMeal}</span>   
      <span className="ml-5">
         <Button onClick={handleIncrease} className="ml-5" variant="danger">+</Button>
         </span>
     </div>
   
      <Button onClick={()=>handleCart(id)}  className="mb-5" variant="danger">add to cart</Button>
     
    </Col>
    <Col>
    <div>
        <img className="img-fluid" src={image} alt="" />
    </div>
    </Col>
  </Row>
  </Container>
        </div>
    );
};

export default PlaceOrder;