import React from 'react';
import { Button, Form, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignIn=(e)=>{
 e.preventdefault()
    }
    return (
        <div>
        <h1 style={{textAlign:"center"}}>Please Sign Up</h1>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Form className="w-50 p-5 mr-5">
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Re enter Password</Form.Label>
<Form.Control type="password" placeholder="re-enter Password" />
</Form.Group>

<Button onClick={handleSignIn}  variant="danger" type="submit">
Sign up
</Button>
<hr />
<span className="fs-4">already have an account? <Link to="/login">Log in</Link></span>
</Form>


</div>


    </div>
    );
};

export default SignUp;