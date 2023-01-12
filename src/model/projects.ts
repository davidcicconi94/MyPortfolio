interface ProjectsProps {
  title: string;
  src: string;
  gitLink: string;
  deployLink: string;
}

export const projects: ProjectsProps[] = [
  {
    title: "Portfolio",
    src: "portfolio.png",
    gitLink: "https://github.com/davidcicconi94/MyPortfolio",
    deployLink: "https://portfolio-davidcicconi.vercel.app/",
  },
  {
    title: "Henry Ask",
    src: "henryask.png",
    gitLink: "https://github.com/PedroMtz8/HenryAsk",
    deployLink: "https://henry-ask.vercel.app/",
  },
  {
    title: "Fit Focus",
    src: "fitfocus.png",
    gitLink: "https://github.com/Final-Project-Henry/Fit-Focus",
    deployLink: "https://pf-app-five.vercel.app/home",
  },
  {
    title: "Videogames App",
    src: "videogames.png",
    gitLink: "https://github.com/davidcicconi94/VideogamesApp-Henry",
    deployLink: "https://videogamesapp-kappa.vercel.app/",
  },
  {
    title: "Form React-Firebase",
    src: "form.png",
    gitLink: "https://github.com/davidcicconi94/react-forms",
    deployLink: "https://react-forms-six.vercel.app/",
  },
  {
    title: "Star Wars api",
    src: "starwars.png",
    gitLink: "https://github.com/davidcicconi94/challenge-frontend",
    deployLink: "https://challenge-frontend-ashy.vercel.app",
  },
];
