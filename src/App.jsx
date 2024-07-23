import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllScreens from "./container/screens/AllScreens";
import Login from "./container/auth/login/Login";
import Signup from "./container/auth/signup/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllScreens />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
