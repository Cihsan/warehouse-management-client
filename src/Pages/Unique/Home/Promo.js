import React from 'react';
import { Link } from 'react-router-dom';

const Promo = () => {
    return (
        <div className='promo mt-3'>
            <h1 className='text-center pt-5 text-white'>Our Mobile Application Luanch</h1>

            <div className='text-center mt-5'>
                <Link className='btn mx-3' to='#'><img src="https://i.ibb.co/M6d0nQD/app-download-439edada.png" alt="" /></Link>
                <Link className='btn ' to='#'><img src="https://i.ibb.co/Y2FxvHZ/app-store.png" alt="" /></Link>
            </div>
        </div>
    );
};

export default Promo;