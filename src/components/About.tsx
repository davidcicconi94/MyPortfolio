import React from "react";

const About = () => {
  return (
    <div
      id="acerca"
      className="md:w-full h-full bg-gradient-to-b from-gray-400 to-gray-700"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:h-screen">
        <div className="mt-5">
          <p className="md:text-2xl text-base font-bold md:inline text-center border-b-2 p-2 border-red-700 ">
            Acerca
          </p>
        </div>

        <p className="md:text-xl text-base mt-10 mb-5">
          Mi nombre es David Cicconi, nací el 13 de Agosto de 1994 y soy de la
          ciudad de <i>Rosario, Santa Fe. Argentina.</i>
        </p>

        <p className=" md:text-xl  text-base mb-5">
          Comencé a programar por primera vez en <b>2019</b>, en el terciario de
          Desarrollo de Software{" "}
          <i className="font-semibold">Esc. N° 49 Gral Urquiza.</i>
          <p className="md:text-xl  text-base mb-5">
            Por motivos laborales tuve que abandonar mis estudios en <b>2020</b>
            , no obstante continué mis estudios de manera autodidacta, con
            cursos de Udemy.
          </p>
          <p className="md:text-xl  text-base mb-5">
            En el año <b>2021</b>, participé de <b>Argentina Programa</b> con
            tecnologías como Angular, Java, Spring. También fui parte de un
            bootcamp presencial dictado por <b>Redjar ltda</b>.
          </p>
          <p className="md:text-xl  text-base ">
            En <b>2022</b> me recibí como Full stack developer en <b>Henry</b>,
            con un proyecto final elegido por la comunidad como{" "}
            <b>"El mejor proyecto del año"</b>.
            <p>
              Durante la cursada, fui seleccionado por el staff de Henry como{" "}
              <b>Teaching Assistant de repaso</b>, coordinando, asistiendo y
              liderando grupos de estudiantes que debían recursar algún modulo
              del bootcamp.
            </p>
            <p className="md:text-xl mb-5 text-base">
              A fines del año, participé de un Hackathon con ex alumnos de
              Henry, desarrollando una plataforma cuyo objetivo es la
              colaboración entre la comunidad.
            </p>
            <p className="md:text-xl mb-10 text-base">
              Actualmente me encuentro trabajando de forma voluntaria de un
              proyecto para la empresa <b>Ixalab</b>, como desarrollador
              Frontend.
            </p>
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
