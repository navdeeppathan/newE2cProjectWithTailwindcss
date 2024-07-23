import React, { useState } from "react";
import { Link } from "react-router-dom";
import someImg from "../../../assets/SomeImgs";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = () =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Invalid email address");
      setTimeout(() => setEmailError(""), 3000);
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (validatePassword(e.target.value)) {
      setPasswordError("");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      setTimeout(() => setPasswordError(""), 3000);
    } else {
      setPasswordError(
        "Password must contain at least one letter and one number"
      );
      setTimeout(() => setPasswordError(""), 3000);
    }
  };

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      valid = false;
      setTimeout(() => setEmailError(""), 3000);
    }
    if (!validatePassword(password)) {
      setPasswordError(
        password.length < 8
          ? "Password must be at least 8 characters long"
          : "Password must contain at least one letter and one number"
      );
      valid = false;
      setTimeout(() => setPasswordError(""), 3000);
    }
    if (valid) {
      alert("Form submitted");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center xl:p-0 ">
      <div className="mb-4 xl:mr-96">
        <img
          src={someImg.E2cimgdefault}
          alt=""
          className="w-32 h-16 md:w-36 md:h-20"
        />
      </div>
      <hr className="w-full border-t border-gray-300 mb-8 xl:hidden " />
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg ">
        <div className="mb-6 flex flex-col items-center justify-center xl:items-start">
          <h2 className="text-4xl text-center font-bold text-gray-800 px-20 md:px-0 xl:text-start">
            Create your account
          </h2>
          <h3 className="text-sm text-center font-semibold text-gray-500 mt-2 xl:text-start">
            Welcome to the Future of Resumes - Sign Up and Rise Above the
            Competition!
          </h3>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-center border border-gray-300 rounded-lg shadow-sm p-4 cursor-pointer">
            <img src={someImg.googledefault} alt="Google" className="w-6 h-6" />
            <h3 className="ml-2 text-sm font-medium text-gray-900">
              Sign In With Google
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <hr className="flex-1 border-t border-gray-300" />
          <h3 className="mx-4 text-sm font-medium text-gray-500">OR</h3>
          <hr className="flex-1 border-t border-gray-300" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={handleEmailChange}
              value={email}
              className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900 focus:outline-none focus:border-blue-500"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handlePasswordChange}
                value={password}
                className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900 focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                <img
                  src={showPassword ? someImg.viewdefault : someImg.hidedefault}
                  alt="Toggle password visibility"
                  className="w-6 h-6"
                />
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full h-14 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            CREATE ACCOUNT
          </button>
        </form>
        <div className="text-center mt-4">
          <h3 className="text-sm font-medium text-gray-800">
            By Signing Up, you agree to our Terms of Service
          </h3>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-sm font-medium text-gray-800">
            Already have an account?{" "}
            <Link to="/login">
              <button className="text-blue-600 font-bold">Login</button>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signup;
