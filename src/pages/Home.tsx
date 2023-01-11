import React from "react";
import HomeComponents from "../components/HomeComponents";
import NavBar from "../components/NavBar";

const Home = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <HomeComponents />
    </>
  );
};

export default Home;
