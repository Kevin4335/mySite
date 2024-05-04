//1 Day = 24 Hrs = 24*60*60 = 86400.
var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
function init_cookies(){
    console.log("RAN");
    if(!document.cookie){
        document.cookie = "dark_or_light=0; SameSite=lax; expires=" + expires + ";path=/;"
    }
    
}

function darkMode() {
    var element = document.body;
    //element.classList.toggle("light-mode");
    console.log(document.cookie);

    if(document.cookie[14] == '1'){
        document.cookie = "dark_or_light=0; SameSite=lax; expires=" + expires + ";path=/;"
        element.classList.remove("light-mode");
        document.getElementsByClassName("darkModeButton")[0].textContent = "☀️";
        document.getElementsByClassName("darkModeButton")[0].style.backgroundColor = "#3A3858";
        document.getElementById("navbar").style.backgroundColor="#352B42";
    
    }else{
        document.cookie = "dark_or_light=1; SameSite=lax; expires=" + expires + ";path=/;"
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
