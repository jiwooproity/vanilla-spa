import routes from "../routes/index.js";
import { changePath } from "../main.js";

const header = document.getElementById("header");
const pathKeys = Object.keys(routes);

const renderHeader = () => {
  const $menu = document.createElement("ul");
  const $items = pathKeys.map((key) => {
    const $item = document.createElement("li");
    const $link = document.createElement("a");
    $link.innerText = routes[key].key;
    $link.onclick = () => changePath(key);
    $item.appendChild($link);
    return $item;
  });

  $menu.append(...$items);
  header.appendChild($menu);
};

export default renderHeader;
