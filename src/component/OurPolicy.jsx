import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';

function OurPolicy() {
  return (
    <div className='w-[100vw] min-h-[70vh] flex items-center justify-start flex-col bg-[#fff8d7] gap-[50px] py-[50px]'>
      
      {/* Section Title */}
      <div className='h-[8%] w-[100%] text-center'>
        <Title text1={"OUR"} text2={"POLICY"} color="#910046" />
        <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-[#910046]'>
          Customer-Friendly Policies – Committed to Your Satisfaction and Safety.
        </p>
      </div>

      {/* Policy Cards */}
      <div className='w-[100%] flex items-center justify-center flex-wrap gap-[50px]'>

        {/* Card 1 */}
        <div className='w-[400px] max-w-[90%] flex items-center justify-center flex-col gap-[10px]'>
          <RiExchangeFundsLine className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#910046]' />
          <p className='font-semibold md:text-[25px] text-[19px] text-[#910046]'>Easy Exchange Policy</p>
          <p className='font-semibold md:text-[18px] text-[12px] text-[#910046] text-center'>
            Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>

        {/* Card 2 */}
        <div className='w-[400px] max-w-[90%] flex items-center justify-center flex-col gap-[10px]'>
          <TbRosetteDiscountCheckFilled className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#910046]' />
          <p className='font-semibold md:text-[25px] text-[19px] text-[#910046]'>7 Days Return Policy</p>
          <p className='font-semibold md:text-[18px] text-[12px] text-[#910046] text-center'>
            Shop with Confidence – 7 Days Easy Return Guarantee.
          </p>
        </div>

        {/* Card 3 */}
        <div className='w-[400px] max-w-[90%] flex items-center justify-center flex-col gap-[10px]'>
          <BiSupport className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#910046]' />
          <p className='font-semibold md:text-[25px] text-[19px] text-[#910046]'>Best Customer Support</p>
          <p className='font-semibold md:text-[18px] text-[12px] text-[#910046] text-center'>
            Trusted Customer Support – Your Satisfaction Is Our Priority.
          </p>
        </div>
      </div>

      {/* ✅ Learn More Button */}
      <Link
        to="/policy"
        className='mt-[20px] bg-[#910046] text-[#fff8d7] px-[25px] py-[12px] rounded-full font-semibold hover:bg-[#b3005e] transition-all duration-300'
      >
        Learn More
      </Link>
    </div>
  )
}

export default OurPolicy
