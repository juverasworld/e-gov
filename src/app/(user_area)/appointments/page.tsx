'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Page = (): JSX.Element => {
  const router = useRouter();

  const [upcomings] = useState<any[]>([
    {
      image: '/images/governor.svg',
      title: 'His Excellency',
      date: '09 Dec 2019',
      time: '03:00pm',
    },
    {
      image: '/images/governor.svg',
      title: 'His Excellency',
      date: '09 Dec 2019',
      time: '03:00pm',
    },
  ]);

  const [upcoming] = useState<any[]>([
    {
      image: '/images/governor.svg',
      title: 'His Excellency',
      date: '09 Dec 2019',
      time: '03:00pm',
    },
    {
      image: '/images/governor.svg',
      title: 'His Excellency',
      date: '09 Dec 2019',
      time: '03:00pm',
    },
    {
      image: '/images/governor.svg',
      title: 'His Excellency',
      date: '09 Dec 2019',
      time: '03:00pm',
    },
    {
      image: '/images/governor.svg',
      title: 'His Excellency',
      date: '09 Dec 2019',
      time: '03:00pm',
    },
    {
      image: '/images/governor.svg',
      title: 'His Excellency',
      date: '09 Dec 2019',
      time: '03:00pm',
    },
  ]);

  return (
    <main>
      <div>
      
      </div>

      <section className={`overflow-y-auto max-h-[87vh] px-5 pt-5`}>
        <section className={`w-full`}>
          <h3 className={`font-nunito text-lg font-bold text-[#434344] py-2`}>
            Appointment upcomings
          </h3>

          <section>
            {upcomings.map((upcoming, index) => (
              <div key={index} className={`bg-white font-nunito px-7 py-4 w-full rounded-xl my-3 flex justify-between items-center`}>
                <div className={`flex items-center`}>
                  <img src={upcoming.image} alt="" className={`w-[3rem] mr-3`} />
                  <p className={`font-bold text-base font-nunito `}>
                    {upcoming.title}
                  </p>
                </div>

                <p className={`text-xs text-[#08080C80]`}>
                  {upcoming.date}
                </p>

                <p className={`text-xs text-[#08080C80]`}>
                  {upcoming.time}
                </p>

                <div>
                  <button className={`text-white text-sm py-2 px-4 rounded-full mx-2 bg-[#00C2C2]`}>
                    Accept
                  </button>

                  <button className={`text-white text-sm py-2 px-4 rounded-full mx-2 bg-[#F8333C]`}>
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </section>
        </section>


        <section className={`w-full mt-10`}>
          <div className={`flex items-center justify-between`}>
            <h3 className={`font-nunito text-lg font-bold text-[#434344] py-2`}>
              Upcoming Appointments
            </h3>

            <button className={`rounded-full bg-[#CF8900] py-2 px-5 font-nunito text-xs text-white`}>
              View History
            </button>
          </div>

          <section>
            {upcoming.map((upcoming, index) => (
              <div key={index} className={`bg-white font-nunito px-7 py-4 w-full rounded-xl my-3 flex justify-between items-center`}>
                <div className={`flex items-center`}>
                  <img src={upcoming.image} alt="" className={`w-[3rem] mr-3`} />
                  <p className={`font-bold text-base font-nunito `}>
                    {upcoming.title}
                  </p>
                </div>

                <p className={`text-xs text-[#08080C80]`}>
                  {upcoming.date}
                </p>

                <p className={`text-xs text-[#08080C80]`}>
                  {upcoming.time}
                </p>

                <div>
                  <button className={`text-white text-sm py-2 px-4 rounded-full mx-2 bg-[#00C2C2]`}>
                    Accept
                  </button>

                  <button className={`text-white text-sm py-2 px-4 rounded-full mx-2 bg-[#F8333C]`}>
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </main>
  )
}

export default Page;
