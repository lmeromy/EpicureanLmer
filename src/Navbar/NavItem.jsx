import React from "react";
import "./NavItem.css";

const NavItem = ({ name }) => {
  return (
    <>
      <div className="nav-item">{name}</div>
    </>
  );
};

export default NavItem;
