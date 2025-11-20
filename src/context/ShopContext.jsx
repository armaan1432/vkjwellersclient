import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import { userDataContext } from './UserContext'
import axios from 'axios'
import { toast } from 'react-toastify'

export const shopDataContext = createContext()

function ShopContext({ children }) {
  const { serverUrl } = useContext(authDataContext)
  const { userData, loadingUser } = useContext(userDataContext)

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItem, setCartItem] = useState({})
  const [loading, setLoading] = useState(false)

  const currency = '₹'
  const delivery_fee = 40

  // -------------------------
  // ✅ Fetch products
  // -------------------------
  const getProducts = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/product/list`)

      // Ensure price is always number
      const cleanProducts = res.data.map(p => ({
        ...p,
        price: Number(p.price) || 0,
      }))

      setProducts(cleanProducts)
    } catch (error) {
      console.log("getProducts error:", error)
    }
  }

  // -------------------------
  // ✅ Fetch user cart
  // -------------------------
  const getUserCart = async () => {
    if (!userData) return
    try {
      const res = await axios.post(
        `${serverUrl}/api/cart/get`,
        {},
        { withCredentials: true }
      )

      // Ensure all quantities are numbers
      const cleanCart = {}
      Object.keys(res.data).forEach(key => {
        cleanCart[key] = Number(res.data[key]) || 0
      })

      setCartItem(cleanCart)
    } catch (error) {
      console.log("getUserCart error:", error)
    }
  }

  // -------------------------
  // ✅ Add to Cart
  // -------------------------
  const addtoCart = async (itemId) => {
    const cartCopy = { ...cartItem }
    cartCopy[itemId] = (Number(cartCopy[itemId]) || 0) + 1
    setCartItem(cartCopy)

    if (userData) {
      setLoading(true)
      try {
        await axios.post(
          `${serverUrl}/api/cart/add`,
          { itemId },
          { withCredentials: true }
        )
        toast.success("Product Added")
      } catch (error) {
        console.log("addtoCart error:", error)
        toast.error("Add Cart Error")
      } finally {
        setLoading(false)
      }
    }
  }

  // -------------------------
  // ✅ Update Quantity
  // -------------------------
  const updateQuantity = async (itemId, quantity) => {
    const newQty = Number(quantity) || 0
    const cartCopy = { ...cartItem, [itemId]: newQty }
    setCartItem(cartCopy)

    if (userData) {
      try {
        await axios.post(
          `${serverUrl}/api/cart/update`,
          { itemId, quantity: newQty },
          { withCredentials: true }
        )
      } catch (error) {
        console.log("updateQuantity error:", error)
      }
    }
  }

  // -------------------------
  // ✅ Get Cart Count
  // -------------------------
  const getCartCount = () =>
    Object.values(cartItem).reduce(
      (total, qty) => total + (Number(qty) || 0), 
      0
    )

  // -------------------------
  // ✅ FIXED CART AMOUNT
  // -------------------------
  const getCartAmount = () => {
    if (!products || products.length === 0) return 0

    let total = 0

    for (const itemId in cartItem) {
      const qty = Number(cartItem[itemId]) || 0

      const product = products.find(
        (p) => String(p._id) === String(itemId)
      )

      if (product) {
        const price = Number(product.price) || 0
        total += price * qty
      }
    }

    return total
  }

  // FIRST load products
  useEffect(() => { 
    getProducts() 
  }, [])

  // THEN load cart (after user state ready)
  useEffect(() => {
    if (!loadingUser) {
      getUserCart()
    }
  }, [loadingUser, userData])

  return (
    <shopDataContext.Provider value={{
      products,
      currency,
      delivery_fee,
      getProducts,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItem,
      addtoCart,
      getCartCount,
      setCartItem,
      updateQuantity,
      getCartAmount,
      loading
    }}>
      {children}
    </shopDataContext.Provider>
  )
}

export default ShopContext
