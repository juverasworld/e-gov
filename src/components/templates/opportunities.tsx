import Image from "next/image";
import React from "react";
import TopSubHeading from "../atoms/top-sub-heading";
import ViewMore from "../molecules/viewMore";

const Opportunities = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-6  items-center md:px-10 px-4 py-[3%]">
      <div className="w-full lg:w-full h-full mt-[80px] flex md:flex-row flex-col justify-center ">
        <div className="md:w-2/5 w-full">
          <ViewMore
            text="Investment Opportunities"
            titleFontSize="3xl"
            titleFontWeight="medium"
            paragraph="Explore Enugu State's vibrant business landscape Lucrative sectors and projects await your investment"
            btnText="View More"
          />
        </div>
      
        <div className="w-3/5 flex md:flex-row flex-col gap-4 px-auto">
          <div className="md:w-1/3 w-full px-auto flex justify-center">
          <Image
            src={"/images/investment1.svg"}
            width={400}
            height={300}
            alt="Enugu Airport"
            className="mt-[20px] md:mt-[0px] "
          />

          </div>
          <div className="md:w-1/3 w-full mx-auto flex justify-center">
          <Image
            src={"/images/investment2.svg"}
            width={400}
            height={300}
            alt="Enugu Airport"
            className="mt-[20px] md:mt-[0px]  "
          />

          </div>
          <div className="md:w-1/3 w-full mx-auto ">
          <Image
            src={"/images/investment3.svg"}
            width={400}
            height={300}
            alt="Enugu Airport"
            className="mt-[20px] md:mt-[0px] "
          />
          </div>
         
        </div>
     
      </div>

      <div className="w-full mt-[80px] flex md:flex-row flex-col justify-center">
        <div className="md:w-2/5 w-full">
        <ViewMore
          text="Collaboration Opportunities"
          titleFontSize="3xl"
          titleFontWeight="medium"
          paragraph="Discover collaborative ventures in Enugu State. Join hands with us to create impactful partnerships"
          btnText="View More"
        />
        </div>
        <div className="w-3/5 flex md:flex-row flex-col gap-4">
        <div className="md:w-1/3 w-full  mx-auto">
          <Image
            src={"/images/investment4.svg"}
            width={400}
            height={366}
            alt="Enugu Airport"
            className="mt-[20px] md:mt-[0px]"
          />
        </div>
        <div className="md:w-1/3 w-full mx-auto ">
          <Image
            src={"/images/investment5.svg"}
            width={400}
            height={366}
            alt="Enugu Airport"
            className="mt-[20px] md:mt-[0px] "
          />
        </div>
        <div className="md:w-1/3 w-full mx-auto">
          <Image
            src={"/images/investment6.svg"}
            width={400}
            height={366}
            alt="Enugu Airport"
            className="mt-[20px] md:mt-[0px] "
          />
        </div>
        </div>

      </div>
      <div className="w-full lg:w-[65] h-fit grid gap-4 lg:gap-y-12 grid-cols-2 lg:grid-cols-3"></div>
    </div>
  );
};

export default Opportunities;
