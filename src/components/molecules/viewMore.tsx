import React from "react";
import TopSubHeading from "../atoms/top-sub-heading";
import { MdArrowForwardIos } from "react-icons/md";

interface ViewMoreProps {
  titleFontSize: string;
  titleFontWeight: string;
  text: string;
  paragraph: string;
  btnText: string;
}

const ViewMore = ({
  titleFontSize,
  titleFontWeight,
  text,
  paragraph,
  btnText,
}: ViewMoreProps) => {
  return (
    <div className="flex flex-col gap-4">
      <TopSubHeading
        fontSize={titleFontSize}
        fontWeight={titleFontWeight}
        text={text}
      />
      <p className="max-w-[376px] font-outfit">{paragraph}</p>
      <button className="w-[175px] rounded px-[28px] lg:px-[32px] py-[10px] lg:py-[14px] flex justify-between items-center bg-[#12B97D]">
        <p className="text-[#fff] font-nunito">{btnText}</p>
        <MdArrowForwardIos color="#fff" className="ml-4" />
      </button>
    </div>
  );
};

export default ViewMore;