const hamburger = document.querySelector(".Hamburger");

hamburger.onclick = function () {
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
};
