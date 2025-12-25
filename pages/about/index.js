import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "/images/logo.png";
import AboutS2 from "../../components/AboutS2";
import FunFact from "../../components/FunFact";

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={"About Getuhabte"} pagesub={"About Us"} />
      <AboutS2 />
      <FunFact />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutPage;
