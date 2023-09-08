import {
  FaceOfMinistry,
  GetInTouch,
  Mandate,
  WhoWeAre,
  Visionaries,
} from "@/components/templates";
import React from "react";

const About = () => {
  return (
    <div className="overflow-x-clip">
      <WhoWeAre />
      <Mandate />
      {/* <FaceOfMinistry /> */}
      {/* <Departments /> */}
      {/* <Visionaries /> */}
      <GetInTouch />
    </div>
  );
};

export default About;
