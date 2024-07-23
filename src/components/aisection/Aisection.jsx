import React from "react";
import { AiSectionImg, arrow } from "../../assets/Allimages";

function Aisection() {
  return (
    <div className=" h-[790px] bg-[#D6E4FF] bg-opacity-30 w-full md:h-auto md:mt-10 xl:h-[604px] xl:mt-0">
      <div className=" py-8 px-10 flex flex-col items-center justify-between md:px-0 xl:flex-row xl:px-40 ">
        <div className="w-72 h-auto mb-10 md:w-[742px] xl:mb-0 xl:w-[576px] xl:h-[356px]">
          <div className="gap-4">
            <h1 className="mb-4 text-center text-4xl leading-normal text-[#091E42] font-semibold md:px-12 xl:px-0 md:text-4xl xl:text-5xl  xl:leading-normal xl:text-start xl:w-[500px]">
              Elevate Your Resume with AI Intelligence
            </h1>
            <h3 className="text-sm text-center text-[#172B4D] leading-6  font-normal md:px-16 xl:px-0 xl:text-base xl:leading-7 xl:text-start">
              E2C, your trusted companion in building the perfect resume. With
              our Chat GPT technology, creating a standout resume has never been
              more intelligent and intuitive. ResumeBot engages in a
              conversation with you, extracting key information and guiding you
              through each section of your resume.
            </h3>
          </div>
          <div className="mt-8 ml-7 w-58 h-11 md:flex md:items-center md:justify-center xl:mt-14 xl:ml-0 xl:items-start xl:justify-start">
            <button className="flex items-center gap-4 px-6 py-3  border-[#84a9ff] rounded-3xl bg-[#3366ff] text-white text-sm md:text-base xl:px-8 xl:py-3 border">
              CREATE FREE RESUME
              <img src={arrow} alt="arrow" className="w-3 xl:w-4 h-auto mr-2" />
            </button>
          </div>
        </div>
        <div>
          <img
            src={AiSectionImg}
            alt=""
            className="w-72 h-80 md:w-[502.29px] md:h-[534px] xl:w-[491px] xl:h-[522px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Aisection;
