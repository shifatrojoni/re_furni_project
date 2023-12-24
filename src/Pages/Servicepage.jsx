import React from 'react';
import ServiceBanner from '../Components/ServiceBanner';
import Choose from '../Components/Choose';
import ServiceSection from '../Components/ServiceSection';
import Testimonial from '../Components/Testimonial';

const Servicepage = () => {
    return (
        <>
            <ServiceBanner />
            <Choose />
            <ServiceSection />
            <Testimonial />
        </>
    );
};

export default Servicepage;