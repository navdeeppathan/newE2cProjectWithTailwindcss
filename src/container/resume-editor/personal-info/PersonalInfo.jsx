import React, { useCallback, useRef, useState } from "react";
import "./scroll.css";

import {
  add,
  add2,
  arrow_back,
  bar,
  blackfram,
  bold_text,
  bullet2,
  bullet_list,
  calenderEnd,
  calenderStart,
  check,
  content,
  down_chevron,
  downArrow,
  downImg,
  downloadBtn,
  downSymbol,
  dropDownArrow,
  e2cImgWhite,
  email,
  file_copy,
  file_copy2,
  flag,
  greenbullet,
  italics,
  keyboard_arrow_left,
  keyboard_arrow_right,
  location,
  nextArrow,
  number,
  phone,
  rate,
  recycleBin,
  red_cross,
  rightArrow,
  square,
  underline,
  upper_arrow,
  userImg,
  view,
} from "../../../assets/Allimages";
import DashboardFields from "./DashboardFields";
import { Avatar, TextField } from "@mui/material";
import CustomTextField from "../../../Utils/CustomTextField";
import AddSectionBtn from "../../../Utils/AddSectionBtn";
import StarTextField from "../../../Utils/StarTextField";

const PersonalInfo = () => {
  const [preview, setPreview] = useState(null);

  const handlePreview = useCallback((id) => {
    setPreview(id);
  }, []);

  const menuRef = useRef();

  const openMenuRef = () => {
    menuRef.current.style.left = "0";
  };
  const closeMenuRef = () => {
    menuRef.current.style.left = "-568px";
  };

  const [headerText, setHeaderText] = useState("Personal information");
  const [headerImg, setHeaderImg] = useState(blackfram);
  const [isActiveComponent, setIsActiveComponent] = useState(
    "Personal information"
  );
  const handleOptions = useCallback((dasboard) => {
    setHeaderText(dasboard.txtNm);
    setIsActiveComponent(dasboard.txtNm);
    setHeaderImg(dasboard.grayImg);
  }, []);

  return (
    <div className="flex w-full ">
      {/* Dashboard Page */}
      <div className="bg-[#091E42] w-[15%] min-h-screen hidden xl:block">
        <div>
          <img src={e2cImgWhite} alt="" className="w-28 h-16" />
        </div>

        <div className="pt-8">
          {/* <div className="w-full h-14 bg-[#172B4D] flex items-center px-6 py-3 gap-2">
            <div className="w-6 h-6 bg-[#FFBB4E] rounded flex items-center justify-center">
              <img src={blackfram} alt="" className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-semibold text-sm text-white ">
              Personal info
            </h3>
          </div> */}
          <div>
            {DashboardFields.map((dasboard) => (
              <div
                key={dasboard.id}
                className={`w-full h-14 flex items-center px-6 py-3 gap-2 cursor-pointer
                  ${isActiveComponent === dasboard.txtNm ? "bg-[#172B4D]" : ""}
                  `}
                onClick={() => handleOptions(dasboard)}
              >
                <div
                  className={`w-6 h-6  rounded flex items-center justify-center
                  ${
                    isActiveComponent === dasboard.txtNm
                      ? "bg-[#FFBB4E]"
                      : "bg-[#D6E4FF4D]"
                  }
                  `}
                >
                  <img
                    src={
                      isActiveComponent === dasboard.txtNm
                        ? dasboard.blackImg
                        : dasboard.whiteImg
                    }
                    alt=""
                    className="w-4 h-4"
                  />
                </div>
                <h3 className="font-sans font-semibold text-sm text-white ">
                  {dasboard.txtNm}
                </h3>
              </div>
            ))}
          </div>

          <div className="w-40  h-11 border border-[#9BB4CA7A] rounded bg-[#A6C5E229] flex items-center mx-6 my-12 px-2  gap-2">
            <img src={add} alt="" className="w-6 h-6" />
            <h3 className="font-sans font-semibold text-sm text-white text-center">
              Add section
            </h3>
            <img src={rightArrow} alt="" className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Resume Edit Screen */}
      <div className="w-full xl:w-[85%]">
        {/* header */}
        <div>
          <div className=" px-6 h-16 flex items-center justify-between">
            <div className="flex items-center  gap-2">
              <div className="w-8 h-8 bg-[#D6E4FF4D] rounded flex items-center justify-center">
                <img
                  src={headerImg}
                  alt=""
                  className="w-6 h-6 hidden xl:block"
                />
                {preview === 1 ? (
                  <img
                    src={arrow_back}
                    alt=""
                    className="w-5 h-5 block xl:hidden cursor-pointer "
                    onClick={() => handlePreview(0)}
                  />
                ) : (
                  <img
                    src={bar}
                    alt=""
                    className="w-6 h-6 block xl:hidden cursor-pointer"
                    onClick={openMenuRef}
                  />
                )}
              </div>

              <h2 className="font-sans font-semibold text-xl text-[#091E42] hidden xl:block">
                {headerText}
              </h2>
            </div>
            <div className="xl:hidden">
              <h2 className="font-sans font-semibold text-xl text-[#091E42]">
                {preview ? "Resume Preview" : "Personal information"}
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <Avatar alt="Remy Sharp" src={userImg} />
              <img
                src={downSymbol}
                alt=""
                className="w-4 h-4 hidden xl:block"
              />
            </div>
          </div>
          <hr className="w-screen border border-[#DCDFE4]" />
        </div>
        <div
          className="xl:hidden fixed flex flex-col bg-[#091e424f] items-start top-0 gap-5  shadow-2xl w-full h-full z-50 transition-left duration-500 left-[-568px]"
          ref={menuRef}
        >
          <DashboardMenu closeMenuRef={closeMenuRef} />
        </div>

        <div
          className={`xl:hidden flex items-center justify-between p-6 ${
            preview === 1 ? "hidden" : "block"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-36 xl:w-40 h-9 rounded shadow-md bg-[#3366FF] flex items-center justify-center gap-2 cursor-pointer">
              <h3 className="font-sans font-semibold text-sm text-white ">
                Change Template
              </h3>
            </div>
            <div className="w-12 xl:w-40 h-9 rounded bg-[#3366FF] shadow-md flex items-center justify-center cursor-pointer">
              <img src={downloadBtn} alt="" className="w-4 h-4 " />
            </div>
          </div>
          <div
            className="w-32 xl:w-40 h-9 rounded bg-[#FFBB4E] shadow-md flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => handlePreview(1)}
          >
            <img src={view} alt="" className="w-4 h-4  xl:hidden" />
            <h3 className="font-sans font-semibold text-sm text-[#091E42] ">
              Preview
            </h3>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row  xl:flex">
          {/* information section  */}
          <div className=" xl:w-[46%]">
            {preview === 1 ? (
              <Preview />
            ) : (
              <InfoSection isActiveComponent={isActiveComponent} />
            )}
          </div>
          {/* Resume Template */}
          {/* hidden xl:block */}
          <div className="xl:w-[54%] bg-[#D6E4FF4D] hidden xl:block ">
            <ResumeTemplate />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardMenu = ({ closeMenuRef }) => {
  return (
    <div className="bg-[#091E42] h-full">
      <div onClick={closeMenuRef}>
        <img src={e2cImgWhite} alt="" className="w-28 h-16 cursore-pointer" />
      </div>

      <div className="pt-8">
        <div className="w-full h-14 bg-[#172B4D] flex items-center px-6 py-3 gap-2">
          <div className="w-6 h-6 bg-[#FFBB4E] rounded flex items-center justify-center">
            <img src={blackfram} alt="" className="w-5 h-5" />
          </div>
          <h3 className="font-sans font-semibold text-sm text-white ">
            Personal info
          </h3>
        </div>
        <div>
          {DashboardFields.map((dasboard) => (
            <div
              key={dasboard.id}
              className="w-full h-14 flex items-center px-6 py-3 gap-2"
            >
              <div className="w-6 h-6 bg-[#D6E4FF4D] rounded flex items-center justify-center">
                <img src={dasboard.whiteImg} alt="" className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-semibold text-sm text-white ">
                {dasboard.txtNm}
              </h3>
            </div>
          ))}
        </div>

        <div className="w-40  h-11 border border-[#9BB4CA7A] rounded bg-[#A6C5E229] flex items-center mx-6 my-12 px-2  gap-2">
          <img src={add} alt="" className="w-6 h-6" />
          <h3 className="font-sans font-semibold text-sm text-white text-center">
            Add section
          </h3>
          <img src={rightArrow} alt="" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

function Preview() {
  return (
    <div className="px-2">
      <div className="w-full  flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-[100%] h-[456px] xl:h-[790px]  rounded m-4 shadow-md">
            <div className="flex flex-row">
              {/* left Container */}
              <div className="w-[37.7%] h-[456px] xl:h-[790px] bg-[#1B6E8C] py-4 rounded-s">
                {/* light Color */}
                <div className="bg-[#BFDBF852] h-auto py-2">
                  {/* header Image and Name */}
                  <div>
                    <Header />
                  </div>
                  {/* contact section */}
                  <div>
                    <Contact />
                  </div>
                </div>

                {/* skill section */}
                <div>
                  <Skills />
                </div>
              </div>

              {/* right section */}
              <div className="w-[62.3%] h-[456px] xl:h-[790px] bg-white rounded-e">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col gap-6 p-4">
                    <Summary />
                    <Eduction />
                    <InternShipExperience />
                    <div>
                      <Project />

                      <ContentButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[100%] h-[456px] xl:h-[790px]  rounded m-4 shadow-md">
            <div className="flex flex-row">
              {/* left Container */}
              <div className="w-[37.7%] h-[456px] xl:h-[790px] bg-[#1B6E8C] py-4 rounded-s">
                {/* light Color */}

                {/* skill section */}
                <div>
                  <Hobbies />
                </div>
                <div className="bg-[#BFDBF852] h-auto py-2">
                  {/* header Image and Name */}

                  {/* contact section */}
                  <div>
                    <Languages />
                  </div>
                </div>
              </div>

              {/* right section */}
              <div className="w-[62.3%] h-full bg-white rounded-e">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col gap-6 p-4">
                    <Certification />
                  </div>
                  <div className="bg-[#091E420F] h-auto p-4">
                    <Achievements />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ResumeTemplate = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = 2;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : prevIndex));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalSlides ? prevIndex + 1 : prevIndex
    );
  });

  return (
    <div>
      <div className="bg-[#D6E4FF4D] px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="w-40 h-9 rounded bg-[#3366FF] flex items-center justify-center gap-2">
            <img src={file_copy2} alt="" className="w-4 h-4" />
            <h3 className="font-sans font-semibold text-sm text-white ">
              Change Template
            </h3>
          </div>
          {/* Navigation Control */}
          <div className="w-40 h-9 rounded  flex items-center justify-center gap-2">
            <button onClick={handlePrev}>
              <img
                src={keyboard_arrow_left}
                alt="Previous"
                className="w-6 h-6 cursor-pointer"
              />
            </button>
            <h3 className="font-sans font-bold text-base text-[#091E42] ">
              {currentIndex}/{totalSlides}
            </h3>
            <button onClick={handleNext}>
              <img
                src={keyboard_arrow_right}
                alt="Next"
                className="w-6 h-6 cursor-pointer"
              />
            </button>
          </div>
          <div className="w-28 h-9 rounded bg-[#3366FF] flex items-center justify-center gap-2">
            <h3 className="font-sans font-semibold text-sm text-white ">
              Download
            </h3>
            <img src={down_chevron} alt="" className="w-2 h-2" />
          </div>
        </div>
      </div>
      {/* Resume Template Image */}
      {/* slides Content */}
      <div className="w-full  flex items-center justify-center">
        {currentIndex === 1 ? (
          <div className="w-[100%] h-[456px] xl:h-[790px]  rounded m-4 shadow-md">
            <div className="flex flex-row">
              {/* left Container */}
              <div className="w-[37.7%] h-[456px] xl:h-[790px] bg-[#1B6E8C] py-4 rounded-s">
                {/* light Color */}
                <div className="bg-[#BFDBF852] h-auto py-2">
                  {/* header Image and Name */}
                  <div>
                    <Header />
                  </div>
                  {/* contact section */}
                  <div>
                    <Contact />
                  </div>
                </div>

                {/* skill section */}
                <div>
                  <Skills />
                </div>
              </div>

              {/* right section */}
              <div className="w-[62.3%] h-[456px] xl:h-[790px] bg-white rounded-e">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col gap-6 p-4">
                    <Summary />
                    <Eduction />
                    <InternShipExperience />
                    <div>
                      <Project />

                      <ContentButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <div className="w-[100%] h-[456px] xl:h-[790px]  rounded m-4 shadow-md">
              <div className="flex flex-row">
                {/* left Container */}
                <div className="w-[37.7%] h-[456px] xl:h-[790px] bg-[#1B6E8C] py-4 rounded-s">
                  {/* light Color */}

                  {/* skill section */}
                  <div>
                    <Hobbies />
                  </div>
                  <div className="bg-[#BFDBF852] h-auto py-2">
                    {/* header Image and Name */}

                    {/* contact section */}
                    <div>
                      <Languages />
                    </div>
                  </div>
                </div>

                {/* right section */}
                <div className="w-[62.3%] h-full bg-white rounded-e">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col gap-6 p-4">
                      <Certification />
                    </div>
                    <div className="bg-[#091E420F] h-auto p-4">
                      <Achievements />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 xl:gap-4">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="font-sans font-semibold text-[8.08px] xl:text-sm text-[#172B4D]">
            Achievements
          </h3>
          <div className="flex items-center ">
            <hr className="w-[15%] h-0.5 xl:h-1 bg-[#1B6E8C]" />
            <hr className="w-[85%] h-px bg-[#1B6E8C]" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-1">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <h3 className=" font-sans font-bold text-[6.35px] xl:text-xs text-[#172B4D]">
              Academic Excellence:
              <span className=" font-normal">
                Achieved a consistently high GPA throughout the academic career,
                receiving honors and recognition for outstanding performance.
              </span>
            </h3>
          </div>
          <div className="flex items-baseline gap-1">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <h3 className=" font-sans font-bold text-[6.35px] xl:text-xs text-[#172B4D]">
              Hackathon Participation:
              <span className=" font-normal">
                Participated in a coding hackathon and secured a top position,
                showcasing problem-solving abilities and teamwork.
              </span>
            </h3>
          </div>
          <div className="flex items-baseline gap-1">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <h3 className=" font-sans font-bold text-[6.35px] xl:text-xs text-[#172B4D]">
              Sports Achievement:
              <span className=" font-normal">
                Won first place in an intercollegiate sports competition,
                exhibiting dedication, teamwork, and sportsmanship.
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certification = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 xl:gap-4">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="font-sans font-semibold text-[8.08px] xl:text-sm text-[#172B4D]">
            Project
          </h3>
          <div className="flex items-center ">
            <hr className="w-[15%] h-0.5 xl:h-1 bg-[#1B6E8C]" />
            <hr className="w-[85%] h-px bg-[#1B6E8C]" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-1">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <h3 className=" font-sans font-bold text-[6.35px] xl:text-xs text-[#172B4D]">
              Certification in Web Design:
              <span className=" font-normal">
                Completed a web design certification course that covered HTML,
                CSS, and responsive design principles.
              </span>
            </h3>
          </div>
          <div className="flex items-baseline gap-1">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <h3 className=" font-sans font-bold text-[6.35px] xl:text-xs text-[#172B4D]">
              Google Analytics Certification:
              <span className=" font-normal">
                Earned a certification in Google Analytics, showcasing skills in
                web traffic analysis and data-driven decision-making.
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// slide 2 content
const Hobbies = () => {
  return (
    <div className="h-2/5 py-4">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[80%] flex flex-col gap-3 xl:gap-5">
          <div className="flex flex-col gap-1 xl:gap-2">
            <h3 className="font-sans font-medium text-[8.08px] xl:text-sm text-white">
              Hobbies
            </h3>
            <div className="flex items-center">
              <hr className="w-[15%] h-[0.1rem] xl:h-1 bg-white" />
              <hr className="w-[85%] h-px bg-[#DCDFE4]" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 xl:gap-2">
            <div className="flex gap-1 xl:gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-[0.1rem] xl:w-1 h-[0.1rem] xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Travel and Exploration
              </h3>
            </div>
            <div className="flex gap-1 xl:gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-[0.1rem] xl:w-1 h-[0.1rem] xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Reading
              </h3>
            </div>
            <div className="flex gap-1 xl:gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-[0.1rem] xl:w-1 h-[0.1rem] xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Creative Arts
              </h3>
            </div>
            <div className="flex gap-1 xl:gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-[0.1rem] xl:w-1 h-[0.1rem] xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Writing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Languages = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="w-[80%] flex flex-col gap-3 xl:gap-4">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="font-sans font-medium text-[8.08px] xl:text-sm text-white">
            Languages
          </h3>
          <div className="flex items-center ">
            <hr className="w-[15%] h-0.5 xl:h-1 bg-white" />
            <hr className="w-[85%] h-px bg-[#DCDFE4]" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 xl:gap-2 items-center">
            <img
              src={bullet2}
              alt=""
              className="w-[0.1rem] xl:w-1 h-[0.1rem] xl:h-1 rounded-full"
            />
            <h3 className="font-sans font-light text-[6.93px] xl:text-xs text-white">
              English
            </h3>
          </div>
          <div className="flex gap-1 px-3.5">
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-1 xl:gap-2 items-center">
            <img
              src={bullet2}
              alt=""
              className="w-[0.1rem] xl:w-1 h-[0.1rem] xl:h-1 rounded-full"
            />
            <h3 className="font-sans font-light text-[6.93px] xl:text-xs text-white">
              Kannada
            </h3>
          </div>
          <div className="flex gap-1 px-3.5">
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 xl:gap-2 items-center">
            <img
              src={bullet2}
              alt=""
              className="w-[0.1rem] xl:w-1 h-[0.1rem] xl:h-1 rounded-full"
            />
            <h3 className="font-sans font-light text-[6.93px] xl:text-xs text-white">
              Hindi
            </h3>
          </div>
          <div className="flex gap-1 px-3.5">
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
            <img
              src={rate}
              alt=""
              className="w-3 h-3 xl:w-4 xl:h-4  rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// right section
const Summary = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 xl:gap-2">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="font-sans font-semibold text-[8.08px] xl:text-sm text-[#172B4D]">
            Summary
          </h3>
          <div className="flex items-center ">
            <hr className="w-[15%] h-0.5 xl:h-1 bg-[#1B6E8C] " />
            <hr className="w-[85%] h-px bg-[#1B6E8C]" />
          </div>
        </div>
        <div>
          <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
            Motivated and enthusiastic engineering graduate with a passion for
            innovation and problem-solving. Strong educational background in
            engineering coupled with a project experience in developing an
            innovative pool vacuum. Eager to apply theoretical knowledge and
            practical skills to contribute to a dynamic engineering team.
            Committed to continuous learning and professional growth
          </h3>
        </div>
      </div>
    </div>
  );
};

const Eduction = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 xl:gap-2">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="font-sans font-semibold text-[8.08px] xl:text-sm text-[#172B4D]">
            Education
          </h3>
          <div className="flex items-center ">
            <hr className="w-[15%] h-0.5 xl:h-1 bg-[#1B6E8C]" />
            <hr className="w-[85%] h-px bg-[#1B6E8C]" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-sans font-bold text-[6.35px] xl:text-xs text-[#172B4D]">
            Bachelor of Engineering in Computer Science
          </h3>
          <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
            AMC Engineering College, Bangalore (2020-Persuing)
          </h3>
        </div>
      </div>
    </div>
  );
};
const InternShipExperience = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 xl:gap-4">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="font-sans font-semibold text-[8.08px] xl:text-sm text-[#172B4D]">
            Internship Experience
          </h3>
          <div className="flex items-center ">
            <hr className="w-[15%] h-[0.15rem] xl:h-1 bg-[#1B6E8C]" />
            <hr className="w-[85%] h-px bg-[#1B6E8C]" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-sans font-bold text-[6.35px] xl:text-xs text-[#172B4D]">
            [Specify the company name]
          </h3>
          <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
            [ Specify duration of your internship ]
          </h3>
          <div className="flex items-baseline  gap-1 ">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <div>
              <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
                Completed [duration] internship at [Company Name] in [Specify
                the area or field of your internship].
              </h3>
            </div>
          </div>
          <div className="flex items-baseline  gap-1 ">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <div>
              <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
                Assisted [team/department] in [describe your key
                responsibilities and tasks].
              </h3>
            </div>
          </div>
          <div className="flex items-baseline  gap-1 ">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <div>
              <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
                Collaborated with team members to [describe any significant
                projects or achievements].
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Project = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 xl:gap-4">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="font-sans font-semibold text-[8.08px] xl:text-sm text-[#172B4D]">
            Project
          </h3>
          <div className="flex items-center ">
            <hr className="w-[15%] h-0.5 xl:h-1 bg-[#1B6E8C]" />
            <hr className="w-[85%] h-px bg-[#1B6E8C]" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-sans font-bold text-[6.35px] xl:text-xs text-[#172B4D]">
            The Engineering of an Innovative Pool Vacuum
          </h3>
          <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
            [ Specify duration of your internship ]
          </h3>
          <div className="flex items-baseline  gap-1 ">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <div>
              <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
                Led a team of [number of team members] in developing an
                innovative pool vacuum as part of the final year project.
              </h3>
            </div>
          </div>
          <div className="flex items-baseline  gap-1 ">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <div>
              <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
                Designed and prototyped a pool vacuum system that improved
                efficiency and reduced maintenance efforts.
              </h3>
            </div>
          </div>
          <div className="flex items-baseline  gap-1 ">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <div>
              <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
                Conducted extensive research on pool cleaning methods, existing
                technologies, and user requirements.
              </h3>
            </div>
          </div>
          <div className="flex items-baseline gap-1 ">
            <img
              src={greenbullet}
              alt=""
              className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
            />
            <div>
              <h3 className="font-sans font-normal text-[6.35px] xl:text-xs text-[#172B4D]">
                Utilized engineering principles to analyze and optimize the
                design for performance and reliability.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentButton = () => {
  return (
    <div className="xl:flex items-end justify-end hidden">
      <div className="w-12 h-12 bg-[#FFBB4E] rounded-full shadow-lg flex items-center justify-center">
        <img src={content} alt="" className="w-4 h-4" />
      </div>
    </div>
  );
};

// left Section
const Header = () => {
  return (
    <div className=" flex flex-col items-center xl:py-4 gap-2 xl:gap-0">
      <div className="rounded-full flex items-center justify-center w-16 h-16  xl:w-28 xl:h-28 border-2 border-white">
        <div className="rounded-full">
          <img
            src={userImg}
            alt=""
            className="w-14 h-14 xl:w-24 xl:h-24 rounded-full object-cover "
          />
        </div>
      </div>
      <div>
        <h2 className="font-sans font-normal text-xs xl:text-xl text-white">
          <span className="font-bold">Jessica</span> Robertson
        </h2>
      </div>
      <div>
        <h3 className="font-sans font-light text-[0.6rem] xl:text-base text-white">
          Fresher
        </h3>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="w-[80%] flex flex-col gap-3 xl:gap-4">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="font-sans font-medium text-[8.08px] xl:text-sm text-white">
            Contact
          </h3>
          <div className="flex items-center ">
            <hr className="w-[15%] h-0.5 xl:h-1 bg-white" />
            <hr className="w-[85%] h-px bg-[#DCDFE4]" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 xl:gap-4">
          <div className="flex gap-1 xl:gap-2 items-center">
            <img
              src={phone}
              alt=""
              className="w-3 h-3 xl:w-5 xl:h-5  rounded-sm"
            />

            <h3 className="font-sans font-light text-[6.93px] xl:text-xs text-white">
              +91 9712345678
            </h3>
          </div>
          <div className="flex gap-1 xl:gap-2 items-center ">
            <img
              src={email}
              alt=""
              className="w-3 h-3 xl:w-5 xl:h-5 rounded-sm"
            />

            <h3 className="font-sans font-light text-[6.93px] xl:text-xs text-white">
              lauraanderson@gmail.com
            </h3>
          </div>
          <div className="flex gap-1 xl:gap-2 items-center">
            <img
              src={location}
              alt=""
              className="w-3 h-3 xl:w-5 xl:h-5 rounded-sm"
            />

            <h3 className="font-sans font-light text-[6.93px] xl:text-xs text-white">
              Plot No. 7 1st Main Road Karnataka, Bangalore-56078
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
const Skills = () => {
  return (
    <div className="h-2/5 py-4">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[80%] flex flex-col gap-3 xl:gap-5">
          <div className="flex flex-col gap-1 xl:gap-2">
            <h3 className="font-sans font-medium text-[8.08px] xl:text-sm text-white">
              Skills
            </h3>
            <div className="flex items-center">
              <hr className="w-[15%] h-[0.15rem] xl:h-1 bg-white" />
              <hr className="w-[85%] h-px bg-[#DCDFE4]" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 xl:gap-2">
            <div className="flex gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-0.5 xl:w-1 h-0.5 xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Problem Solving
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-0.5 xl:w-1 h-0.5 xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Technical Documentation
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-0.5 xl:w-1 h-0.5 xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Prototyping and Testing
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-0.5 xl:w-1 h-0.5 xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Research and Development
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-0.5 xl:w-1 h-0.5 xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Project Management
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={bullet2}
                alt=""
                className="w-[0.15rem] xl:w-1 h-[0.15rem] xl:h-1 rounded-full"
              />

              <h3 className="font-sans font-light text-[6.35px] xl:text-xs text-white">
                Communication Skills
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoSection = ({ isActiveComponent }) => {
  const [onClickAddress, setOnClickAddress] = useState(2);

  const handleClick = useCallback((id) => {
    setOnClickAddress(id);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-6 py-4 ">
      {isActiveComponent === "Personal information" && (
        <div className="w-full flex flex-col gap-4">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-semibold text-sm text-[#091E42]">
              GENERAL INFORMATION
            </h3>
            <img src={downArrow} alt="" className="w-2 h-2" />
          </div>
          {onClickAddress === 1 && (
            <div className="h-96 xl:h-screen flex flex-col  gap-8">
              <div
                className="px-4 w-full bg-[#D6E4FF4D] flex items-center justify-between h-11 rounded cursor-pointer"
                onClick={() => handleClick(2)}
              >
                <h3 className="font-sans font-semibold text-sm text-[#091E42]">
                  ADDRESS
                </h3>
                <img src={upper_arrow} alt="" className="w-2 h-2" />
              </div>
              <div>
                <TextField
                  label="Address"
                  variant="outlined"
                  className="w-full h-14 "
                  type="text"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#B3B9C4",
                      fontSize: "1rem",

                      // Default label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#B3B9C4", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#091E42",
                      "& fieldset": {
                        borderColor: "#B3B9C4",
                        borderRadius: "0.5rem", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#B3B9C4", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#B3B9C4", // Border color when focused
                      },
                    },
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <TextField
                    label="Zip Code"
                    variant="outlined"
                    className="w-full h-14 "
                    type="text"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "#B3B9C4",
                        fontSize: "1rem",

                        // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#B3B9C4", // Label color when focused
                      },
                      "& .MuiOutlinedInput-root": {
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#091E42",
                        "& fieldset": {
                          borderColor: "#B3B9C4",
                          borderRadius: "0.5rem", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#B3B9C4", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#B3B9C4", // Border color when focused
                        },
                      },
                    }}
                  />
                </div>
                <div>
                  <TextField
                    label="Country"
                    variant="outlined"
                    className="w-full h-14 "
                    type="text"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "#B3B9C4",
                        fontSize: "1rem",

                        // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#B3B9C4", // Label color when focused
                      },
                      "& .MuiOutlinedInput-root": {
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#091E42",
                        "& fieldset": {
                          borderColor: "#B3B9C4",
                          borderRadius: "0.5rem", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#B3B9C4", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#B3B9C4", // Border color when focused
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <TextField
                    label="State"
                    variant="outlined"
                    className="w-full h-14 "
                    type="text"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "#B3B9C4",
                        fontSize: "1rem",

                        // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#B3B9C4", // Label color when focused
                      },
                      "& .MuiOutlinedInput-root": {
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#091E42",
                        "& fieldset": {
                          borderColor: "#B3B9C4",
                          borderRadius: "0.5rem", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#B3B9C4", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#B3B9C4", // Border color when focused
                        },
                      },
                    }}
                  />
                </div>
                <div>
                  <TextField
                    label="City"
                    variant="outlined"
                    className="w-full h-14 "
                    type="text"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "#B3B9C4",
                        fontSize: "1rem",

                        // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#B3B9C4", // Label color when focused
                      },
                      "& .MuiOutlinedInput-root": {
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#091E42",
                        "& fieldset": {
                          borderColor: "#B3B9C4",
                          borderRadius: "0.5rem", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#B3B9C4", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#B3B9C4", // Border color when focused
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {onClickAddress === 2 && (
            <div className="w-full flex flex-col gap-7">
              <div className=" flex items-end justify-center xl:justify-start gap-4">
                <img
                  src={userImg}
                  alt=""
                  className="w-24 h-24 rounded-lg object-cover cursor-pointer"
                />
                <div className=" flex flex-col items-center gap-2">
                  <div className="w-44 h-7 border rounded border-[#3366FF] px-4 flex items-center justify-center gap-2 cursor-pointer">
                    <img src={file_copy} alt="" className="w-4 h-4" />
                    <h3 className="font-sans font-semibold text-sm text-center text-[#3366FF]">
                      Change picture
                    </h3>
                  </div>
                  <div className="w-44 h-7 border rounded border-[#FF3333] px-4 flex items-center justify-center gap-2 cursor-pointer">
                    <img src={red_cross} alt="" className="w-4 h-4" />
                    <h3 className="font-sans font-semibold text-sm text-center text-[#FF3333]">
                      Remove picture
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  className="w-full h-14 "
                  type="text"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#B3B9C4",
                      fontSize: "1rem",

                      // Default label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#B3B9C4", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#091E42",
                      "& fieldset": {
                        borderColor: "#B3B9C4",
                        borderRadius: "0.5rem", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#B3B9C4", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#B3B9C4", // Border color when focused
                      },
                    },
                  }}
                />
              </div>
              <div className="w-full gap-2 h-14 border-2 border-gray-300 rounded-lg px-4 text-gray-900   flex items-center ">
                <img src={flag} alt="" className="w-8 h-6" />
                <img src={downImg} alt="" className=" w-6 h-6" />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-14 border-2 border-gray-300 focus:outline-none px-2 border-r-white font-sans font-semibold text-base text-[#091E42]"
                />
              </div>
              <div>
                <TextField
                  label="Email"
                  variant="outlined"
                  className="w-full h-14 "
                  type="email"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#B3B9C4",
                      fontSize: "1rem",

                      // Default label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#B3B9C4", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#091E42",
                      "& fieldset": {
                        borderColor: "#B3B9C4",
                        borderRadius: "0.5rem", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#B3B9C4", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#B3B9C4", // Border color when focused
                      },
                    },
                  }}
                />
              </div>
              <div className="py-8">
                <div
                  className="w-full xl:w-48 h-9 border rounded border-[#3366FF] px-4 flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleClick(1)}
                >
                  <img src={add2} alt="" className="w-4 h-4" />
                  <h3 className="font-sans font-semibold text-sm text-center text-[#3366FF]">
                    ADD ADDRESS
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="w-full">
        {isActiveComponent === "Education" && <Education />}

        {isActiveComponent === "Internship" && <Internship />}
        {isActiveComponent === "Projects" && <Projects />}
        {isActiveComponent === "Skills" && <DashboardSkills />}
        {isActiveComponent === "Certification" && <DashboardCertification />}
        {isActiveComponent === "Achievements" && <DashboardAchievements />}
        {isActiveComponent === "Hobbies" && <DashboardHobbies />}
        {isActiveComponent === "Languages" && <DashboardLanguages />}
      </div>

      <div className="w-full gap-4 flex items-center justify-center cursor-pointer">
        <div className="w-14 h-11 rounded flex items-center justify-center bg-[#F1F2F4]">
          <img src={arrow_back} alt="" className="w-6 h-6 " />
        </div>
        <div className="w-full h-11 rounded bg-[#3366FF] flex items-center justify-center gap-2">
          <button className="font-sans font-semibold text-sm text-center text-[#FFFFFF]">
            NEXT
          </button>
          <img src={nextArrow} alt="" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

//Dashboard Fields onClick show these data
const Education = () => {
  const [ischeck, setIsCheck] = useState(false);

  const handleIsCheck = useCallback(() => {
    setIsCheck(!ischeck);
  });

  return (
    <div className="w-full flex flex-col gap-6 py-4">
      <div>
        <CustomTextField label={"School / University name"} />
      </div>
      <div>
        <CustomTextField
          label={"Qualification"}
          imgSrc={dropDownArrow}
          width={10}
          height={10}
        />
      </div>
      <div>
        <CustomTextField
          label={"Field of study"}
          imgSrc={dropDownArrow}
          width={10}
          height={10}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <CustomTextField
            label={"Start year"}
            imgSrc={calenderStart}
            width={24}
            height={24}
          />
        </div>
        <div className={`flex flex-col gap-4 `}>
          <CustomTextField
            label={"End date"}
            imgSrc={calenderEnd}
            width={24}
            height={24}
            opacity={`${ischeck ? "opacity-50" : "opacity-100"}`}
          />
          <div className="flex items-center gap-4 " onClick={handleIsCheck}>
            {/* img-sqaure,check */}
            <img src={ischeck ? check : square} alt="" className="w-4 h-4" />
            <h3>I am still perusing</h3>
          </div>
        </div>
      </div>
      <div className="py-9">
        <AddSectionBtn width="xl:w-60 w-full" btnText={"ADD ANOTHER SECTION"} />
      </div>
    </div>
  );
};

const Internship = () => {
  const [ischeck, setIsCheck] = useState(false);

  const handleIsCheck = useCallback(() => {
    setIsCheck(!ischeck);
  });

  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <CustomTextField label={"Name of the company"} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <CustomTextField
            label={"Start year"}
            imgSrc={calenderStart}
            width={24}
            height={24}
          />
        </div>
        <div className={`flex flex-col gap-4 `}>
          <CustomTextField
            label={"End date"}
            imgSrc={calenderEnd}
            width={24}
            height={24}
            opacity={`${ischeck ? "opacity-50" : "opacity-100"}`}
          />
          <div className="flex items-center gap-4 " onClick={handleIsCheck}>
            {/* img-sqaure,check */}
            <img src={ischeck ? check : square} alt="" className="w-4 h-4" />
            <h3>Currently working here</h3>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-8">
        <div className="w-full gap-4 border border-gray-300 rounded-lg  text-gray-900  focus:border-gray flex flex-col">
          <div className="flex px-3 items-center h-14 bg-[#DCDFE4] bg-opacity-30 justify-between shadow-md">
            <div className="w-full gap-4  flex items-center">
              <img src={bold_text} alt="" className="w-3.5 h-3.5 opacity-80" />
              <img src={italics} alt="" className="w-3.5 h-3.5 opacity-80" />
              <img src={underline} alt="" className="w-4 h-4 opacity-80" />
              <hr className="w-5 border rotate-90 border-[#b9babc]" />
              <img src={bullet_list} alt="" className="w-4 h-4 opacity-80" />
              <img src={number} alt="" className="w-4 h-4 opacity-80" />
              <hr className="w-5 border rotate-90 border-[#b9babc]" />
            </div>
            <div className="w-80 px-4 h-9 bg-[#FFBB4E] flex items-center justify-center rounded gap-2">
              <img src={bullet_list} alt="" className="w-3 h-3" />
              <h3 className="font-sans font-semibold text-sm text-[#091E42]">
                Auto-Fill content for me
              </h3>
            </div>
          </div>
          <textarea
            type="text"
            placeholder="Add description here"
            className="h-40 font-sans font-medium text-sm text-[#091E42] focus:outline-none mx-4  resize-none scroll-smooth"
          />
        </div>
      </div>

      <div className="py-9">
        <AddSectionBtn width="xl:w-60 w-full" btnText={"ADD ANOTHER SECTION"} />
      </div>
    </div>
  );
};

const Projects = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    event.target.style.height = "auto"; // Reset the height
    event.target.style.height = event.target.scrollHeight + "px"; // Set the height to match the content
  };
  return (
    <div className="flex flex-col gap-16">
      <div className="w-full h-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
        <div className="w-full flex flex-col  gap-6">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Project - 1
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm">
            <CustomTextField label={"Project Tittle "} />
          </div>

          <div className="w-full mx-auto shadow-sm border border-gray-300 rounded-md">
            <div className="w-full gap-4 px-2 h-14 bg-[#DCDFE4] bg-opacity-30 shadow-md flex items-center">
              <img src={bold_text} alt="" className="w-3.5 h-3.5 opacity-80" />
              <img src={italics} alt="" className="w-3.5 h-3.5 opacity-80" />
              <img src={underline} alt="" className="w-4 h-4 opacity-80" />
              <hr className="w-5 border rotate-90 border-[#b9babc]" />
              <img src={bullet_list} alt="" className="w-4 h-4 opacity-80" />
              <img src={number} alt="" className="w-4 h-4 opacity-80" />
              <hr className="w-5 border rotate-90 border-[#b9babc]" />
            </div>

            <textarea
              value={text}
              onChange={handleChange}
              placeholder="Enter your description here..."
              className="block w-full p-2 my-2 focus:outline-none "
              style={{ minHeight: "50px", resize: "none", overflow: "hidden" }} // Prevents manual resizing and hides scrollbar
            />
          </div>
        </div>
      </div>
      <div className="shadow-sm">
        <AddSectionBtn btnText={"ADD ANOTHER PROJECT"} width="xl:w-60 w-full" />
      </div>
    </div>
  );
};

const DashboardSkills = () => {
  const [showStars, setShowStars] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const handlebuttonClick = useCallback(() => {
    setShowStars((prevState) => !prevState);
    setIsOn((prevState) => !prevState);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className={`font-sans font-bold text-base text-[#091E42]`}>
            Show skill rating
          </h3>
          <div
            className={`w-11 h-6  bg-[#B3B9C4] rounded-xl flex items-center p-0.5 ${
              isOn ? "justify-end" : "justify-start"
            }`}
            onClick={handlebuttonClick}
          >
            <div
              className={`w-5 h-5 ${
                isOn ? "bg-[#3366FF]" : "bg-white"
              } rounded-full`}
            />
          </div>
        </div>
        <div>
          <div className="w-48 px-4 h-9 bg-[#FFBB4E] flex items-center justify-center rounded gap-2">
            <img src={bullet_list} alt="" className="w-3 h-3" />
            <h3 className="font-sans font-semibold text-sm text-[#091E42]">
              Get Skill Suggestion
            </h3>
          </div>
        </div>
      </div>

      <div className="custom-scrollbar h-screen flex flex-col gap-4">
        <div className="w-full  p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Skill - 1
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <StarTextField label={"Skill Name "} showStars={showStars} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Skill - 2
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <StarTextField label={"Skill Name "} showStars={showStars} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Skill - 3
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <StarTextField label={"Skill Name "} showStars={showStars} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Skill - 4
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <StarTextField label={"Skill Name "} showStars={showStars} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Skill - 5
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <StarTextField label={"Skill Name "} showStars={showStars} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Skill - 6
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <StarTextField label={"Skill Name "} showStars={showStars} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCertification = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    event.target.style.height = "auto"; // Reset the height
    event.target.style.height = event.target.scrollHeight + "px"; // Set the height to match the content
  };
  return (
    <div className="w-full">
      <div className="w-full mx-auto shadow-sm border border-gray-300 rounded-md">
        <div className="w-full gap-4 px-2 h-14 bg-[#DCDFE4] bg-opacity-30 shadow-md flex items-center">
          <img src={bold_text} alt="" className="w-3.5 h-3.5 opacity-80" />
          <img src={italics} alt="" className="w-3.5 h-3.5 opacity-80" />
          <img src={underline} alt="" className="w-4 h-4 opacity-80" />
          <hr className="w-5 border rotate-90 border-[#b9babc]" />
          <img src={bullet_list} alt="" className="w-4 h-4 opacity-80" />
          <img src={number} alt="" className="w-4 h-4 opacity-80" />
          <hr className="w-5 border rotate-90 border-[#b9babc]" />
        </div>

        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter your description here..."
          className="block w-full p-2 my-2 focus:outline-none "
          style={{ minHeight: "50px", resize: "none", overflow: "hidden" }} // Prevents manual resizing and hides scrollbar
        />
      </div>
    </div>
  );
};

const DashboardAchievements = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    event.target.style.height = "auto"; // Reset the height
    event.target.style.height = event.target.scrollHeight + "px"; // Set the height to match the content
  };
  return (
    <div className="w-full">
      <div className="w-full mx-auto shadow-sm border border-gray-300 rounded-md">
        <div className="w-full gap-4 px-2 h-14 bg-[#DCDFE4] bg-opacity-30 shadow-md flex items-center">
          <img src={bold_text} alt="" className="w-3.5 h-3.5 opacity-80" />
          <img src={italics} alt="" className="w-3.5 h-3.5 opacity-80" />
          <img src={underline} alt="" className="w-4 h-4 opacity-80" />
          <hr className="w-5 border rotate-90 border-[#b9babc]" />
          <img src={bullet_list} alt="" className="w-4 h-4 opacity-80" />
          <img src={number} alt="" className="w-4 h-4 opacity-80" />
          <hr className="w-5 border rotate-90 border-[#b9babc]" />
        </div>

        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter your description here..."
          className="block w-full p-2 my-2 focus:outline-none "
          style={{ minHeight: "50px", resize: "none", overflow: "hidden" }} // Prevents manual resizing and hides scrollbar
        />
      </div>
    </div>
  );
};

