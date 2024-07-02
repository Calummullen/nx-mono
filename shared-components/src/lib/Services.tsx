import Image, { StaticImageData } from 'next/image';
import { FC, useRef, useState } from 'react';
import image2 from '@public/images/stacked-images/imageandtext-2.jpg';
import image4 from '@public/images/stacked-images/milk.jpg';
import tap from '@public/images/stacked-images/tap.png';
import localFont from '@next/font/local';
import { useIsVisible } from './useIsVisible';

const caviarRegular = localFont({
  src: [
    {
      path: '../../../public/fonts/caviar/CaviarDreams.ttf',
      weight: '400',
    },
  ],
});

const caviarBold = localFont({
  src: [
    {
      path: '../../../public/fonts/caviar/CaviarDreams_Bold.ttf',
      weight: '400',
    },
  ],
});

export const Services: FC = () => {
  const imageRef = useRef(null);
  const isVisibleImage = useIsVisible(imageRef);
  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);
  return (
    <div className="px-4 sm:px-12 lg:px-32 xl:px-44 py-12 bg-gray-200 flex flex-col gap-4">
      <div
        ref={textRef}
        className={`transition-all duration-700 md:delay-500 relative -left-12 ${
          isVisibleText ? 'opacity-100 translate-x-0 left-0' : 'opacity-0'
        }`}
      >
        <h3 className={`${caviarBold.className} text-6xl mb-4 text-primary`}>
          My Services
        </h3>
        <p className={`${caviarRegular.className} text-3xl`}>
          Please see below for my current list of services
        </p>
      </div>
      <div
        ref={imageRef}
        className={`transition-all lg:grid-cols-2 grid grid-cols-1 delay-1000 duration-500  text-center gap-12 mb-24 ${
          isVisibleImage ? 'opacity-100 translate-y-12' : 'opacity-0'
        }`}
      >
        <Tile
          image={image2}
          title="Dog Walking"
          description="Reliable and personalized dog walking services, ensuring your dog gets the exercise and attention they need. I provide both solo and group walks to suit your dog's preferences"
        />
        <Tile
          image={image4}
          title="Dog Sitting"
          description="Dependable and compassionate dog sitting services, ensuring your dog feels comfortable and cared for in your absence. I provide a home-away-from-home experience for your furry friend with a focus on personalized attention and safety."
        />

        {/* <Tile
          image={image3}
          title="Dog Holidays"
          description="Some description3"
        /> */}
      </div>
    </div>
  );
};

const Tile: FC<{
  image: StaticImageData;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      onClick={handleFlip}
      className="flex perspective-1000 flex-col rounded-lg shadow-xl pb-6 duration-200 hover:ease-in-out hover:scale-105 scale-100 cursor-pointer"
    >
      <div
        className={`relative transform-style-3d h-[400px] sm:h-[500px] transition-transform duration-700 ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src={image}
            alt="tile image"
            className={`h-[400px] sm:h-[500px] absolute object-cover rounded-t-lg`}
          />
          <Image
            height={40}
            width={40}
            src={tap}
            alt={'touch icon'}
            className="absolute m-2 right-0 opacity-70"
          />
        </div>
        <div className="absolute rounded-t-lg gap-4 w-full h-[400px] sm:h-[500px] backface-hidden rotate-y-180 bg-primary flex flex-col items-center justify-center p-4">
          {description.split('.').map((text, index) => (
            <p key={index} className="text-center text-lg">
              {text}.
            </p>
          ))}
        </div>
      </div>

      <h3
        className={`mt-8 mb-2 mx-2 ${caviarBold.className} ${
          flipped ? 'text-purple-700' : 'text-black'
        } text-5xl`}
      >
        {title}
      </h3>
    </div>
  );
};
