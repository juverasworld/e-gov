"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import { Icon } from "../atoms";

const Footer = (): JSX.Element => {
  const [options] = useState<any[]>([
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Our Service",
      link: "our-services",
    },
    {
      title: "Information",
      link: "#",
    },
    {
      title: "About us",
      link: "about-us",
    },
    {
      title: "Contact",
      link: "#getInTouch",
    },
  ]);

  const [socials] = useState<any[]>([
    {
      name: "Facebook",
      icon: <BiLogoFacebook />,
      link: "",
    },
    {
      name: "Twitter",
      icon: <BiLogoTwitter />,
      link: "",
    },
    {
      name: "Instagram",
      icon: <BiLogoInstagramAlt />,
      link: "",
    },
  ]);

  return (
    <div
      className={`bg-white py-4 flex flex-col items-center justify-center w-full`}
    >
      <section className={`flex items-center`}>
        {options.map((option, index) => (
          <React.Fragment key={index}>
            <p
              className={`${
                index == 0 || index == options.length ? "hidden" : "block"
              } font-extralight`}
            >
              |
            </p>
            <Link href={`/${option.link}`} key={index}>
              <p
                className={`text-sm mx-3 font-nunito active:text-[#060D46] active:underline`}
              >
                {option.title}
              </p>
            </Link>
          </React.Fragment>
        ))}
      </section>

      <section className={`flex my-8`}>
        {socials.map((social, index) => (
          <Link href={`${social.link}`} key={index} className={`mx-3`}>
            <Icon icon={social.icon} />
          </Link>
        ))}
      </section>

      <p className={`text-xs font-light font-cabinet`}>
        &copy;{new Date().getFullYear()} Ministry of Example. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
