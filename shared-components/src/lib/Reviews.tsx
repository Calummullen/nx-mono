import { FC, useRef } from 'react';
import { Review } from './ReviewSummary';
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

export const Reviews: FC<{ reviews: Review[] }> = ({ reviews }) => {
  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);
  return (
    <div className="px-4 sm:px-12 lg:pr-32 xl:pr-44 py-12 bg-white flex flex-col gap-24">
      <div
        ref={textRef}
        className={`flex transition-all duration-700 delay-300 flex-col gap-4 items-center h-[500px] ${
          reviews.length ? 'overflow-y-scroll' : ''
        } ${isVisibleText ? 'opacity-100 translate-x-0 left-0' : 'opacity-0'}`}
      >
        {reviews.length ? (
          reviews
            .sort((a, b) => +b.review_date - +a.review_date)
            .map(
              (
                {
                  reviewer,
                  review_date,
                  rating,
                  description,
                  source,
                  sourceLink,
                },
                index
              ) => (
                <ReviewTile
                  key={index}
                  reviewer={reviewer}
                  rating={rating}
                  description={description}
                  review_date={review_date}
                  source={source}
                  sourceLink={sourceLink}
                />
              )
            )
        ) : (
          <p>No Reviews</p>
        )}
      </div>
    </div>
  );
};

const ReviewTile: FC<Review> = ({
  review_date,
  description,
  reviewer,
  rating,
  source,
  sourceLink,
}) => {
  return (
    <div className="flex bg-primary bg-opacity-30 p-4 my-2 rounded-md flex-col gap-2 w-full">
      <p className={`${caviarBold.className}`}>
        {reviewer} via{' '}
        <a
          className="underline cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          href={sourceLink}
        >
          {source}
        </a>
      </p>
      <div>
        <div className="flex items-center">
          <svg
            className={`w-4 h-4  ${
              rating > 1 ? 'text-yellow-300' : 'text-gray-300'
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={`w-4 h-4 ${
              rating > 2 ? 'text-yellow-300' : 'text-gray-300'
            } ms-1`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={`w-4 h-4 ${
              rating > 3 ? 'text-yellow-300' : 'text-gray-300'
            } ms-1`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={`w-4 h-4 ${
              rating > 4 ? 'text-yellow-300' : 'text-gray-300'
            } ms-1`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className={`w-4 h-4 ${
              rating === 5 ? 'text-yellow-300' : 'text-gray-300'
            } ms-1`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      </div>
      <p className={`${caviarRegular.className}`}>
        {new Date(review_date).toLocaleDateString('en-GB')}
      </p>
      <p className={`${caviarRegular.className}`}>{description}</p>
    </div>
  );
};
