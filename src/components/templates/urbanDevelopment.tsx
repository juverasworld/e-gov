"use client";
import React from 'react';
import { motion } from "framer-motion";

const  UrbanDevelopment = () => {
  return (
    <div>
    <div className="w-full h-full  gap-6  lg:flex-row lg:justify-between lg:items-center lg:bg-cover bg-whoarewebg filter-blur-2xl">
        <div className="h-full w-full justify-between flex md:flex-row flex-col  z-5 bg-[#0A3F19] bg-opacity-80 py-20 md:px-10 px-4">
    
    <motion.div
      initial={{ opacity: 0.1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-[#fff] font-semibold font-outfit md:w-1/3 text-2xl lg:text-xl xl:text-2xl relative z-[21] md:br-2 md:border-r md:border-white flex justify-center items-center mb-5 md:mb-0"
    ><h5>
      Planning, Regulating, and Managing Lands and Urban Development
    </h5>
    </motion.div>
    <motion.div
      initial={{ opacity: 0.1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className=" relative z-[21] md:br-2 md:border-r md:border-white md:w-1/3 md:px-5 mb-5 md:mb-0"
    >
      <h6 className="text-[#fff] text-2xl font-medium font-outfit">
        Our Mission
      </h6>
      <p className="text-[#fff] text-sm xl:text-base font-nunito opacity-[0.9]">
        We are dedicated to ensuring sustainable and inclusive urban and
        rural development in our state. We aim to manage and regulate land
        resources efficiently, foster equitable land use, and promote
        responsible urban planning to create livable and vibrant
        communities.
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0.1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className=" relative z-[21] md:w-1/3 md:px-5 mb-5 md:mb-0"
    >
      <h6 className="text-[#fff] text-2xl font-medium font-outfit">
        Our Vision
      </h6>
      <p className="text-[#fff] text-sm xl:text-base font-nunito opacity-[0.9] ">
        Through innovation and collaboration, we aspire to shape the future
        of our state&apos;s landscape, creating a model of excellence in
        land management and urban development.
      </p>
    </motion.div>
    </div>
  </div>
  </div>
  )
}

export default UrbanDevelopment