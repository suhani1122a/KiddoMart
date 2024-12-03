import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Foot from "../components/Foot"

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards/>
      <Foot/>
    </>
  );
}

export default Home;
