import React from 'react';
import { BsFillPhoneFill } from 'react-icons/bs';

const Header = () => {
  return (
    <div>
      <nav className="flex justify-around items-center">
        <h1 className="text-3xl py-4">Fastest Growing Biz</h1>
        <div>
          <ul className="flex justify-around">
            <li>
              <a className="ml-10 hover:underline text-3xl" href="/">
                New York
              </a>
            </li>
            <li>
              <a className="ml-10 hover:underline text-3xl" href="/">
                Masachustes
              </a>
            </li>

            <li>
              <a className="ml-10 hover:underline text-3xl" href="/">
               Alaska
              </a>
            </li>
            <li className="flex text-3xl">
              <a
                className="ml-10 hover:underline flex items-center px-1 font-semibold"
                href="/"
              >
                <BsFillPhoneFill />
                780928887
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
