import React, { useState } from 'react';
import {useLoaderData} from 'react-router';
import SharedTipCard from '../components/SharedTipCard';
import { FaGlobe } from 'react-icons/fa';

const BrowseTips = () => {
    const tips=useLoaderData()
    console.log(tips)

    const [difficultyFilter, setDifficultyFilter]=useState('')

    const filteredTips=difficultyFilter ? tips.filter(tip=>tip.difficulty === difficultyFilter)
    : tips;

    return (
        <div className='my-1'>
            <p className='flex items-center mb-3 text-gray-500'>Tips Status: <FaGlobe /> Public </p>

        <div className='mb-4'>
            <select onChange={(e) => setDifficultyFilter(e.target.value)} className="select select-bordered w-full max-w-xs" value={difficultyFilter}>
                <option value="">All Difficulty Levels</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
        </div>

            <div className='grid grid-cols-1 gap-6'>
            {
                filteredTips.map(tip => <SharedTipCard key={tip._id} tip={tip}></SharedTipCard>)
            }
            </div>
        </div>
    );
};

export default BrowseTips;