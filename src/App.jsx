import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllScreens from "./container/screens/AllScreens";
import Login from "./container/auth/login/Login";
import Signup from "./container/auth/signup/Signup";
import ResumeCreation from "./container/pages/resume-creation/ResumeCreation";
import SelectTemplate from "./container/pages/select-template/SelectTemplate";
import StepperInfo from "./container/auth/stepper-info/StepperInfo";
import AddressInfo from "./container/auth/address-info/AddressInfo";
import WorkExperience from "./container/auth/work-experience/WorkExperience";
import EducationInfo from "./container/auth/education-info/EducationInfo";
import TitleAndDesc from "./container/auth/title&description/TitleAndDesc";
import InternExp from "./container/auth/internExp/InternExp";
import YearOfExp from "./container/auth/yearOfExp/YearOfExp";
import JobTitles from "./container/auth/job-titles/JobTitles";
import NumberOfCompanies from "./container/auth/number-of-companies/NumberOfCompanies";
import AddSkills from "./container/auth/add-skills/AddSkills";

import PersonalInfo from "./container/resume-editor/personal-info/PersonalInfo";
import IndustryField from "./container/auth/industry-field/IndustryField";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllScreens />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ResumeCreation" element={<ResumeCreation />} />
        <Route path="/SelectTemplate" element={<SelectTemplate />} />
        <Route path="/StepperInfo" element={<StepperInfo />} />
        <Route path="/AddressInfo" element={<AddressInfo />} />
        <Route path="/WorkExperience" element={<WorkExperience />} />
        <Route path="/EducationInfo" element={<EducationInfo />} />
        <Route path="/TitleAndDesc" element={<TitleAndDesc />} />
        <Route path="/InternExp" element={<InternExp />} />
        <Route path="/YearOfExp" element={<YearOfExp />} />
        <Route path="/NumberOfCompanies" element={<NumberOfCompanies />} />
        <Route path="/AddSkills" element={<AddSkills />} />
        <Route path="/IndustryField" element={<IndustryField />} />
        <Route path="/dashboard" element={<PersonalInfo />} />
        <Route path="/JobTitles" element={<JobTitles />} />
      </Routes>
    </BrowserRouter>
  );
}
