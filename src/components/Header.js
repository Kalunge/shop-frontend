import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPhoneFill } from 'react-icons/bs';

const Header = () => {
  return (
    <div>
      <nav className="flex justify-around items-center">
        <Link to="/">
          {' '}
          <h1 className="text-3xl py-4">Fastest Growing Biz</h1>
        </Link>

        <div>
          <ul className="flex justify-around">
            <li>
              <Link className="ml-10 hover:underline text-3xl" to="/">
                New York
              </Link>
            </li>
            <li>
              <Link className="ml-10 hover:underline text-3xl" to="/">
                Masachustes
              </Link>
            </li>

            <li>
              <Link className="ml-10 hover:underline text-3xl" to="/">
                Alaska
              </Link>
            </li>
            <li className="flex text-3xl">
              <Link
                className="ml-10 hover:underline flex items-center px-1 font-semibold"
                to="/contact"
              >
                <BsFillPhoneFill />
                780928887
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
