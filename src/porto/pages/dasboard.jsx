import React, { useEffect } from "react";
import Jumbotron from "../components/jumbotron";
import Porto from "../components/portfolioDashboard";
import Tools from "../components/tools-skills";
import LayOut from "../components/layout/layout";

function Home() {
  useEffect(() => {
    const isMobileOrTablet = window.matchMedia("(max-width: 1023px)").matches;
    if (isMobileOrTablet) {
      alert(
        "Silakan buka halaman ini di desktop view untuk pengalaman terbaik."
      );
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LayOut>
      <Jumbotron />
      <Porto />
      <Tools />
    </LayOut>
  );
}

export default Home;
