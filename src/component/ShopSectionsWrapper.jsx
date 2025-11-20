import React from 'react';
import ShopSection from './ShopSection';
import menImage from '../assets/men.jpg';
import womenImage from '../assets/women.jpg';

function ShopSectionsWrapper() {
  return (
    <section className='w-full min-h-screen 
                        flex items-center justify-center 
                        bg-[#fff8d7] text-[#910046] 
                        py-[60px] md:py-[80px] px-4 md:px-8 lg:px-16'>
      
      <div className='w-full max-w-[1600px] 
                      flex flex-col md:flex-row 
                      items-center justify-center 
                      gap-[30px] md:gap-[40px] lg:gap-[60px]'>
        
        <ShopSection
          image={menImage}
          buttonText="Explore Men's Collection"
          navigateTo="/shopformen"
        />
        
        <ShopSection
          image={womenImage}
          buttonText="Explore Women's Collection"
          navigateTo="/shopforwomen"
        />
        
      </div>
    </section>
  );
}

export default ShopSectionsWrapper;