import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopSection({ image, buttonText, navigateTo }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(navigateTo)}
      className='cursor-pointer w-full md:w-[45%] lg:w-[48%] xl:w-[48%] 
                 h-[500px] md:h-[600px] lg:h-[700px] 
                 rounded-2xl overflow-hidden shadow-2xl 
                 hover:scale-[1.02] hover:shadow-3xl 
                 transition-all duration-500 
                 bg-[#fff8d7] text-[#910046] 
                 flex flex-col relative group'
    >
      {/* Image takes full space */}
      <div className='flex-1 overflow-hidden relative'>
        <img
          src={image}
          alt={buttonText}
          className='w-full h-full object-cover 
                     group-hover:scale-110 
                     transition-transform duration-700'
        />
        
        {/* Gradient overlay for better text visibility */}
        <div className='absolute inset-0 bg-gradient-to-t from-[#910046]/80 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
      </div>

      {/* Text overlay at the bottom */}
      <div className='absolute bottom-0 left-0 right-0 
                      bg-gradient-to-t from-[#910046] to-transparent 
                      text-center py-6 md:py-8'>
        <p className='text-2xl md:text-3xl lg:text-4xl 
                      font-bold text-[#fff8d7] 
                      drop-shadow-lg m-0 
                      group-hover:scale-105 
                      transition-transform duration-300'>
          {buttonText}
        </p>
      </div>
    </div>
  );
}

export default ShopSection;