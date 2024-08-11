import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { activeStar, rate } from "../assets/Allimages"; // Ensure correct image paths

const StarTextField = ({ label, text, value, onChange, showStars }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1); // Update the rating based on the star clicked
  };

  return (
    <div>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        variant="outlined"
        className="w-full h-14"
        type={text}
        InputProps={{
          endAdornment: showStars && (
            <InputAdornment position="end">
              <div className="flex items-center">
                {Array(5)
                  .fill("")
                  .map((_, index) => (
                    <img
                      key={index}
                      src={index < rating ? activeStar : rate}
                      alt="star"
                      onClick={() => handleStarClick(index)}
                      className="w-6 h-6 cursor-pointer"
                      style={{
                        marginRight: index < 4 ? "4px" : "0", // Adjust spacing between stars
                      }}
                    />
                  ))}
              </div>
            </InputAdornment>
          ),
        }}
        sx={{
          position: "relative", // Enable relative positioning for the adornment
          "& .MuiInputLabel-root": {
            color: "#B3B9C4",
            fontSize: "1rem",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00000099",
          },
          "& .MuiOutlinedInput-root": {
            fontSize: "1rem",
            fontWeight: 600,
            color: "#091E42",
            "& fieldset": {
              borderColor: "#B3B9C4",
              borderRadius: "0.5rem",
            },
            "&:hover fieldset": {
              borderColor: "#B3B9C4",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#B3B9C4",
            },
          },
          "& .MuiInputAdornment-root": {
            marginRight: "40px", // Remove default margin if necessary
          },
        }}
      />
    </div>
  );
};

export default StarTextField;
