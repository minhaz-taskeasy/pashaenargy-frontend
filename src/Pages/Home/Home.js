import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2>This is Home Page</h2>
        </div>
    );
};

export default Home;