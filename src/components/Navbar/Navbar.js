import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import UseMeal from '../../Hooks/UseMeal';
import ServiceBreakfast from '../ServiceBreakfast/ServiceBreakfast';


import "./Navbar.css"


const Navbar = () => {
    const [meal,setMeal]=UseMeal();
    const [newMeal,setNewMeal]=useState([])
    useEffect(()=>{
        fetch("/fakedata.json")
        .then(res=>res.json())
        .then(data=>setNewMeal(data))
    },[])

     const filterCard=(filtered)=>{
             const updateCard= meal?.filter(ml=>ml.category===filtered )
           
            setNewMeal(updateCard)
             
             
     }
    return (
        <div className="navbar-full">
         <Container>
      <ul style={{listStyle:"none",display:"flex" ,justifyContent:"center"}}>
         <li style={{padding:"20px", textDecoration:"none" ,color:"black",fontSize:"15px",fontWeight:"bold",cursor:"pointer"}} onClick={()=>filterCard("breakfast")}  active >Breakfast</li>
         <li style={{padding:"20px", textDecoration:"none" ,color:"black",fontSize:"15px",fontWeight:"bold",cursor:"pointer"}} onClick={()=>filterCard("lunch")}  >Launch</li>
         <li style={{padding:"20px", textDecoration:"none" ,color:"black",fontSize:"15px",fontWeight:"bold",cursor:"pointer"}} onClick={()=>filterCard("dinner")}>Dinner</li>
         </ul>
         
         </Container>
       
         <Container >
       <Row xs={1} md={3} className="g-4">
                {
                    newMeal.map((meal)=><ServiceBreakfast
                    key={meal.id}
                    meal={meal}
                    ></ServiceBreakfast>)
                }
                
                
                
            </Row>

       </Container>
        
        </div>
    );
};

export default Navbar;