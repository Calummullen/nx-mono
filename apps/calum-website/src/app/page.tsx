import localFont from '@next/font/local';
import { FC } from 'react';

const lemonMilk = localFont({
  src: [
    {
      path: '../../public/fonts/lemon-milk/LEMONMILK-Light.otf',
      weight: '400',
    },
  ],
});

const LandingPage: FC = () => {
  return (
    <div
      className={`text-6xl h-full text-primary ${lemonMilk.className} flex flex-row h-screen text-center`}
    >
      <h1 className="m-auto">Under Construction</h1>
    </div>
  );
};

export default LandingPage;
