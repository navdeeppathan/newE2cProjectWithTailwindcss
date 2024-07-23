import React from "react";
import { downSymbol } from "../../assets/Allimages";
import Que from "./Que";

const Questions = () => {
  return (
    <div className="px-0 md:px-40 xl:px-40 xl:mt-10">
      <div className="items-center xl:px-24 xl:h-40 pt-10 flex justify-center flex-col">
        <h1 className="text-[#091e42] px-24 pb-4 text-4xl leading-normal md:pb-6  font-semibold text-center xl:text-5xl xl:leading-loose xl:px-0">
          Hear from Our Thriving Users!
        </h1>
        <h3 className="text-[#172b4d] text-base leading-6 px-28 text-center xl:text-base md:px-12 xl:px-0 2xl:px-12">
          Explore the inspiring testimonials from our satisfied users and
          discover how our resume builder application has transformed their
          careers. From landing dream jobs to securing promotions, our users
          have experienced remarkable success with their resumes built using our
          platform.
        </h3>
      </div>
      <div className="bg-white rounded shadow-md w-full h-auto items-center mt-10 xl:mt-32 ">
        {Que.map((que) => (
          <div key={que.id}>
            <div className="px-4 py-6 gap-2.5 flex items-center justify-between">
              <div className="w-auto h-auto">
                <h3 className="text-base leading-7 font-bold text-[#000000] ">
                  {que.text}
                </h3>
              </div>
              <img
                src={downSymbol}
                alt=""
                className="w-6 h-6 items-center font-normal"
              />
            </div>
            {que.hr}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