const DashboardHobbies = () => {
  return (
    <div className="py-6">
      <div className="custom-scrollbar h-screen flex flex-col gap-4">
        <div className="w-full  p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Hobby - 1
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <CustomTextField label={"Hobby Name"} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Hobby - 2
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <CustomTextField label={"Hobby Name"} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Hobby - 3
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <CustomTextField label={"Hobby Name"} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Hobby - 4
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <CustomTextField label={"Hobby Name"} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Hobby - 5
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <CustomTextField label={"Hobby Name"} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Hobby - 6
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <CustomTextField label={"Hobby Name"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardLanguages = () => {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div className="flex flex-col items-center gap-4 py-4">
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Language - 1
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <CustomTextField label={"Eg. English"} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Language - 2
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <CustomTextField label={"Eg. English"} />
          </div>
        </div>
        <div className="w-full p-3 border border-[#DCDFE4] shadow-md rounded-lg">
          <div className="px-4 w-full bg-[#D6E4FF4D] shadow-sm flex items-center justify-between h-11 rounded cursor-pointer ">
            <h3 className="font-sans font-bold text-base text-[#091E42]">
              Language - 3
            </h3>
            <img src={recycleBin} alt="" className="w-4 h-4" />
          </div>
          <div className="shadow-sm my-6">
            <CustomTextField label={"Eg. English"} />
          </div>
        </div>
      </div>
      <div>
        <AddSectionBtn btnText={"ADD ANOTHER LANGUAGE"} width={"w-60"} />
      </div>
    </div>
  );
};

export default PersonalInfo;
