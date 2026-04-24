const themeButton = document.getElementById("themeButton");
const cardTheme = document.getElementById("card-3");

themeButton.addEventListener('click', () => {
    changeMode();
});

cardTheme.addEventListener('click', () => {
    changeMode();
});

function changeMode(){
    if(localStorage.getItem("tema") === "light"){
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("tema", "dark");
        document.getElementById("img-theme").src = "/projeto-landing-page/assets/icons/dark-mode.svg";
        return;
    }

    document.documentElement.classList.remove("dark-mode");
    localStorage.setItem("tema", "light");
    document.getElementById("img-theme").src = "/projeto-landing-page/assets/icons/light-mode.svg";
}

