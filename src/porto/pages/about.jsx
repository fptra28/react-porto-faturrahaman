import React from "react";
import LayOut from "../components/layout/layout";
import JumbotronAbout from "../components/jumbotronAbout";
import Skill from "../components/tools-skills";
import ListSocmedia from "../components/layout/ListSocmed";

function About() {
  return (
    <LayOut>
      <JumbotronAbout />
      <Skill
        background="bg-red-800"
        Text="text-neutral-50"
        Line="bg-rose-400"
        border="border-2 border-neutral-50"
      />
      <ListSocmedia />
    </LayOut>
  );
}

export default About;
