import React from 'react'
import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"

function Background({ heroCount }) {
  const bgStyle =
    "w-full h-full float-left overflow-hidden object-contain md:object-cover bg-[#fff8d7] text-[#910046]";

  if (heroCount === 0) {
    return <img src={back2} alt="" className={bgStyle} />;
  } else if (heroCount === 1) {
    return <img src={back1} alt="" className={bgStyle} />;
  } else if (heroCount === 2) {
    return <img src={back3} alt="" className={bgStyle} />;
  } else if (heroCount === 3) {
    return <img src={back4} alt="" className={bgStyle} />;
  }
}

export default Background;