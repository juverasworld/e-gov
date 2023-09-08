'use client'

import { useRouter } from 'next/navigation';
import { FaAngleLeft } from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

const Page = (): JSX.Element => {
  const router = useRouter();

  return (
    <main className={`px-14 py-8`}>
      <button className={`p-2 border-2 rounded-full border-[#00000045] text-3xl`}>
        <FaAngleLeft />
      </button>

      <section className={`bg-white rounded-2xl w-full mt-10 py-8`}>
        <header className={`flex px-5 items-center`}>
          <p className={`text-xl mr-4 p-4 rounded-full bg-[#F4F7FE] text-[#12B97D]`}>
            <HiOutlineBuildingOffice2 />
          </p>
          <h3 className={`text-xl font-cabinet font-bold`}>
            Ministry Of Lands
          </h3>
        </header>

        <div className={`bg-[#F3F3F3] my-3 py-2 w-full`}></div>

        <h2 className={`text-[#008080] font-cabinet text-xl py-2 px-5 font-bold`}>
          Select Service And Service Type
        </h2>

        <div className={`px-5 flex items-center`}>
          <select defaultValue={'Requirements for certificate of Occupancy'} className={`flex-1 py-3 px-2 rounded-md`}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>

          <div className={`w-[30rem] mx-6`}>
            <p className='font-nunito text-sm'>Service Type (B2G, B2C)</p>
            <select defaultValue={'Business Type'} className={`w-full py-3 rounded-md`}>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <button onClick={()=>{router.push('/')}} className={`w-[90%] mx-auto text-white bg-[#CF8900] px-4 py-2 font-nunito rounded-full my-9`}>
          Confirm
        </button>
      </section>
    </main>
  )
}

export default Page;
