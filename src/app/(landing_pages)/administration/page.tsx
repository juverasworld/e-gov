import Image from "next/image"
import { NavBar } from "@/components/molecules";


import { Footer, GetInTouch, Newsletter } from "@/components/templates";


export default function Administration() {
    return (
        <main className="overflow-hidden ">
            <NavBar />
            <div className="bg-bg-admin bg-no-repeat bg-center h-auto flex flex-col lg:items-center justify-center pt-10 text-white ">
                <p className="text-center leading-10 lg:text-4xl font-nunito mt-20 ">WELCOME TO THE MINISTRY OF  <br className="md:flex hidden" />
                    YOUTH AND SPORTS</p>
                <p className="text-2xl [word-spacing:20px] py-3">Apply. Invest. Beinformed</p>
                <div className="w-1/4 my-10 mx-auto flex justify-between items-center border rounded p-2 bg-[#ffffff77]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-1 px-2 focus:outline-none bg-[#ffffff77]"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600 cursor-pointer"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M13.422 14.272a8 8 0 111.31-1.31l4.85 4.85a1 1 0 01-1.415 1.414l-4.85-4.85zM2 8a6 6 0 1112 0A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="bg-[#057BB0] flex py-10 px-10 lg:w-3/4 items-center justify-center text-xl md:text-2xl lg:rounded-xl">
                    <p className="text-right px-5">Empowering Youth, Building Champions: Together<br className="md:flex hidden" /> Towards a Brighter Future!</p>
                    <p className="px-5 whitespace-nowrap"><button type="button" className=" border-2 border-white py-2 px-3 whitespace-nowrap">Submit Application</button></p>
                </div>
            </div>
            <div className=" flex justify-center items-center flex-col ">
                <p className="font-bold text-2xl py-10">FROM THE DIRECTORS DESK</p>
                <Image
                    src="/images/chukwudi.svg"
                    alt="Image"
                    width={10}
                    height={10}
                    className={`w-auto  rounded-2xl`}
                />
                <p className="text-center lg:w-3/4 font-nunito text-md pt-10 px-5">Welcome to the Ministry of Youth and Sports: Today, we gather here not just as individuals  but as a community bound by a shared passion for empowering the next generation of young individuals. This website is more than just a virtual space; it is a hub of inspiration, information, and opportunities to make a positive impact in the lives of our youth. As you navigate through the pages of our website, you will discover a treasure trove of knowledge, resources, and stories that showcase the transformative power of youth and sports.</p>
                <p className="  text-2xl my-5 "> MR CHUKWUDI ONAH</p>
            </div>
            <div className=" flex lg:flex-row flex-col justify-center my-5 md:items-center">
                <div className="bg-[#CCD3D3] py-5  mx-10 text-center my-5 px-10 rounded-xl">
                    <p className="font-bold text-2xl py-5 font-nunito">Vision</p>
                    <p >We see a world where every young individual is <br className="lg:flex hidden" /> empowered with the knowledge, skills, and <br className="lg:flex hidden" /> opportunities to excel and make a positive impact <br className="lg:flex hidden" />in their communities. Through our unwavering <br className="lg:flex hidden" />commitment to youth development and sports, <br className="lg:flex hidden" />we strive to create a generation of confident,<br className="lg:flex hidden" /> resilient, and compassionate leaders.</p>
                </div>
                <div className="bg-[#90998F] py-8 mx-10 text-center my-5 px-10 rounded-xl text-white">
                    <p className="font-bold text-2xl py-5 font-nunito">Mission</p>
                    <p>Our mission is to uplift the potential of <br className="lg:flex hidden" /> every young individual and ignite their <br className="lg:flex hidden" /> passion for sports. We stand as a guiding force, <br className="lg:flex hidden" /> nurturing dreams, and fostering a <br className="lg:flex hidden" /> generation of resilient, confident, and <br className="lg:flex hidden" /> skilled youth.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center text-center">
                <p className="font-bold text-2xl py-10">Departments</p>
                <div className="flex lg:flex-row flex-col justify-center lg:my-10">
                    <div className="mx-10 px-10">
                        <p className="">
                            <Image src="/images/adminUser.svg" width={3} height={2} className="w-16 rounded-full px-2 py-2 bg-[#057BB0] " alt="Image" />
                        </p>
                        <p className="py-5">Administration <br className="md:flex hidden" /> Department</p>
                    </div>
                    <div className="mx-10 px-10">
                        <p className="">
                            <Image src="/images/engineering.svg" width={3} height={2} className="w-16 rounded-full px-2 py-2 bg-[#057BB0] " alt="Image" />
                        </p>
                        <p className="py-5">Organising<br className="md:flex hidden" /> Department</p>
                    </div>
                    <div className="mx-10 px-10">
                        <p className="">
                            <Image src="/images/boatFishing.svg" width={3} height={2} className="w-16 rounded-full px-2 py-2 bg-[#057BB0] " alt="Image" />
                        </p>
                        <p className="py-5">Youth <br className="md:flex hidden" /> Department</p>
                    </div>
                    <div className=""></div>
                </div>
                <div className="flex lg:flex-row flex-col justify-center lg:my-10">
                    <div className="mx-10 px-10">
                        <p className="">
                            <Image src="/images/mdi_finance.svg" width={3} height={2} className="w-16 rounded-full px-2 py-2 bg-[#057BB0] " alt="Image" />
                        </p>
                        <p className="py-5">Finance  <br className="md:flex hidden" /> Account</p>
                    </div>
                    <div className="mx-10 px-10">
                        <p className="">
                            <Image src="/images/boatFishing.svg" width={3} height={2} className="w-16 rounded-full px-2 py-2 bg-[#057BB0] " alt="Image" />
                        </p>
                        <p className="py-5">Coaching <br className="md:flex hidden" /> Department</p>
                    </div>
                    <div className="mx-10 px-10">
                        <p className="">
                            <Image src="/images/boatFishing.svg" width={3} height={2} className="w-16 rounded-full px-2 py-2 bg-[#057BB0] " alt="Image" />
                        </p>
                        <p className="py-5">Facilties<br className="md:flex hidden" /> Department</p>
                    </div>
                    <div className=""></div>
                </div>

            </div>
            <div className="lg:hidden flex">
                <GetInTouch />
            </div>
            <Newsletter />
            <Footer />
        </main>
    )
}