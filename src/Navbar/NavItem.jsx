import React from "react";
import { Link } from "react-router-dom";

import "./NavItem.scss";

const NavItem = ({ name, path }) => {
  return (
    <>
      <div className="nav-item">
        <Link to={path}>{name}</Link>
      </div>
    </>
  );
};

export default NavItem;
