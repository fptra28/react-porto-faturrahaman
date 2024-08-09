import React, { useEffect } from "react";
import HomeNavbar from "../navbar";
import Footer from "../footer";

const LayOut = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-main bg-cover bg-center opacity-50"></div>
      <div className="relative">
        <HomeNavbar />
        <div className="mt-20 bg-frosted-glass backdrop-blur-frosted">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default LayOut;
