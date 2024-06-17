import React from "react";
import HomeNavbar from "../navbar";
import Footer from "../footer";

const LayOut = ({ children }) => {
  return (
    <div className="bg-slate-100">
      <HomeNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default LayOut;
