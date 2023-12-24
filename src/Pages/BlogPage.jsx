import React from 'react';
import BlogBanner from '../Components/BlogBanner';
import BlogGallery from '../Components/BlogGallery';
import Testimonial from '../Components/Testimonial';

const BlogPage = () => {
    return (
        <>
            <BlogBanner />
            <BlogGallery />
            <Testimonial />
        </>
    );
};

export default BlogPage;