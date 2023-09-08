"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const OurServiceHeroSection = () => {
  return (
    <div className="w-full h-[70vh] md:h-[40vh] lg:min-h-[485px] bg-[#E6E6ED] px-[2%] flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-[50%] h-full flex flex-col justify-center items-start md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-fit h-fit flex flex-col justify-center items-start"
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#000] font-outfit text-4xl max-w-[438px]"
          >
            Pay. Register. Apply. Authenticate. Enquire
          </motion.h1>
          <p className="text-[#000]">All in one place</p>
        </motion.div>
      </div>
      <div className="w-full md:w-[50%] h-full flex items-end justify-end">
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={"/images/credit.svg"}
          width={10}
          height={10}
          alt="Credit card"
          className="w-full h-full relative top-7"
        />
      </div>
    </div>
  );
};

export default OurServiceHeroSection;
