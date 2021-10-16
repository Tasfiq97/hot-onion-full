import React from 'react';
import { Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NoPageFound = () => {
    return (
        <div style={{height:"100vh"}}>
            <h1 className="text-center">No page Found</h1>
            <div className="text-center mt-4">
             <Link  className="text-center" to="/home">
            <Button variant="dark"> Go Back</Button>
            </Link>
            </div>
        </div>
    );
};

export default NoPageFound;