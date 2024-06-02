import Home from "../page/home.js";
import About from "../page/about.js";

const routes = {
  "/": {
    key: "home",
    title: "Home",
    element: Home,
  },
  "/about": {
    key: "about",
    title: "About",
    element: About,
  },
};

export default routes;
