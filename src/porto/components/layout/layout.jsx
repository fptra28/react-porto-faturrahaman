import React, { useEffect } from "react";
import HomeNavbar from "../navbar";
import Footer from "../footer";

const LayOut = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-main bg-cover bg-center bg-repeat-y">
      <HomeNavbar />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default LayOut;
