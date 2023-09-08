"use client";
import { log } from "console";
import Image from "next/image";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="w-full min-h-[425px] bg-[#0A3F19] p-[4%] relative flex flex-col justify-center items-center">
      <div className="w-full h-full hidden md:flex absolute top-0 left-0">
        <div className="w-[50%] h-full bg-left-stand bg-no-repeat"></div>
        <div className="w-[50%] h-full bg-right-stand bg-no-repeat"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center gap-7">
        <Image
          src={"/images/inbox.svg"}
          width={10}
          height={10}
          alt="inbox"
          className="w-[92px] h-[72px]"
        />
        <div className="w-full h-fit flex flex-col gap-3 justify-center items-center">
          <h5 className="font-medium text-[#FFFFFF] text-xl md:text-3xl font-outfit">
            SUBSCRIBE TO NEWSLETTER
          </h5>
          <p className="font-outfit text-[#FFFFFF] text-sm md:text-base">
            News . Opportunities . Information . &More{" "}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <input
            required
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="mr-1 w-[70%] rounded md:w-[567px] h-[52px] bg-[#F2EFEF] p-2 outline-none indent-[30px]"
          />
          <button
            type="submit"
            className="ml-1 rounded px-[32px] py-[16px] h-[52px] text-white bg-[#12B97D] flex justify-center items-center"
          >
            <p>Submit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
