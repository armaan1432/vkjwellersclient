import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'
import Card from './Card'

function RelatedProduct({ category, subCategory, currentProductId }) {
  const { products } = useContext(shopDataContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let filtered = products.filter(item => 
        item.category === category &&
        item.subCategory === subCategory &&
        item._id !== currentProductId
      )
      setRelated(filtered.slice(0, 4))
    }
  }, [products, category, subCategory, currentProductId])

  return (
    <div className='w-full bg-[#fff8d7] text-[#910046] py-[50px] px-4'>
      
      {/* Centered Title */}
      <div className='w-full flex items-center justify-center mb-[30px]'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} color="#910046" />
      </div>

      {/* Centered Cards */}
      <div className='w-full flex items-center justify-center flex-wrap gap-[30px] md:gap-[50px]'>
        {related.length > 0 ? (
          related.map((item, index) => (
            <Card 
              key={index} 
              id={item._id} 
              name={item.name} 
              price={item.price} 
              image={item.image1} 
            />
          ))
        ) : (
          <p className='text-[18px] text-center'>No related products found</p>
        )}
      </div>
    </div>
  )
}

export default RelatedProduct