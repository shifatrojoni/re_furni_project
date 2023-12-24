import React from 'react';
import AboutBanner from '../Components/AboutBanner';
import Choose from '../Components/Choose';
import Team from '../Components/Team';
import Testimonial from '../Components/Testimonial';

const AboutPage = () => {
    return (
        <>
            <AboutBanner />
            <Choose />
            <Team />
            <Testimonial />
        </>
    );
};

export default AboutPage;