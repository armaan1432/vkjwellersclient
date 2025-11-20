import React from 'react'

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div className='absolute inset-0 w-full h-full z-10 flex flex-col justify-between 
                    py-8 sm:py-10 md:py-12 
                    px-4 sm:px-6 md:px-10 lg:px-16'>

      {/* Hero Text */}
      <div className='flex-1 flex flex-col justify-center'>
        <h1 className='text-[#910046] text-[30px] xs:text-[34px] sm:text-[42px] md:text-[50px] 
                       lg:text-[60px] xl:text-[72px] font-semibold leading-tight 
                       drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] mb-3 hero-title'>
          {heroData.text1}
        </h1>

        <h2 className='text-[#910046] text-[24px] xs:text-[28px] sm:text-[34px] md:text-[44px] 
                       lg:text-[52px] xl:text-[64px] font-semibold leading-tight 
                       drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]'>
          {heroData.text2}
        </h2>
      </div>

      {/* Navigation Dots */}
      <div className='flex items-center justify-center gap-3 md:gap-4 pb-4 md:pb-6'>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setHeroCount(index)}
            className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] 
                       lg:w-[16px] lg:h-[16px] rounded-full transition-all duration-300 border-2 ${
              heroCount === index 
                ? "bg-white border-white scale-125 shadow-lg" 
                : "bg-white/30 border-white/70 hover:bg-white/60 hover:border-white hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default Hero
