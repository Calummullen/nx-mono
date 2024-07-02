'use client';
import logo from '@public/images/logo.jpg';

import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Link } from 'react-scroll';
import localFont from '@next/font/local';
import { ExecuteScrollType } from './types';

const coffeeSpark = localFont({
  src: [
    {
      path: '../../../public/fonts/coffee-spark/Coffee-Spark.ttf',
      weight: '400',
    },
  ],
});

// const playground = localFont({
//   src: [
//     {
//       path: "../../public/fonts/playground/Playground.ttf",
//       weight: "400",
//     },
//   ],
// });

const Navbar: FC<{
  executeScroll: (view: ExecuteScrollType) => void;
}> = ({ executeScroll }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed w-full z-20 h-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between p-4">
          <div className=" flex items-center gap-6">
            <Image width={150} height={150} src={logo} alt="Logo" />
            <span
              className={`${coffeeSpark.className} hidden md:flex mt-2 text-5xl`}
            >
              Beth's Doggy Den
            </span>
          </div>
          <div className="hidden lg:flex md:items-center md:space-x-4">
            <Link
              onClick={() => executeScroll('home')}
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Home
            </Link>
            <Link
              onClick={() => executeScroll('about')}
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              About
            </Link>
            <Link
              onClick={() => executeScroll('services')}
              to="services"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Services
            </Link>
            <Link
              onClick={() => executeScroll('reviews')}
              to="reviews"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Reviews
            </Link>
            <Link
              onClick={() => executeScroll('contact')}
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Contact
            </Link>
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
          <Link
            onClick={() => executeScroll('home')}
            to="home"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            onClick={() => executeScroll('about')}
            to="about"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            About
          </Link>
          <Link
            onClick={() => executeScroll('services')}
            to="services"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Services
          </Link>
          <Link
            onClick={() => executeScroll('reviews')}
            to="services"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Reviews
          </Link>
          <Link
            onClick={() => executeScroll('contact')}
            to="contact"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// const Navigation = () => (
//   <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//       <div className="flex flex-row items-start justify-between gap-4">
//         <Image src={logo} width={100} height={100} alt="doggo den logo" />
//         <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//           Beth's Doggy Den
//         </p>
//       </div>
//       <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//         <button
//           data-collapse-toggle="navbar-sticky"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-sticky"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//       </div>
//       <div
//         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//         id="navbar-sticky"
//       >
//         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//               aria-current="page"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );
