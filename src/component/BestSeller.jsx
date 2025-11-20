import React, { useContext, useEffect, useState } from 'react' 
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'
import Title from './Title'

function BestSeller() {
    let { products } = useContext(shopDataContext)
    let [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        let filterProduct = products.filter((item) => item.bestseller)
        setBestSeller(filterProduct.slice(0, 4));
    }, [products])

    return (
        <section className='bg-[#fff8d7] w-full py-[50px] text-[#910046] m-0'>
            <div className='w-full text-center m-0 p-0'>
                {/* Use the Title component for consistency */}
                <Title text1={"BEST"} text2={"SELLER"} color="#910046"/>
                
                <p className='text-[13px] md:text-[20px] m-0'>
                    Tried, Tested, Loved – Discover Our All-Time Best Sellers.
                </p>
            </div>

            <div className='w-full mt-[30px] flex items-center justify-center flex-wrap gap-[50px] m-0 p-0'>
                {bestSeller.map((item, index) => (
                    <Card 
                        key={index} 
                        name={item.name} 
                        id={item._id} 
                        price={item.price} 
                        image={item.image1}
                    />
                ))}
            </div>
        </section>
    )
}

export default BestSeller
