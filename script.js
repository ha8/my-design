document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();
  const navbarItems = document.querySelectorAll(".nav-item");

  // Loop through each navbar item
  navbarItems.forEach((item) => {
    const link = item.querySelector("a");
    const linkPath = link.getAttribute("href").split("/").pop();

    if (linkPath === currentPath) {
      item.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  function createFallingItem(type, src) {
    const item = document.createElement("div");
    item.classList.add("falling-item", type);

    const img = document.createElement("img");
    img.src = src;
    img.alt = type;

    item.appendChild(img);
    document.getElementById("falling-items").appendChild(item);

    item.addEventListener("animationend", () => {
      item.remove();
    });
  }
  setInterval(() => {
    createFallingItem("heel", "images/heel.png");
    createFallingItem("bag", "images/bag.png");
    createFallingItem("hanger", "images/hanger.png");
  }, 2000);
});
