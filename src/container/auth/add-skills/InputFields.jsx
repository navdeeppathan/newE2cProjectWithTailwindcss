import React from "react";

const InputFields = ({ src, value, color, onClick, bin, hide }) => {
  return (
    <div>
      <div className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-900  focus:border-gray flex items-center gap-4">
        <img src={src} alt="" className="w-4 h-4" />
        {/* <input
          type="text"
          placeholder={value}
          className=" focus:outline-none"
        /> */}
        <div
          onClick={onClick}
          className="cursor-pointer w-full flex items-center justify-between"
        >
          <h3 className={`font-sans font-normal text-base text-[${color}]`}>
            {value}
          </h3>
          <img src={bin} alt="" className={`w-4 h-4 ${hide}`} />
        </div>
      </div>
    </div>
  );
};

export default InputFields;
