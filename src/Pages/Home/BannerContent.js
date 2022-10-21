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
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner32} className="w-auto h-[420px]" />
                    <div
                        className='w-auto h-[420px]'
                        style={{
                            backgroundImage: `url(${banner31})`
                        }}>
                        <div className=' text-left w-[60%] '>
                            <h1 className="text-5xl font-bold">Carnegie Light
                                Armed Scone</h1>
                            <p className="py-6">Retro open basket design wall light in a black finish,
                                featuring an inner clear glass cylinder light shade.</p>
                            <button className="btn btn-primary">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-[#fff]">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div
                        className='w-auto h-[420px]'
                        style={{
                            backgroundImage: `url(${banner33})`
                        }}>
                        <div className=' text-left w-[60%] '>
                            <h1 className="text-5xl font-bold">Carnegie Light
                                Armed Scone</h1>
                            <p className="py-6">Retro open basket design wall light in a black finish,
                                featuring an inner clear glass cylinder light shade.</p>
                            <button className="btn btn-primary">SHOP NOW</button>
                        </div>
                    </div>
                    <img src={banner34} className="w-auto h-[420px]" />
                </div>
            </div>
        </>
    );
};

export default BannerContent;