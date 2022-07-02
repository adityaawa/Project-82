var mouseEvent="empty";
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
color="red";
lineWidth = 2;
var l_mouse_x, l_mouse_y, c_mouse_x, c_mouse_y ;

canvas.addEventListener("mousedown",  my_mousedown);

function  my_mousedown (e)
{
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("width_of_line").value;
    console.log(color);
   mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",  my_mousemove);

function  my_mousemove (e)
{
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("width_of_line").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y =e.clientY - canvas.offsetTop;
    console.log();
    circle(mouse_x, mouse_y );
}

canvas.addEventListener("mousedown",  my_mousedown);

function  my_mousemove (e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
        radius = 
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y =e.clientY - canvas.offsetTop;
    console.log();
    circle(mouse_x, mouse_y );
}




function circle (mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc( mouse_x  ,  mouse_y ,  40 ,  0 ,  2 * Math.PI );
ctx.stroke();
}

function clearArea()
{
    ctx.clearRect (0, 0, canvas.width, canvas.height);
    
}
