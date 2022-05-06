import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
const NotFound = () => {
    return (
        <div className='text-center mt-5 text-danger'>
            <h1 className='display-1 h1'>404</h1>
            <h1 className='display-1 h1'><RiErrorWarningFill></RiErrorWarningFill></h1>
        </div>
    );
};

export default NotFound;