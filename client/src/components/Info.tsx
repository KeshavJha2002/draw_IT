// link to github
import React from 'react'
import { FiGithub } from "react-icons/fi";

const Info:React.FC = () => {
  return (
    <a className="text-[#27272c] font-[500] bg-transparent bg-[#cbcbd8] border-none text-[0.9rem] z-10 fixed b-[20px] r-[20px] rounded-[8px] flex items-center gap-[8px] px-[10px] py-[15px] no-underline hover:underline hover:text-[#341539]" href="https://github.com/KeshavJha2002/draw_IT" target="_blank">
        <FiGithub />
        Created by Keshav
      </a>
  )
}

export default Info
