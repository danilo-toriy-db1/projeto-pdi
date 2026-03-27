if (localStorage.getItem("tema") === null){
    localStorage.setItem("tema", "dark");
}

let currentMode = localStorage.getItem("tema") === "light"
    ? document.documentElement.classList.remove("dark-mode")
    : document.documentElement.classList.add("dark-mode");
