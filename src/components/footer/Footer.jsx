import React from "react";
import {
  appStore,
  E2Cimg,
  fb,
  googlePlay,
  insta,
  linkedin,
  twiter,
  youtube,
} from "../../assets/Allimages";

const Footer = () => {
  return (
    <div className="w-full bg-[#091e42] mt-20 flex flex-col items-center justify-between">
      <div className="px-6 md:px-10 lg:px-20 xl:px-40 pt-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src={E2Cimg}
            alt="filter applied"
            className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
          <h3 className="opacity-80 px-20 md:px-4 xl:px-12 text-sm md:text-base lg:text-lg xl:text-xl font-normal text-center text-[#dee4ea]">
            Explore the inspiring testimonials from our satisfied users and
            discover how our resume builder application has transformed their
            careers. From landing dream jobs to securing promotions, our users
            have experienced remarkable success with their resumes built using
            our platform.
          </h3>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-8 mt-12">
          <img
            src={googlePlay}
            alt="Google Play"
            className="w-32 md:w-36 lg:w-40"
          />
          <img
            src={appStore}
            alt="App Store"
            className="w-32 md:w-36 lg:w-40"
          />
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between mt-10 md:mt-16 xl:mt-24 gap-4 md:gap-10">
          <div className="flex gap-2.5 opacity-80">
            <div className="w-8 h-8 md:w-10 md:h-10 border-[#0a142f] rounded-full flex items-center justify-center bg-[#43494e]">
              <img src={fb} alt="Facebook" className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 border-[#0a142f] rounded-full flex items-center justify-center bg-[#43494e]">
              <img src={linkedin} alt="LinkedIn" className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 border-[#0a142f] rounded-full flex items-center justify-center bg-[#43494e]">
              <img src={insta} alt="Instagram" className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 border-[#0a142f] rounded-full flex items-center justify-center bg-[#43494e]">
              <img src={twiter} alt="Twitter" className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 border-[#0a142f] rounded-full flex items-center justify-center bg-[#43494e]">
              <img src={youtube} alt="YouTube" className="w-4 h-4" />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-6 md:gap-10 opacity-60">
            <div className="resumeText">
              <h3 className="text-white text-xs md:text-sm font-semibold">
                Resume examples
              </h3>
            </div>
            <div className="resumeText">
              <h3 className="text-white text-xs md:text-sm font-semibold">
                Resume templates
              </h3>
            </div>
            <div className="resumeText">
              <h3 className="text-white text-xs md:text-sm font-semibold">
                About us
              </h3>
            </div>
            <div className="resumeText">
              <h3 className="text-white text-xs md:text-sm font-semibold">
                Contact us
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2 border-[#454f59] mt-8">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-4 flex flex-col xl:flex-row md:justify-center items-center xl:justify-between opacity-50">
          <div className="text-center xl:text-left">
            <h3 className="text-xs md:text-sm lg:text-base leading-7 font-normal text-white">
              © Copyright 2022-2023 · e2c ®· All Rights Reserved
            </h3>
          </div>
          <div className=" hidden xl:flex flex-row items-center gap-4 md:gap-10 mt-4 md:mt-0">
            <h3 className="text-xs md:text-sm lg:text-base leading-7 font-normal text-white">
              Terms of use
            </h3>
            <h3 className="text-xs md:text-sm lg:text-base leading-7 font-normal text-white">
              Privacy policy
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
//absolute inset-0 w-full h-full object-cover
export default Footer;
