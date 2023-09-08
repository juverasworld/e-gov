'use client'

import { useState } from "react";
import { IoMdClose } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';

const Page = (): JSX.Element => {
  const [filters] = useState<any[]>(['Ministry', 'Departments', 'Agencies']);
  const [selected, setSelected] = useState<string>('Ministry');

  const [ministries] = useState<any[]>([
    {
      mda: 'Minstry Of Housing',
      summary: 'Write an amazing description in this dedicated card section. Each word counts...',
      icon: '/images/icons/icon.svg',
    },
    {
      mda: 'Ministry of Culture and Tourism',
      summary: 'Write an amazing description in this dedicated card section. Each word counts... ',
      icon: '/images/icons/icon.svg',
    },
    {
      mda: 'Ministry OF Commerce and Industry',
      summary: 'Write an amazing description in this dedicated card section. Each word counts...',
      icon: '/images/icons/icon.svg',
    },
    {
      mda: 'Ministry of Water Resources',
      summary: 'Write an amazing description in this dedicated card section. Each word counts...',
      icon: '/images/icons/icon.svg',
    },
    {
      mda: 'Ministry of Inter - Governmental Affairs',
      summary: 'Write an amazing description in this dedicated card section. Each word counts...',
      icon: '/images/icons/icon.svg',
    },
    {
      mda: 'Ministry of Budget And Planning, Enugu.',
      summary: 'Write an amazing description in this dedicated card section. Each word counts...',
      icon: '/images/icons/icon.svg',
    },
    {
      mda: 'Ministry Of Science & Technology',
      summary: 'Write an amazing description in this dedicated card section. Each word counts...',
      icon: '/images/icons/icon.svg',
    },
    {
      mda: 'Ministry of Information',
      summary: 'Write an amazing description in this dedicated card section. Each word counts...',
      icon: '/images/icons/icon.svg',
    },
    {
      mda: 'Ministry Of Youths And Sport Development',
      summary: 'Write an amazing description in this dedicated card section. Each word counts...',
      icon: '/images/icons/icon.svg',
    },
  ]);

  return (
    <main>
      <div >
        <section className={`flex items-center`}>
          <button className={`p-2 border-2 rounded-full text-xl`}>
            <IoMdClose />
          </button>

          <p className={`text-lg font-cabinet_grotesk font-bold mx-4`}>
            All MDA&apos;s
          </p>
        </section>
      </div>
      <section className={`flex px-5 bg-white`}>
        {filters.map((filter, index) => (
          <p key={index} onClick={() => { setSelected(filter) }} className={`font-nunito cursor-pointer ${filter == selected && 'border-b border-b-[#008080] text-[#008080]'} py-3 mx-3 text-sm`}>
            {filter}
          </p>
        ))}
      </section>

      <section className={`max-h-[85vh] overflow-y-auto pt-7 px-4`}>
        <div className={`flex bg-white rounded-lg w-full overflow-hidden`}>
          <button className={`p-2 text-xl text-black`}>
            <RiSearch2Line />
          </button>
          <input type="text" className={`flex-1 px-3 py-3 text-sm outline-none font-nunito`} placeholder="Search MDAs" />
        </div>

        <section className={`bg-white py-2 px-3 my-2 rounded-xl flex justify-between items-center`}>
          <div className={`flex items-center`}>
            <img src="/images/governor.svg" alt="" className={`w-[4rem]`} />
            <p className={`text-lg text-[#1B2559] font-nunito mx-3 font-bold`}>
              His Excellency.
            </p>
          </div>

          <button className={`bg-[#CF8900] px-4 py-2 font-nunito text-sm rounded-full text-white font-bold`}>
            Create Appointment
          </button>
        </section>

        <section className={`flex items-center justify-between mt-4 flex-wrap`}>
          {ministries.map((ministry, index) => (
            <div key={index} className={`mx-2 my-3 px-3 py-4 w-[19rem] bg-white rounded-xl h-[13rem]`}>
              <div className={`flex items-center`}>
                <div className={`p-3 rounded-full bg-[#F4F7FE]`}>
                  <img src={ministry.icon} alt="" className={`w-[2rem]`} />
                </div>

                <h2 className={`text-xl font-bold font-cabinet_grotesk mx-2`}>
                  {ministry.mda}
                </h2>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}

export default Page;
