import React from 'react';
import { BsMusicNoteList } from 'react-icons/bs';

const SecondHeader = () => {
  return (
    <div className="bg-white">
      <nav className="flex justify-around items-center">
        <h1 className="text-3xl py-4">
          <BsMusicNoteList size={42} />
        </h1>
        <div>
          <ul className="flex justify-around">
            <li>
              <a className="ml-10 hover:underline text-xl" href="/">
                Installations
              </a>
            </li>
            <li>
              <a className="ml-10 hover:underline text-xl" href="/">
                Security
              </a>
            </li>

            <li>
              <a className="ml-10 hover:underline text-xl" href="/">
                Music Instruments
              </a>
            </li>
            <li className="flex text-xl">
              <a
                className="ml-10 hover:underline flex items-center px-1"
                href="/"
              >
                About
              </a>
            </li>
            <li className="flex text-xl">
              <a
                className="ml-10 hover:underline flex items-center px-1"
                href="/"
              >
                Contacts
              </a>
            </li>
            <li className="flex text-xl">
              <a
                className="ml-10 hover:underline flex items-center px-1"
                href="/"
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SecondHeader;
