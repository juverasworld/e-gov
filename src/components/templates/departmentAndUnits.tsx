"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { BottomSubHeading } from '../atoms';


const DepartmentAndUnits = () => {
  return (
    <div className='flex flex-col items-center h-full w-full md:px-10 px-4 md:pt-10'>
        <BottomSubHeading
          text="Departments/Units"
          fontSize="3xl"
          fontWeight="normal"
        />
        <div className='flex md:flex-row flex-col w-full mt-10 '>
            <motion.div className='md:w-1/2 mb-5 md:mb-0 items-center mx-auto' initial={{ width: 10 }} whileInView={{ width: "50%" }}>
                <Image src={"/images/departmentAndunits.svg"} alt='' width={466} height={466}/>
            </motion.div>
            <motion.div className='flex flex-col md:w-1/2'>
                <div className='w-full md:mb-10'>
                    <div className='bg-[#D9F4EA]  mb-5'>
                        <h4 className=' border-l-4 border-[#12B97D] p-3'>Department</h4>
                    </div>
                    <div className='flex md:flex-row flex-col justify-between'>
                        <ul>
                            <li>Administrative</li>
                            <li className='py-3'>Finance/Accounts Department</li>
                            <li>Legal Department</li>
                        </ul>
                    <ul className=' mt-3 md:mt-0 md:pr-10'>
                        <li>Town Planning</li>
                        <li className='py-3'>Deeds Department</li>
                        <li>Land Use and Allocation</li>
                    </ul>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='md:mb-10'>
                        <div className='bg-[#D9F4EA]  mb-5 mt-5 md:mt-0'>
                            <h4 className=' border-l-4 border-[#12B97D] p-3'>Units</h4>
                        </div>
                        <div>
                            <p>Legal Unit</p>
                            <p className='py-3'>Planning Research And Statistics(PRS)</p>
                            <p>File Registry And Information</p>
                        </div>
                    </div>

                </div>
            

            </motion.div>
            
        </div>
    </div>
  )
}

export default DepartmentAndUnits