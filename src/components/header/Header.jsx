import React from "react";
import { arrow, headerimg, picture } from "../../assets/Allimages";

function Header() {
  return (
    <div className="gap-6 flex flex-col text-center items-center justify-between py-8 xl:flex-row xl:py-16 xl:px-40 w-full xl:text-start">
      <div className="w-72 h-auto mb-8 md:w-[742px] md:h-auto xl:w-[490px] xl:h-[376px] xl:mb-0">
        <div>
          <h1 className="px-5 text-4xl leading-normal font-bold text-[#172b4d] md:text-4xl xl:text-5xl xl:px-0 xl:leading-normal">
            Create a job-ready resume in minutes
          </h1>
          <h3 className="mt-4 text-base px-0 xl:text-lg font-normal  text-[#8590a2] md:px-16  md:leading-6 xl:leading-8 xl:w-[460px] xl:px-0">
            Create a beautiful resume quickly with the help of artificial
            intelligence and our customizable templates. Impress your future
            employer with a perfect resume created in minutes.
          </h3>
        </div>
        <div className="mt-8 w-58 h-11 flex items-center justify-center xl:mt-14 xl:ml-0 xl:items-start xl:justify-start">
          <button className="flex items-center gap-4 px-6 py-3  border-[#84a9ff] rounded-3xl bg-[#3366ff] text-white text-sm md:text-base xl:px-8 xl:py-3 border">
            CREATE FREE RESUME
            <img src={arrow} alt="arrow" className="w-3 xl:w-4 h-auto mr-2" />
          </button>
        </div>
      </div>
      <div className=" xl:w-auto shadow-md">
        <img
          src={headerimg}
          alt="Resume header"
          className="w-72 h-52 cursor-pointer rounded-lg md:w-[504px] md:h-[343px] xl:w-[578px]  xl:h-[393px]"
        />
      </div>
    </div>
  );
}

export default Header;
