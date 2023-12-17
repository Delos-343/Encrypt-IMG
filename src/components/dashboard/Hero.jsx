/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { data } from './data';

const ScrollCore = () => {
    
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="h-screen transform scale-[0.8] p-5 flex items-center justify-center relative ">
      <div className="py-20 w-full relative" style={{ perspective: '1000px' }}>
        <Header translate={translate} />
        <Card rotate={rotate} translate={translate} scale={scale} />
      </div>
    </div>
  );
};

const Header = ({ translate }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      <h1 className="text-4xl font-semibold">
        Keamanan Informasi <br />{' '}
        <span className="text-5xl lg:text-6xl  font-bold mt-1 leading-none">
          Final Project
        </span>
      </h1>
    </motion.div>
  );
};

const Card = ({ rotate, scale, translate }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden p-4">
        {data.map((user, idx) => (
          <motion.div
            key={`user-${idx}`}
            className="bg-white rounded-md cursor-pointer relative"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
          >
            <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
              {user.badge}
            </div>
            <img src={user.image} className="rounded-tr-md rounded-tl-md text-sm" />
            <div className="p-4">
              <h1 className="font-semibold text-sm">{user.name}</h1>
              <h2 className="text-gray-500 text-xs">{user.designation}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col mb-10">
      <ScrollCore />
    </div>
  );
};

export default Hero;
