import React from "react";
import { FaArrowAltCircleRight, FaBlog } from "react-icons/fa";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Indoor Plants to Boost Health",
      image: "https://hips.hearstapps.com/hmg-prod/images/lot-of-houseplants-growing-on-window-sill-from-left-royalty-free-image-1747254223.pjpeg?crop=0.668xw:1.00xh;0.104xw,0&resize=640:*",
      link: "https://www.goodhousekeeping.com/home/gardening/g40742429/best-indoor-plants-for-health/",
    },
    {
      id: 2,
      title: "How to Start a Balcony Herb Garden",
      image: "https://urbanplants.co.in/cdn/shop/articles/how-to-make-a-balcony-herb-garden-complete-tutorial-990800.jpg?v=1671725978",
      link: "https://urbanplants.co.in/blogs/news/how-to-make-a-balcony-herb-garden-complete-tutorial",
    },
    {
      id: 3,
      title: "DIY Composting Tips for Home Gardeners",
      image: "https://i.ibb.co/v61cHhQP/composting.jpg",
      link: "https://www.oregonmetro.gov/tools-living/yard-and-garden/composting/tips-composting-success",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="flex items-center justify-center text-3xl font-bold text-center mb-6 text-green-700"><FaBlog /> Our Blogs</h2>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="card bg-base-100 shadow-sm hover:shadow-md transition">
            <figure>
              <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover"/>
            </figure>
            <div className="card-body p-4">
              <h3 className="text-xs md:text-lg font-medium">{blog.title}</h3>
              <a href={blog.link} target="_blank" className="flex align-center items-center gap-2 text-sm text-green-600 hover:underline mt-2">Read more <FaArrowAltCircleRight/> </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;