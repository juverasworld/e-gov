"use client";
import Image from "next/image";
import TopSubHeading from "../atoms/top-sub-heading";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col-reverse md:mb-[100px] lg:flex-row px-[2%] py-[8%]">
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          className="w-full lg:w-[50%] h-full flex flex-col justify-start items-start gap-4"
        >
          <TopSubHeading
            fontWeight="normal"
            fontSize="3xl"
            text="Who Are We"
          />
          <h4 className="font-nunito font-bold text-xl text-[#000] max-w-[500px]">
            The Enugu State Ministry of Lands and Urban Development
          </h4>
          <p className="font-normal font-nunito lg:text-lg text-[#000] ">
            We are the custodians of Enugu State{"'"}s land resources, entrusted
            with the crucial responsibility of managing, regulating, and
            promoting sustainable land use across the state. Our dedicated team
            of experts is committed to ensuring efficient land administration,
            transparent land transactions, and the equitable allocation of land
            resources. At the Ministry of Lands, we are driven by the vision of
            fostering a vibrant and inclusive urban and rural landscape. Through
            our policies, we aim to strike a balance between urban development
            and environmental preservation, fostering economic growth while
            preserving the state&apos;s natural beauty and cultural heritage.
            With a strong emphasis on public service, our mission is to provide
            accessible and reliable land-related information and services to the
            citizens of Enugu State. We work tirelessly to streamline land
            registration processes, promote land development initiatives, and
            facilitate investments in the real estate sector to drive
            sustainable development and enhance the overall well-being of our
            communities.
          </p>
        </motion.div>
        <div className="w-full lg:w-[50%] h-[350px] lg:h-full relative">
          <div className="w-[250px] lg:w-[325px] h-[250px] lg:h-[380px] rounded bg-[#00000017] absolute right-[27%] md:right-[30%] lg:right-5 top-5"></div>
          <motion.img
            initial={{ width: 10 }}
            whileInView={{ width: "70%" }}
            src={"/images/whoweare.svg"}
            width={10}
            height={10}
            alt="Image of people"
            className="w-[250px] lg:w-[400px] h-[250px] lg:h-[390px] absolute z-20 right-[30%] md:right-[35%] lg:right-10 top-10"
          />
          {/* <Image
            src={"/images/dots.svg"}
            width={10}
            height={10}
            alt="dots"
            className="w-[45px] lg:w-[77px] absolute z-10 right-[20%] md:right-[28%] top-2 lg:right-0 lg:top-0"
          /> */}
        </div>
      </div>
      
    </>
  );
};

export default WhoWeAre;
