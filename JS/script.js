
function darkMode() {
    var element = document.body;
    
    element.classList.toggle("dark-mode");
    if(document.getElementsByClassName("darkModeButton")[0].textContent == "🌑"){
        document.getElementsByClassName("darkModeButton")[0].textContent = "☀️";
        document.getElementsByClassName("darkModeButton")[0].style.backgroundColor = "#3A3858";
        document.getElementById("navbar").style.backgroundColor="#352B42";

    }else{
        document.getElementsByClassName("darkModeButton")[0].textContent = "🌑";     
        document.getElementById("navbar").style.backgroundColor="#E5CEB4";
        document.getElementsByClassName("darkModeButton")[0].style.backgroundColor = "#F2F0E5";
    }
    
}