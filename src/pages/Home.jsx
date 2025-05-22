import React from 'react';
import Slider from '../components/Slider';
import FeaturedGardener from '../components/FeaturedGardener';
import TrendingTips from '../components/TrendingTips';
import Faq from '../components/Faq';
import Blog from '../components/Blog';

const Home = () => {
    return (
        <div>
            <Slider />
            <FeaturedGardener />
            <TrendingTips />
            <Faq />
            <Blog />
        </div>
    );
};

export default Home;