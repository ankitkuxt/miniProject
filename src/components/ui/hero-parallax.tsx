"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Gruppo, Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets:['latin'],
  variable: '--font-Orbitron',
  weight: '400',
}) 

const gruppo = Gruppo({
  weight:'400',
  subsets:['latin'],
  variable: '--font-Gruppo',
})



export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[400vh] py-10 bg-black overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1100px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="max-w-7xl relative mx-auto py-6 px-4 w-full left-0 top-0">
        <h1 className={`${gruppo.variable} py-3 font-serif text-2xl md:text-6xl font-bold text-white`}>
        "Stream Independently,<br /> Discover Limitlessly."
        </h1>
        <p className={`${gruppo.variable} font-serif max-w-2xl text-base md:text-3xl mt-8 text-neutral-200`}>
          The ultimate one stop music streaming platform where souls connect through the world of MUSIC.
        </p>
      </div>

      {/* <div className="flex items-center justify-center h-[100px]">
          <input type="text" className="rounded-2xl border-4 px-5 py-2 w-[450px] bg-white border-yellow-200" placeholder="What are you looking for?"></input>

      </div> */}

      <div className="py-20 text-white mx-auto px-2">
        <h3 className={`${gruppo.variable} font-serif py-5 font-semibold text-[40px]`}> How does it work? </h3>
        <h2 className={`${gruppo.variable} font-serif py-5 font-semibold text-[30px]`}> Technology </h2>
        <p className={`${gruppo.variable} font-serif max-w-2xl text-base md:text-2xl mt-4 dark:text-neutral-200`}>
          By basing the AURAMUSIC Player with the solana blockchain and storing all the tracks on IPFS, there is no central server and so the storage costs are drastically reduced.
          This allows for more of the revenue to go directly to the artist, in a more secure, transparent way than ever before.
        </p>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="300"
          width="300"
          className="object-cover object-left-top border-2 border-white rounded-md absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
