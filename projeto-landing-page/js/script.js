function changeMode(){
    if(localStorage.getItem("tema") === "light"){
        document.body.classList.add("dark-mode");
        localStorage.setItem("tema", "dark");
    }else{
        document.body.classList.remove("dark-mode");
        localStorage.setItem("tema", "light");
    }
}
