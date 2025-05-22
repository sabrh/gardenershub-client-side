import React from 'react';
import {useLoaderData} from 'react-router';
import SharedTipCard from '../components/SharedTipCard';

const BrowseTips = () => {
    const tips=useLoaderData()
    console.log(tips)

    return (
        <div className='my-1'>
            <div className='grid grid-cols-1 gap-6'>
            {
                tips.map(tip => <SharedTipCard key={tip._id} tip={tip}></SharedTipCard>)
            }
            </div>
        </div>
    );
};

export default BrowseTips;