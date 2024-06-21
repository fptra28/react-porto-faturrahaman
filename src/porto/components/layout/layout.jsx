import React, { useEffect } from "react";
import HomeNavbar from "../navbar";
import Footer from "../footer";
import { useEffect } from "react";

const LayOut = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-100">
      <HomeNavbar />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default LayOut;
