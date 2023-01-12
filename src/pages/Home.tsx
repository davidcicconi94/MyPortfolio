import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HomeComponents from "../components/HomeComponents";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <HomeComponents />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
