import React from 'react';
import Banner from './Banner';
import BannerContent from './BannerContent';
import BestSeller from './BestSeller';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import testBg from '../../assets/fixedimage/bg_testimonial.jpg';
import HotDeal from './HotDeal';
import OurBlog from './OurBlog';
import Instagram from './Instagram';

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${testBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no - repeat"

            }}>
            <h2>This is Home Page</h2>
            <Navbar></Navbar>
            <Banner></Banner>
            <BannerContent></BannerContent>
            <BestSeller></BestSeller>
            <Testimonials></Testimonials>
            <HotDeal></HotDeal>
            <OurBlog></OurBlog>
            <Instagram></Instagram>
            <h2>This is Home Page</h2>
        </div>
    );
};

export default Home;