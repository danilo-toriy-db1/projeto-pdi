if (!localStorage.getItem("tema")){
    localStorage.setItem("tema", "dark");
}

let currentMode = localStorage.getItem("tema") === "light"
    ? document.documentElement.classList.remove("dark-mode")
    : document.documentElement.classList.add("dark-mode");

document.addEventListener("DOMContentLoaded", () => {
    let currentIcon = localStorage.getItem("tema") === "light"
    ? "./assets/icons/light-mode.svg"
    : "./assets/icons/dark-mode.svg";

    document.getElementById("img-theme").src = currentIcon
})