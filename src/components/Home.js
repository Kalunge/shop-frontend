import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import guitar from '../image/guitar.jpg';

const Home = () => {
  const instruments = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <p className="flex items-center px-5 border-b border-gray-50">
        <span className="px-2">Home</span> <AiOutlineArrowRight size={20} />{' '}
        <span className="px-2">Lease Deals</span>
      </p>
      <div className="flex relative items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mt-4 text-gray-700 px-2">
            Instruments Leasing and INstallations
          </h1>
          <h3 className="text-2xl font-semibold mt-4 text-gray-500 px-2">
            Best Car Lease Deals in New York | $0 Down Leasing Specials
          </h3>
        </div>
        <div className="bg-white rounded-lg w-40 absolute top-4 right-5 h-25">
          <p className="p-2 font-semibold">Special offers, rebates in NYC</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-7">
        {instruments.map((instrument, index) => (
          <div key={index} className="bg-white rounded-lg w-full">
            <img src={guitar} className="w-40 h-15 ml-20 mt-4" alt="" />
            <h3 className="text-4xl text-center mt-4">Guitar</h3>
            <p className="text-xl text-center mt-2 text-red-600">`${instrument} 00`</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
