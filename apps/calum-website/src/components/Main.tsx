'use client';

import localFont from '@next/font/local';
import { FC, useRef } from 'react';
import Navbar from '@calum-business-mono/shared-components/src/lib/Navigation';
import { NavbarData } from '@calum-business-mono/shared-components/src/lib/types';
import Home from './Home';
import Product from './Product';
import Pricing from './Pricing';
import Portfolio from './Portfolio';

const lemonMilk = localFont({
  src: [
    {
      path: '../../public/fonts/lemon-milk/LEMONMILK-Bold.otf',
      weight: '400',
    },
  ],
});

export const Main: FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const executeScroll = (view: string) => {
    switch (view) {
      case 'home':
        homeRef.current?.scrollIntoView();
        break;
      case 'product':
        productRef.current?.scrollIntoView();
        break;
      case 'pricing':
        pricingRef.current?.scrollIntoView();
        break;
      case 'portfolio':
        portfolioRef.current?.scrollIntoView();
        break;
      case 'contact':
        contactRef.current?.scrollIntoView();
        break;
    }
  };

  const navbarData: NavbarData = {
    title: 'Calum Mullen',
    links: [
      {
        displayName: 'Home',
        name: 'home',
      },
      {
        displayName: 'The Product',
        name: 'product',
      },
      {
        displayName: 'Pricing',
        name: 'pricing',
      },
      {
        displayName: 'Portfolio',
        name: 'portfolio',
      },
      {
        displayName: 'Contact',
        name: 'contact',
      },
    ],
  };

  return (
    <div className="w-full">
      <Navbar
        executeScroll={(ref) => executeScroll(ref)}
        font={lemonMilk}
        data={navbarData}
        additionalStyles="border-r-[1px] border-gray-300 pr-4 last:border-r-0 text-sm"
      />
      <div className="flex flex-col mt-20 scroll-m-[96px] bg-blue-200">
        {/* <div className="bg-center md:bg-top bg-cover bg-[url('../../public/images/c3.jpg')] md:bg-[url('../../public/images/background-3.jpg')] bg-no-repeat md:h-[800px]"> */}

        <div
          ref={homeRef}
          className="flex flex-col scroll-m-[96px] bg-cover bg-no-repeat bg-center bg-[url('../../public/images/background-2.jpg')] "
        >
          <Home />
        </div>

        <div
          ref={productRef}
          className="flex flex-col scroll-m-[88px] bg-blue-200 m-4 lg:m-24"
        >
          <Product />
        </div>
        <div
          ref={pricingRef}
          className="flex flex-col scroll-m-[88px] bg-green-200"
        >
          <Pricing />
        </div>
        <div
          ref={portfolioRef}
          className="flex flex-col scroll-m-[88px] bg-green-200"
        >
          <Portfolio />
        </div>
        <div
          ref={contactRef}
          className="flex flex-col scroll-m-[88px] bg-green-200"
        >
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default Main;
