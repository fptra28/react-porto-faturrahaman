import React from "react";
import Jumbotron from "../components/jumbotron";
import Porto from "../components/portfolioDashboard";
import Skill from "../components/tools-skills";
import LayOut from "../components/layout/layout";

function Home() {
  return (
    <LayOut>
      <Jumbotron />
      <Porto />
      <Skill
        background="transparent"
        Text="text-neutral-950"
        Line="bg-red-800"
        showButton={true}
      />
    </LayOut>
  );
}

export default Home;
