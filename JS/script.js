function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(document.getElementsByClassName("darkModeButton")[0].textContent == "🌙"){
        document.getElementsByClassName("darkModeButton")[0].textContent = "☀️";
    }else{
        document.getElementsByClassName("darkModeButton")[0].textContent = "🌙";
    }
}