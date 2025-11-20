import React, { useContext, useState, useEffect } from 'react';
import Title from '../component/Title';
import CartTotal from '../component/CartTotal';
import razorpay from '../assets/Razorpay.jpg';
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../component/Loading';
import Footer from '../component/Footer';

function PlaceOrder() {
  const [method, setMethod] = useState('cod');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    phone: ''
  });

  const navigate = useNavigate();
  const { cartItem, setCartItem, getCartAmount, delivery_fee, products } = useContext(shopDataContext);
  const { serverUrl } = useContext(authDataContext);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const initPay = (order) => {
    if (!window.Razorpay) {
      toast.error("Razorpay not loaded");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            serverUrl + '/api/order/verifyrazorpay',
            response,
            { withCredentials: true }
          );
          if (data.message === "Payment Successful") {
            setCartItem({});
            toast.success("Payment Successful");
            navigate("/order");
          } else {
            toast.error("Payment Failed");
          }
        } catch (err) {
          console.log(err);
          toast.error("Payment verification failed");
        }
      },
      theme: { color: "#910046" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const orderItems = [];
      for (const productId in cartItem) {
        const qty = Number(cartItem[productId]);
        if (qty > 0) {
          const productInfo = structuredClone(products.find(p => p._id === productId));
          if (productInfo) {
            productInfo.quantity = qty;
            orderItems.push(productInfo);
          }
        }
      }

      if (orderItems.length === 0) {
        toast.error("Your cart is empty or products not loaded properly!");
        setLoading(false);
        return;
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      };

      if (method === 'cod') {
        const result = await axios.post(
          `${serverUrl}/api/order/placeorder`,
          orderData,
          { withCredentials: true }
        );

        if (result.data.orderId) {
          setCartItem({});
          toast.success("Order Placed Successfully (COD)");
          navigate("/order");
        } else {
          toast.error(result.data.message || "Order Placement Error");
        }

      } else if (method === 'razorpay') {
        const resultRazorpay = await axios.post(
          `${serverUrl}/api/order/razorpay`,
          orderData,
          { withCredentials: true }
        );

        if (resultRazorpay.data && resultRazorpay.data.id) {
          initPay(resultRazorpay.data);
        } else {
          toast.error("Razorpay Order creation failed");
        }
      }

    } catch (error) {
      console.log(error);
      toast.error("Order submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-[100vh] flex flex-col bg-[#fff8d7] text-[#910046] pt-[100px]'>
      
      {/* Main content */}
      <div className='flex-1 w-full flex flex-col md:flex-row items-start justify-start gap-[50px] px-[10px] md:px-[50px]'>

        {/* LEFT SIDE FORM */}
        <div className='lg:w-[50%] w-full flex items-center justify-center mb-[50px] md:mb-0'>
          <form onSubmit={onSubmitHandler} className='lg:w-[80%] w-full'>
            <div className='py-[10px]'>
              <Title text1={'DELIVERY'} text2={'INFORMATION'} />
            </div>

            {[
              ['firstName', 'First name'],
              ['lastName', 'Last name'],
              ['email', 'Email address'],
              ['street', 'Street'],
              ['city', 'City'],
              ['state', 'State'],
              ['pinCode', 'Pincode'],
              ['country', 'Country'],
              ['phone', 'Phone']
            ].map(([name, placeholder]) => (
              <div key={name} className='w-full h-[70px] flex items-center justify-between px-[5px] md:px-[10px] mb-[10px]'>
                <input
                  type={name === 'email' ? 'email' : 'text'}
                  placeholder={placeholder}
                  name={name}
                  required
                  value={formData[name]}
                  onChange={onChangeHandler}
                  className='w-full h-[50px] rounded-md bg-[#f4e7b7] placeholder:text-[#910046a0] text-[#910046] text-[16px] md:text-[18px] px-[15px] border border-[#91004650] focus:outline-none focus:ring-2 focus:ring-[#910046]'
                />
              </div>
            ))}

            <div className='flex justify-center mt-[20px]'>
              <button
                type='submit'
                className='text-[16px] md:text-[18px] bg-[#910046] hover:bg-[#b24a73] cursor-pointer py-[10px] px-[40px] md:px-[50px] rounded-2xl text-[#fff8d7] flex items-center justify-center gap-[10px] shadow-md transition-all duration-200'
              >
                {loading ? <Loading /> : "PLACE ORDER"}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE CART SUMMARY */}
        <div className='lg:w-[50%] w-full flex flex-col items-center justify-start gap-[20px]'>
          <CartTotal />
          <div className='py-[10px]'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
          </div>

          <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-[20px] mt-[20px]'>
            <button
              onClick={() => setMethod('razorpay')}
              className={`w-[150px] h-[50px] rounded-md overflow-hidden border-4 ${method === 'razorpay' ? 'border-[#910046]' : 'border-transparent'}`}
            >
              <img src={razorpay} className='w-full h-full object-contain rounded-sm' alt="Razorpay" />
            </button>

            <button
              onClick={() => setMethod('cod')}
              className={`w-[200px] h-[50px] bg-gradient-to-t from-[#fdd1e1] to-[#fff8d7] text-[14px] px-[20px] rounded-md font-semibold text-[#910046] border-4 ${method === 'cod' ? 'border-[#910046]' : 'border-transparent'} transition-all`}
            >
              CASH ON DELIVERY
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PlaceOrder;
