import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    let navigate = useNavigate()
    return (
        <div className='w-[100vw] h-[100vh] bg-[#fff8d7] text-[#910046] md:text-[70px] text-[30px] flex items-center justify-center flex-col gap-[20px]'>
            404 Page Not Found
            <button 
                className='bg-[#910046] px-[20px] py-[10px] rounded-xl text-[18px] text-[#fff8d7] cursor-pointer hover:bg-[#b44a73] transition'
                onClick={() => navigate("/login")}
            >
                Login
            </button>
        </div>
    )
}

export default NotFound
