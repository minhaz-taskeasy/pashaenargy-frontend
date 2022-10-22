import React from 'react';
import Banner from './Banner';
import BannerContent from './BannerContent';
import BestSeller from './BestSeller';
import Navbar from './Navbar';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <BannerContent></BannerContent>
            <BestSeller></BestSeller>
            <Testimonials></Testimonials>
            <h2>This is Home Page</h2>
        </div>
    );
};

export default Home;