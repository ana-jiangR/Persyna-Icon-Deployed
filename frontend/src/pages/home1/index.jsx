/* eslint-disable @next/next/no-img-element */
import React from "react";

// import IntroWithHorizontal from "../../components/Intro-with-horizontal";
// import IntroWithHorizontal2 from "../../components/Intro-with-horizontal2";
// import IntroWithVertical from "../../components/Intro-with-vertical";
import IntroWithVertical2 from "../../components/Intro-with-vertical2";
// import Intro3 from "../../components/Intro3";
// import Intro4 from "../../components/Intro4";
// import Intro5 from "../../components/Intro5";

// import AboutUs1 from "../../components/About-Us1";
import AboutUs2 from "../../components/About-Us2";
// import AboutUs3 from "../../components/About-Us3";
// import AboutUs4 from "../../components/About-Us4";
// import AboutUs5 from "../../components/About-Us5";
// import AboutUs6 from "../../components/About-Us6";
// import AboutUs7 from "../../components/About-Us7";
// import AboutUs8 from "../../components/About-Us8";

// import Services1 from "../../components/Services1";
// import Services2 from "../../components/Services2";
import Services3 from "../../components/Services3";
// import Services4 from "../../components/Services4";
// import Services5 from "../../components/Services5";
// import Services6 from "../../components/Services6";
// import Services7 from "../../components/Services7";

// import Portfolio1 from "../../components/Portfolio1";
// import Portfolio2 from "../../components/Portfolio2";
// import Portfolio3 from "../../components/Portfolio3";

import Team1 from "../../components/Team1";
// import Team2 from "../../components/Team2";
// import Team3 from "../../components/Team3";

import Blogs1 from "../../components/Blogs1";
import Blogs2 from "../../components/Blogs2";
// import Blogs3 from "../../components/Blogs3";
// import Blogs4 from "../../components/Blogs4";
// import Blogs5 from "../../components/Blogs5";

import LightLayout from "../../layouts/light";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials from "../../components/Testimonials1";


import Contact from "../../components/Contact";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithVertical2/>
      <AboutUs2 />
      <Services3 />
      {/* <Portfolio1 /> */}
      <Blogs2 />
      <Blogs1 />

      {/* <SkillsCircle /> */}
      {/* <Testimonials /> */}
      <Team1 />
      {/* <Contact /> */}
    </LightLayout>
  );
};

export default Home1;
