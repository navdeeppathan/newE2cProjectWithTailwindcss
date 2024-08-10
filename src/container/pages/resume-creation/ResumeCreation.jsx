import React from "react";
import {
  createImg,
  downloadImg,
  E2Cimg,
  upload,
} from "../../../assets/Allimages";

const ResumeCreation = () => {
  return (
    <div className="mx-20 my-10 xl:mx-40">
      <div className=" flex items-center justify-center xl:justify-start">
        <img src={E2Cimg} alt="" className="w-36 h-16 " />
      </div>

      <div className="mt-24 xl:mt-36 ">
        <div>
          <h1 className="font-sans font-bold text-4xl leading-normal text-center text-[#172B4D]">
            How would you like to build your resume?
          </h1>
        </div>
        <div className="flex flex-col gap-10 xl:gap-10 xl:flex-row items-center xl:justify-between mt-16">
          <div className="container w-96 md:w-[548px] xl:w-[548px] h-80 border border-[#454F59] px-6 py-4 rounded-2xl flex flex-col items-center justify-between">
            <div>
              <img src={createImg} alt="" className="w-20 h-20" />
            </div>
            <div className="flex flex-col items-center justify-between gap-8">
              <div>
                <h2 className="font-sans font-bold text-2xl text-center text-[#172B4D]">
                  Start with a new resume
                </h2>
                <h3 className="font-sans font-normal text-base text-center text-[#000000]">
                  Get step-by-step support with expert content suggestions at
                  your fingertips!
                </h3>
              </div>
              <div className="w-40 h-12 rounded-3xl bg-[#3366FF] flex items-center justify-center">
                <button className="font-sans font-bold text-sm text-center text-[#FFFFFF]">
                  Create New
                </button>
              </div>
            </div>
          </div>

          <div className="container w-96 md:w-[548px] xl:w-[548px] h-80 border border-[#454F59] px-6 py-4 rounded-2xl flex flex-col items-center justify-between">
            <div>
              <img src={downloadImg} alt="" className="w-20 h-20" />
            </div>
            <div className="flex flex-col items-center justify-between gap-8">
              <div>
                <h2 className="font-sans font-bold text-2xl text-center text-[#172B4D]">
                  Upload an existing resume
                </h2>
                <h3 className="font-sans font-normal text-base text-center text-[#000000]">
                  Edit your resume using expertly generated content in a fresh,
                  new design.
                </h3>
              </div>
              <div className="w-40 h-12 rounded-3xl bg-[#FFBB4E] flex items-center justify-center gap-4">
                <img src={upload} alt="" />
                <button className="font-sans font-bold text-sm text-center text-[#091E42]">
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  xl:justify-end xl:mx-40 my-4">
        <h3 className="font-sans font-normal text-center text-sm text-[#000000]">
          Acceptable file types: DOC, DOCX, PDF
        </h3>
      </div>
    </div>
  );
};

export default ResumeCreation;
