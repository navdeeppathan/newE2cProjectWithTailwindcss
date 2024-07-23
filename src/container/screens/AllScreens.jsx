import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Aisection from "../../components/aisection/Aisection";
import Createsection from "../../components/createsection/Createsection";
import ResumeTemp from "../../components/resumetemplate/ResumeTemp";
import Quotesection from "../../components/quotesection/Quotesection";
import Questions from "../../components/questions/Questions";
import Footer from "../../components/footer/Footer";

const AllScreens = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aisection />
      <Createsection />
      <ResumeTemp />
      <Quotesection />
      <Questions />
      <Footer />
    </div>
  );
};

export default AllScreens;
