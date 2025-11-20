import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import Footer from '../component/Footer'

function About() {
  return (
    <>
      <div className='w-full min-h-screen flex flex-col items-center justify-start bg-[#fff8d7] gap-[40px] md:gap-[60px] pt-[100px] md:pt-[120px] pb-[40px] text-[#910046] px-4'>

        {/* Title */}
        <div className='w-full flex justify-center'>
          <Title text1={'ABOUT'} text2={'US'} />
        </div>

        {/* Main About Section */}
        <div className='w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-center gap-[30px] lg:gap-[50px]'>
          
          {/* Image Section */}
          <div className='w-full lg:w-[50%] flex items-center justify-center px-4'>
            <img 
              src={about} 
              alt="About V.K Jewellers" 
              className='w-full max-w-[400px] lg:max-w-[500px] rounded-xl border-4 md:border-6 border-[#910046] shadow-lg hover:scale-105 transition-transform duration-300' 
            />
          </div>

          {/* Text Section */}
          <div className='w-full lg:w-[50%] flex flex-col items-start justify-center gap-[20px] px-4 lg:px-8'>
            <p className='text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed'>
              <b className='font-semibold text-[16px] md:text-[18px] lg:text-[20px]'>About VK Jewellers</b><br/><br/>
              VK Jewellers, established in 2025 in Nayaganj, Kanpur, is a new name built on an old legacy. 
              The firm is founded by <b>Arti Gupta</b> in collaboration with <b>Manish Gupta</b> and <b>Ajeet Gupta</b>, 
              whose family has been in the jewellery business since 1995.
            </p>

            <p className='text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed'>
              With more than 30 years of trust and craftsmanship, VK Jewellers deals in wholesale of silver jewellery and 
              items like fancy payal, bichiya, and silver wax idols.
            </p>

            <p className='text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed italic'>
              Hamare har product mein aapko milegi purity, finishing aur traditional purity aur design ka perfect combination.
            </p>

            <p className='text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed'>
              Our goal is to bring premium quality silver jewellery to every retailer and customer — 
              with honesty, transparency, and long-term trust.
            </p>

            <p className='text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed font-semibold'>
              VK Jewellers – Jahaan parampara milti hai modern design se, aur har chandi ki chamak kehati hai ek kahani.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='w-full max-w-[1400px] flex flex-col items-center justify-center gap-[30px] md:gap-[40px] mt-[40px] md:mt-[60px]'>
          
          {/* Title */}
          <Title text1={'WHY'} text2={'CHOOSE US'} />

          {/* Cards Container */}
          <div className='w-full flex flex-col md:flex-row items-stretch justify-center gap-[25px] md:gap-[30px] px-4'>

            {/* Card 1 */}
            <div className='flex-1 min-h-[220px] md:min-h-[250px] max-w-full md:max-w-[350px] border-4 md:border-[6px] border-[#910046] bg-[#91004610] rounded-xl flex flex-col items-center justify-center gap-[15px] md:gap-[20px] px-[20px] md:px-[30px] py-[20px] hover:bg-[#91004620] hover:scale-105 transition-all duration-300 shadow-md'>
              <b className='text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-center'>Quality Craftsmanship</b>
              <p className='text-[14px] md:text-[15px] lg:text-[16px] text-center leading-relaxed'>
                Every piece reflects our dedication to excellence — combining the finest materials with expert artistry and precision.
              </p>
            </div>

            {/* Card 2 */}
            <div className='flex-1 min-h-[220px] md:min-h-[250px] max-w-full md:max-w-[350px] border-4 md:border-[6px] border-[#910046] bg-[#91004610] rounded-xl flex flex-col items-center justify-center gap-[15px] md:gap-[20px] px-[20px] md:px-[30px] py-[20px] hover:bg-[#91004620] hover:scale-105 transition-all duration-300 shadow-md'>
              <b className='text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-center'>Seamless Experience</b>
              <p className='text-[14px] md:text-[15px] lg:text-[16px] text-center leading-relaxed'>
                Enjoy a smooth, luxurious shopping journey — from browsing to doorstep delivery, with full transparency and ease.
              </p>
            </div>

            {/* Card 3 */}
            <div className='flex-1 min-h-[220px] md:min-h-[250px] max-w-full md:max-w-[350px] border-4 md:border-[6px] border-[#910046] bg-[#91004610] rounded-xl flex flex-col items-center justify-center gap-[15px] md:gap-[20px] px-[20px] md:px-[30px] py-[20px] hover:bg-[#91004620] hover:scale-105 transition-all duration-300 shadow-md'>
              <b className='text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-center'>Customer Commitment</b>
              <p className='text-[14px] md:text-[15px] lg:text-[16px] text-center leading-relaxed'>
                We believe in relationships built on trust — ensuring satisfaction, timely support, and jewelry that tells your story.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default About