import React from "react";
import HeaderStyle from "../../../Utils/HeaderStyle";
import FooterStyle from "../../../Utils/FooterStyle";
import { downArrow, downSymbol } from "../../../assets/Allimages";

const YearOfExp = () => {
  return (
    <div>
      <HeaderStyle
        h1Text={`Did you do any internships during this time?`}
        h3Text={`We can give you better advice and guidance if we know.`}
      />
      <div className="xl:h-[693px] flex flex-col items-center justify-between">
        <div className="py-28 flex flex-col gap-4">
          <div>
            <h3 className="font-sans font-semibold text-base text-[#091E42]">
              How much experience you have?
            </h3>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-between  gap-4">
            <div className="w-72 h-18 px-4 border-2 flex items-center justify-between rounded-lg ">
              <h3 className="font-sans font-semibold text-xl text-center">2</h3>
              <div className="w-14 h-14 rounded flex items-center justify-center">
                <img src={downSymbol} alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="w-72 h-18 px-4 border-2 flex items-center justify-between rounded-lg  ">
              <h3 className="font-sans font-semibold text-xl text-center">
                00
              </h3>
              <div className="w-14 h-14 rounded flex items-center justify-center">
                <img src={downSymbol} alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <FooterStyle />
        </div>
      </div>
    </div>
  );
};

export default YearOfExp;
