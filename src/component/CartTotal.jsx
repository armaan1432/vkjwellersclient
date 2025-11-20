import React, { useContext, useState } from "react";
import { shopDataContext } from "../context/ShopContext";
import Title from "./Title";

function CartTotal() {
  const {
    currency,
    delivery_fee,
    getCartAmount,
    cartItem = {},
    products = [],
  } = useContext(shopDataContext);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const selectedProducts = products.filter(
    (p) => cartItem[p._id] && cartItem[p._id] > 0
  );

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendWhatsAppQuery = () => {
    if (selectedProducts.length === 0) {
      alert("Your cart is empty. Please add items first.");
      return;
    }

    const { name, phone, address } = formData;
    if (!name || !phone || !address) {
      alert("Please fill in all the details before sending the query.");
      return;
    }

    const productList = selectedProducts
      .map((p) => `• ${p.name} (Qty: ${cartItem[p._id]})`)
      .join("\n");

    const total = getCartAmount() + delivery_fee;
    const message = encodeURIComponent(
      `Hello, I'm ${name}.\n\nI'd like to enquire about the following products:\n${productList}\n\n💰 Total (approx): ${currency}${total}\n📍 Address: ${address}\n📞 Phone: ${phone}`
    );

    const whatsappNumber = "917355779832";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full lg:ml-[30px] bg-[#fff8d7] text-[#910046] rounded-xl p-[20px] shadow-md">
      <div className="text-xl py-[10px]">
        <Title text1={"CART"} text2={"TOTALS"} color="#910046" />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm p-[30px] border-[2px] border-[#910046] rounded-xl">
        <div className="flex justify-between text-[18px] p-[10px]">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr className="border-[#91004650]" />
        <div className="flex justify-between text-[18px] p-[10px]">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}
          </p>
        </div>
        <hr className="border-[#91004650]" />
        <div className="flex justify-between text-[18px] p-[10px] font-semibold">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>
      </div>

      {/* ✅ WhatsApp Query Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowForm(true)}
          disabled={getCartAmount() === 0}
          className={`px-6 py-3 rounded-md text-[#fff8d7] font-semibold 
          ${
            getCartAmount() === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#910046] hover:bg-[#b3005a] transition"
          }`}
        >
          SEND QUERY VIA WHATSAPP
        </button>
      </div>

      {/* ✅ Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-[#fff8d7] border border-[#910046] rounded-xl p-6 w-[90%] md:w-[400px] text-[#910046]">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Enquiry Details
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-2 mb-3 rounded border border-[#91004670] bg-[#fffaf0] text-[#910046] outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-2 mb-3 rounded border border-[#91004670] bg-[#fffaf0] text-[#910046] outline-none"
            />
            <textarea
              name="address"
              placeholder="Your Address"
              onChange={handleChange}
              className="w-full p-2 mb-3 rounded border border-[#91004670] bg-[#fffaf0] text-[#910046] outline-none"
            ></textarea>

            <p className="text-sm mb-3">
              Enquiring for:
              <br />
              <span className="font-medium">
                {selectedProducts.length > 0
                  ? selectedProducts
                      .map((p) => `${p.name} (x${cartItem[p._id]})`)
                      .join(", ")
                  : "No products selected"}
              </span>
            </p>

            <div className="flex justify-between mt-4">
              <button
                onClick={sendWhatsAppQuery}
                className="px-4 py-2 bg-[#910046] hover:bg-[#b3005a] rounded-md text-[#fff8d7] font-semibold"
              >
                Send WhatsApp
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-[#91004650] hover:bg-[#91004670] rounded-md text-[#fff8d7]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartTotal;
