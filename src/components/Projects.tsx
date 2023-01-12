import React from "react";
import { projects } from "../model/projects";

const Projects = () => {
  return (
    <div
      id="proyectos"
      className="md:w-full h-full bg-gradient-to-b from-gray-400 to-gray-700"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-5">
          <p className="md:text-2xl text-base font-bold md:inline text-center border-b-2 p-2 border-red-700">
            Proyectos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 w-full my-10">
          {projects.map(({ title, src, deployLink, gitLink }) => (
            <div
              key={title}
              className="shadow-md shadow-gray-800 rounded-lg h-full"
            >
              <p className="text-center font-semibold bg-black p-3 border-b-2 text-white tracking-separation ">
                {title}
              </p>
              <div className="h-32">
                <img src={src} alt="" className="object-cover" />
              </div>
              <div className="flex items-center justify-between p-10 bg-gradient-to-b from-black via-black to-gray-800 ">
                <a href={deployLink} target="_blank" rel="noreferrer">
                  <button className="bg-transparent  text-red-700 font-semibold  py-2 px-4 border border-red-700 hover:border-transparent rounded">
                    Demo
                  </button>
                </a>
                <a href={gitLink} target="_blank" rel="noreferrer">
                  <button className="bg-transparent  text-red-700 font-semibold  py-2 px-4 border border-red-700 hover:border-transparent rounded">
                    Código
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
