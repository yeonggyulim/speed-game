"use client";

import React, { useState } from "react";
import Image from "@atoms/Image";
import NavbarMenuItem from "@molecules/NavbarMenuItem";
import Icon from "@atoms/Icon";
import Button from "@atoms/Button";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 flex flex-wrap items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/" className="hover:text-blue-400 transition-colors">
          스피드 게임
        </Link>
      </div>
      <Button
        className="block lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <Icon type={isOpen ? "close" : "menu"} />
      </Button>
      <ul
        className={`${isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-6 w-full lg:w-auto mt-4 lg:mt-0`}
      >
        <div className="lg:flex lg:space-x-6 flex-col lg:flex-row text-center lg:text-left">
          <NavbarMenuItem href="/">Home</NavbarMenuItem>
          {/* <NavbarMenuItem href="#">Test Top 5</NavbarMenuItem>
          <NavbarMenuItem href="#">Enjoy</NavbarMenuItem>
          <NavbarMenuItem href="#">About</NavbarMenuItem>
          <NavbarMenuItem href="#">FAQ</NavbarMenuItem>
          <NavbarMenuItem href="#">Contact Us</NavbarMenuItem> */}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
