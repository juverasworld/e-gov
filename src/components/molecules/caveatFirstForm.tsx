import React from "react";

interface FirstFormProps {
  nextForm: any;
  onChange: any;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

const CaveatFirstForm = ({
  nextForm,
  onChange,
  firstName,
  lastName,
  email,
  mobile,
}: FirstFormProps) => {
  return (
    <form className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex gap-4">
        <div className="w-[50%] flex flex-col gap-3">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-[#008080]"
            required
          />
        </div>
        <div className="w-[50%] flex flex-col gap-3">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Surname
          </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-[#008080]"
            required
          />
        </div>
      </div>
      <div className="w-full h-fit flex gap-4">
        <div className="w-[50%] flex flex-col gap-3">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-[#008080]"
            required
          />
        </div>
        <div className="w-[50%] flex flex-col gap-3">
          <label
            htmlFor="dob"
            className="text-[#434344] font-nunito font-medium"
          >
            Telephone Number
          </label>
          <input
            type="number"
            name="mobile"
            value={mobile}
            onChange={onChange}
            placeholder="Text field"
            className="w-full h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-[#008080]"
            required
          />
        </div>
      </div>
      <button
        onClick={nextForm}
        className="w-full py-[16px] bg-[#08080C80] rounded-3xl"
      >
        <p className="text-[#fff]">Continue</p>
      </button>
    </form>
  );
};

export default CaveatFirstForm;
