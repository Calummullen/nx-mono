'use client';

import localFont from '@next/font/local';
import { FC, useRef } from 'react';
import Navbar from '@calum-business-mono/shared-components/src/lib/Navigation';
import { NavbarData } from '@calum-business-mono/shared-components/src/lib/types';

const lemonMilk = localFont({
  src: [
    {
      path: '../../public/fonts/lemon-milk/LEMONMILK-Light.otf',
      weight: '400',
    },
  ],
});

export const Main: FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const executeScroll = (view: string) => {
    switch (view) {
      case 'home':
        homeRef.current?.scrollIntoView();
        break;
      case 'about':
        aboutRef.current?.scrollIntoView();
        break;
      case 'services':
        servicesRef.current?.scrollIntoView();
        break;
      case 'reviews':
        reviewsRef.current?.scrollIntoView();
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
    <div>
      <div className="w-full">
        <Navbar
          executeScroll={(ref) => executeScroll(ref)}
          font={lemonMilk}
          data={navbarData}
          additionalStyles="border-r-[1px] border-gray-300 pr-4 last:border-r-0"
        />
      </div>
    </div>
  );
};

export default Main;
