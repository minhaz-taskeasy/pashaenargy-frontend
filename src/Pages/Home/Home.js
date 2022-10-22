import React from 'react';
import Banner from './Banner';
import BannerContent from './BannerContent';
import BestSeller from './BestSeller';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import testBg from '../../assets/fixedimage/bg_testimonial.jpg';

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${testBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no - repeat"

            }}>
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