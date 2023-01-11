import React from "react";
import { Link } from "react-scroll";
import { links } from "../model/links";

const NavMenu = () => {
  return (
    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
      {links.map(({ id, link }) => (
        <Link
          to={link}
          key={id}
          className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
        >
          {link}
        </Link>
      ))}
    </ul>
  );
};

export default NavMenu;
