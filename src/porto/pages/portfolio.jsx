import React, { useEffect } from "react";
import LayOut from "../components/layout/layout";
import BannerPorto from "../components/bannerPorto";
import ListPorto from "../components/listporto";

function Porto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LayOut>
      <BannerPorto />
      <ListPorto />
    </LayOut>
  );
}

export default Porto;
