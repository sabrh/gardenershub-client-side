import React from 'react';
import FeaturedGardener from '../components/FeaturedGardener';
import TrendingTips from '../components/TrendingTips';
import Faq from '../components/Faq';
import Blog from '../components/Blog';
import Slider from '../components/Slider';

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