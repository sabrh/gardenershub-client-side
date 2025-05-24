import React, { useContext, useEffect, useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import MyTipCard from '../components/MyTipCard';
import AuthContext from '../context/AuthContext';

const MyTips = () => {
    const {user} = useContext(AuthContext)
    const [tip, setTip] = useState([])

    useEffect(() =>{
        if(user?.email){
            fetch(`http://localhost:3000/mytips?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTip(data))
        }
    }, [user])

    
        return (
            <div className='my-1'>
                <p className='flex items-center mb-3 text-gray-500'>Tips Status: <FaGlobe /> All </p>
                <div className='grid grid-cols-1 gap-6'>
                {
                    tip.map(tip => <MyTipCard key={tip._id} tip={tip}></MyTipCard>)
                }
                </div>
            </div>
        );
};

export default MyTips;