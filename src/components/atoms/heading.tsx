type HeadingType = {
    children: string;
    size?: string;
  }
  
  const Heading = ({ children, size }: HeadingType): JSX.Element => {
    return (
      <h1
        className={`leading-[4rem] w-fit before:content-[''] before:bg-[#12B97D] before:w-[25%] before:h-[3px] before:rounded-full font-outfit before:block`}
        style={{
          fontSize: size || '2rem',
        }}
      >
        {children}
      </h1>
    )
  }
  
  export default Heading;
  