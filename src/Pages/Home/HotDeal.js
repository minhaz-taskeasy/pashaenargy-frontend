import React from 'react';
import card3 from '../../assets/cardimages/3.jpg';
import card5 from '../../assets/cardimages/5.jpg';
import card8 from '../../assets/cardimages/8.jpg';
import card9 from '../../assets/cardimages/9.4.jpg';

const HotDeal = () => {
    const bCards = [
        {
            "img": card3,
            "name": "Cohen 1-Light Dome Pendant",
            "price": "96"
        },
        {
            "img": card5,
            "name": "Light Drum Pendant",
            "price": "78"
        },
        {
            "img": card8,
            "name": "Cotton Tapered Pendant",
            "price": "16"
        },
        {
            "img": card9,
            "name": "Cotton Tapered Pendant",
            "price": "16"
        },

    ];
    return (
        <div className='bg-[#fff]'>
            <h2 className='bsTitle p-8'>Hot Deal</h2>
            <p className='pb-10'>Don't Miss Today's Featured Deals</p>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pl-5'>
                    {
                        bCards.map(card => <>
                            <div className="w-96 ">
                                <figure><img className='w-[78%]' src={card.img} alt="Shoes" /></figure>
                                <div className="">
                                    <h4 className="text-left tText">Dome Pendant</h4>
                                    <p className='text-left pText'>$95.00</p>
                                    <p className="text-left cardSelect"><a href="/">SELECT OPTION</a></p>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>


        </div>
    );
};

export default HotDeal;