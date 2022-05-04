import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Home/Banner';
import SupplyProduct from '../Home/SupplyProduct';
import TextBG from '../Home/TextBG';

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