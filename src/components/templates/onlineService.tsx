'use client'
import React from "react";
import { SubHeading } from "../atoms";
import { MdAppRegistration, MdPayment } from "react-icons/md";
import { BsArrowRight, BsChatQuote } from "react-icons/bs";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { AiOutlineAppstore, AiOutlineSecurityScan } from "react-icons/ai";
import {useRouter} from 'next/navigation';

const OnlineService = () => {
  const router = useRouter();

  return (
    <div className="w-full h-fit lg:min-h-[500px] flex gap-6 flex-col justify-center items-center py-[6%]">
      <SubHeading
        strokeColor=""
        text="Online Services"
        size={"3xl"}
        textColor="#121959"
        weight="normal"
        fontFamily="outfit"
      />
      <div className="w-full h-fit grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <div
          id="animated"
          className="w-[300px] h-[270px] rounded bg-[#F6F6F6] flex flex-col justify-center items-center gap-2"
        >
          <div id="icon" className="text-[#12B97D]">
            <MdPayment size="50" />
          </div>
          <h4 id="title" className="text-[#12B97D] font-outfit text-xl">
            Payment
          </h4>
          <p
            id="paragraph"
            className="text-sm text-[#000] max-w-[268px] text-center"
          >
            Upon completing your payment, you will receive instant payment
            confirmations, and detailed receipts will be provided.
          </p>
          <button
            id="btn"
            className="flex justify-center items-center rounded px-5 py-3 bg-[#12B97D]"
          >
            <div id="btnChild" className="text-[#fff] flex gap-2 items-center">
              <p id="proceed" className="hidden">
                Proceed
              </p>
              <BsArrowRight />
            </div>
          </button>
        </div>
        <div
          id="animated"
          className="w-[300px] h-[270px] rounded bg-[#F6F6F6] flex flex-col justify-center items-center gap-2"
        >
          <div id="icon" className="text-[#12B97D]">
            <MdAppRegistration size="50" />
          </div>
          <h4 id="title" className="text-[#12B97D] font-outfit text-xl">
            Registration
          </h4>
          <p
            id="paragraph"
            className="text-sm text-[#000] max-w-[268px] text-center"
          >
            This covers a wide range of environmental services, including
            permits for environmental assessments, waste management etch
          </p>
          <button
            id="btn"
            className="flex justify-center items-center rounded px-5 py-3 bg-[#12B97D]"
          >
            <div id="btnChild" className="text-[#fff] flex gap-2 items-center">
              <p id="proceed" className="hidden">
                Proceed
              </p>
              <BsArrowRight />
            </div>
          </button>
        </div>
        <div
          id="animated"
          className="w-[300px] h-[270px] rounded bg-[#F6F6F6] flex flex-col justify-center items-center gap-2"
        >
          <div id="icon" className="text-[#12B97D]">
            <AiOutlineAppstore size="50" />
          </div>
          <h4 id="title" className="text-[#12B97D] font-outfit text-xl">
            Application
          </h4>
          <p
            id="paragraph"
            className="text-sm text-[#000] max-w-[268px] text-center"
          >
            With user-friendly features and clear guidelines, you can easily
            submit your applications from the comfort of your home.
          </p>
          <button
            onClick={()=>{
              router.push('/dashboard')
            }}
            id="btn"
            className="flex justify-center items-center rounded px-5 py-3 bg-[#12B97D]"
          >
            <div id="btnChild" className="text-[#fff] flex gap-2 items-center">
              <p id="proceed" className="hidden">
                Proceed
              </p>
              <BsArrowRight />
            </div>
          </button>
        </div>
        <div
          id="animated"
          className="w-[300px] h-[270px] rounded bg-[#F6F6F6] flex flex-col justify-center items-center gap-2"
        >
          <div id="icon" className="text-[#12B97D]">
            <AiOutlineSecurityScan size="50" />
          </div>
          <h4 id="title" className="text-[#12B97D] font-outfit text-xl">
            Authentification
          </h4>
          <p
            id="paragraph"
            className="text-sm text-[#000] max-w-[268px] text-center"
          >
            We are committed to transparency, accountability, and responsible
            resource management.
          </p>
          <button
            id="btn"
            className="flex justify-center items-center rounded px-5 py-3 bg-[#12B97D]"
          >
            <div id="btnChild" className="text-[#fff] flex gap-2 items-center">
              <p id="proceed" className="hidden">
                Proceed
              </p>
              <BsArrowRight />
            </div>
          </button>
        </div>
        <div
          id="animated"
          className="w-[300px] h-[270px] rounded bg-[#F6F6F6] flex flex-col justify-center items-center gap-2"
        >
          <div id="icon" className="text-[#12B97D]">
            <BsChatQuote size="50" />
          </div>
          <h4 id="title" className="text-[#12B97D] font-outfit text-xl">
            Enquiry{" "}
          </h4>
          <p
            id="paragraph"
            className="text-sm text-[#000] max-w-[268px] text-center"
          >
            we welcome your participation in our quest for environmental
            protection and responsible mineral resource utilization.
          </p>
          <button
            id="btn"
            className="flex justify-center items-center rounded px-5 py-3 bg-[#12B97D]"
          >
            <div id="btnChild" className="text-[#fff] flex gap-2 items-center">
              <p id="proceed" className="hidden">
                Proceed
              </p>
              <BsArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineService;
