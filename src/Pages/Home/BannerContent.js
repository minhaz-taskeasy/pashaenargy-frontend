import React from 'react';
import './BannerContent.css';
import banner31 from '../../assets/images/banner3.1.jpg';
import banner32 from '../../assets/images/banner3.2.jpg';
import banner33 from '../../assets/images/banner3.3.jpg';
import banner34 from '../../assets/images/banner3.4.jpg';

const BannerContent = () => {
    return (
        <>
            <div className="hero bg-[#fff]">
                <div className="hero-content flex-col lg:flex-row">
                    <div
                        className='w-auto h-[25rem] flex items-center'
                        style={{
                            backgroundImage: `url(${banner31})`,
                            backgroundSize: "cover",
                            // backgroundPosition: "center",
                            backgroundRepeat: "no - repeat"

                        }}>
                        <div className='text-left w-[60%] pl-20'>
                            <h3 className="text-[40px] font-bold">Carnegie Light
                                Armed Scone</h3>
                            <p className="py-6">Retro open basket design wall light in a black finish,
                                featuring an inner clear glass cylinder light shade.</p>
                            <a className='shopBtnL' href="/"><button className='shopBtn'>SHOP NOW</button></a>
                        </div>
                    </div>
                    <img src={banner32} className="w-auto h-[25rem]" />
                </div>
            </div>
            <div className="hero bg-[#fff]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div
                        className='w-auto h-[25rem] flex items-center'
                        style={{
                            backgroundImage: `url(${banner33})`,
                            backgroundSize: "cover",
                            // backgroundPosition: "center",
                            backgroundRepeat: "no - repeat"

                        }}>
                        <div className='text-left w-[60%] pl-20'>
                            <h3 className="text-[40px] font-bold">Carnegie Light
                                Armed Scone</h3>
                            <p className="py-6">Retro open basket design wall light in a black finish,
                                featuring an inner clear glass cylinder light shade.</p>
                            <a className='shopBtnL' href="/"><button className='shopBtn'>SHOP NOW</button></a>
                        </div>
                    </div>
                    <img src={banner34} className="w-auto h-[25rem]" />
                </div>
            </div>


        </>
    );
};

export default BannerContent;