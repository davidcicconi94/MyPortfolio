import React from "react";
import About from "../components/About";
import HomeComponents from "../components/HomeComponents";
import NavBar from "../components/NavBar";

const Home = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <HomeComponents />
      <About />
    </>
  );
};

export default Home;
