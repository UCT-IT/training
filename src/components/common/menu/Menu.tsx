import React, { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return <div></div>;
};

export default Menu;
