import React from "react";
import "./Navbar.css";
import NavItem from "./NavItem";

const Navbar = () => {
  const fakeNavItems = [
    { id: 1, label: "Destinations", path: "/destinations" },
    { id: 2, label: "Maps", path: "/maps" },
    { id: 3, label: "About Me", path: "/aboutlmer" },
    { id: 4, label: "Other Cool Stuff", path: "/othercoolstuff" },
  ];
  return (
    <>
      <div className="nav-bar">
        {fakeNavItems.map((item) => (
          <NavItem key={item.id} name={item.label} path={item.path} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
