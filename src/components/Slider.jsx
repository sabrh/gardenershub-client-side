import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full h-[300px] md:h-[400px]">
  
        <div id="slide1" className="carousel-item relative w-full">
            <div
            className="w-full h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('https://grangettos.com/cdn/shop/files/events-header_1600x.jpg?v=1614309146')" }}
            >
            <div className="bg-white bg-opacity-50 p-10 text-black max-w-md m-4 md:m-0 md:ml-10 rounded">
                <h2 className="text-3xl font-bold mb-2">Garden Workshop</h2>
                <p className="mb-4">Learn how to plant and grow herbs at home with expert tips.</p>
                <button className="btn btn-success">Join Event</button>
            </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
  
        <div id="slide2" className="carousel-item relative w-full">
            <div
            className="w-full h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('https://sajam.rs/wp-content/uploads/horti2016_7954.jpg')" }}
            >
            <div className="bg-white bg-opacity-50 p-10 text-black max-w-md m-4 md:m-0 md:ml-10 rounded">
                <h2 className="text-3xl font-bold mb-2">Flower Arrangement Fair</h2>
                <p className="mb-4">Join us for a creative afternoon of flower arranging and refreshments.</p>
                <button className="btn btn-success">Register Now</button>
            </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
            <div
            className="w-full h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('https://mb.cision.com/Public/5132/2079562/87358215c70008a8_800x800ar.jpg')" }}
            >
            <div className="bg-white bg-opacity-50 p-10 text-black max-w-md m-4 md:m-0 md:ml-10 rounded">
                <h2 className="text-3xl font-bold mb-2">Organic Food Fest</h2>
                <p className="mb-4">Taste fresh produce and meet local gardeners and farmers.</p>
                <button className="btn btn-success">See Details</button>
            </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>

    );
};

export default Slider;