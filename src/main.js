import Home from "./components/home.js";
import About from "./components/about.js";

const routes = {
  "/": Home,
  "/about": About,
};

const $root = document.getElementById("root");
$root.innerHTML = routes["/"].render();

const changeUrl = (requestUrl) => {
  history.pushState(null, null, requestUrl);
  $root.innerHTML = routes[requestUrl].render();
};

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("about-link")) {
    changeUrl("/about");
  } else if (e.target.classList.contains("home-link")) {
    changeUrl("/");
  }
});

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});
