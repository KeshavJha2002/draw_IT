// tools selection
import { Tool, ToolType } from "../types";

import { LuPencil } from "react-icons/lu";
import { FiMinus, FiMousePointer, FiSquare } from "react-icons/fi";
import { IoHandRightOutline, IoText } from "react-icons/io5";

type ToolBoxProps = {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
};

const ToolBox = ({ tool, setTool }: ToolBoxProps) => {
  return (
    <div className="top-[20px] z-10 p-[10px] fixed left-[50%] flex gap-[20px] justify-center rounded-[10px] border-[1px] border-[#c7c7c7] bg-[#e6e6e6] transform -translate-x-1/2 shadow-custom">
      {Object.values(Tool).map((t, index) => (
        <div
          className={`cursor-pointer relative rounded-[5px] border-[1px] p-[10px] hover:bg-[#f0efff] ${tool === t ? "selected" : ""}`}
          key={t}
          onClick={() => setTool(t)}
        >
          <input
            type="radio"
            id={t}
            checked={tool === t}
            onChange={() => setTool(t)}
            readOnly
            className="cursor-pointer absolute w-[20px] h-[20px] opacity-0"
          />
          <label className="cursor-pointer absolute w-[1px] h-[1px] p-[0px] -m-[1px] overflow-hidden whitespace-nowrap" htmlFor={t}>{t}</label>
          {t === "pan" && <IoHandRightOutline />}
          {t === "selection" && <FiMousePointer />}
          {t === "rectangle" && <FiSquare />}
          {t === "line" && <FiMinus />}
          {t === "pencil" && <LuPencil />}
          {t === "text" && <IoText />}
          <span className="absolute bottom-[0px] right-[3px] text-[0.6rem] font-[#b8b8b8]">{index + 1}</span>
        </div>
      ))}
    </div>
  );
}

export default ToolBox;