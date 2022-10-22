import React from 'react';
import footer from '../../assets/footer/pay_copyright.jpg';
const FooterEnd = () => {
    return (
        <div className='flex flex-row bg-[#fff]'>
            <div className='basis-1/3 text-start'>
                <h3 className='text-4xl font-bold'>ALAMP</h3>
            </div>
            <div className='flex items-center justify-center basis-1/3'>
                <img src={footer} alt="" />
            </div>
            <div className='basis-1/3 text-end'>
                <p>© Copyright 2020 | <span className='font-bold'>AlampStore</span> By ShopiLaunch. Powered by</p>
                <p>Shopify.</p>
            </div>
        </div>
    );
};

export default FooterEnd;