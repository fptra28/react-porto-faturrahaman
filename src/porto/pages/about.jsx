import React from "react";
import LayOut from "../components/layout/layout";
import JumbotronAbout from "../components/jumbotronAbout";
import Skill from "../components/skill";

function About() {
  return (
    <LayOut>
      <JumbotronAbout />
      <Skill />
    </LayOut>
  );
}

export default About;
