import React, { useState } from "react";
import {
  E2Cimg,
  template1,
  template2,
  template3,
} from "../../../assets/Allimages";

const images = [
  {
    id: 1,
    imgs: template3,
  },
  {
    id: 2,
    imgs: template2,
  },
  {
    id: 3,
    imgs: template1,
  },
  {
    id: 4,
    imgs: template1,
  },
  {
    id: 5,
    imgs: template1,
  },
  {
    id: 6,
    imgs: template1,
  },
];

const SelectTemplate = () => {
  const [isSelect, setIsSelect] = useState(null);
  const handleImageClick = (id) => {
    setIsSelect(id);
  };
  return (
    <div>
      <div className=" flex items-center justify-center xl:justify-start xl:mx-56">
        <img src={E2Cimg} alt="" className="w-36 h-16 md:w-40 md:h-20 " />
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-20">
          <h1 className="font-sans font-bold text-4xl text-center text-[#172B4D] mb-4">
            Craft Your Perfect Resume with Our Stunning Templates!
          </h1>
          <h3 className="font-sans font-normal text-xl text-center text-[#8590A2]">
            Choose your ideal template now; you can always change it later to
            suit your needs perfectly!
          </h3>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 p-4">
          {images.map((img) => (
            <div key={img.id} className="relative">
              <img
                src={img.imgs}
                alt={`Image ${img.id}`}
                className={`w-full h-auto object-cover border-4 rounded-xl shadow-md ${
                  isSelect === img.id ? "border-blue-500" : "border-transparent"
                } hover:border-blue-500 cursor-pointer transition duration-300`}
                onClick={() => handleImageClick(img.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectTemplate;
