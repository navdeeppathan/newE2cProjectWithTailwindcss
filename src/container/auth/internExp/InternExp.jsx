import React, { useState } from "react";
import HeaderStyle from "../../../Utils/HeaderStyle";
import { check, checkbox, square } from "../../../assets/Allimages";
import FooterStyle from "../../../Utils/FooterStyle";

const InternExp = () => {
  const [isChecked, setIsChecked] = useState(null);
  const handleCheck = (id) => {
    setIsChecked(id);
  };

  return (
    <div>
      <HeaderStyle
        h1Text={`Did you do any internships during this time?`}
        h3Text={`We can give you better advice and guidance if we know.`}
      />
      <div className="xl:h-[693px] flex flex-col items-center justify-between">
        <div className="flex flex-col xl:flex-row items-center justify-between py-28 gap-4">
          <div
            className={`w-72 h-18 border-2 flex items-center rounded-lg gap-16 ${
              isChecked === 1 ? "border-blue-500" : "border-2"
            }`}
            onClick={() => handleCheck(1)}
          >
            <div className="w-14 h-14 rounded flex items-center justify-center">
              <img
                src={isChecked === 1 ? check : square}
                alt=""
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-sans font-semibold text-xl text-center">Yes</h3>
          </div>
          <div
            className={`w-72 h-18 border-2 flex items-center rounded-lg gap-16 ${
              isChecked === 2 ? "border-blue-500" : "border-2"
            }`}
            onClick={() => handleCheck(2)}
          >
            <div className="w-14 h-14 rounded flex items-center justify-center">
              <img
                src={isChecked === 2 ? check : square}
                alt=""
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-sans font-semibold text-xl text-center">No</h3>
          </div>
        </div>
        <div>
          <FooterStyle />
        </div>
      </div>
    </div>
  );
};

export default InternExp;
