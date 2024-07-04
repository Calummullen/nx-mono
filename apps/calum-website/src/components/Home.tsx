import localFont from '@next/font/local';
import { FC, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { useIsVisible } from '@calum-business-mono/shared-components/src/lib/useIsVisible';

const lemonMilk = localFont({
  src: [
    {
      path: '../../public/fonts/coolvetica/coolvetica-rg.otf',
      weight: '400',
    },
  ],
});

const Home: FC = () => {
  const textRef = useRef(null);
  const isVisibleText = useIsVisible(textRef);
  return (
    <div className="grid md:grid-cols-2 m-24">
      <div className="flex flex-col text-start gap-16">
        <h1 className={`${lemonMilk.className} text-7xl md:text-9xl `}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Welcome. ')
                .pauseFor(1000)
                .typeString("I'm Calum")
                .start();
            }}
            options={{
              cursor: '',
              delay: 75,
            }}
          />
        </h1>
        <h2
          ref={textRef}
          className={`${
            lemonMilk.className
          } text-2xl md:text-3xl transition-all duration-[1000ms] delay-[2500ms] relative ${
            isVisibleText ? 'opacity-100 translate-x-40 -left-40' : 'opacity-0'
          }`}
        >
          I&apos;m a Senior Software Engineer who specialises in creating custom
          websites <span className="text-blue-600">tailored to your needs</span>
          . With a focus on functionality, aesthetics, and user experience, I
          deliver <span className="text-red-700">high-quality</span> solutions
          that drive growth and enhance your online presence.
        </h2>
      </div>
      <div>Test</div>
    </div>
  );
};

export default Home;

{
  /* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString(
                  "I'm a Senior Software Engineer who specialises in creating custom websites tailored to your needs. With a focus on functionality, aesthetics, and user experience, I deliver high-quality solutions that drive growth and enhance your online presence."
                )
                .start();
            }}
            options={{
              cursor: '',
              delay: 10,
            }}
          /> */
}
