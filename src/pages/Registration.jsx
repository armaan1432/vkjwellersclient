import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEye } from "react-icons/io5";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { authDataContext } from '../context/AuthContext';
import { userDataContext } from '../context/UserContext';
import axios from 'axios';
import { toast } from 'react-toastify';

import Logo from "../assets/logo.png";
import google from '../assets/google.png';
import Loading from '../component/Loading';

function Registration() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/registration`,
        { name, email, password },
        { withCredentials: true }
      );
      getCurrentUser();
      navigate("/");
      toast.success("User Registration Successful");
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("User Registration Failed");
      setLoading(false);
    }
  };

  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      const name = user.displayName;
      const email = user.email;
      await axios.post(
        `${serverUrl}/api/auth/googlelogin`,
        { name, email },
        { withCredentials: true }
      );
      getCurrentUser();
      navigate("/");
      toast.success("User Registration Successful");
    } catch (error) {
      console.error(error);
      toast.error("User Registration Failed");
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#fff8d7] text-[#910046] items-center">
      
      {/* Header */}
      <div 
        className="flex items-center justify-start w-full h-[80px] px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="VK Jwellers" className="w-[40px]" />
        <h1 className="text-[22px] font-sans font-semibold">VK Jwellers</h1>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center justify-center w-full h-[100px] gap-[10px]">
        <span className="text-[25px] font-semibold">Registration Page</span>
        <span className="text-[16px] text-[#910046c7]">Welcome to VK Jwellers, place your order</span>
      </div>

      {/* Form Container */}
      <div className="max-w-[600px] w-[90%] bg-[#91004608] border border-[#91004655] rounded-lg shadow-lg flex items-center justify-center py-[30px]">
        <form 
          onSubmit={handleSignup} 
          className="flex flex-col w-[90%] gap-[20px] items-center"
        >

          {/* Google Signup */}
          <div 
            className="flex items-center justify-center gap-[10px] w-full h-[50px] bg-[#910046] text-[#fff8d7] rounded-lg cursor-pointer hover:bg-[#b3005a] transition-all duration-300"
            onClick={googleSignup}
          >
            <img src={google} alt="Google" className="w-[20px]" /> Register with Google
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center w-full gap-[10px]">
            <div className="flex-1 h-[1px] bg-[#91004655]"></div>
            <span>OR</span>
            <div className="flex-1 h-[1px] bg-[#91004655]"></div>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col gap-[15px] w-full relative">
            <input 
              type="text" 
              placeholder="User Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[50px] px-[20px] bg-transparent border-2 border-[#91004655] rounded-lg shadow-md font-semibold placeholder-[#910046a7] focus:outline-none focus:border-[#910046]"
            />
            <input 
              type="email" 
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[50px] px-[20px] bg-transparent border-2 border-[#91004655] rounded-lg shadow-md font-semibold placeholder-[#910046a7] focus:outline-none focus:border-[#910046]"
            />
            <div className="relative w-full">
              <input 
                type={show ? "text" : "password"} 
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[50px] px-[20px] bg-transparent border-2 border-[#91004655] rounded-lg shadow-md font-semibold placeholder-[#910046a7] focus:outline-none focus:border-[#910046]"
              />
              {show 
                ? <IoEye className="absolute right-[20px] top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShow(false)} />
                : <IoEyeOutline className="absolute right-[20px] top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShow(true)} />
              }
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full h-[50px] bg-[#910046] hover:bg-[#b3005a] text-[#fff8d7] rounded-lg font-semibold text-[17px] flex items-center justify-center transition-all duration-300"
          >
            {loading ? <Loading /> : "Create Account"}
          </button>

          {/* Login Link */}
          <p className="text-[15px]">
            Already have an account?{" "}
            <span 
              className="text-[#b3005a] font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Registration;
