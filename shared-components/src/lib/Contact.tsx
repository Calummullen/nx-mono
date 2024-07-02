import { useIsVisible } from './useIsVisible';
import localFont from '@next/font/local';
import { FC, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import fb from '@public/images/logos/facebook.png';
import ig from '@public/images/logos/instagram.png';
import mobile from '@public/images/logos/mobile.png';
// import email from '@public/images/logos/email2.png';
import email from '@public/images/logos/mobile.png';
import { useForm, SubmitHandler } from 'react-hook-form';

export type Inputs = {
  name: string;
  email: string | null;
  mobile: string | null;
  message: string;
};

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

export const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<Inputs>({ mode: 'all' });
  const [contactMethod, setContactMethod] = useState<
    'email' | 'mobile' | 'either'
  >('email');
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(true);
  const sendEmail = async (data: Inputs) => {
    const url = process.env.NEXT_PUBLIC_RESEND_FETCH_API ?? '';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setIsSubmitSuccessful(true);
    } else {
      setIsSubmitSuccessful(false);
    }
  };
  console.log('errors', errors);
  const onSubmit: SubmitHandler<Inputs> = async (data) => await sendEmail(data);

  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);
  return (
    <div className="px-4 sm:px-12 lg:px-32 xl:px-44 py-12 bg-purple-100 flex flex-col gap-24">
      <div
        ref={textRef}
        className={`flex flex-col gap-4 transition-all duration-700 relative -left-12 border-b-[1px] pb-12 border-primary ${
          isVisibleText ? 'opacity-100 translate-x-0 left-0' : 'opacity-0'
        }`}
      >
        <h3 className={`${caviarBold.className} text-6xl text-primary`}>
          Contact
        </h3>
        <p className={`${caviarRegular.className} text-3xl`}>
          Please contact me on any of the below platforms
        </p>
        <p className={`${caviarRegular.className} text-xl`}>
          Alternatively, fill out the contact form and I'll respond as soon as
          possible
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-12">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-24 lg:border-none border-primary lg:border-b-0 border-b-[1px] lg:pb-0 pb-12">
          <ContactInfo
            imageSrc={fb}
            title="Facebook"
            href="https://www.facebook.com/bethspawsitivepooches"
          />
          <ContactInfo
            imageSrc={ig}
            title="Instagram"
            href="https://www.instagram.com/bethsdoggyden/?hl=en-gb"
            animationDelay="md:delay-[750ms]"
          />
          <ContactInfo
            imageSrc={mobile}
            title="07704742818"
            href="+447704742818"
            isLink={false}
            animationDelay="md:delay-[1000ms]"
          />
          <ContactInfo
            imageSrc={email}
            title="bethirving123@hotmail.co.uk"
            href="bethirving123@hotmail.co.uk"
            isLink={false}
            animationDelay="md:delay-[1250ms]"
          />
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`  ${caviarBold.className}`}
          >
            <fieldset disabled={isSubmitting} className="flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <label>Name</label>
                <input
                  className="p-2 disabled:bg-gray-100 focus:!border-primary"
                  type="text"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required',
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <label>Preferred Contact Method:</label>
                <div className=" flex flex-row gap-4 items-center w-[100px]">
                  <label>Email</label>
                  <input
                    defaultChecked={contactMethod === 'email'}
                    onClick={() => {
                      setContactMethod('email');
                      setValue('mobile', null);
                    }}
                    className="ml-auto"
                    name="contactMethod"
                    type="radio"
                  />
                </div>
                <div className="flex flex-row gap-4 items-center w-[100px]">
                  <label>Mobile</label>
                  <input
                    onClick={() => {
                      setContactMethod('mobile');
                      setValue('email', null);
                    }}
                    className="ml-auto"
                    name="contactMethod"
                    type="radio"
                  />
                </div>
                <div className="flex flex-row gap-4 items-center w-[100px]">
                  <label>Either</label>
                  <input
                    onClick={() => {
                      setContactMethod('either');
                    }}
                    className="ml-auto"
                    name="contactMethod"
                    type="radio"
                  />
                </div>
              </div>
              {(contactMethod === 'email' || contactMethod === 'either') && (
                <div className="flex flex-col gap-2">
                  <label>Email</label>
                  <input
                    className="p-2 disabled:bg-gray-100"
                    type="email"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
              )}

              {(contactMethod === 'mobile' || contactMethod === 'either') && (
                <div className="flex flex-col gap-2">
                  <label>Mobile</label>
                  <input
                    className="p-2 disabled:bg-gray-100"
                    type="tel"
                    {...register('mobile', {
                      required: {
                        value: true,
                        message: 'Mobile is required',
                      },
                    })}
                  />
                  {errors.mobile && (
                    <p className="text-red-500">{errors.mobile.message}</p>
                  )}
                </div>
              )}
              <div className="flex flex-col gap-2">
                <label>Message</label>
                <textarea
                  rows={5}
                  cols={1}
                  className="p-2 disabled:bg-gray-100"
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'Message is required',
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
              </div>
              <div>
                <button
                  disabled={!isValid}
                  className=" bg-primary rounded-md py-4 px-8 hover:bg-opacity-80 disabled:bg-gray-400"
                >
                  Submit
                </button>
              </div>
              {isSubmitted && isSubmitSuccessful && (
                <p className="text-primary font-bold text-2xl">
                  Email successfully sent!
                </p>
              )}
              {isSubmitted && !isSubmitSuccessful && (
                <p className="text-red-600 font-bold text-xl">
                  An error occurred while sending the email. Please try again or
                  contact me directly
                </p>
              )}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactInfo: FC<{
  imageSrc: StaticImageData | string;
  title: string;
  href: string;
  animationDelay?: string;
  isLink?: boolean;
}> = ({
  imageSrc,
  title,
  href,
  animationDelay = 'md:delay-[500ms]',
  isLink = true,
}) => {
  const imageRef = useRef(null);
  const isVisibleImage = useIsVisible(imageRef);
  return (
    <div
      ref={imageRef}
      className={`transition-all  duration-700 relative ${animationDelay} -left-12 ${
        isVisibleImage ? 'opacity-100 translate-x-0 left-0' : 'opacity-0'
      }`}
    >
      <a
        href={
          isLink ? href : title.includes('@') ? `mailto:${href}` : `tel:${href}`
        }
        className={`flex flex-col gap-12 text-center items-center  ${
          title !== 'Mobile' ? 'cursor-pointer' : 'cursor-default'
        }`}
      >
        <Image
          width={200}
          height={200}
          className=""
          src={imageSrc}
          alt={imageSrc.toString()}
        />
        <h3
          className={`md:text-3xl [overflow-wrap:anywhere] text-4xl ${caviarBold.className}`}
        >
          {title}
        </h3>
      </a>
    </div>
  );
};
