import routes from "./routes/index.js";
import renderHeader from "../src/components/header.js";

const $main = document.getElementById("main");
const $web_title = document.querySelector("title");

$main.innerHTML = routes["/"].element.render();

export const changePath = (requestUrl) => {
  history.pushState(null, null, requestUrl);
  $main.innerHTML = routes[requestUrl].element.render();
  $web_title.innerText = `SPA | ${routes[requestUrl].title}`;
};

// 뒤로가기 감지 시, path 키에 매칭되는 컴포넌트 렌더링
window.addEventListener("popstate", () => {
  changePath(window.location.pathname);
});

renderHeader();
