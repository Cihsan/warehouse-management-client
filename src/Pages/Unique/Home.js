import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import SupplyProduct from './SupplyProduct';
import TextBG from './TextBG';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SupplyProduct></SupplyProduct>
            <TextBG></TextBG>
            <Link to='/all-product'>Go Manage Product</Link>
        </div>
    );
};

export default Home;