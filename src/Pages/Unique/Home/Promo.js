import React from 'react';
import { Link } from 'react-router-dom';

const Promo = () => {
    return (
        <div className='promo mt-3'>
            <h1 className='text-center pt-4 mb-2 text-light'>Our Mobile Application Luanch</h1>

            <div className='text-center mt-4'>
                <Link className='btn mx-1 ' to='#'><img  src="https://i.ibb.co/5rKn2GS/google2.png" alt="google-play" /></Link>
                <Link className='btn' to='#'><img src="https://i.ibb.co/NL2LK6P/apple2.png" alt="apple-store" /></Link>
            </div>
        </div>
    );
};

export default Promo;


/* 
https://i.ibb.co/NL2LK6P/apple2.png
https://i.ibb.co/5rKn2GS/google2.png
*/