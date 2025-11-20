import React from 'react'

function Title({ text1, text2, color = "#910046" }) {
  return (
    <div className='inline-flex gap-2 items-center text-center mb-3 text-[35px] md:text-[40px] font-semibold bg-[#fff8d7]'>
      <p style={{ color }}>
        {text1} <span style={{ color }}>{text2}</span>
      </p>
    </div>
  )
}

export default Title
