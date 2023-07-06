const messageContainer = document.getElementById("messageContainer");
if (messageContainer) {
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

window.closeHeader = (id) => {
  const elm = document.getElementById(id);
  elm.style.display = "none";
};

window.toggleMobileHeader = () => {
  const body = document.getElementsByTagName("body")[0];
  body.classList.toggle("menu-opened");
};

window.toggleThis = (currentElm, id, className) => {
  const activeState = className || "is-opened";
  const elm = document.getElementById(id);
  currentElm.classList.toggle(activeState);
  elm.classList.toggle(activeState);

  const clickHandler = function (event) {
    if (!currentElm.contains(event.target) && !elm.contains(event.target)) {
      currentElm.classList.remove(activeState);
      elm.classList.remove(activeState);

      document.removeEventListener("click", clickHandler);
    }
  };

  document.addEventListener("click", clickHandler);
};

window.toggleSearch = () => {
  const elm = document.getElementById("searchForm");
  elm.classList.toggle("is-opened");
};

const wheels = document.querySelectorAll(".wheel");

const count = (to, elm) => {
  elm.classList.add("rotate");
  const innerElm = elm.getElementsByClassName("wheel-number")[0];
  let count = 0;

  const int = setInterval(() => {
    if (count > to) {
      clearInterval(int);
      elm.classList.remove("rotate");
    } else {
      innerElm.innerHTML = count;
      count++;
    }
  }, 10);
};

wheels.forEach((wheel) => {
  const targetNumber = parseInt(wheel.textContent);
  count(targetNumber, wheel);
});
