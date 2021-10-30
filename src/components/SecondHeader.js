import React from 'react';
import { BsMusicNoteList } from 'react-icons/bs';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SecondHeader = () => {
  return (
    <div className="bg-white">
      <nav className="flex justify-around items-center">
        <h1 className="text-3xl py-4">
          <Link to="/">
            <BsMusicNoteList size={42} />
          </Link>
        </h1>
        <div>
          <ul className="flex justify-around">
            <li>
              <Link className="ml-10 hover:underline text-xl" to="/installations">
                Installations
              </Link>
            </li>

            <li>
              <Link className="ml-10 hover:underline text-xl" to="/">
                Instruments
              </Link>
            </li>
            <li className="flex text-xl">
              <Link
                to="/about"
                className="ml-10 hover:underline flex items-center px-1"
              >
                About
              </Link>
            </li>
            <li className="flex text-xl">
              <Link
                className="ml-10 hover:underline flex items-center px-1"
                to="/contact"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link className="ml-10 hover:underline text-xl" to="/login">
                sign In
              </Link>
            </li>
            <li>
              <Link className="ml-10 hover:underline text-xl" to="/register">
                Sign Up
              </Link>
            </li>
            <li className="flex text-xl">
              <Link
                className="ml-10 hover:underline flex items-center px-1"
                to="/cart"
              >
                <span className="px-1">
                  <BsFillCartCheckFill />
                </span>
                cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SecondHeader;
