"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGlobe, BsMoonFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import { RxTwitterLogo } from "react-icons/rx";
import { BiLogoInstagram } from "react-icons/bi";
import { AiOutlineBehance, AiOutlineDribbble } from "react-icons/ai";
import { PiFacebookLogo } from "react-icons/pi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LuImage } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import { useMultipleStepForm } from "@/components/templates/useMultipleStepForm";
import {RightOfOccupancyForm1} from "@/components/molecules";
import axios from 'axios';
import { useRouter } from 'next/navigation'








const CustomaryRightOfOccupancy = () => {
const [userData, setUserData] = useState({
  postalAddress:"",
  nationality:"",
  occupation:"",
  typeOfOccupation:"",
  purposeForGrant:"",
  town:"",
  landOwnerName:"",
  landOwnerAddress:"",
  LandDescription:"",
  surveyPlans:"",
  affidavit:"",
  taxClearanceCertificate:"",
  CertificateOfIncorporation:"",
  leaseAgreement:"",
})

  const {steps,next, currentStepIndex,step,back,isFirstStep,isLastStep,isSecondStep} = 
  useMultipleStepForm([
  <RightOfOccupancyForm1 key="step1" {...userData} updateFields={updateFields}/>,

])
const router = useRouter();
function updateFields(fields:any) {
  setUserData(prev => {
    return { ...prev, ...fields }
  });
}
  const [icons] = useState<any[]>([
    {
      icon: <PiFacebookLogo />,
      link: "https://enugustate.gov.ng",
    },
    {
      icon: <RxTwitterLogo />,
      link: "https://enugustate.gov.ng",
    },
    {
      icon: <BiLogoInstagram />,
      link: "https://enugustate.gov.ng",
    },
    {
      icon: <AiOutlineDribbble />,
      link: "https://enugustate.gov.ng",
    },
    {
      icon: <AiOutlineBehance />,
      link: "https://enugustate.gov.ng",
    },
  ]);

  const [footerLinks] = useState<any[]>([
    {
      title: "Privacy Policy",
      route: "",
    },
    {
      title: "Terms of Use",
      route: "",
    },
  ]);

  


  function onSubmit(e:any) {
    e.preventDefault()
    // console.log(userData)
    // alert("Successful Account Creation")
  }
  const handleBack = () => {
    router.back(); // Navigates to the previous page
  };
  return (
    <div className="w-full min-h-[100vh] bg-[#F3F3F3] flex flex-col gap-6 justify-between items-center absolute z-[9999999]">
      <div className="w-full h-fit bg-[#073131]">
        <nav
          className={`w-[95%] mx-auto h-[70px] py-[12px] text-[#fff] flex justify-between items-center`}
        >
          <Link href="/" className={`lg:block hidden`}>
            <h3 className="text-[#fff] text-[1.5rem] lg:block hidden font-semibold">
              enugustate.gov.ng
            </h3>
          </Link>

          <div className="w-fit h-fit flex items-center">
            <div className="text-[#fff] flex flex-row items-center">
              <p>EN </p>
              <span>
                <MdKeyboardArrowDown color="#fff" />
              </span>
            </div>
            <BsGlobe color="#fff" className="m-2" />
          </div>
        </nav>
      </div>
      <div className="w-full h-fit flex flex-col gap-6 px-[8%]">
        <div className="flex justify-between items-center">
          <button
           onClick={handleBack}
            className="p-3 border-[2px] border-[#08080C80] rounded-[50%]"
          >
            <MdOutlineArrowBackIosNew color="#08080C80" />
          </button>
          <button className="py-3 px-6 rounded-3xl bg-[#CF8900] flex justify-center items-center">
            <p className="text-[#fff] font-nunito">Save Draft</p>
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center bg-[#fff] rounded-t-2xl px-7 py-5 md:flex-row flex-col">
            <div className="flex items-center justify-center">
              <div className="p-3 bg-[#D5E4E480] rounded-[50%]">
                <HiOutlineOfficeBuilding color="#12B97D" size={32} />
              </div>
              <h2 className="font-bold font-cabinet text-xl ml-3">
                Ministry of Land
              </h2>
            </div>
            <div className="p-3 bg-[#D5E4E480] rounded-lg mt-5 md:mt-0">
              <p className="font-nunito text-lg text-[#12B97D] text-center">
                Application for Certified True Copy
              </p>
            </div>
          </div>
          </div>
          <div className=" gap-3 bg-[#fff] rounded-b-2xl px-7 py-5">
          <form onSubmit={onSubmit} >
            {step}
            <div className="px-5">
            <button
              type="submit"
              onClick={next}
              className="w-full py-[16px] bg-[#08080C80] rounded-3xl mt-5 "
              >
              <p className="text-[#fff]">Continue</p>
            </button>
            </div>
           
          </form>

          </div>
          
      </div>
    
      <div className="w-full h-fit py-5 px-[7%] flex flex-col justify-center items-center bg-[#073131]">
        <section
          className={`flex flex-wrap w-full justify-center lg:justify-between items-center`}
        >
          <div className={`flex flex-col items-center justify-center`}>
            <Image
              width="10"
              height="10"
              src="/images/EnuguStateCoat.svg"
              alt="footer logo"
              className={`w-20`}
            />
            <h2
              className={`font-nunito text-2xl lg:max-w-[10rem] text-center text-[#FFFFF0]`}
            >
              Enugu State Government
            </h2>
          </div>

          <div className={`flex py-4`}>
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                className={`mx-2 text-2xl font-bold text-[#FFFFF0]`}
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </section>

        <div className={`bg-[#FFFFF0] h-[1px] my-7 w-full`}></div>

        <section
          className={`flex flex-wrap lg:flex-row flex-col justify-center items-center w-fit font-poppins text-xs`}
        >
          <p className={`lg:mr-2 text-[#FFFFF0]`}>
            Copyright &copy; 2021 U18 LLC. All rights reserved
          </p>

          <div className={`flex lg:py-0 py-2`}>
            {footerLinks.map((footerLink, index) => (
              <Link href={footerLink.route} key={index} className={`mx-3`}>
                <p className={`font-bold text-[#FFFFF0]`}>{footerLink.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomaryRightOfOccupancy;
