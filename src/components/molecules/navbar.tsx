"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';


const NavBar = () => {
  const pathname = usePathname();
  const [open,setOpen] = useState(false)
  const router = useRouter();
  const [inContact, setInContact] = useState<boolean>(false);

  const navData: {
    itemName: string;
    id: number;
    dropDown: boolean;
    options: any[];
    route: any;
  }[] = [
      {
        itemName: "Home",
        id: 1,
        dropDown: false,
        options: [],
        route: "/",
      },

      {
        itemName: "Our Service",
        id: 2,
        dropDown: false,
        options: [],
        route: "/our-services",
      },

      {
        itemName: "About us",
        id: 3,
        dropDown: false,
        options: [],
        route: "/about-us",
      },

      {
        itemName: "Contact",
        id: 4,
        dropDown: false,
        options: [],
        route: "#getInTouch",
      },
    ];

  return (
    <nav
      className={`absolute z-[9999] w-full ${pathname === "/" ? "bg-[#3b6447]" : "bg-[#fff]"
        }`}
    >
      <div
        className={`w-[95%] mx-auto  py-[12px] ${pathname === "/" ? "text-[white]" : "text-[#000]"
          } flex justify-between items-center`}
      >
        <div className="flex justify-between items-center">
          <Image
            src="/images/newLogo.svg"
            width="36"
            height="45"
            alt="Enugu state logo"
            className=""
          />
          <div className="hidden md:block font-outfit ml-[20px] ">
            <p className="text-[12px] ">Enugu State</p>
            <p className="text-[18px] font-inter ">
              Ministry of Land and Urban Development
            </p>
          </div>
          <div onClick={()=>setOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden text-black'>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
        </div>
        <ul className={`md:flex md:pb-0 p-8 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in font-nunito font-medium  lg:flex justify-between items-center  ${open ? 'top-12 opacity-100 bg-[#3b6447]' : 'top-[-490px]'}`}>
          {navData.map((item) => {
            return (
              <li key={item.id} className=" ">
                <Link
                  href={item.route}
                  className={`${pathname === item.route
                    ? "py-[24px] mb-5 md:border-b-2 border-[#049BAF]"
                    : " "
                    } ${pathname === "/" ? "text-white" : "text-[#000]"
                    } py-[20px] md:px-3 `}
                >
                  {item.itemName}
                </Link>
              </li>
            );
          })}

          <button
            onClick={()=>{
              router.push(`https://auth.enugustate.gov.ng?auth=${btoa(JSON.stringify({url: 'http://localhost:3000', name: 'Ministry Of Lands'}))}`);
            }}
            className={`${pathname === "/"
              ? "bg-[#fff] text-[#12B97D]"
              : "bg-[#12B97D] text-[#fff]"
              } rounded-[4px] px-[40px] py-[10px] transition duration-200 hover:opacity-[0.7] md:ml-5`
            }
          >
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };
