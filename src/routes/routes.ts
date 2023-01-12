import Error from "../pages/Error";
import Home from "../pages/Home";

interface Route {
  path: string;
  to: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    path: "/",
    to: "/",
    Component: Home,
    name: "Home",
  },
];
