import React, { useState } from "react";
import "./Createsection.css";
import { createSecImg1, createSecImg2 } from "../../assets/Allimages";

import quotes from "../createsection/Qoutes";

const Createsection = () => {
  const [expandText, setExpandText] = useState(null);
  const handleReadMore = (id) => {
    setExpandText(expandText === id ? null : id);
  };
  return (
    <div className="flex items-center justify-center xl:items-start xl:justify-start">
      <div className="w-72 md:w-[745px] md:px-10 xl:w-auto xl:px-40">
        <div className="py-10 md:py-16 xl:py-20">
          <h1 className="text-4xl text-center leading-snug text-[#091E42] font-semibold  md:leading-normal xl:font-bold xl:text-5xl xl:text-start ">
            Now create your resume with 4 simple steps
          </h1>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-20 xl:flex-row xl:gap-24">
          <div className="w-[320px] h-[369px] rounded-lg gap-8 border-none bg-gradient-to-b from-[#580240] via-[#4a039e] to-[#031d6b] relative md:w-[499px] md:h-[577px] xl:w-[529px] xl:h-[688px] ">
            <div className="w-[260.67px] h-[348.99px] md:w-[407.17px] md:h-[545.13px] xl:w-[485.5px] xl:h-[650px] rounded-lg">
              <img
                src={createSecImg1}
                id="csimg1"
                alt="createSectioImg"
                className="w-[273.32px] h-[307.65px]  mt-[61.74px]  pl-[29.66px]  rounded-lg rounded-b-none absolute md:w-[370.69px] md:h-[480.55px] md:pl-[46.34px] md:mt-[96.45px] xl:pl-14 xl:mt-[115px] xl:h-[573px] xl:w-[442px]"
              />
              <img
                src={createSecImg2}
                alt="createSectioImg2"
                id="csimg2"
                className="relative rounded-lg h-[190.6px] pt-[20.4px] ml-[150.75px] md:w-[263.34px] md:h-[297.73px] md:ml-[190.17px] md:pt-[31.87px] xl:ml-0 xl:h-[355px] xl:pt-9 xl:pl-56 xl:w-auto "
              />
            </div>
          </div>
          <div className="w-full h-auto rounded mt-10 xl:mt-0 xl:w-[472px]  xl:max-h-[688px] cursor-pointer">
            <div className="scrollable-quotes">
              {quotes.map((quote) => (
                <div
                  key={quote.id}
                  className="bg-[#ffffff] w-full rounded shadow-md p-4 min-h-[184px] transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg mb-4  md:p-4"
                >
                  <p
                    style={{ color: quote.color }}
                    className="text-xl  leading-7 mb-2.5 text-[#091e42] font-bold md:text-2xl"
                  >
                    {quote.heading}
                  </p>
                  <p className="">
                    {expandText === quote.id
                      ? quote.text
                      : `${quote.text.substring(0, 200)}`}
                    {quote.text.length > 200 && (
                      <button
                        className="bg-none border-none text-[#3366ff] cursor-pointer text-base font-bold"
                        onClick={() => handleReadMore(quote.id)}
                      >
                        {expandText === quote.id
                          ? ".Read less"
                          : "...Read more"}
                      </button>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createsection;
