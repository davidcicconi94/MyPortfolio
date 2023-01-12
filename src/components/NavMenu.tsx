import React from "react";
import { Link } from "react-scroll";
import { links } from "../model/links";

const NavMenu = ({ handleClick }: any) => {
  return (
    <ul className="fixed flex flex-col justify-center items-center md:hidden top-20 right-0 w-1/2 h-1/3 rounded-sm bg-gradient-to-b from-black to-gray-800 text-gray-400">
      {links.map(({ id, link }) => (
        <Link
          onClick={handleClick}
          to={link}
          key={id}
          duration={500}
          className="px-4 py-1 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
        >
          {link}
        </Link>
      ))}
    </ul>
  );
};

export default NavMenu;
