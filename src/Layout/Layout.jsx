import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
    </div>
  );
};

export default Layout;
