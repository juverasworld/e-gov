import { MdArrowForwardIos } from "react-icons/md";
import { IoMdCard } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineFileText, AiOutlineQuestionCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { FaWarehouse } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-5 lg:flex-row lg:justify-between items-center w-full h-fit lg:h-[633px] bg-cover lg:bg-cover bg-no-repeat bg-services-bg py-10">
        <div className="w-full lg:w-full h-fit py-5 px-6 grid md:grid-cols-3 gap-x-0 gap-y-5 md:place-items-center">
          <Link href="/pre_certificate_of_occupancy">
            <div className="w-[230px] xl:w-[247px] h-[100px]]  bg-white cursor-pointer rounded-lg p-[12px] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center mx-auto">
                <FaWarehouse size="29" />
                <p className="font-outfit text-[#12B97D] md:text-lg lg:text-lg mt-3 text-center">
                  Pre-Certificate of Occupancy
                </p>
              </div>
            </div>
          </Link>
          <Link href="/certificate_of_occupancy">
            <div className="w-[230px] xl:w-[247px] h-[100px]]  bg-white cursor-pointer rounded-lg p-[20px] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center mx-auto">
                <FaWarehouse size="29" />
                <p className="font-outfit text-[#12B97D] md:text-lg lg:text-lg mt-3 ">
                  Certificate of Occupancy
                </p>
              </div>
            </div>
          </Link>

          <Link href="/true_copy">
            <div className="w-[230px] xl:w-[247px] h-[100px]    bg-white cursor-pointer rounded-lg p-[20px] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center mx-auto">
                <FaWarehouse size="29" />
                <p className="font-outfit text-[#12B97D] md:text-lg lg:text-lg mt-3  ">
                  Certified True Copy
                </p>
              </div>
            </div>
          </Link>
          <Link href="/caveat">
            <div className="w-[230px] xl:w-[247px] h-[100px] bg-white cursor-pointer rounded-lg p-[20px] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center mx-auto">
                <FaWarehouse size="29" />
                <p className="font-outfit text-[#12B97D] md:text-lg lg:text-lg mt-3  ">
                  Deed of Assignment
                </p>
              </div>
            </div>
          </Link>
          <Link href="/property_search">
            <div className="w-[230px] xl:w-[247px] h-[100px] bg-white cursor-pointer rounded-lg p-[20px] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center mx-auto">
                <FaWarehouse size="29" />
                <p className="font-outfit text-center text-[#12B97D] md:text-lg lg:text-lg mt-3   ">
                  Property Search
                </p>
              </div>
            </div>
          </Link>
          <Link href="/placing_caveat">
            <div className="w-[230px] xl:w-[247px] h-[100px] bg-white cursor-pointer rounded-lg p-[20px] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center mx-auto">
                <FaWarehouse size="29" />
                <p className="font-outfit text-[#12B97D] md:text-lg lg:text-lg mt-3  ">
                  Placing Caveat
                </p>
              </div>
            </div>
          </Link>
          <Link href="/right_of_occupancy">
            <div className="w-[230px] xl:w-[247px] h-[100px]  bg-white cursor-pointer rounded-lg p-[20px] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center mx-auto">
                <FaWarehouse size="29" />
                <p className="font-outfit text-center text-[#12B97D] md:text-lg lg:text-lg  mt-3 ">
                  Customary Right Of Occupancy
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
