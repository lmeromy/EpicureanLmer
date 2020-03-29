import React from "react";
import "./Navbar.css";
import NavItem from "./NavItem";

const Navbar = () => {
  const fakeNavItems = [
    { id: 1, label: "Destinations" },
    { id: 2, label: "Maps" },
    { id: 3, label: "About Me" },
    { id: 4, label: "Other Cool Stuff" }
  ];
  return (
    <>
      <div className="nav-bar">
        {fakeNavItems.map(item => (
          <NavItem key={item.id} name={item.label} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
