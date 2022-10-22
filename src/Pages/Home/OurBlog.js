import React from 'react';
import obCard1 from '../../assets/ourBlog/ob1.jpg';
import obCard2 from '../../assets/ourBlog/ob2.jpg';
import obCard3 from '../../assets/ourBlog/ob3.jpg';
import './OurBlog.css';

const OurBlog = () => {
    const obCards = [
        {
            "img": obCard1,
            "name": "Our Favorite Greige Colors",
            "price": "This time of the year brings cooler weather, shorter days, cocooning on the couch, Netflix bingeing, and indoor projects and crafts. Maybe..."
        },
        {
            "img": obCard2,
            "name": "Table Lamps High to Low",
            "price": "78"
        },
        {
            "img": obCard3,
            "name": "Trend We Are Loving: Fluted Details",
            "price": "96"
        }

    ];
    return (
        <div className='bg-[#fff] pt-10'>
            <h2 className='bsTitle p-10'>Our Blog</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>
                {
                    obCards.map(card => <>
                        <div className="">
                            <figure className='obFiger'><img className='w-[100%] obImage' src={card.img} alt="Shoes" /></figure>
                            <div className="">
                                <a className='obNews' href="/">NEWS</a>
                                <a className='obLink' href="/"><h4 className="obName">{card.name}</h4></a>

                                <p className="obtext">This time of the year brings cooler weather, shorter days, cocooning on the couch, Netflix bingeing, and indoor projects and crafts. Maybe...</p>
                            </div>
                        </div>
                    </>)
                }
            </div>

        </div>
    );
};

export default OurBlog;