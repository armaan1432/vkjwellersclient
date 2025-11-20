import React, { useContext } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './component/Nav'
import { userDataContext } from './context/UserContext'
import About from './pages/About'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import ShopForMen from './pages/ShopForMen'
import ShopForWomen from './pages/ShopForWomen'
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/NotFound'
import Policy from './pages/Policy'
import ScrollToTop from './component/ScrollToTop'

function App() {

  const { userData, loadingUser } = useContext(userDataContext)
  const location = useLocation()

  // Wait for user fetch (important)
  if (loadingUser) {
    return (
      <div className='w-[100vw] h-[100vh] flex items-center justify-center text-[#910046]'>
        Loading...
      </div>
    )
  }

  // Helper for protected routes
  const ProtectedRoute = ({ children }) => {
    if (!userData) {
      return <Navigate to="/login" state={{ from: location.pathname }} replace />
    }
    return children
  }

  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      
      {/* Nav should always show, even without login */}
      <Nav />

      <Routes>

        {/* Auth */}
        <Route 
          path='/login'
          element={userData ? <Navigate to={location.state?.from || "/"} /> : <Login />}
        />

        <Route 
          path='/signup'
          element={userData ? <Navigate to={location.state?.from || "/"} /> : <Registration />}
        />


        {/* PUBLIC ROUTES (NO LOGIN NEEDED) */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collections />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/productdetail/:productId' element={<ProductDetail />} />
        <Route path='/shopformen' element={<ShopForMen />} />
        <Route path='/shopforwomen' element={<ShopForWomen />} />
        <Route path='/policy' element={<Policy />} />


        {/* PROTECTED ROUTES (LOGIN REQUIRED) */}
        <Route 
          path='/cart'
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route 
          path='/placeorder'
          element={
            <ProtectedRoute>
              <PlaceOrder />
            </ProtectedRoute>
          }
        />

        <Route 
          path='/order'
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />


        {/* 404 */}
        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
