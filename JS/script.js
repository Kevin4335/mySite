//1 Day = 24 Hrs = 24*60*60 = 86400.

function init_dark_or_light() {
    var element = document.body;
    //element.classList.toggle("light-mode");

    if(localStorage.getItem("dark_or_light") == 0){
        element.classList.remove("light-mode");
        document.getElementsByClassName("darkModeButton")[0].textContent = "☀️";
        document.getElementsByClassName("darkModeButton")[0].style.backgroundColor = "#3A3858";
        document.getElementById("navbar").style.backgroundColor="#352B42";
    
    }else{
        element.classList.add("light-mode");
        document.getElementsByClassName("darkModeButton")[0].textContent = "🌑";     
        document.getElementById("navbar").style.backgroundColor="#E5CEB4";
        document.getElementsByClassName("darkModeButton")[0].style.backgroundColor = "#F2F0E5";
    }
}

function darkMode() {
    var element = document.body;
    //element.classList.toggle("light-mode");

    if(localStorage.getItem("dark_or_light") == 1){
        localStorage.setItem("dark_or_light", 0);
        element.classList.remove("light-mode");
        document.getElementsByClassName("darkModeButton")[0].textContent = "☀️";
        document.getElementsByClassName("darkModeButton")[0].style.backgroundColor = "#3A3858";
        document.getElementById("navbar").style.backgroundColor="#352B42";
    
    }else{
        localStorage.setItem("dark_or_light", 1);
        element.classList.add("light-mode");
        document.getElementsByClassName("darkModeButton")[0].textContent = "🌑";     
        document.getElementById("navbar").style.backgroundColor="#E5CEB4";
        document.getElementsByClassName("darkModeButton")[0].style.backgroundColor = "#F2F0E5";
    }

}




// if(document.getElementsByClassName("darkModeButton")[0].textContent == "🌑"){
//     document.getElementsByClassName("darkModeButton")[0].textContent = "☀️";
//     document.getElementsByClassName("darkModeButton")[0].style.backgroundColor = "#3A3858";
//     document.getElementById("navbar").style.backgroundColor="#352B42";

// }else{
//     document.getElementsByClassName("darkModeButton")[0].textContent = "🌑";     
//     document.getElementById("navbar").style.backgroundColor="#E5CEB4";
//     document.getElementsByClassName("darkModeButton")[0].style.backgroundColor = "#F2F0E5";
// }
