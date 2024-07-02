'use client';

import { FC, useMemo, useRef, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import localFont from '@next/font/local';
import { useIsVisible } from './useIsVisible';

export interface Review {
  reviewer: string;
  rating: number;
  description: string;
  review_date: Date;
}

interface Map {
  [key: number]: {
    count: number;
    percentage: string;
  };
}

const caviarBold = localFont({
  src: [
    {
      path: '../../../public/fonts/caviar/CaviarDreams_Bold.ttf',
      weight: '400',
    },
  ],
});

export const ReviewSummary: FC<{
  reviews: Review[];
  onClick: (starNumber: number) => void;
}> = ({ reviews, onClick }) => {
  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);
  const getPercentage = (groupLength: number) => {
    return groupLength === 0
      ? '10%'
      : ((groupLength / reviews.length) * 100).toString();
  };

  const groupsReviewCount = reviews.reduce(
    (prev, { rating }) => {
      const foundRating = Number(Object.keys(prev)[rating]);
      prev[foundRating].count++;
      prev[foundRating].percentage = `${getPercentage(
        prev[foundRating].count
      )}%`;
      return prev;
    },
    {
      5: { count: 0, percentage: '0%' },
      4: { count: 0, percentage: '0%' },
      3: { count: 0, percentage: '0%' },
      2: { count: 0, percentage: '0%' },
      1: { count: 0, percentage: '0%' },
      0: { count: 0, percentage: '0%' },
    } as Map
  );

  const [sum, setSum] = useState(
    reviews.reduce((prev, current) => prev + current.rating, 0) / reviews.length
  );

  const getFillType = (starRating: number) => {
    const splitNumber = sum.toString().split('.');
    if (sum > starRating) {
      if (Number(splitNumber[0]) === starRating && Number(splitNumber[1]) > 0)
        return 'partial';
      return 'fill';
    } else return 'empty';
  };

  return (
    <div className="px-4 sm:px-12 lg:pl-32 xl:pl-44 py-12 bg-white flex flex-col gap-24">
      <div
        ref={textRef}
        className={`flex transition-all duration-700 delay-300 flex-col gap-2 ${
          isVisibleText ? 'opacity-100 translate-x-0 left-0' : 'opacity-0'
        }`}
      >
        <h3 className={`${caviarBold.className} text-5xl text-primary`}>
          Customer Reviews
        </h3>
        <div className="flex items-center">
          <Star fillType={getFillType(0)} percent={sum} />
          <Star fillType={getFillType(1)} percent={sum} />
          <Star fillType={getFillType(2)} percent={sum} />
          <Star fillType={getFillType(3)} percent={sum} />
          <Star fillType={getFillType(4)} percent={sum} />

          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            {sum.toFixed(1)}
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            out of
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            5
          </p>
        </div>
        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
          {reviews.length} review{reviews.length === 1 ? '' : 's'}
        </p>
        <div
          onClick={() => onClick(5)}
          className="flex items-center mt-4 cursor-pointer"
        >
          <a className="text-sm w-12 font-medium text-blue-600 dark:text-blue-500 hover:underline">
            5 star
          </a>
          <div className="w-full lg:w-4/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              style={
                {
                  '--custom-width': groupsReviewCount[5].percentage,
                } as any
              }
              className={`h-5 bg-yellow-300 rounded  w-[--custom-width]`}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {groupsReviewCount[5].count}
          </span>
        </div>
        <div
          onClick={() => onClick(4)}
          className="flex items-center mt-4 cursor-pointer"
        >
          <a className="text-sm w-12  font-medium text-blue-600 dark:text-blue-500 hover:underline">
            4 star
          </a>
          <div className="w-full lg:w-4/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              style={
                {
                  '--custom-width': groupsReviewCount[4].percentage,
                } as any
              }
              className={`h-5 bg-yellow-300 rounded w-[--custom-width]`}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {groupsReviewCount[4].count}
          </span>
        </div>
        <div
          onClick={() => onClick(3)}
          className="flex items-center mt-4 cursor-pointer"
        >
          <a className="text-sm w-12  font-medium text-blue-600 dark:text-blue-500 hover:underline">
            3 star
          </a>
          <div className="w-full lg:w-4/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              style={
                {
                  '--custom-width': groupsReviewCount[3].percentage,
                } as any
              }
              className={`h-5 bg-yellow-300 rounded w-[--custom-width]`}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {groupsReviewCount[3].count}
          </span>
        </div>
        <div
          onClick={() => onClick(2)}
          className="flex items-center mt-4 cursor-pointer"
        >
          <a className="text-sm w-12  font-medium text-blue-600 dark:text-blue-500 hover:underline">
            2 star
          </a>
          <div className="w-full lg:w-4/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              style={
                {
                  '--custom-width': groupsReviewCount[2].percentage,
                } as any
              }
              className={`h-5 bg-yellow-300 rounded w-[--custom-width]`}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {groupsReviewCount[2].count}
          </span>
        </div>
        <div
          onClick={() => onClick(1)}
          className="flex items-center mt-4 cursor-pointer"
        >
          <a className="text-sm w-12 font-medium text-blue-600 dark:text-blue-500 hover:underline">
            1 star
          </a>
          <div className="w-full lg:w-4/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              style={
                {
                  '--custom-width': groupsReviewCount[1].percentage,
                } as any
              }
              className={`h-5 bg-yellow-300 rounded w-[--custom-width]`}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {groupsReviewCount[1].count}
          </span>
        </div>
        <div
          onClick={() => onClick(0)}
          className="flex items-center mt-4 cursor-pointer"
        >
          <a className="text-sm w-12  font-medium text-blue-600 dark:text-blue-500 hover:underline">
            0 star
          </a>
          <div className="w-full lg:w-4/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              style={
                {
                  '--custom-width': groupsReviewCount[0].percentage,
                } as any
              }
              className={`h-5 bg-yellow-300 rounded w-[--custom-width]`}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {groupsReviewCount[0].count}
          </span>
        </div>
      </div>
    </div>
  );
};

const Star: FC<{ fillType: string; percent: number }> = ({
  percent,
  fillType,
}) => {
  const splitNumber = percent.toString().split('.');
  const [partial, setPartial] = useState(
    fillType === 'partial' ? Number(`0.${splitNumber[1]}`) * 100 : 0
  );

  return (
    <svg
      className=""
      width={24}
      height={24}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <defs>
        {fillType === 'fill' ? (
          <linearGradient id="grad">
            <stop stopColor="#FDE047" offset="100%" />
            <stop offset="0%" stopColor="grey" />
          </linearGradient>
        ) : fillType === 'empty' ? (
          <linearGradient id="grad1">
            <stop offset="100%" stopColor="grey" />
          </linearGradient>
        ) : (
          <linearGradient id="grad2">
            <stop offset={`${partial}%`} stopColor="#FDE047" />
            <stop offset={`${100 - Number(partial)}%`} stopColor="grey" />
          </linearGradient>
        )}
      </defs>

      <path
        fill={`url(#${
          fillType === 'fill'
            ? 'grad'
            : fillType === 'empty'
            ? 'grad1'
            : 'grad2'
        })`}
        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
      />
    </svg>
  );
};
