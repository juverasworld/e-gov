import React from 'react'
import Image from 'next/image'

const Visionaries = () => {
  return (
    <section className=' md:flex bg-[url("/images/visionaries-bg.svg")] bg-no-repeat bg-cover'>
        <Image
        src={'/images/headoftransport.svg'}
        width={'10'}
        height={'10'}
        alt='Head of transport - Ngozi Blessing' 
        className='w-full md:w-[30%]'
        />

        <div className='py-[3%] px-[5%] '>
            <h3 className='font-outfit text-white text-[28px]'>
            Our Collaborative Visionaries
            </h3>
            <p className='mt-[30px] font-nunito text-[20px] text-[#fff]'>
            Welcome to our dynamic team, a group of passionate professionals 
            working together to make a positive impact. With diverse expertise 
            and a commitment to service, we embrace innovation and adaptability 
            to overcome challenges. Engaging with communities and stakeholders, 
            we foster collaboration for sustainable growth. Our culture of empowerment 
            and growth fuels our dedication to building a better future for all.
            </p>
        </div>
    </section>
  )
}

export default Visionaries