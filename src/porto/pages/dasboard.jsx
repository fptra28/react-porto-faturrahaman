import React from "react";
import Jumbotron from "../components/jumbotron";
import Porto from "../components/portfolioDashboard";
import Tools from "../components/tools-skills";
import LayOut from "../components/layout/layout";

function Home() {
  return (
    <LayOut>
      <Jumbotron />
      <Porto />
      <Tools />
    </LayOut>
  );
}

export default Home;
