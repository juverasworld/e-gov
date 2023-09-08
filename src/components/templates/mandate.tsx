"use client";
import Image from "next/image";
import { BsCheck2Square } from "react-icons/bs";
import BottomSubHeading from "../atoms/bottom-sub-heading";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Mandate = () => {
  return (
    <div className="w-full h-fit flex flex-col lg:flex-row px-[2%] py-[8%] mb-6">
      <div className="w-full lg:w-[50%] h-[350px] lg:h-full relative">
        <div className="w-[250px] lg:w-[325px] h-[250px] lg:h-[380px] rounded bg-[#00000017] absolute left-[12%] md:left-[30%] lg:left-5 top-10"></div>
        <motion.img
          initial={{ width: 10 }}
          whileInView={{ width: "70%" }}
          src={"/images/mandate-img.svg"}
          width={10}
          height={10}
          alt="Image of people"
          className="w-[250px] lg:w-[400px] h-[250px] lg:h-[390px] absolute z-20 left-[18%] md:left-[35%] lg:left-10 top-[15px] md:top-0"
        />
      </div>
      <div className="w-full lg:w-[50%] h-full flex flex-col justify-start items-start gap-4">
        <BottomSubHeading
          text="Our Core Mandate"
          fontSize="3xl"
          fontWeight="normal"
        />
        <ul className="flex flex-col gap-5">
          <motion.li
            initial={{ opacity: 0.1, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex "
          >
            <BsCheck2Square size={25} />
            <p className="text-[#000000] uppercase font-outfit ml-5">
              Town Planning polices for the government{" "}
            </p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0.1, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex "
          >
            <BsCheck2Square size={25} />
            <p className="text-[#000000] uppercase font-outfit ml-5">
              Land Polices for the government .{" "}
            </p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0.1, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex "
          >
            <BsCheck2Square size={25} />
            <p className="text-[#000000] uppercase font-outfit ml-5">
              custody keep of all registered titled{" "}
            </p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0.1, x: 140 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex "
          >
            <BsCheck2Square size={25} />
            <p className="text-[#000000] uppercase font-outfit ml-5">
              issuance of certified true copy{" "}
            </p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0.1, x: 160 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex "
          >
            <BsCheck2Square size={25} />
            <p className="text-[#000000] uppercase font-outfit ml-5">
              Placement Caveat, Respondance to Investigation Matter{" "}
            </p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0.1, x: 180 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex "
          >
            <BsCheck2Square size={25} />
            <p className="text-[#000000] uppercase font-outfit ml-5">
              Printing and issuance of building certificate of occupancy(private
              lands){" "}
            </p>
          </motion.li>
          <button className="w-fit h-fit flex justify-center items-center px-[32px] py-[14px] relative bg-[#12B97D]">
            <p className="text-[#ffffff]">See More</p>
            <FaAngleRight color="#ffffff" className="ml-5" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Mandate;
