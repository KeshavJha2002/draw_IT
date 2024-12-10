// zoom and reset
import React from 'react'
import { useAppContext } from '../hooks/useAppContext.tsx'
import {
  HiOutlineArrowUturnLeft,
  HiOutlineArrowUturnRight,
} from "react-icons/hi2";
import { PiMinus, PiPlus } from "react-icons/pi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ControlBar:React.FC = () => {
  const { scale, onZoom, undo, redo } = useAppContext(); 
  return (
    <div className='flex flex-row fixed bottom-[20px] left-[20px] text-[#27272c] font-[500] bg-transparent border-none z-10 gap-[50px] rounded-[8px]'>
      {/* zoom-in, zoom-out, reset */}
      <div className="flex flex-row px-[15px] py-[15px] rounded-[8px] bg-[#cecece] items-center justify-center">
          <Tippy content="Zoom Out">
            <button onClick={() => onZoom(-0.1)} aria-label="Zoom Out" className='border-r-[#333] border-r-[2px] pl-[10px] pr-[25px]'>
              <PiMinus style={{fontSize: '1.1rem'}}/>
            </button>
          </Tippy>
          <Tippy content={`Set scale to 100%`}>
            <button
              onClick={() => onZoom("default")}
              aria-label={`Set scale to 100%`}
              className='text-[1.2rem] px-[30px] border-r-[#333] border-r-[2px]'
            >
              {new Intl.NumberFormat("en-GB", { style: "percent" }).format(
                scale
              )}
            </button>
          </Tippy>
          <Tippy content="Zoom In">
            <button onClick={() => onZoom(0.1)} aria-label="Zoom In" className='pr-[10px] pl-[25px]'>
              <PiPlus style={{fontSize: '1.1rem'}}/>
            </button>
          </Tippy>
        </div>

      {/* undo, redo */}
      <section className="flex items-center justify-center gap-[5px] bg-[#cecece] rounded-[8px] px-[10px] py-[8px]">
        <Tippy content="Undo last action">
          <button onClick={undo} aria-label="Undo last action" className='border-r-[#333] border-r-[2px] pl-[10px] pr-[18px]'>
            <HiOutlineArrowUturnLeft style={{fontSize: '1.2rem'}}/>
          </button>
        </Tippy>
        <Tippy content="Redo last action">
          <button onClick={redo} aria-label="Redo last action" className='pr-[10px] pl-[18px]'>
            <HiOutlineArrowUturnRight style={{fontSize: '1.2rem'}}/>
          </button>
        </Tippy>
      </section>
    </div>
  )
}

export default ControlBar
