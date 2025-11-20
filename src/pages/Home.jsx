import React, { useEffect, useState } from 'react';
import Background from '../component/Background';
import Hero from '../component/Hero';
import Product from './Product';
import OurPolicy from '../component/OurPolicy';
import Footer from '../component/Footer';
import ShopSectionsWrapper from '../component/ShopSectionsWrapper';

function Home() {
  const heroData = [
    { text1: "", text2: "" },
    { text1: "", text2: "" },
    { text1: "", text2: "" }
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount(prev => (prev === heroData.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full relative top-[70px] bg-[#fff8d7] text-[#910046]'>

      {/* Hero Section - Contained */}
      <section className='w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] relative'>
        <Background heroCount={heroCount} />
        <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]} />
      </section>

      {/* Product Section */}
      <section className="w-full bg-[#fff8d7] text-[#910046] text-lg md:text-xl font-semibold">
        <Product />
      </section>

      {/* Shop Sections */}
      <section className="w-full bg-[#fff8d7] text-[#910046] text-lg md:text-xl font-semibold">
        <ShopSectionsWrapper />
      </section>

      {/* Our Policy Section */}
      <section className="w-full bg-[#fff8d7] text-[#910046] text-lg md:text-xl font-semibold">
        <OurPolicy />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default Home;
