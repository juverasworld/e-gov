'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiFacebookLogo } from "react-icons/pi";
import { AiOutlineDribbble, AiOutlineBehance } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { BiLogoInstagram } from "react-icons/bi";

const FooterForms = (): JSX.Element => {
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

  return (
    <footer className={`px-20 py-10 bg-[#073131]`}><div className="w-full h-fit py-5 px-[7%] flex flex-col justify-center items-center bg-[#073131]">
      <section
        className={`flex flex-wrap w-full justify-center lg:justify-between items-center`}
      >
        <div className={`flex flex-col items-center justify-center`}>
          <Image
            width="10"
            height="10"
            src="/images/enugu_logo.svg"
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
    </footer>
  )
}

export default FooterForms;
