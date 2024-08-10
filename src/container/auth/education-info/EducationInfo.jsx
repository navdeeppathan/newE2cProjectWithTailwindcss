import React from "react";
import {
  arrow_back,
  calender,
  checkbox,
  downImg,
  E2Cimg,
  userImg,
} from "../../../assets/Allimages";

const EducationInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-center xl:justify-start py-4 xl:py-0 xl:mx-48">
        <img src={E2Cimg} alt="" className="w-36 h-16" />
      </div>
      <hr className="w-full bg-[#DCDFE4] xl:hidden" />
      <div className="h-[1159px] xl:h-[915.77px] mt-6 xl:mt-0 flex flex-col items-center justify-between">
        <div className="h-[700px] flex flex-col items-center justify-evenly">
          <div className="xl:w-36 xl:h-36 rounded-full border-8 border-[#D7F5FF]">
            <img
              src={userImg}
              alt=""
              className=" w-28 h-28 xl:w-32 xl:h-32 rounded-full object-cover"
            />
          </div>
          <div className="w-80 md:w-[556px] xl:w-[746px]">
            <h2 className="font-sans font-bold text-3xl text-[#172B4D] text-center mb-4">
              Great !! Let's delve into the specifics of your education and
              qualifications
            </h2>
            <h3 className="font-sans font-semibold text-xl text-[#8590A2] text-center">
              Tell your experience level and let us unlock the doors to your
              professional journey.
            </h3>
          </div>
          <div className="flex items-center justify-center ">
            <div className="flex flex-col gap-8 w-96 md:w-[556px] xl:w-[741px] h-64 p-4">
              <div>
                <input
                  type="text"
                  placeholder="School / University name"
                  className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900 focus:outline-none focus:border-gray"
                />
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                <div className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900  focus:border-gray flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Qualification"
                    className=" focus:outline-none"
                  />
                  <img src={downImg} alt="" className="w-6 h-6" />
                </div>

                <div className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900  focus:border-gray flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Field of study"
                    className=" focus:outline-none"
                  />
                  <img src={downImg} alt="" className="w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                <div className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900  focus:border-gray flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Start date"
                    className=" focus:outline-none"
                  />
                  <img src={calender} alt="" className="w-4 h-4" />
                </div>

                <div className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900  focus:border-gray flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="End date"
                    className=" focus:outline-none"
                  />
                  <img src={calender} alt="" className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-center xl:justify-end xl:px-48">
                <img src={checkbox} alt="" className="w-8 h-8" />
                <h3 className="font-sans font-normal text-center text-base text-[#000000] text-opacity-60">
                  I am still perusing
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 md:w-[556px] xl:w-[744px] px-6 gap-4 flex items-center justify-center">
          <div className="w-14 h-11 rounded flex items-center justify-center bg-[#F1F2F4]">
            <img src={arrow_back} alt="" className="w-6 h-6 " />
          </div>
          <div className="w-full h-11 rounded bg-[#3366FF] flex items-center justify-center">
            <button className="font-sans font-semibold text-sm text-center text-[#FFFFFF]">
              SAVE AND CONTINUE
            </button>
          </div>
        </div>
      </div>

      <div className="my-10 xl:mt-40">
        <h3 className="font-mono font-normal text-xs xl:text-base tracking-normal text-center text-[#737B7D]">
          © Copyright 2022-2023 · e2c ®· All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default EducationInfo;
