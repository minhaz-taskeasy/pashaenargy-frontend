import React from 'react';
import './Testimonials.css';
import user1 from '../../assets/fixedimage/user1.jpg';
import user2 from '../../assets/fixedimage/user2.jpg';
import user3 from '../../assets/fixedimage/user3.jpg';
import user4 from '../../assets/fixedimage/user4.jpg';

const Testimonials = () => {
    return (
        <div
            className='my-10 py-10'
            style={{
                backgroundColor: "rgba(0, 0, 0, 0)"

            }}>
            <h3 className='tstHeading pb-10 '>TESTIMONIALS</h3>
            <div className="carousel w-full mt-5">
                <div id="item1" className="carousel-item w-full">
                    <div className='flex items-center justify-center w-full'>
                        <div className='grid justify-items-center w-[58%] text-white'>
                            <img src={user1} className=" tstImg" />
                            <h3>DESTINEE</h3>
                            <p className='marketing'>Marketing Personal</p>
                            <p className='tstTxt'>Saved our business! We have no regrets! Thanks for the great service. This template is worth much more than I paid Saved our business! We have no regrets!</p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className='flex items-center justify-center w-full'>
                        <div className='grid justify-items-center w-[58%] text-white'>
                            <img src={user2} className=" tstImg" />
                            <h3>DESTINEE</h3>
                            <p className='marketing'>Marketing Personal</p>
                            <p className='tstTxt'>Saved our business! We have no regrets! Thanks for the great service. This template is worth much more than I paid Saved our business! We have no regrets!</p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className='flex items-center justify-center w-full'>
                        <div className='grid justify-items-center w-[58%] text-white'>
                            <img src={user3} className=" tstImg" />
                            <h3>DESTINEE</h3>
                            <p className='marketing'>Marketing Personal</p>
                            <p className='tstTxt'>Saved our business! We have no regrets! Thanks for the great service. This template is worth much more than I paid Saved our business! We have no regrets!</p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className='flex items-center justify-center w-full'>
                        <div className='grid justify-items-center w-[58%] text-white'>
                            <img src={user4} className=" tstImg" />
                            <h3>DESTINEE</h3>
                            <p className='marketing'>Marketing Personal</p>
                            <p className='tstTxt'>Saved our business! We have no regrets! Thanks for the great service. This template is worth much more than I paid Saved our business! We have no regrets!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Testimonials;