import localFont from '@next/font/local';
import { FC } from 'react';
import redCross from '../../public/images/red-cross.svg';
import greenTick from '../../public/images/green-tick.svg';
import Image from 'next/image';

const lemonMilkBold = localFont({
  src: [
    {
      path: '../../public/fonts/lemon-milk/LEMONMILK-Bold.otf',
    },
  ],
});

const lemonMilk = localFont({
  src: [
    {
      path: '../../public/fonts/lemon-milk/LEMONMILK-Regular.otf',
      weight: '400',
    },
  ],
});

const coolvetica = localFont({
  src: [
    {
      path: '../../public/fonts/coolvetica/coolvetica-rg.otf',
    },
  ],
});
/*
  Landing page
  Changes and amendments as and when
  Domain Name
  Website Hosting
  SEO
*/
const Product: FC = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 m-24">
      <ProductDetails
        title="Included"
        listItems={[
          {
            heading: '1 Landing Page',
            subHeading:
              'I will create a professional website tailored to your business needs, designing and developing it according to your vision. If you are unhappy with any aspect, I will make revisions until you are fully satisfied.',
          },
          {
            heading: 'Yearly Support',
            subHeading:
              'Once the website is built, I will ensure it remains maintained and online for as long as you need it. If you have any queries, I will respond as quickly as possible.',
          },
          {
            heading: 'Free Content Changes',
            subHeading:
              'Free content updates, including text and images, will be provided as needed. However, adding new functionality or additional sections to the site may incur an additional charge.',
          },
          {
            heading: 'Domain Name',
            subHeading:
              "The domain name is the URL you type into the address bar. I will secure your desired domain name (or provide alternatives if your preferred choice is unavailable) and ensure it is renewed annually. For more information on domain name renewal, please refer to the 'Pricing' section.",
          },
          {
            heading: 'Website Hosting',
            subHeading:
              "This ensures users can navigate to your website without any issues. I will host your website securely with minimal to no disruption. For more information on hosting costs, please refer to the 'Pricing' section.",
          },
          {
            heading: 'SEO',
            subHeading:
              'Search Engine Optimization (SEO) will help your website rank prominently in search engine results. Your site will be built with SEO best practices to maximize its visibility and ensure the best possible exposure.',
          },
          {
            heading: 'Page View Analytics',
            subHeading:
              "Upon request, I'll provide basic analytics for your website, including visitor numbers over specified time periods, the devices used, and whether visitors arrived directly or via third-party sources.",
          },
        ]}
      />
      <ProductDetails
        title="Excluded"
        listItems={[
          {
            heading: 'Logos',
            subHeading:
              'While I strive to provide the best experience possible, graphic design is not within my expertise. Therefore, any company logos will need to be sourced elsewhere and provided to me for use on your site.',
          },
          {
            heading: 'Images',
            subHeading:
              'You will need to provide any images for your site, including photographs and graphics.',
          },
          {
            heading: 'Marketing',
            subHeading:
              'Your website will be designed with a strong focus on SEO (Search Engine Optimization) to ensure it ranks high on search engine results. However, please note that I do not offer external marketing services for your company.',
          },
        ]}
      />
    </div>
  );
};

const ProductDetails: FC<{
  title: string;
  listItems: { heading: string; subHeading: string }[];
}> = ({ title, listItems }) => {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div
          className={`relative rounded-md border-2 ${
            title.includes('Included') ? 'border-green-700' : 'border-red-700'
          }`}
        >
          <div className="lg:py-8 py-16 px-12">
            <ul className="flex flex-col gap-2">
              {listItems.map(({ heading, subHeading }, index) => (
                <li className="flex flex-col" key={index}>
                  <div
                    className={`flex flex-row gap-4 ${lemonMilkBold.className}`}
                  >
                    <Image
                      height={20}
                      width={20}
                      src={title.includes('Included') ? greenTick : redCross}
                      alt="red cross"
                    />
                    {heading}
                  </div>
                  <ol className="ps-[52px] mt-2 list-disc list-outside text-lg">
                    <li className={`${coolvetica.className}`}>{subHeading}</li>
                  </ol>
                </li>
              ))}
            </ul>
          </div>
          <h2 className="absolute text-center flex top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`bg-blue-200 px-2 text-lg md:text-4xl font-medium ${lemonMilkBold.className}`}
            >
              What&apos;s{' '}
              <span
                className={`${
                  title.includes('Included') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {title}
              </span>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
