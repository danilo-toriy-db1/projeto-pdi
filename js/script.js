const themeButton = document.getElementById("themeButton");
const cardTheme = document.getElementById("card-3");
const menuIcon = document.getElementById("navbar__menu--collapsed")

themeButton.addEventListener('click', () => {
    changeMode();
});

cardTheme.addEventListener('click', () => {
    changeMode();
});

menuIcon.addEventListener('click', () => {
    document.body.classList.toggle("expanded");
})

function changeMode(){
    if(localStorage.getItem("tema") === "light"){
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("tema", "dark");
        document.getElementById("img-theme").src = "./assets/icons/dark-mode.svg";
        return;
    }

    document.documentElement.classList.remove("dark-mode");
    localStorage.setItem("tema", "light");
    document.getElementById("img-theme").src = "./assets/icons/light-mode.svg";
}

