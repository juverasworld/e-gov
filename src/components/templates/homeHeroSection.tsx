"use client";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
type Props = {};

const HomeHeroSection = (props: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Only animate elements once
    });
  }, []);
  return (
    <div className='bg-home-hs relative bg-center bg-no-repeat w-full py-48 bg-cover flex flex-col justify-center text-white font-outfit'>
      <div className="w-full md:mx-10 mx-4 flex flex-col justify-center py-16" data-aos="fade-right">
        <p className="text-2xl">Welcome to Enugu State</p>
        <p className="font-outfit md:text-7xl font-bold my-3 [word-spacing:'2em']">Ministry of Lands and <br className="md:flex hidden" /> Urban  Development</p>
        <p className="absolute py-16" data-aos="fade-left">
          <Image
            src="/images/rectangle.svg"
            width={800}
            height={600}
            alt="Image"
            className="w-full ml-16"
          />
        </p>
      </div>

      <button className="w-fit flex justify-end absolute bottom-8 right-0 items-center whitespace-nowrap bg-[white] px-5 py-5 text-[#12B97D] ">
        Our Services
        <span className="px-3">
          <HiArrowNarrowRight color="#12B97D" size={20} className="ml-4" />
        </span>
      </button>
    </div>
  );
};

export default HomeHeroSection;
