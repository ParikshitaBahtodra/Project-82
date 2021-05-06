var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var color="black";
var line_width=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("linewidth").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;

    current_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        ctx.arc(current_x,current_y,20,0,2*Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) { mouseEvent = "mouseUP"; }
 canvas.addEventListener("mouseleave", my_mouseleave);
  function my_mouseleave(e) { mouseEvent = "mouseleave"; }
   //Additional Activity
    function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
