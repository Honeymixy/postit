/** @format */

import React from "react";
import Footer from "../components/Footer";
import Navbarr from "../components/Navbarr";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbarr />
      <hr className="text-secondary m-0" />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
