import React from 'react';
import Banner from "../Banner/Banner"
import Breakfast from '../Breakfast/Breakfast';
import Navbar from "../Navbar/Navbar"
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Navbar></Navbar>
           <Breakfast></Breakfast>
           <Services></Services>
          
        </div>
    );
};

export default Home;