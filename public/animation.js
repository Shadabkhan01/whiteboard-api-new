let toolButton = document.querySelector(".tool-button");
let toolbox = document.querySelector(".tool-box");
let menuOption = document.querySelector("#menu-option");
let menuClose = document.querySelector("#menu-close")

toolButton.addEventListener("click", function(){
    
    if(toolbox.classList.contains("hide")){
        toolbox.classList.remove("hide");
        
    }
    else{
        toolbox.classList.add("hide");
        
    }


})