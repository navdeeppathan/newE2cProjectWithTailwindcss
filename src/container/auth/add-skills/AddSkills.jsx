import React, { useRef, useState } from "react";
import "./Style.css";
import HeaderStyle from "../../../Utils/HeaderStyle";
import {
  arrow_back,
  check,
  dragANDdrop,
  lightbulb,
  menuClose,
  plus3,
  recycleBin,
  search,
  success,
} from "../../../assets/Allimages";

import InputFields from "./InputFields";

const availableSkills = [
  "User Interface (UI) Design",
  "Wireframing and Prototyping",
  "Interaction Design",
  "Information Architecture",
  "User-Centered Design",
  "Responsive Design",
  "Usability Testing",
  "User Flows",
  "Problem-Solving",
  "Skill name",
];

const AddSkills = () => {
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu1 = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };
  const closeMenu2 = () => {
    menuRef.current.style.right = "-384px";
    setIsMenuOpen(false);
  };

  const item = [...Array(15)];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSkillClick = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const sortedSkills = availableSkills
    .filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    .concat(
      availableSkills.filter(
        (skill) => !skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  return (
    <div className="flex flex-col h-screen">
      <HeaderStyle
        h1Text={`Add  your top skills`}
        h3Text={`Try to add 6-10 skills that are most relevant to your desired job.`}
      />
      <div className="flex flex-col items-center mt-20">
        <div className="w-96 md:w-[556px] xl:w-[740px]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-sans font-bold text-xl text-[#091E42]">
                Add your skills
              </h2>
            </div>
            <div className="w-48 h-9 bg-[#FFBB4E] flex items-center justify-center gap-1.5 rounded border border-[#FFBB4E]">
              <img src={lightbulb} alt="" className="w-4 h-4" />
              <h3 className="font-sans font-semibold text-sm text-[#091E42] text-center">
                Get Skill Suggestion
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Selected Skills */}
      <div className="flex  items-center justify-center  py-4">
        <div className="flex flex-col">
          <div className="w-96 h-80 md:w-[556px] md:h-96 xl:w-[740px] xl:h-[434px] flex-grow max-h-[calc(100vh-64px)] overflow-y-auto scroll-hidden">
            <div className="space-y-4 ">
              {selectedSkills.length > 0
                ? selectedSkills.map((skill, index) => (
                    <div key={index}>
                      <InputFields
                        value={skill}
                        color={"#091E42"}
                        src={dragANDdrop}
                        bin={recycleBin}
                      />
                    </div>
                  ))
                : item.map((_, i) => (
                    <div key={i}>
                      <InputFields
                        value={"Skill name"}
                        color={"#8590A2"}
                        src={dragANDdrop}
                        hide={"hidden"}
                      />
                    </div>
                  ))}
            </div>
          </div>

          <div>
            {!isMenuOpen && (
              <button className="cursor-pointer" onClick={openMenu1}>
                <div className="py-12">
                  <h3 className="font-sans font-semibold text-sm text-[#3366FF] text-start">
                    + ADD YOUR ADDRESS
                  </h3>
                </div>
              </button>
            )}

            <div
              className=" fixed flex flex-col items-start top-0 gap-5 bg-white shadow-2xl w-96 h-full z-50 transition-right duration-500 right-[-384px]"
              ref={menuRef}
            >
              <div className="shadow-sm">
                <div className="w-96 flex items-center justify-between px-5 py-4">
                  <div>
                    <h2 className="font-sans font-bold text-xl text-[#091E42]">
                      Add your skills
                    </h2>
                  </div>
                  <div>
                    <img
                      src={menuClose}
                      onClick={closeMenu2}
                      alt="Close Menu"
                      className="cursor-pointer w-3 h-3"
                    />
                  </div>
                </div>
                <hr className="w-full" />
              </div>
              {/* Search Bar */}
              <div className="w-96 px-5 flex flex-col gap-10 ">
                <div className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-900  focus:border-gray flex items-center justify-between gap-4">
                  <input
                    type="text"
                    placeholder="Search by job title"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className=" focus:outline-none w-full"
                  />
                  <img src={search} alt="" className="w-4 h-4" />
                </div>
                {/* Skill Suggestions Dropdown */}
                <div className="w-full h-auto flex-grow max-h-[calc(100vh-64px)] overflow-y-auto scroll-hidden">
                  <div className="space-y-4 ">
                    {searchTerm === ""
                      ? item.map((_, i) => (
                          <div key={i}>
                            <InputFields
                              value={"Skill name"}
                              color={"#8590A2"}
                              src={plus3}
                              hide={"hidden"}
                            />
                          </div>
                        ))
                      : sortedSkills.map((skill, index) => {
                          const isMatch = skill
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase());
                          return (
                            <div key={index} className="h-14 overflow-y-auto">
                              <InputFields
                                onClick={() => handleSkillClick(skill)}
                                value={skill}
                                color={"#091E42"}
                                src={isMatch ? success : plus3}
                                hide={"hidden"}
                              />
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 ">
        <hr className="w-full border border-[#DCDFE4]" />

        <div className="flex flex-col items-center justify-center">
          <div className="w-96 h-24 xl:h-32 md:w-[556px] xl:w-[744px] gap-4 flex items-center justify-center">
            <div className="w-14 h-11 rounded flex items-center justify-center bg-[#F1F2F4]">
              <img src={arrow_back} alt="" className="w-6 h-6 " />
            </div>
            <div className="w-full h-11 rounded bg-[#3366FF] flex items-center justify-center">
              <button className="font-sans font-semibold text-sm text-center text-[#FFFFFF]">
                SAVE AND CONTINUE
              </button>
            </div>
          </div>
          <div className="mt-2 md:mt-5 xl:mt-10">
            <h3 className="font-mono font-normal text-xs xl:text-base tracking-normal text-center text-[#737B7D]">
              © Copyright 2022-2023 · e2c ®· All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkills;
