import React from 'react';
import {useLoaderData} from 'react-router';
import SharedTipCard from '../components/SharedTipCard';
import { FaGlobe } from 'react-icons/fa';

const BrowseTips = () => {
    const tips=useLoaderData()
    console.log(tips)

    return (
        <div className='my-1'>
            <p className='flex items-center mb-3 text-gray-500'>Tips Status: <FaGlobe /> Public </p>
            <div className='grid grid-cols-1 gap-6'>
            {
                tips.map(tip => <SharedTipCard key={tip._id} tip={tip}></SharedTipCard>)
            }
            </div>
        </div>
    );
};

export default BrowseTips;