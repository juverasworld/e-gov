import {
  GetInTouch,
  Newsletter,
  OnlineService,
  OurServiceHeroSection,
  Services
} from "@/components/templates";
import React from "react";

const OurServices = () => {
  return (
    <div className="overflow-x-clip">
      <OurServiceHeroSection />
      <Services />
      <OnlineService/>
      <GetInTouch />
      <Newsletter />
    </div>
  );
};

export default OurServices;
