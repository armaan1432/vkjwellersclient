import React, { useState, useContext } from 'react';
import Logo from "../assets/logo.png";
import { useNavigate, useSearchParams } from 'react-router-dom';
import google from '../assets/google.png';
import { IoEyeOutline, IoEye } from "react-icons/io5";
import { authDataContext } from '../context/AuthContext';
import { userDataContext } from '../context/UserContext';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import Loading from '../component/Loading';
import { toast } from 'react-toastify';

axios.defaults.withCredentials = true;

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  // ---------------------------
  // NORMAL LOGIN
  // ---------------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' }
        }
      );

      await new Promise((resolve) => setTimeout(resolve, 100));
      await getCurrentUser();

      toast.success("User Login Successful");

      navigate(redirectPath);   // 🔥 redirect added here
    } catch (error) {
      toast.error(error.response?.data?.message || "User Login Failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // GOOGLE LOGIN
  // ---------------------------
  const googleLogin = async () => {
    setLoading(true);

    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const result = await axios.post(
        `${serverUrl}/api/auth/googlelogin`,
        { name: user.displayName, email: user.email },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' }
        }
      );

      await new Promise((resolve) => setTimeout(resolve, 100));
      await getCurrentUser();

      toast.success("Google Login Successful");

      navigate(redirectPath);   // 🔥 redirect added here too
    } catch (error) {
      toast.error(error.response?.data?.message || "Google Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-start bg-[#fff8d7] text-[#910046]'>

      {/* Logo */}
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'
        onClick={() => navigate("/")}>
        <img className='w-[40px]' src={Logo} alt="VK Jwellers Logo" />
        <h1 className='text-[22px] font-sans font-semibold'>VK Jwellers</h1>
      </div>

      {/* Heading */}
      <div className='w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px]'>
        <span className='text-[25px] font-semibold'>VK Jwellers Login</span>
        <span className='text-[16px]'>Welcome to VK Jwellers, place your order</span>
      </div>

      {/* Login Card */}
      <div className='max-w-[600px] w-[90%] h-[500px] bg-[#91004610] border border-[#91004640] rounded-xl shadow-lg flex items-center justify-center backdrop-blur-md'>
        <form onSubmit={handleLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>

          {/* Google Login */}
          <div className='w-[90%] h-[50px] bg-[#910046] text-[#fff8d7] font-semibold rounded-lg flex items-center justify-center gap-[10px] py-[10px] cursor-pointer hover:bg-[#b44a73] transition'
            onClick={googleLogin}>
            <img src={google} alt="Google" className='w-[20px]' /> Login with Google
          </div>

          {/* Divider */}
          <div className='w-[100%] flex items-center justify-center gap-[10px] text-[#91004680]'>
            <div className='w-[40%] h-[1px] bg-[#91004680]'></div> OR <div className='w-[40%] h-[1px] bg-[#91004680]'></div>
          </div>

          {/* Inputs */}
          <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
            
            <input
              type="text"
              placeholder='Email'
              className='w-[100%] h-[50px] rounded-lg border border-[#91004680] bg-transparent px-[20px] text-[#910046] placeholder-[#91004680] font-semibold'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type={show ? "text" : "password"}
              placeholder='Password'
              className='w-[100%] h-[50px] rounded-lg border border-[#91004680] bg-transparent px-[20px] text-[#910046] placeholder-[#91004680] font-semibold'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {!show ?
              <IoEyeOutline className='absolute right-[5%] bottom-[57%] w-[20px] h-[20px] cursor-pointer'
                onClick={() => setShow(true)} /> :
              <IoEye className='absolute right-[5%] bottom-[57%] w-[20px] h-[20px] cursor-pointer'
                onClick={() => setShow(false)} />
            }

            {/* Submit Button */}
            <button
              type="submit"
              className='w-[100%] h-[50px] bg-[#910046] hover:bg-[#b44a73] text-[#fff8d7] rounded-lg flex items-center justify-center mt-[20px] font-semibold disabled:opacity-50'
              disabled={loading}
            >
              {loading ? <Loading /> : "Login"}
            </button>

            {/* Signup Link */}
            <p className='flex gap-[10px]'>
              Don't have an account?
              <span className='text-[#b44a73] font-semibold cursor-pointer'
                onClick={() => navigate("/signup")}>
                Create New Account
              </span>
            </p>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
