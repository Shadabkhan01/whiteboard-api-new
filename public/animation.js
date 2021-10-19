let toolButton = document.querySelector(".tool-button");
let toolbox = document.querySelector(".tool-box");
let menuOption = document.querySelector("#menu-option");
let menuClose = document.querySelector("#menu-close")

/* toolButton.addEventListener("click", function(){
    
    if(toolbox.classList.contains("hide")){
        toolbox.classList.remove("hide");
        
    }
    else{
        toolbox.classList.add("hide");
        
    }


}) */

cross.addEventListener("click", function(){
    toolbox.classList.add("hide");
    cross.classList.add("hide");
    hamOption.classList.remove("hide");

})

hamOption.addEventListener("click", function(){
    toolbox.classList.remove("hide");
    hamOption.classList.add("hide");
    cross.classList.remove("hide");
    

})