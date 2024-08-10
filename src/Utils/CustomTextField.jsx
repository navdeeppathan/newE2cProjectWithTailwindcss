import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({
  label,
  text,
  value,
  onChange,
  imgSrc,
  width,
  height,
  opacity,
}) => {
  return (
    <div>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        variant="outlined"
        className={`w-full h-14 ${opacity} `}
        type={text}
        InputProps={{
          endAdornment: imgSrc ? (
            <InputAdornment position="end">
              <img
                src={imgSrc}
                style={{ width: `${width}px`, height: `${height}px` }}
              />
            </InputAdornment>
          ) : null,
        }}
        sx={{
          "& .MuiInputLabel-root": {
            color: "#B3B9C4",
            fontSize: "1rem",

            // Default label color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00000099", // Label color when focused
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
  );
};

export default CustomTextField;
