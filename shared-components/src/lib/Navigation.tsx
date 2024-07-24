'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import { Link } from 'react-scroll';
import { NavbarData } from './types';
import { NextFont } from '@next/font';
import { twMerge } from 'tailwind-merge';

const Navbar: FC<{
  executeScroll: (view: string) => void;
  font: NextFont;
  data: NavbarData;
  additionalStyles?: string;
}> = ({ executeScroll, font, data, additionalStyles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, links, logo } = data;

  return (
    <nav className={`bg-white shadow fixed w-full z-20 ${logo && 'h-32'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between p-4">
          <div className=" flex items-center gap-6">
            {logo && <Image width={150} height={150} src={logo} alt="Logo" />}
            <span
              className={`${font.className} ${
                logo && 'hidden md:flex'
              } my-2 text-4xl`}
            >
              {title}
            </span>
          </div>
          <div className="hidden lg:flex md:items-center md:space-x-4">
            {links.map(({ displayName, name }) => (
              <Link
                key={name}
                onClick={() => executeScroll(name)}
                to={name}
                smooth
                duration={500}
                className={twMerge(
                  `text-gray-800 hover:text-gray-600 text-xl cursor-pointer ${font.className}`,
                  additionalStyles
                )}
              >
                {displayName}
              </Link>
            ))}
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white -m-1 cursor-pointer">
          {links.map(({ displayName, name }) => (
            <Link
              onClick={() => executeScroll(name)}
              to={name}
              smooth
              duration={500}
              className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${font.className}}`}
            >
              {displayName}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
