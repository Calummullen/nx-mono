'use client';

import { FC, useRef } from 'react';
import image1 from '@public/images/stacked-images/imageandtext-1.jpg';
import image2 from '@public/images/stacked-images/imageandtext-2.jpg';
import image3 from '@public/images/stacked-images/imageandtext-3.jpg';
import image4 from '@public/images/stacked-images/imageandtext-4.jpg';
import image5 from '@public/images/stacked-images/imageandtext-5.jpg';
import image6 from '@public/images/stacked-images/imageandtext-6.jpg';
import image7 from '@public/images/stacked-images/imageandtext-7.jpg';
import Image from 'next/image';
import { useIsVisible } from './useIsVisible';
import localFont from '@next/font/local';

const caviarBold = localFont({
  src: [
    {
      path: '../../../public/fonts/caviar/CaviarDreams_Bold.ttf',
      weight: '400',
    },
  ],
});

export const TopSection: FC<{ reverse?: boolean }> = ({ reverse = false }) => {
  const imageRef = useRef(null);
  const isVisibleImage = useIsVisible(imageRef);
  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);

  return (
    <div className="flex sm:px-12 mb-12 sm:mb-48 mt-24 px-4 lg:px-32 xl:px-44 flex-col lg:flex-row gap-36 lg:gap-20 items-center">
      <div
        ref={textRef}
        className={`order-${
          reverse ? 1 : 0
        } transition-opacity duration-700 text-4xl basis-2/3 flex flex-col flex-grow gap-12 ${
          isVisibleText ? 'opacity-100 translate-y-4' : 'opacity-0'
        }`}
      >
        <h3 className={`${caviarBold.className} text-primary text-6xl`}>
          Dog Walking and Sitting
        </h3>
        <p className={`${caviarBold.className} text-2xl`}>
          Hi, I'm <span className="text-purple-700">Beth</span>! Welcome to
          Beth's Doggy Den. I offer a cozy home with a spacious garden and
          personalized care for your dog while you're on holiday. I also provide
          dog walking services to keep your furry friend active and happy. Rest
          assured, your dog will receive professional and attentive care in a
          safe, nurturing environment.
        </p>
      </div>
      <div ref={imageRef} className="relative w-[250px] sm:w-[400px] h-[400px]">
        <Image
          src={image5}
          alt="background"
          className={`rounded-xl transition-opacity absolute duration-700 rotate-[5deg] hover:z-10 ${
            isVisibleImage
              ? 'opacity-100  right-0 delay-[500ms]  hover:border-double hover:border-8 hover:border-primary'
              : 'opacity-0 w-[0px]'
          }`}
        />
        <Image
          src={image1}
          alt="background"
          className={`rounded-xl transition-opacity absolute duration-700 -rotate-[5deg] hover:z-10 ${
            isVisibleImage
              ? 'opacity-100 right-0 delay-[1000ms] hover:border-double hover:border-8 hover:border-primary'
              : 'opacity-0'
          }`}
        />
        <Image
          src={image6}
          alt="background"
          className={`rounded-xl transition-opacity absolute duration-700 rotate-[10deg] hover:z-10 ${
            isVisibleImage
              ? 'opacity-100 right-0 delay-[1500ms]  hover:border-double hover:border-8 hover:border-primary'
              : 'opacity-0 w-[0px]'
          }`}
        />
        <Image
          src={image2}
          alt="background"
          className={`rounded-xl transition-opacity duration-700 absolute -rotate-[10deg] hover:z-10 ${
            isVisibleImage
              ? 'opacity-100 right-0 delay-[2000ms] hover:border-double hover:border-8 hover:border-primary'
              : 'opacity-0'
          }`}
        />
        <Image
          src={image3}
          alt="background"
          className={`rounded-xl cursor-pointer transition-opacity duration-700 absolute rotate-[15deg] hover:z-10  ${
            isVisibleImage
              ? 'opacity-100 right-0 delay-[2500ms] hover:border-double hover:border-8 hover:border-primary'
              : 'opacity-0'
          }`}
        />
        <Image
          src={image4}
          alt="background"
          className={`rounded-xl transition-opacity duration-700 absolute -rotate-[15deg] hover:z-10 hover:delay-500 ${
            isVisibleImage
              ? 'opacity-100 right-0 delay-[3000ms] hover:border-double hover:border-8 hover:border-primary'
              : 'opacity-0'
          }`}
        />

        <Image
          src={image7}
          alt="background"
          className={`rounded-xl transition-opacity absolute duration-700 rotate-[20deg] hover:z-10 ${
            isVisibleImage
              ? 'opacity-100 right-0 delay-[3500ms]'
              : 'opacity-0 w-[0px]'
          }`}
        />
      </div>
    </div>
  );
};
