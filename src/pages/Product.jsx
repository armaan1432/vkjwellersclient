import React from 'react';
import LatestCollection from '../component/LatestCollection';
import BestSeller from '../component/BestSeller';

function Product() {
  return (
    <div className="w-full bg-[#fff8d7] text-[#910046]">
      {/* Main content */}
      <div className="w-full flex flex-col items-center justify-start py-[30px] gap-[40px]">

        {/* Latest Collection */}
        <div className="w-full flex items-center justify-center">
          <LatestCollection />
        </div>

        {/* Best Seller */}
        <div className="w-full flex items-center justify-center">
          <BestSeller />
        </div>

      </div>
      
      {/* ✅ Footer removed - it's now only in Home.jsx */}
    </div>
  );
}

export default Product;