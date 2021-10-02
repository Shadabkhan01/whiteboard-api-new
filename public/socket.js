const { contextBridge } = require("electron")

socket.on("md", function(point){
    //mousedown point
    let myStyle = ctx.strokeStyle;
    let myLine = ctx.lineWidth;

    ctx.strokeStyle = point.strokeStyle;
    ctx.lineWidth = point.lineWidth;
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);

    ctx.strokeStyle = myStyle;
    ctx.lineWidth = myLine;

});

socket.on("mm", function (point) {
    // mousemove point
    let myStyle = ctx.strokeStyle;
    let myLine = ctx.lineWidth;

    ctx.strokeStyle = point.strokeStyle;
    ctx.lineWidth = point.lineWidth;
    ctx.lineTo(point.x, point.y);
    ctx.stroke();

    ctx.strokeStyle = myStyle;
    ctx.lineWidth = myLine;

  });