import React from "react";
import LayOut from "../components/layout/layout";
import JumbotronAbout from "../components/jumbotronAbout";
import Skill from "../components/skill";
import ListSocmedia from "../components/layout/ListSocmed";

function About() {
  return (
    <LayOut>
      <JumbotronAbout />
      <Skill />
      <ListSocmedia />
    </LayOut>
  );
}

export default About;
