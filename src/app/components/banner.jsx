
import React from 'react';

const Banner = () => {
  return (
    <div className="flex space-x-8">
      <div className="relative w-1/2 rounded-sm overflow-hidden ">
        <img src="/assets/banner1.jpeg" alt="Motor Oils" className="w-full h-full object-cover  rounded-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0  flex flex-col justify-center items-start p-4">
          <h2 className="text-yellow-400 text-2xl font-bold">MOTOR OILS</h2>
          <p className="text-white mt-2">Synthetic motor oil with free shipping<br />Friction free life guaranteed</p>
          <button className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold">Shop Now</button>
        </div>
      </div>
      <div className="relative w-1/2 rounded-sm overflow-hidden">
        <img src="/assets/banner2.jpeg" alt="Interior Parts" className="w-full h-full object-cover rounded-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0  flex flex-col justify-center items-start p-4">
          <h2 className="text-black bg-yellow-400 text-2xl font-bold">SAVE UP TO $40</h2>
          <p className="text-white mt-2">Luxurious interior part for real aesthetes<br />Leather, fabric, ivory and more.</p>
          <button className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
