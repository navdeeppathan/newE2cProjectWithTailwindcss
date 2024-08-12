// import React, { useState } from "react";
// import HeaderStyle from "../../../Utils/HeaderStyle";
// import Title from "./Title"; // Import the Title data
// import FooterStyle from "../../../Utils/FooterStyle";

// const JobTitles = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div>
//       <HeaderStyle
//         h1Text={`Let's explore the depth of your experience!!`}
//         h3Text={`Tell your experience level and let us unlock the doors to your professional journey.`}
//       />
//       <div className="flex flex-col items-center justify-evenly">
//         <div className="w-96 h-60 md:w-[504px] xl:w-[741px] ">
//           <div className="flex flex-col gap-2 py-10">
//             <div>
//               <h3 className="font-sans font-semibold text-base text-[#091E42]">
//                 What is your job title / Designation?
//               </h3>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Enter job title"
//                 value={searchTerm}
//                 onChange={handleInputChange}
//                 className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900 focus:outline-none focus:border-gray"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="w-96 md:w-[504px] xl:w-[800px] min-h-96">
//           <div className=" flex items-center justify-center">
//             <div className="w-full xl:w-[741px] flex items-center gap-4">
//               <hr className="w-1/2 bg-[#DCDFE4]" />
//               <div className="w-56">
//                 <h2 className="font-sans font-semibold text-xl text-[#172B4D] text-center">
//                   Popular job titles
//                 </h2>
//               </div>
//               <hr className="w-1/2 bg-[#DCDFE4]" />
//             </div>
//           </div>
//           <div className="w-full h-auto overflow-y-auto">
//             <div className="flex flex-wrap items-center justify-center gap-4 py-6">
//               {Title.map((title) => {
//                 const isExactMatch =
//                   title.txt.toLowerCase() === searchTerm.toLowerCase();
//                 return (
//                   <div
//                     key={title.id}
//                     className={`border rounded py-2 px-4 min-w-30 max-w-[calc(100%-1rem)] flex items-center justify-center ${
//                       isExactMatch
//                         ? "bg-blue-500 text-white"
//                         : "bg-white text-[#172B4D]"
//                     }`}
//                   >
//                     <h3 className="font-sans font-semibold text-sm  text-center">
//                       {title.txt}
//                     </h3>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <FooterStyle />
//       </div>
//     </div>
//   );
// };

// export default JobTitles;

import React, { useState } from "react";
import HeaderStyle from "../../../Utils/HeaderStyle";
import Title from "./Title"; // Import the Title data
import FooterStyle from "../../../Utils/FooterStyle";

const JobTitles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <HeaderStyle
        h1Text={`Let's explore the depth of your experience!!`}
        h3Text={`Tell your experience level and let us unlock the doors to your professional journey.`}
      />
      <div className="flex flex-col items-center justify-evenly">
        <div className="w-96 h-60 md:w-[504px] xl:w-[741px] ">
          <div className="flex flex-col gap-2 py-10">
            <div>
              <h3 className="font-sans font-semibold text-base text-[#091E42]">
                What is your job title / Designation?
              </h3>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter job title"
                value={searchTerm}
                onChange={handleInputChange}
                className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900 focus:outline-none focus:border-gray"
              />
            </div>
          </div>
        </div>

        <div className="w-96 md:w-[504px] xl:w-[800px] min-h-96">
          <div className=" flex items-center justify-center">
            <div className="w-full xl:w-[741px] flex items-center gap-4">
              <hr className="w-1/2 bg-[#DCDFE4]" />
              <div className="w-56">
                <h2 className="font-sans font-semibold text-xl text-[#172B4D] text-center">
                  Popular job titles
                </h2>
              </div>
              <hr className="w-1/2 bg-[#DCDFE4]" />
            </div>
          </div>
          <div className="w-full  h-auto overflow-y-auto">
            <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-row gap-x-2 gap-y-4  items-center justify-center py-20 ">
              {Title.map((title) => {
                const isExactMatch =
                  title.txt.toLowerCase() === searchTerm.toLowerCase();
                return (
                  <div
                    key={title.id}
                    className={`cursor-pointer border rounded py-2 px-4 min-w-[90%] md:min-w-[45%] xl:min-w-[calc(100%/4-4rem)] flex items-center justify-center ${
                      isExactMatch
                        ? "bg-blue-500 text-white"
                        : "bg-white text-[#172B4D]"
                    }`}
                  >
                    <h3 className="font-sans font-semibold text-sm  text-center">
                      {title.txt}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <FooterStyle />
        </div>
      </div>
    </div>
  );
};

export default JobTitles;
