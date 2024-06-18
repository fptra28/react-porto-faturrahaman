import React from "react";
import HomeNavbar from "../navbar";
import Footer from "../footer";

const LayOut = ({ children }) => {
  return (
    <div className="bg-slate-100">
      <HomeNavbar />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default LayOut;
