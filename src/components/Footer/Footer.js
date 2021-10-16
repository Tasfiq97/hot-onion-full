import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from "../../Images/logo2.png"

const Footer = () => {
    return (
        <div>
            <Container fluid>
            <Row style={{overflowX:"hidden",backgroundColor:"black", padding:"30px"}}>
    <Col>
         <img style={{width:"30%"}} src={logo} alt="" />
         <p className="text-white mt-5">&copy; all rightes reserved || 2021</p>
    </Col>
    <Col>
    <ul style={{color:"white",listStyle:"none"}}>
        <li>Read Our blog</li>
        <li>About us</li>
        <li>Sign up to deliver</li>
        <li>Add your Restaurant</li>
        
    </ul>
    <span style={{color:"white"}}>Privacy</span> <span style={{marginLeft:"30px",color:"white"}}>Policy</span> <span style={{marginLeft:"30px",color:"white"}}> Please subscribe</span> <span style={{marginLeft:"30px",color:"red"}}> Please subscribe</span>
    
    </Col>
  </Row>
  </Container>
        </div>
    );
};

export default Footer;