const Icon = ({ icon }: { icon: React.ReactNode }): JSX.Element => {
  return (
    <p className={`bg-[#D9D9D9] p-3 text-[#060D46] text-xl rounded-full`}>
      {icon}
    </p>
  )
}

export default Icon;
