# Vanilla SPA

SPA와 MPA의 동작에서 차이가 발생한다.

MPA같은 경우는 URL 전환이 이루어짐에 따라 서버에 해당 URL에 대한 페이지 리소스를 요청한다.

하지만, SPA는 MPA와 다르게 URL의 변경이 이루어지면 서버의 요청 없이 클라이언트에서 동적 생성을 진행한다.

따라서, SPA는 서버에 리소스를 요청하지 않고 클라이언트 내에서 화면을 전환하는 것을 말할 수 있다.

## 구현 방법

SPA를 구현하기 위해서는 서버에 요청이 아닌 클라이언트 내에서 URL의 변경을 감지하고 페이지 생성을 동적으로 하여야 한다.

그냥 Anchor로 html 파일에 대한 요청을 한다면 새로고침이 발생하고 서버에서 파일을 전달하는 식으로 화면 전환을 한다.

따라서, 새로고침 없이 클라이언트가 동적 화면 전환을 하려면 history API를 활용해야 한다.

## 코드

```
// Home Page Component
class Home {
  render() {
    return `<div>Home Page</div>`
  }
};

export default new Home(); // Home 객체 생성과 함께 내보내기
```

```
// About Page Component
class About {
  render() {
    return `<div>About Page</div>`
  }
};

export default new About(); // About 객체 생성과 함께 내보내기
```

```
import Home from "./Home.js";
import About from "./About.js";

const routes = {
  "/": {
    key: "about",
    title: "About",
    element: Home
  },
  "/about": {
    key: "home",
    title: "Home",
    element: About
  }
};

export default routes;
```

```
import routes from "./routes.js";

const $main = document.getElementById("main");

export const changePath = (requestUrl) => {
  history.pushState(null, "", requestUrl);
  $main.innerHtml = routes[requestUrl].render();
}

// 뒤로가기 화면 전환 이벤트
window.addEventListener("popstate", () => {
  changePath(window.location.pathname);// 뒤로가기 후, 현재 URL 전달
});
```

## Link

```
import { changePath } from "./main.js";
import routes from "./routes.js";

const $header = document.getElementById("header");

const pathKeys = Object.keys(routes);

const renderLinks = () => {
  const $menu = document.createElement("ul");
  const $items = pathKeys.map((key) => {
    const $item = document.createElement("li");
    const $link = document.createElement("a");

    $link.innerText = routes[key].key;
    $link.onclick = () => changePath(key);
    $item.appendChild($link);
    return $item
  });

  $menu.append(...$items);
  $header.appendChild($menu);
}

renderLinks();
```
