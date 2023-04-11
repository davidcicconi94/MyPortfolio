import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = (): JSX.Element => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="p-4  shadow md:px-6 md:py-8 bg-black">
      <div className="sm:flex sm:items-center sm:justify-between ">
        <span className="self-center text-2xl whitespace-nowrap dark:text-white font-signature ">
          DavidCicconi
        </span>
        <ul className="flex flex-wrap items-center my-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/david-cicconi-dev/"
            className="mr-4 hover:text-slate-500 md:mr-6 flex"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={18} /> <h2 className="mx-2">Linkedin</h2>
          </a>
          <a
            href="https://github.com/davidcicconi94"
            className="mr-4 hover:text-slate-500 md:mr-6 flex"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={18} /> <h2 className="mx-2">Github</h2>
          </a>
          <a
            href="mailto:david.cicconi94@gmail.com"
            className="mr-4 hover:text-slate-500 md:mr-6 flex"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail size={18} /> <h2 className="mx-2">Email</h2>
          </a>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © David Cicconi - {currentYear} . Todos los derechos reservados
      </span>
    </footer>
  );
};

export default Footer;
