import React from "react";
import { skills } from "../model/skills";

const Skills = (): JSX.Element => {
  return (
    <div
      id="habilidades"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-5 md:mt-32">
          <p className="md:text-2xl text-base font-bold border-b-2 border-gray-500 p-2 md:inline text-center ">
            Habilidades
          </p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 ">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} mt-20`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
