import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { shopDataContext } from "../context/ShopContext";

function Nav() {
  const { getCurrentUser, userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { getCartCount } = useContext(shopDataContext);

  const [showProfile, setShowProfile] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="w-full h-[63px] bg-[#fff8d7] fixed top-0 flex items-center justify-between px-4 md:px-8 z-50 shadow-md shadow-[#910046]/30">
      {/* Hamburger + Links */}
      <div className="flex items-center gap-4">
        <FaBars
          className="w-6 h-6 text-[#910046] cursor-pointer md:hidden"
          onClick={() => setShowHamburger((prev) => !prev)}
        />
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5">
          {["/", "/collection", "/about", "/contact"].map((path, i) => (
            <button
              key={i}
              onClick={() => navigate(path)}
              className="text-[#910046] hover:text-[#c00062] transition font-medium"
            >
              {["Home", "Collections", "About", "Contact"][i]}
            </button>
          ))}
        </div>
      </div>

      {/* Centered Logo */}
      <div
        className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToTop}
      >
        <img src={logo} alt="VK Jwellers" className="w-8 md:w-10" />
        <h1 className="text-[#910046] text-lg md:text-xl font-semibold">
          V.K Jwellers
        </h1>
      </div>

      {/* Right Side: Cart + Profile */}
      <div className="flex items-center gap-4 ml-auto">
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <MdOutlineShoppingCart className="w-6 h-6 text-[#910046]" />
          <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-[#910046] text-[#fff8d7] text-xs rounded-full">
            {getCartCount()}
          </span>
        </div>

        {/* Profile / Login */}
        {!userData ? (
          <FaUserCircle
            className="w-6 h-6 text-[#910046] cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          />
        ) : (
          <div
            className="w-7 h-7 bg-[#910046] text-[#fff8d7] font-bold rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name.slice(0, 1).toUpperCase()}
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      {showHamburger && (
        <div className="absolute top-[63px] left-4 bg-[#fff8d7] text-[#910046] rounded-md flex flex-col w-40 p-2 md:hidden shadow-lg shadow-[#910046]/30">
          {["Home", "Collections", "About", "Contact"].map((text, i) => (
            <button
              key={i}
              onClick={() => {
                navigate(["/", "/collection", "/about", "/contact"][i]);
                setShowHamburger(false);
              }}
              className="px-3 py-2 hover:bg-[#910046] hover:text-[#fff8d7] rounded-md text-left transition"
            >
              {text}
            </button>
          ))}
        </div>
      )}

      {/* Profile Dropdown */}
      {showProfile && (
        <div className="absolute top-[63px] right-4 w-44 bg-[#fff8d7] border border-[#910046] rounded-md z-50 shadow-lg shadow-[#910046]/30">
          <ul className="flex flex-col text-[#910046] text-sm">
            {!userData && (
              <li
                className="px-4 py-2 hover:bg-[#910046] hover:text-[#fff8d7] cursor-pointer transition"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}
            {userData && (
              <li
                className="px-4 py-2 hover:bg-[#910046] hover:text-[#fff8d7] cursor-pointer transition"
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                }}
              >
                Logout
              </li>
            )}
            <li
              className="px-4 py-2 hover:bg-[#910046] hover:text-[#fff8d7] cursor-pointer transition"
              onClick={() => {
                navigate("/order");
                setShowProfile(false);
              }}
            >
              Orders
            </li>
            <li
              className="px-4 py-2 hover:bg-[#910046] hover:text-[#fff8d7] cursor-pointer transition"
              onClick={() => {
                navigate("/about");
                setShowProfile(false);
              }}
            >
              About
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
