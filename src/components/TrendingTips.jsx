import React from 'react';
import { useEffect, useState } from "react";
import { FaSunPlantWilt } from 'react-icons/fa6';

const TrendingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trending-tips")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error("Error fetching trending tips:", err));
  }, []);

  return (
    <div className="py-10 px-4 lg:px-20">
      <h2 className="flex justify-center align-center text-3xl font-bold text-center mb-8 text-green-700"><FaSunPlantWilt /> Top Trending Garden Tips</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
        {tips.map((tip) => (
          <div key={tip._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
            <figure>
              <img
                src={tip.imgUrl}
                alt={tip.title || "Garden Tip"}
                className="h-52 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{tip.title}</h3>
              <p className="text-sm text-gray-500">By {tip.author || "Unknown"}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-green-600 font-semibold">
                  Likes: {tip.totalLiked || 0}
                </span>
                <button className="btn btn-outline btn-sm text-green-600 border-green-500 hover:bg-green-100">
                  View Tip
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTips;