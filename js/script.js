const themeButton = document.getElementById("themeButton");
const main = document.getElementById("main");
const menuIcon = document.getElementById("navbar__menu--collapsed")

themeButton.addEventListener('click', () => {
    changeMode();
});

main.addEventListener('click', (evento) => {
    const cardTheme = evento.target.closest('#card-3');
    
    if(cardTheme){
        changeMode();
        return;
    }

    const cardCreate = evento.target.closest('#card-2');

    if(cardCreate){
        alert("Funcionalidade em Desenvolvimento!");
        return;
    }
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

