let imageUpload = document.querySelector("#photo-upload");

let upload = document.querySelector("#upload");
let download = document.querySelector("#download");

upload.addEventListener("click", function(){
    imageUpload.click();
})

imageUpload.addEventListener("change", function(e){
    //console.log(imageUpload.files);
    let fileObject = imageUpload.files[0];


    //gives you a image url
    let filePath  = URL.createObjectURL(fileObject);
    
    //img element create
    let img = document.createElement("img");
    img.setAttribute("src", filePath);
    img.classList.add("photo");
    //console.log(img);

    //append image to document => body

    let stickyContent = createSticky();
    stickyContent.appendChild(img);
})

download.addEventListener("click", function(){
    let filePath = canvas.toDataURL("image/png");
    let aTag = document.createElement('a');
    aTag.setAttribute("download", "canvas.png");
    aTag.setAttribute("href", filePath);
    aTag.click();
    aTag.remove();
})
