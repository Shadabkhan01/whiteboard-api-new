let stickyAdd = document.querySelector("#sticky");

stickyAdd.addEventListener("click", function(){

    stickyContent = createSticky();

    let textBox = document.createElement("textarea");
    textBox.setAttribute("class", "stickybox");
    textBox.setAttribute("rows", "10");
    textBox.setAttribute("cols", "30");

    stickyContent.appendChild(textBox);
    
    
    
});


