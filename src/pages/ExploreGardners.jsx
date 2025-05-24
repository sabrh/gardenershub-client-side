import React from 'react';
import { useEffect, useState } from "react";
import { FaLeaf } from 'react-icons/fa';  

const ExploreGardners = () => {
    const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-gardeners")
      .then((res) => res.json())
      .then((data) => setGardeners(data))
    }, []);

    return (
        <div className='mt-6'>
              <h2 className="flex items-center justify-center text-xl font-bold text-center mb-6 text-green-700"><FaLeaf/> Our Gardeners</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {gardeners.map((g, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                    <img src={g.imgUrl} alt={g.name} className="rounded-lg w-full h-32 md:h-52 object-cover" />
                    <h3 className="text-xl font-semibold text-green-800 mt-4">{g.name}</h3>
                    <p className="text-sm text-gray-600">Age: {g.age} |  {g.gender}</p>
                    <p>{g.status ==="active" ? (<p className="text-green-500">Active</p>) :
                    (<p className="text-red-500">Inactive</p>)}</p>
                    <p className="text-sm mt-1"><b>Experience:</b> {g.experiences}</p>
                    <p className="text-sm mt-1"><b>Shared Tips:</b> {g.totalSharedTips}</p>
                  </div>
                ))}
              </div>
            </div>
    );
};

export default ExploreGardners;