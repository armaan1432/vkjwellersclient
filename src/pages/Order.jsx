import React, { useContext, useEffect, useState } from 'react';
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import Footer from '../component/Footer';

function Order() {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currency } = useContext(shopDataContext);
  const { serverUrl } = useContext(authDataContext);

  // Fetch user orders
  const loadOrderData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`${serverUrl}/api/order/userorder`, {
        withCredentials: true,
      });

      if (result.data) {
        const allOrdersItem = [];
        result.data.forEach(order => {
          order.items.forEach(item => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.createdAt || order.date,
            });
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
    <div className="w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-[#fff8d7] text-[#910046] flex flex-col">
      {/* Title */}
      <div className="text-center mt-[80px] mb-8">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Orders List */}
      <div className="flex-1 w-full flex flex-col gap-6">
        {loading ? (
          <p className="text-[#910046] text-lg text-center mt-10">Loading orders...</p>
        ) : orderData.length === 0 ? (
          <p className="text-[#910046] text-lg text-center mt-10">You have no orders yet.</p>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row items-start gap-6 bg-[#9100460f] py-4 px-6 rounded-2xl relative border-t border-b border-[#91004633]"
            >
              <img
                src={item.image1}
                alt={item.name}
                className="w-[130px] h-[130px] rounded-md object-cover border border-[#91004633]"
              />
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[#910046] text-[20px] md:text-[25px] font-semibold">
                  {item.name}
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6 text-[#910046b0] text-[12px] md:text-[18px]">
                  <p>Price: {currency} {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  {item.size && <p>Size: {item.size}</p>}
                  <p>
                    Date:{' '}
                    <span className="text-[#910046] font-semibold">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                  <p>Payment: {item.paymentMethod}</p>
                </div>
              </div>

              <div className="absolute md:right-[5%] right-[2%] top-[2%] flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      item.status.toLowerCase() === 'delivered'
                        ? 'bg-green-600'
                        : item.status.toLowerCase() === 'pending'
                        ? 'bg-yellow-500'
                        : 'bg-gray-400'
                    }`}
                  ></span>
                  <p className="text-[#910046] text-[12px] md:text-[16px] font-semibold">
                    {item.status}
                  </p>
                </div>
                <button
                  className="px-4 py-2 rounded-md bg-[#910046] text-[#fff8d7] text-[12px] md:text-[16px] hover:bg-[#b44a73] transition"
                  onClick={loadOrderData}
                >
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Order;
