interface TopSubHeadingProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
}

const TopSubHeading = ({
  text,
  fontSize,
  fontWeight,
}: TopSubHeadingProps) => {
  return (
    <h2
      className={`font-${fontWeight} font-outfit text-${fontSize} text-[#000] relative before:absolute before:mt-[-4px] before:w-[50px] before:h-[2px] before:bg-[#12B97D]`}
    >
      {text}
    </h2>
  );
};

export default TopSubHeading;