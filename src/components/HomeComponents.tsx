import React from "react";
import { home } from "../model/home";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const HomeComponents = () => {
  return (
    <div
      id="inicio"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {home.map(({ id, title, resume }) => (
          <div key={id} className="flex flex-col justify-center h-full ">
            <h2 className="text-2xl md:text-7xl sm:text-7xl font-bold text-white">
              {title}
            </h2>
            <p className="text-gray-500 py-4 max-w-md">{resume}</p>

            <div>
              <Link
                to="about"
                smooth
                duration={500}
                className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-700 to-gray-700 cursor-pointer"
              >
                Proyectos
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        ))}

        <div>
          <img
            src="/yo.jpg"
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 sm:w-2/3 md:w-2/3 mb-12 "
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponents;
