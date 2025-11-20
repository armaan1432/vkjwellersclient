import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className='w-full min-h-[250px] md:min-h-[300px] bg-[#910046] text-[#fff8d7] flex flex-col items-center justify-center gap-4 md:gap-6 py-8 md:py-10 px-4'>
      
      {/* Logo and Description */}
      <div className='flex flex-col items-center justify-center gap-3 md:gap-4 text-center max-w-[900px]'>
        <img 
          src={logo} 
          alt="VK Jwellers" 
          className='w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] object-contain'
        />
        <h3 className='text-[22px] md:text-[24px] lg:text-[26px] font-bold'>V.K Jwellers</h3>
        <p className='text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed px-4 md:px-8'>
          VK Jwellers is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery—all backed by trusted service designed to make your life easier every day.
        </p>
      </div>

      {/* Divider */}
      <div className='w-[90%] md:w-[80%] max-w-[1000px] h-[1px] bg-[#fff8d7]/30 my-2'></div>

      {/* Copyright */}
      <div className='flex flex-col items-center justify-center text-center gap-1 md:gap-2'>
        <p className='text-[13px] md:text-[14px] lg:text-[15px]'>
          Copyright 2025 © V.K Jwellers.in - All Rights Reserved
        </p>
        <p className='text-[12px] md:text-[13px] lg:text-[14px] opacity-90'>
          Developed by AHUB Media
        </p>
      </div>

    </footer>
  )
}

export default Footer