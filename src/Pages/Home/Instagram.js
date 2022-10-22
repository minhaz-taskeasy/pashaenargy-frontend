import React from 'react';
import instimg1 from '../../assets/instgm/instagram1.jpg';
import instimg2 from '../../assets/instgm/instagram2.jpg';
import instimg3 from '../../assets/instgm/instagram3.jpg';
import instimg4 from '../../assets/instgm/instagram4.jpg';
import instimg5 from '../../assets/instgm/instagram5.jpg';
import instimg6 from '../../assets/instgm/instagram6.jpg';
import Slider from "react-slick";

const Instagram = () => {
    const obCards = [
        {
            "img": instimg1,
        },
        {
            "img": instimg2,
        },
        {
            "img": instimg3,
        },
        {
            "img": instimg4,
        },
        // {
        //     "img": instimg5,
        // },
        // {
        //     "img": instimg6,
        // },

    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 200,
        cssEase: "linear"
    };
    return (
        <div className='bg-[#fff] pt-10'>
            <h2 className='bsTitle pt-10'>Alamp On Instagram</h2>
            <p className='p-10'>@alamp</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    obCards.map(card => <>
                        <div className="">
                            <figure className='obFiger'><img className='w-[100%] obImage' src={card.img} alt="Shoes" /></figure>
                        </div>
                    </>)
                }
            </div>

        </div>
    );
};

export default Instagram;