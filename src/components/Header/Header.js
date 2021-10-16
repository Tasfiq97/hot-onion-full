import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
 import img from "../../Images/logo2.png"
 const Header = () => {
  const {user,signOutGoogle}=useAuth();
  
    return (
        <div>
            <Navbar style={{padding:"30px"}} sticky="top">
  <Container fluid>
    <NavLink to="/home">
    <Navbar.Brand >
        <img style={{width:"30%"}} src={img} alt="" />
    </Navbar.Brand>
    </NavLink>
    <Navbar.Toggle />
     < Navbar.Collapse className="justify-content-end">
      { !user?.email ?
       <div>
          <NavLink to="/login">
      <Button style={{borderRadius:"30px"}} variant="light">Login</Button>
      </NavLink>
      <NavLink to="/signup">
      <Button style={{marginLeft:"20px",borderRadius:"30px"}} variant="danger">SignUp</Button>
      </NavLink>
       </div>
      : 
      <div>
        <span>{user?.displayName}</span>
      <Button onClick={signOutGoogle} style={{marginLeft:"20px",borderRadius:"30px"}} variant="dark">Logout</Button>
      </div>
     
      }
     
    </Navbar.Collapse>
  
  
 
    
  </Container>
</Navbar>
        </div>
    );
};

export default Header;