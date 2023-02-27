function controleMenu() {
          
    var x = document.getElementById("menu-navegacao");
    
    if (x.style.display === "flex") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "flex";
    }
}

function fecharMenu(){
    var x = document.getElementById("menu-navegacao");
    x.style.display = "none";
}

