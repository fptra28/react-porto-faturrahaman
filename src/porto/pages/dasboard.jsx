import React from "react";
import HomeNavbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Porto from "../components/portfolioDashboard";

function Home() {
  return (
    <>
      <HomeNavbar />
      <Jumbotron />
      <Porto />
    </>
  );
}

export default Home;
