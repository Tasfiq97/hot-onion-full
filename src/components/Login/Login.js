import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useFirebase from '../../Hooks/useFirebase';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const {user,signInGoogle}=useAuth();
    const location=useLocation()
   const history=useHistory()
   const redirect=location.state?.from  || "/home"
    const handleLogin=(e)=>{
      e.preventDefault();
    }
    const signInWithGoogle=()=>{
        signInGoogle ()
        .then(result=>{
             history.push(redirect)
        })
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Please login</h1>
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
 
  <Button onClick={handleLogin}  variant="danger" type="submit">
    Login
  </Button>
  <hr />
  <Button onClick={signInWithGoogle} variant="dark"> <FontAwesomeIcon icon={faGoogle} />  Sign In With Google</Button>
  <p className="fs-5 mt-3">new to hot-onion? <Link to="/signup">Sign Up</Link></p>
</Form>
 
 
</div>

 
        </div>
    );
};

export default Login;