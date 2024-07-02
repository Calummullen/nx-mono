'use client';

import localFont from '@next/font/local';
import { FC } from 'react';

const happyMemories = localFont({
  src: [
    {
      path: '../../public/fonts/happy-memories/Happy-Memories.ttf',
      weight: '400',
    },
  ],
});

const LandingPage: FC = () => {
  return (
    <div
      className={`text-6xl h-full text-primary ${happyMemories.className} flex flex-row h-screen text-center`}
    >
      <h1 className="m-auto">Under Construction 🐾</h1>
    </div>
  );
};

export default LandingPage;
