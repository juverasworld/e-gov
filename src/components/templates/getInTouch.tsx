import React from "react";
import { GetInTouchForm } from "../molecules";
import { IoMdMail } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

const GetInTouch = () => {
  return (
    <section id="getInTouch" className="w-full bg-[#F2F2F2]">
      <div className="w-full px-[6%] flex flex-col lg:flex-row gap-6 justify-between py-[100px] ">
        <div className="w-full lg:w-[40%] font-[outfit] text-[#0A3F19]">
          <div>
            <h3 className="text-[36px] ">Get in Touch With Us</h3>
            <p className="text-[1rem] text-[#000]">
              lorem Ispum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div className="my-[40px]">
            <div className="flex items-center">
              <IoMdMail color="#121D59" />
              <span className="ml-[10px] text-[18px] font-medium ">
                Email Address
              </span>
            </div>

            <p className="text-[1rem] text-[#000]">
              lorem Ispum is simply dummy text of the printing
            </p>
          </div>

          <div className="">
            <div className="flex items-center">
              <HiLocationMarker color="#121D59" />
              <span className="ml-[10px] text-[18px] font-medium ">
                Our Location
              </span>
            </div>

            <p className="text-[1rem] text-[#000]">
              lorem Ispum is simply dummy text of the printing
            </p>
          </div>
        </div>
        <div className="">
          <GetInTouchForm />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
