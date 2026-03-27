if (localStorage.getItem("tema") === null){
    localStorage.setItem("tema", "dark");
}

let currentMode = localStorage.getItem("tema") === "light"
    ? document.documentElement.classList.remove("dark-mode")
    : document.documentElement.classList.add("dark-mode");

document.addEventListener("DOMContentLoaded", () => {
    let currentIcon = localStorage.getItem("tema") === "light"
    ? "/projeto-landing-page/assets/icons/light-mode.svg"
    : "/projeto-landing-page/assets/icons/dark-mode.svg";

    document.getElementById("img-theme").src = currentIcon
})
