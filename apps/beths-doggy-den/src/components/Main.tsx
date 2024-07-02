'use client';

import Navbar from '@calum-business-mono/shared-components/src/lib/Navigation';
import localFont from '@next/font/local';
import { TopSection } from '@calum-business-mono/shared-components/src/lib/ImageAndText';
import { Services } from '@calum-business-mono/shared-components/src/lib/Services';
import { FC, useRef, useState } from 'react';
import {
  Review,
  ReviewSummary,
} from '@calum-business-mono/shared-components/src/lib/ReviewSummary';
import { Contact } from '@calum-business-mono/shared-components/src/lib/Contact';
import { Reviews } from '@calum-business-mono/shared-components/src/lib/Reviews';
import { ExecuteScrollType } from '@calum-business-mono/shared-components/src/lib/types';

const happyMemories = localFont({
  src: [
    {
      path: '../../public/fonts/happy-memories/Happy-Memories.ttf',
      weight: '400',
    },
  ],
});

const caviarRegular = localFont({
  src: [
    {
      path: '../../public/fonts/caviar/CaviarDreams.ttf',
      weight: '400',
    },
  ],
});

export const Main: FC<{ reviews: Review[] }> = ({ reviews }) => {
  const [currentReviews, setReviews] = useState<Review[]>(reviews);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const executeScroll = (view: ExecuteScrollType) => {
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

  const getReviewsByRating = (starNumber: number) =>
    setReviews(reviews.filter((r) => r.rating === starNumber));
  return (
    <div className="w-full">
      <Navbar executeScroll={(ref) => executeScroll(ref)} />
      <div ref={homeRef} className="flex flex-col mt-32 scroll-m-[128px]">
        <div className="bg-center md:bg-top bg-cover bg-[url('../../public/images/c3.jpg')] md:bg-[url('../../public/images/background-3.jpg')] bg-no-repeat md:h-[800px]">
          <div
            className={`${happyMemories.className} flex flex-col items-center text-center my-24 mx-4 lg:m-48 gap-24`}
          >
            <h1 className="text-9xl font-bold text-primary">
              Beth&apos;s Doggy Den
            </h1>
            <p className="text-6xl font-bold text-primary">
              Your best friends second best friend ❤️
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col ">
          <div className="scroll-m-[128px]" ref={aboutRef}>
            <TopSection />
          </div>
          <div className="scroll-m-[128px]" ref={servicesRef}>
            <Services />
          </div>
          <div
            className="grid grid-cols-1 items-center lg:grid-cols-2 scroll-m-[128px]"
            ref={reviewsRef}
          >
            <ReviewSummary
              reviews={reviews}
              onClick={(starNumber) => getReviewsByRating(starNumber)}
            />
            <Reviews reviews={currentReviews} />
          </div>
          <div className="scroll-m-[128px]" ref={contactRef}>
            <Contact />
          </div>
        </div>
        <footer>
          <div className="px-12 lg:px-32 xl:px-44 py-12 bg-gray-100 flex flex-col gap-24">
            <div className="flex flex-row items-center justify-center">
              <h3 className={`${caviarRegular.className}`}>
                Designed and Developed by Calum Mullen
              </h3>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
