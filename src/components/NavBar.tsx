import React, { useState } from "react";
import { links } from "../model/links";
import { FaBars, FaTimes } from "react-icons/fa";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-2xl font-signature ml-2">DavidCicconi</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer pr-4 text-gray-400 md:hidden"
      >
        {show ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {show && <NavMenu />}
    </div>
  );
};

export default NavBar;
