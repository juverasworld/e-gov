"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbWorldUp } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCheck2, BsGlobe, BsMoonFill } from "react-icons/bs";
import { AuthFooter } from "@/components/molecules";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Audio } from "react-loader-spinner";

const SignUp = () => {
  const route = useRouter();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    occupation: "",
    stateOfOrigin: "",
    localGovernment: "",
    address: "",
    gender: "",
    mobile: "",
    password: "",
  });

  const [checkPassword, setCheckPassword] = useState<boolean>();

  const data = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    address: form.address,
    dob: form.dob,
    localGovernment: form.localGovernment,
    stateOfOrigin: form.stateOfOrigin,
    occupation: form.occupation,
    gender: form.gender,
    mobile: form.mobile,
    password: form.password,
  };

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const url =
    "https://43dd-105-113-36-51.ngrok-free.app/v1/api/user/register";

  const handleSubmit = (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    if (
      form.firstName &&
      form.lastName &&
      form.email &&
      form.address &&
      form.gender &&
      form.stateOfOrigin &&
      form.localGovernment &&
      form.occupation &&
      form.dob &&
      form.mobile &&
      form.password !== ""
    ) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          setIsLoading(false);
          localStorage.setItem("auth", result.data.accessToken);
          route.push("/");
          console.log("Response:", result);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="w-full min-h-[100vh] bg-[#fff] bg-auth-bg bg-no-repeat bg-cover flex flex-col justify-between absolute z-[9999999]">
      <div className="w-full h-fit">
        <nav className="w-[95%] mx-auto h-[70px] py-[12px] text-[#000] flex justify-between items-center">
          <Link href="/" className={`lg:block hidden`}>
            <h3 className="text-[#000] text-[1.5rem] lg:block hidden font-semibold">
              Enugu State
            </h3>
          </Link>

          <Image
            width="50"
            height="50"
            src="/images/enugu_logo.svg"
            alt="Enugu state logo"
          />

          <div className="w-fit h-fit flex items-center">
            <div className="text-[#000] flex flex-row items-center">
              EN{" "}
              <span>
                <MdKeyboardArrowDown color="#000" />
              </span>
            </div>
            <BsGlobe color="#000" className="m-2" />
            <BsMoonFill color="gold" className="ml-2" />
          </div>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center mt-[30px]">
        <p className="font-nunito text-[#000] text-xl">
          Ministry of Lands and Urban Development
        </p>
        <h1 className="font-cabinet font-bold text-3xl text-[#000] relative before:absolute before:bottom-0 before:mt-[4px] before:left-16 before:w-[70px] before:h-[2px] before:bg-[#CF8900]">
          Create Account
        </h1>
      </div>
      <div className="w-full h-fit flex justify-center items-center my-[30px]">
        {isLoading ? (
          <div className="w-[600px] h-[450px] bg-[#fff] flex justify-center items-center">
            <Audio
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </div>
        ) : (
          <form className="w-[600px] h-fit bg-[#fff] rounded-lg flex flex-col gap-3 items-center p-[3%]">
            <h2 className="font-bold font-cabinet text-xl text-[#008080]">
              Get Started
            </h2>
            <p className="text-[#08080C80] font-nunito text-sm">
              Fill in the Details to Continue
            </p>
            <div>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Firstname"
                className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Lastname"
                className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-2 outline-none"
                required
              />
            </div>

            <div>
              <input
                type="text"
                value={form.occupation}
                name="occupation"
                onChange={handleChange}
                placeholder="Occupation"
                className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
              />
            </div>

            <div>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
              >
                <option value="">--Select Gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="localGovernment"
                value={form.localGovernment}
                onChange={handleChange}
                placeholder="Local Government"
                className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
              />
            </div>

            <div>
              <input
                type="text"
                name="stateOfOrigin"
                value={form.stateOfOrigin}
                onChange={handleChange}
                placeholder="State of Origin"
                className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 outline-none"
              />
            </div>
            <div>
              <textarea
                name="address"
                value={form.address}
                placeholder="Address"
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: e.target.value,
                  })
                }
                className="w-[500px] border-[1.5px] border-[#E8E8E8] rounded py-2 px-5 outline-none"
              />
            </div>
            <div className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 flex justify-between items-center">
              <div className="flex items-center text-[#C0C0C0]">
                <p>+234</p>
                <IoIosArrowDown />
              </div>
              <input
                type="text"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile number"
                className="w-[82%] h-full outline-none"
              />
            </div>
            <div className="w-[500px] h-[50px] border-[1.5px] border-[#E8E8E8] rounded indent-5 flex justify-center items-center">
              {checkPassword ? (
                <input
                  type="text"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-[90%] h-full indent-[11px] outline-none"
                  required
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-[90%] h-full indent-[11px] outline-none"
                  required
                />
              )}
              {checkPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => setCheckPassword(!checkPassword)}
                  size={20}
                  color="#C0C0C0"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setCheckPassword(!checkPassword)}
                  size={20}
                  color="#C0C0C0"
                />
              )}
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-[500px] h-[50px] rounded-xl bg-[#CF8900] text-[#fff] flex justify-center items-center"
            >
              <p>Create account</p>
            </button>
            <div className="w-[500px] h-[50px] flex justify-between items-center">
              <div className={`flex`}>
                {/* <input type="checkbox" id="checker" onChange={() => { setChecked(!checked) }} /> */}
                <input
                  type="checkbox"
                  id="checker"
                  className={`hidden`}
                  onChange={() => setChecked(!checked)}
                />
                <label
                  htmlFor="checker"
                  className={`h-[1rem] ${
                    checked && "bg-[#008080] border-[#008080]"
                  } cursor-pointer w-[1rem] border border-[#D6D6D6] flex items-center justify-center rounded-md`}
                >
                  {checked && (
                    <span
                      className={`text-sm text-white h-full w-full text-center`}
                    >
                      <BsCheck2 />
                    </span>
                  )}
                </label>
                <label
                  htmlFor="checker"
                  className={`mx-2 text-sm cursor-pointer text-[#08080C80]`}
                >
                  Keep me logged in
                </label>
              </div>
              <button
                type="button"
                onClick={() => route.push("/login")}
                className="py-2 px-6 flex justify-center items-center bg-[#008080]/10 rounded-lg text-[#008080]"
              >
                <p>sign in</p>
              </button>
            </div>
          </form>
        )}
      </div>
      <AuthFooter />
    </div>
  );
};

export default SignUp;
