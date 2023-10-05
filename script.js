const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

function toggleMenu() {
    hamburger.classList.toggle("activate");
    navMenu.classList.toggle("activate");
}

hamburger.addEventListener("click", toggleMenu);

navMenu.addEventListener("click", (event) => {
    if (event.target.classList.contains("item")) {
        toggleMenu();
    }
});
