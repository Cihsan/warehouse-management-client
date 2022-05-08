import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../../Common/Footer';
import Banner from '../Home/Banner';
import SupplyProduct from '../Home/SupplyProduct';
import FeatureOne from './FeatureOne';
import Promo from './Promo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SupplyProduct></SupplyProduct>
            <Promo></Promo>
            <div className='container text-center mt-5'>
                <NavLink className={({ isActive }) => (isActive ? "active btn btn-dark mx-2" : " btn btn-light mx-2 ")} to='/home/feature-one'>Feature-one</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active btn btn-dark mx-2" : " btn btn-light mx-2 ")} to='/home/feature-two'>Feature-Two</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active btn btn-dark mx-2" : " btn btn-light mx-2 ")} to='/home/feature-three'>Feature-Three</NavLink>
                <Outlet />
            <FeatureOne></FeatureOne>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;