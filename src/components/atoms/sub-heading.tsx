type HeadingType = {
  text: string;
  size: string | any; // Use 'rem' | 'px' | 'em'
  textColor?: string;
  strokeColor: string;
  leading?: string;
  fontFamily: string;
  weight?: string;
}

const SubHeading = ({ text, size, textColor, strokeColor, leading, fontFamily, weight }: HeadingType): JSX.Element => {
  return (
    <h2
      style={{
        fontSize: size,
        color: textColor,
        lineHeight: leading,
        fontFamily: fontFamily,
        fontWeight: weight,
      }}
      className={`after:content-[''] after:block after:w-[70%] after:h-[2px] after:rounded-full [&_after after:bg-[#049BAF] after:mx-auto`}
    >
      {text}
    </h2>
  )
}

export default SubHeading;
