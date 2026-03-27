function changeMode(){
    if(localStorage.getItem("tema") === "light"){
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("tema", "dark");
    }else{
        document.documentElement.classList.remove("dark-mode");
        localStorage.setItem("tema", "light");
    }
}
