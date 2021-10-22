import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import guitar from '../image/guitar.jpg';

const Home = () => {
  const instruments = [1, 2, 3, 4, 5, 6, 7, 8];
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
            <p className="text-xl text-center mt-2 text-red-600">
              `${instrument} 00`
            </p>
          </div>
        ))}
      </div>
      <div className="text-div">
        <h1 className="">Car Lease Deals</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
          earum reprehenderit optio est pariatur vel culpa quas ipsa. Error
          doloremque corrupti possimus et neque aspernatur sed, laudantium odit
          fugit dicta?tetur adipisicing elit. Dignissimos, earum reprehenderit
          optio est pariatur vel culpa quas ipsa. Error doloremque corrupti
          possimus et neque aspernatur sed, laudantium odit fugit dicta? tetur
          adipisicing elit. Dignissimos, earum reprehenderit optio est pariatur
          vel culpa quas ipsa. Error doloremque corrupti possimus et neque
          aspernatur sed, laudantium odit fugit dicta? tetur adipisicing elit.
          Dignissimos, earum reprehenderit optio est pariatur vel culpa quas
          ipsa. Error doloremque corrupti possimus et neque aspernatur sed,
          laudantium odit fugit dicta? tetur adipisicing elit. Dignissimos,
          earum reprehenderit optio est pariatur vel culpa quas ipsa. Error
          doloremque corrupti possimus et neque aspernatur sed, laudantium odit
          fugit dicta? tetur adipisicing elit. Dignissimos, earum reprehenderit
          optio est pariatur vel culpa quas ipsa. Error doloremque corrupti
          possimus et neque aspernatur sed, laudantium odit fugit dicta?
        </p>
      </div>
      <div className="text-div">
        <h1>Frequently Asked Questions About Leasing a Car</h1>
        <p>
          {' '}
          optio est pariatur vel culpa quas ipsa. Error doloremque corrupti
          possimus et neque aspernatur sed, laudantium odit fugit dicta? tetur
          adipisicing elit. Dignissimos, earum reprehenderit optio est pariatur
          vel culpa quas ipsa. Error doloremque corrupti possimus et neque
          aspernatur sed, laudantium odit fugit dicta? tetur adipisicing elit.
          Dignissimos, earum reprehenderit optio est pariatur vel culpa quas
          ipsa. Error doloremque corrupti possimus et neque aspernatur sed,
          laudantium odit fugit dicta? tetur adipisicing elit. Dignissimos,
          earum reprehenderit optio est pariatur vel culpa quas ipsa. Error
          doloremque corrupti possimus et neque aspernatur sed, laudantium odit
          fugit dicta? tetur adipisicing elit. Dignissimos, earum reprehenderit
          optio est pariatur vel culpa quas ipsa. Error doloremque corrupti
          possimus et neque aspernatur sed, laudantium odit fugit dicta?
        </p>
      </div>
      <div className="text-div">
        <h1>What goes into leasing a car?</h1>
        <ul className="list-disc">
          <li className="px-2 mt-4">
            <strong>MSRP:</strong>
            This is the Manufacturers Suggested Retail Price. It’s the total
            cost of the car if you were to buy it outright brand new.
          </li>
          <li className="px-2 mt-4">
            <strong>Sale price:</strong>
            doloremque corrupti possimus et neque aspernatur sed, laudantium
            odit fugit dicta? tetur adipisicing elit. Dignissimos, earum
            reprehenderit optio est pariatur vel culpa quas ipsa. Error
            doloremque corrupti possimus et neque aspernatur sed, laudantium
            odit fugit dicta?
          </li>
          <li className="px-2 mt-4">
            <strong>Sale price:</strong>
            doloremque corrupti possimus et neque aspernatur sed, laudantium
            odit fugit dicta? tetur adipisicing elit. Dignissimos, earum
            reprehenderit optio est pariatur vel culpa quas ipsa. Error
            doloremque corrupti possimus et neque aspernatur sed, laudantium
            odit fugit dicta?
          </li>
          <li className="px-2 mt-4">
            <strong>Sale price:</strong>
            doloremque corrupti possimus et neque aspernatur sed, laudantium
            odit fugit dicta? tetur adipisicing elit. Dignissimos, earum
            reprehenderit optio est pariatur vel culpa quas ipsa. Error
            doloremque corrupti possimus et neque aspernatur sed, laudantium
            odit fugit dicta?
          </li>
        </ul>
      </div>
      <div className="text-div">
        <h1>What are the steps in leasing a car?</h1>
        <ul className="list-decimal">
          <li>
            <strong>Step 1: Figure out your budget.</strong> Determine the
            amount you want to spend per month when leasing a car. Take into
            account the additional monthly cost of car insurance, gas, and
            interest rates. Figure out what car makes fall into this price
            range.
          </li>
          <li>
            <strong>Step 1: Figure out your budget.</strong> Determine the
            amount you want to spend per month when leasing a car. Take into
            account the additional monthly cost of car insurance, gas, and
            interest rates. Figure out what car makes fall into this price
            range.
          </li>
          <li>
            <strong>Step 1: Figure out your budget.</strong> Determine the
            amount you want to spend per month when leasing a car. Take into
            account the additional monthly cost of car insurance, gas, and
            interest rates. Figure out what car makes fall into this price
            range.
          </li>
          <li>
            <strong>Step 1: Figure out your budget.</strong> Determine the
            amount you want to spend per month when leasing a car. Take into
            account the additional monthly cost of car insurance, gas, and
            interest rates. Figure out what car makes fall into this price
            range.
          </li>
        </ul>
        <p className="mt-5">
          The key takeaway from these terms is that they are all negotiable. The
          MSRP is the price set by the manufacturer, but we do negotiate your
          lease terms for you
        </p>
      </div>
    </div>
  );
};

export default Home;
