import Image from "next/image";
import React from "react";

const FaceOfMinistry = () => {
  return (
    <div className="w-full h-fit bg-[#F2F2F2] flex flex-col gap-4 items-center justify-start p-[3%]">
      <h3 className="text-[#000] font-outfit text-2xl">Face of Ministry</h3>
      <p className="text-[#000] font-outfit text-sm lg:text-base">
        Lorem Ipsum has been the industry&apos;s standard dummy{" "}
      </p>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        <div className="w-[183px] h-[275px] relative">
          <Image
            src={"/images/faceOfMinistry1.png"}
            width={183}
            height={275}
            alt="Mr. Andrew Peters U"
          />
          <div className="w-fit h-fit absolute bottom-[90px] left-5">
            <h5 className="text-[#fff] font-outfit">Mr. Andrew Peters U</h5>
            <p className="font-outfit text-sm text-[#12B97D]">
              Head of ministry
            </p>
          </div>
        </div>
        <div className="w-[183px] h-[275px] relative">
          <Image
            src={"/images/faceOfMinistry2.png"}
            width={183}
            height={275}
            alt="Mr. Andrew Peters U"
          />
          <div className="w-fit h-fit absolute bottom-[90px] left-5">
            <h5 className="text-[#fff] font-outfit">Mr. Andrew Peters U</h5>
            <p className="font-outfit text-sm text-[#12B97D]">
              Head of ministry
            </p>
          </div>
        </div>
        <div className="w-[183px] h-[275px] relative">
          <Image
            src={"/images/faceOfMinistry3.png"}
            width={183}
            height={275}
            alt="Mr. Andrew Peters U"
          />
          <div className="w-fit h-fit absolute bottom-[90px] left-5">
            <h5 className="text-[#fff] font-outfit">Mr. Andrew Peters U</h5>
            <p className="font-outfit text-sm text-[#12B97D]">
              Head of ministry
            </p>
          </div>
        </div>
        <div className="w-[183px] h-[275px] relative">
          <Image
            src={"/images/faceOfMinistry4.png"}
            width={183}
            height={275}
            alt="Mr. Andrew Peters U"
          />
          <div className="w-fit h-fit absolute bottom-[90px] left-5">
            <h5 className="text-[#fff] font-outfit">Mr. Andrew Peters U</h5>
            <p className="font-outfit text-sm text-[#12B97D]">
              Head of ministry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceOfMinistry;
