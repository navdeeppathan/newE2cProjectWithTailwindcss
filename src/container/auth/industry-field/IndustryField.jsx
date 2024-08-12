import React, { useState } from "react";
import HeaderStyle from "../../../Utils/HeaderStyle";
import FooterStyle from "../../../Utils/FooterStyle";
import Fields from "./Fields";
import { arrow_back } from "../../../assets/Allimages";

const IndustryField = () => {
  const [onPress, setonPress] = useState(null);

  const handlePress = (id) => {
    setonPress(id);
  };

  return (
    <div>
      <HeaderStyle
        h1Text={`What industry are you making this resume for?`}
        h3Text={`Tell your experience level and let us unlock the doors to your professional journey.`}
      />
      <div className="flex flex-col items-center py-20 ">
        <div className="w-96 md:w-[584px] xl:w-[862px] min-h-80 overflow-y-auto">
          <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-row gap-x-2 gap-y-4  items-center justify-center">
            {Fields.map((title) => (
              <div
                key={title.id}
                className={`cursor-pointer border rounded py-2 px-4 min-w-[90%] md:min-w-[45%] xl:min-w-[calc(100%/4-6rem)] flex items-center justify-center ${
                  onPress === title.id
                    ? "bg-blue-500 text-white"
                    : "bg-white text-[#172B4D]"
                }`}
                onClick={() => handlePress(title.id)}
              >
                <h3 className="font-sans font-semibold text-sm text-center">
                  {title.field}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="w-96 md:w-[556px] xl:w-[744px] px-6 gap-4 flex items-center justify-center">
          <div className="w-14 h-11 rounded flex items-center justify-center bg-[#F1F2F4]">
            <img src={arrow_back} alt="" className="w-6 h-6 " />
          </div>
          <div
            className={`w-full h-11 rounded bg-[#3366FF] flex items-center justify-center
              ${onPress ? "bg-opacity-100" : "bg-opacity-50"}
              `}
          >
            <button className="font-sans font-semibold text-sm text-center text-[#FFFFFF]">
              SAVE AND CONTINUE
            </button>
          </div>
        </div>
        <div className="my-10 xl:mt-36 ">
          <h3 className="font-mono font-normal text-xs xl:text-base tracking-normal text-center text-[#737B7D]">
            © Copyright 2022-2023 · e2c ®· All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IndustryField;
