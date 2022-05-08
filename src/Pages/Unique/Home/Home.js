import React from 'react';
import Footer from '../../Common/Footer';
import Banner from '../Home/Banner';
import SupplyProduct from '../Home/SupplyProduct';
import TextBG from '../Home/TextBG';
import Promo from './Promo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SupplyProduct></SupplyProduct>
            <TextBG></TextBG>
            <Promo></Promo>
            <Footer></Footer>
        </div>
    );
};

export default Home;