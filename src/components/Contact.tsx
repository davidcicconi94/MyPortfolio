import React from "react";

const Contact = (): JSX.Element => {
  return (
    <div
      id="contacto"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-5">
          <p className="md:text-2xl text-base font-bold border-b-2 border-gray-500 p-2 md:inline text-center ">
            Contacto
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/7290d873-5035-48df-98a3-74042d4a4b81"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              required
              name="message"
              placeholder="Mensaje"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none"
            ></textarea>

            <button className=" text-white bg-gradient-to-r from-red-700 to-gray-700  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Hablemos
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
