import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import bg from "../../Images/bannerbackground.png"
const Banner = () => {
    return (
        <>
        <Container fluid style={{background:`url(${bg})`,backgroundSize:"100%,100%",minHeight:"100vh"}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
            <div style={{marginTop:"150px",}}>

                <h1>Best Food Waiting For Your Belly</h1>
                <InputGroup style={{width:"90%" ,textAlign:"center",marginTop:"30px"}}>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button style={{borderRadius:"10px",padding:"10px 20px"}} variant="danger">Search</Button>
  </InputGroup>
            </div>
            </div>
           
        </Container>
        </>
    );
};

export default Banner;