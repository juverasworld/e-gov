interface BottomSubHeadingProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
}

const BottomSubHeading = ({
  text,
  fontSize,
  fontWeight,
}: BottomSubHeadingProps) => {
  return (
    <h2
      className={`font-${fontWeight} font-outfit text-${fontSize} text-[#000] relative before:absolute before:bottom-0 before:mt-[4px] before:w-[70px] before:h-[2px] before:bg-[#12B97D]`}
    >
      {text}
    </h2>
  );
};

export default BottomSubHeading;
