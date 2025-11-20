import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from '../component/CartTotal';
import Footer from '../component/Footer';   // <-- ADDED

function Cart() {
  const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = []
    for (const itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        tempData.push({
          _id: itemId,
          quantity: cartItem[itemId],
        })
      }
    }
    setCartData(tempData)
  }, [cartItem])

  return (
    <div className='w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-[#fff8d7] text-[#910046]'>

      <div className='h-[8%] w-[100%] text-center mt-[80px]'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div className='w-[100%] h-[92%] flex flex-wrap gap-[20px]'>
        {cartData.length === 0 && (
          <p className="text-[#910046] text-lg mt-10">Your cart is empty.</p>
        )}

        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id)
          if (!productData) return null

          return (
            <div key={index} className='w-[100%] h-[10%] border-t border-b border-[#91004655]'>
              <div className='w-[100%] h-[80%] flex items-start gap-6 bg-[#91004615] py-[10px] px-[20px] rounded-2xl relative'>
                <img className='w-[100px] h-[100px] rounded-md border-[2px] border-[#910046]' src={productData.image1} alt="" />
                <div className='flex items-start justify-center flex-col gap-[10px]'>
                  <p className='md:text-[25px] text-[20px] text-[#910046]'>{productData.name}</p>
                  <div className='flex items-center gap-[20px]'>
                    <p className='text-[20px] text-[#910046]'>{currency} {productData.price}</p>
                  </div>
                </div>

                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  className='md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] px-[10px] text-[#910046] text-[18px] font-semibold bg-[#fff8d7] absolute md:top-[40%] top-[46%] left-[75%] md:left-[50%] border-[1px] border-[#910046] rounded-md'
                  onChange={(e) => {
                    const val = Number(e.target.value)
                    if (val > 0) {
                      updateQuantity(item._id, val)
                    }
                  }}
                />

                <RiDeleteBin6Line
                  className='text-[#910046] w-[25px] h-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1 cursor-pointer'
                  onClick={() => updateQuantity(item._id, 0)}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Cart Summary */}
      <div className='flex justify-start items-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
        </div>
      </div>

      {/* FOOTER SECTION — ADDED */}
      <Footer />

    </div>
  )
}

export default Cart
