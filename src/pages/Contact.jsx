import React from 'react'
import Title from '../component/Title'
import contact from "../assets/contact.jpg"
import Footer from "../component/Footer"   // 👉 added

function Contact() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex flex-col items-center justify-center bg-[#fff8d7] gap-[50px] pt-[80px] text-[#910046] overflow-x-hidden'>

      <Title text1={'CONTACT'} text2={'US'} />

      <div className='w-full flex flex-col lg:flex-row items-center justify-center'>
        {/* Image Section */}
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <div className='w-[80%] lg:w-[70%] max-w-[500px] aspect-square border-[6px] border-[#910046] rounded-xl overflow-hidden flex items-center justify-center bg-[#91004610]'>
            <img 
              src={contact} 
              alt="Contact V.K Jewellers" 
              className='w-full h-full object-contain' 
            />
          </div>
        </div>

        {/* Contact Details */}
        <div className='lg:w-[50%] w-[85%] flex flex-col items-start justify-center gap-[20px] mt-[30px] lg:mt-0 px-[20px] text-[#910046]'>

          <p className='text-[18px] md:text-[20px] font-semibold'>Our Showroom</p>
          
          <div className='text-[14px] md:text-[16px] leading-relaxed'>
            <p>V.K Jewellers</p>
            <p>G-1, 54/2, NAYAGANJ, KANPUR - 208001</p>
            <p>UTTAR PRADESH, India</p>
          </div>

          <div className='text-[14px] md:text-[16px] leading-relaxed'>
            <p>Tel: +91-7355779832</p>
            <p>Email: contact@vkjewellers.com</p>
          </div>

          <p className='text-[18px] md:text-[20px] font-semibold mt-[10px]'>Queries @V.K Jewellers</p>
          <p className='text-[14px] md:text-[16px] leading-relaxed'>
            Join our growing family and experience trusted jewelry craftsmanship and personalized service.
          </p>
        </div>
      </div>

      {/* 👉 Footer inserted here */}
      <Footer />

    </div>
  )
}

export default Contact
