import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import { userDataContext } from '../context/UserContext'
import Loading from '../component/Loading'
import RelatedProduct from '../component/RelatedProduct'
import Footer from '../component/Footer'

// Helper to ensure valid URL
const fixUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return "https://" + url;
};

function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { userData } = useContext(userDataContext)
  const { products, currency, addtoCart, loading } = useContext(shopDataContext)

  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    const product = products.find(item => item._id === productId)
    if (product) {
      setProductData(product)

      const validImages = [product.image1, product.image2, product.image3, product.image4]
        .filter(Boolean)
        .map(fixUrl)

      setImageList(validImages)
      if (validImages.length > 0) setImage(validImages[0])
    }
  }, [productId, products])

  if (!productData) return <div className='opacity-0'></div>

  // ---------------------------
  // ✅ Handle Add to Cart with Login Redirect
  // ---------------------------
  const handleAddToCart = () => {
    if (!userData) {
      navigate(`/login?redirect=/product/${productId}`)
      return
    }
    addtoCart(productData._id)
  }

  return (
    <>
      <div className='w-[99vw] min-h-[100vh] bg-[#fff8d7] flex flex-col lg:flex-row items-center justify-center gap-[30px] py-[80px] text-[#910046] overflow-x-hidden'>
        
        {/* Left: Images */}
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-[20px] lg:w-[50vw] md:w-[90vw] w-[100vw]'>

          {/* Thumbnail List */}
          <div className='flex lg:flex-col flex-row lg:w-[20%] w-full items-center justify-center gap-[15px] flex-wrap'>
            {imageList.map((img, idx) => (
              <div
                key={idx}
                className='w-[70px] md:w-[90px] lg:w-[100px] aspect-square border-[0px] border-[#910046] rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-all duration-200'
                onClick={() => setImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail-${idx}`}
                  className='w-full h-full object-cover'
                  onError={(e) => e.target.style.display = "none"}
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className='lg:w-[60%] w-[80%] max-w-[500px] aspect-square border-[0px] border-[#910046] rounded-xl overflow-hidden flex items-center justify-center bg-[#fff0e0]'>
            <img
              src={image}
              alt="Main product"
              className='w-full h-full object-contain'
              onError={(e) => e.target.src = "/placeholder.png"}
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className='lg:w-[45vw] w-[90vw] flex flex-col items-start justify-start gap-[15px] mt-[30px] lg:mt-0'>
          <h1 className='text-[32px] md:text-[40px] font-semibold'>
            {productData.name?.toUpperCase()}
          </h1>

          <p className='text-[26px] md:text-[30px] font-semibold'>
            {currency} {productData.price}
          </p>

          <p className='text-[18px] md:text-[20px] font-medium leading-relaxed w-[90%]'>
            {productData.description}
          </p>

          <p className='text-[20px] md:text-[22px] font-semibold'>
            Material: {productData.material}
          </p>

          <button
            className='mt-[10px] px-[24px] py-[10px] bg-[#910046] hover:bg-[#b3005a] rounded-2xl border-[3px] border-[#910046] text-[#fff8d7] font-semibold transition-all duration-300'
            onClick={handleAddToCart}
          >
            {loading ? <Loading /> : "Add to Cart"}
          </button>

          <div className='w-[90%] h-[1px] bg-[#91004650] my-[10px]'></div>

          <div className='w-[90%] text-[16px] leading-relaxed'>
            <p>100% Original Product</p>
            <p>Cash on delivery available</p>
            <p>↩Easy return & exchange within 7 days</p>
          </div>
        </div>

      </div>

      {/* ⭐ Related Products Section ⭐ */}
      <RelatedProduct 
        category={productData.category}
        subCategory={productData.subCategory}
        currentProductId={productData._id}
      />

      {/* ⭐ Footer Section ⭐ */}
      <Footer />
    </>
  )
}

export default ProductDetail
