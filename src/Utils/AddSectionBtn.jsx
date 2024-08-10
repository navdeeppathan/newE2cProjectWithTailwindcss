import React from "react";
import { add3 } from "../assets/Allimages";

const AddSectionBtn = ({ btnText, width }) => {
  return (
    <div
      className={`${width} h-9 border rounded border-[#3366FF] px-4 flex items-center justify-center gap-2 cursor-pointer`}
    >
      <img src={add3} alt="" className="w-3 h-3" />
      <h3 className="font-sans font-semibold text-sm text-center text-[#3366FF]">
        {btnText}
      </h3>
    </div>
  );
};

export default AddSectionBtn;
