"use client"
import { useState} from "react";

export const navbarState = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMobileMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setMenuOpen(!isMenuOpen);
    }
  };
  return {
    isMenuOpen,
    handleToggleMenu,
    handleMobileMenuKeyDown,
  };
};
