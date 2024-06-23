import React, { useEffect } from "react";
import HomeNavbar from "../navbar";
import Footer from "../footer";

const LayOut = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50/75 backdrop-blur-3xl overflow-hidden">
      <HomeNavbar />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default LayOut;
