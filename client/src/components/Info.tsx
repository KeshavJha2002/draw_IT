// link to github
import React from 'react'
import { FiGithub } from "react-icons/fi";

const Info:React.FC = () => {
  return (
    <a className="text-[#27272c] font-[500] bg-[#cecece] text-[1.4rem] z-10 fixed bottom-[20px] right-[20px] rounded-[8px] flex items-center gap-[8px] px-[15px] py-[15px] no-underline hover:underline hover:text-[#53095e] hover:bg-transparent hover:border-[#53095e] hover:border-solid hover:border-[1px]" href="https://github.com/KeshavJha2002/draw_IT" target="_blank">
        <FiGithub style={{fontSize: '1.5rem'}}/>
        Created by Keshav
      </a>
  )
}

export default Info
