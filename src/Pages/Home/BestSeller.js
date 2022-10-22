import React from 'react';
import card1 from '../../assets/cardimages/1.jpg';
import card2 from '../../assets/cardimages/2.jpg';
import card3 from '../../assets/cardimages/3.jpg';
import card4 from '../../assets/cardimages/4.jpg';
import card5 from '../../assets/cardimages/5.jpg';
import card6 from '../../assets/cardimages/6.jpg';
import card7 from '../../assets/cardimages/7.jpg';
import card8 from '../../assets/cardimages/8.jpg';
import './BestSeller.css';

const cards = [
    {
        "img": card1,
        "name": "Dome Pendant",
        "price": "95"
    },
    {
        "img": card2,
        "name": "Novelty Pendant",
        "price": "78"
    },
    {
        "img": card3,
        "name": "Cohen 1-Light Dome Pendant",
        "price": "96"
    },
    {
        "img": card4,
        "name": "Single Pendant",
        "price": "22"
    },
    {
        "img": card5,
        "name": "Light Drum Pendant",
        "price": "78"
    },
    {
        "img": card6,
        "name": "Cotton Novelty Pendant",
        "price": "35"
    },
    {
        "img": card7,
        "name": "Polyester Empire Lamp",
        "price": "33"
    },
    {
        "img": card8,
        "name": "Cotton Tapered Pendant",
        "price": "16"
    },

];
// console.log('cd', cards[0].name)


const BestSeller = () => {
    return (
        <div className='bg-[#fff]'>
            <h2 className='bsTitle p-10'>Best Seller</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pl-5'>
                {
                    cards.map(card => <>
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
    );
};

export default BestSeller;


{/* <div className="w-96 ">
                <figure><img src={card1} alt="Shoes" /></figure>
                <div className="">
                    <h4 className="text-left">Dome Pendant</h4>
                    <p className='text-left'>$95.00</p>
                    <p className="text-left"><a href="/">SELECT OPTION</a></p>
                </div>
            </div> */}