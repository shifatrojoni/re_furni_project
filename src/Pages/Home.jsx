import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import Product from '../Components/Product';
import Choose from '../Components/Choose';
import Help from '../Components/Help';
import PopularProduct from '../Components/PopularProduct';
import Testimonial from '../Components/Testimonial';
import Blog from '../Components/Blog';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <Product />
            <Choose />
            <Help />
            <PopularProduct />
            <Testimonial />
            <Blog />
        </>
    );
};

export default Home;