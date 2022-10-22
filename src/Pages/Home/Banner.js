import React from 'react';
import slide1 from '../../assets/images/slide2.1.jpg';
import slide2 from '../../assets/images/slide2.2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full z-40 bannerTop">
                <div id="slide1" className="carousel-item relative w-full">

                    <img src={slide1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                            <h3 className='lighting'>Lighting Accessories</h3>
                            <p className='sale'>Sale up to 50% off today</p>
                            <a className='sBtn p-[10px]' href="#"><button className='w-[187px] h-[45px]'>Shop All Collection</button></a>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                            <h3 className='lighting'>Decorative Lighting</h3>
                            <p className='sale'>Sale up to 50% off today</p>
                            <a className='sBtn p-[10px]' href="#"><button className='w-[187px] h-[45px]'>Shop All Collection</button></a>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;