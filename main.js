var mouseevent="empty";
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=1;
radius=40;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseevent="mousedown";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseevent="mouseup";
}
canvas.addEventListener("mousemove",my_Mousemove);
function my_Mousemove(e) {
    current_x=e.clientX - canvas.offsetLeft;
    current_y=e.clientY - canvas.offsetTop;
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;

    if (mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinate is =");
        console.log("x=" + last_x + ",y=" + last_y);
        ctx.arc(last_x,last_y,radius,0,2*Math.PI);
        console.log("current position of x and y coordinate is =");
        console.log("x=" + current_x + ",y=" + current_y);
        ctx.stroke()
          }
    last_x = current_x;
    last_y = current_y;
}
function cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}












var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width=screen.width;
    new_width=screen.width - 150;
    new_height=screen.height - 300;
    if (width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";

    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends//
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

         if (mouseevent=="mousedown"){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=width_of_line;
            console.log("last position of x and y coordinate is =");
            console.log("x=" + last_x + ",y=" + last_y);
            ctx.arc(last_x,last_y,radius,0,2*Math.PI);
            console.log("current position of x and y coordinate is =");
            console.log("x=" + current_x + ",y=" + current_y);
            ctx.stroke()
              }   
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

 function cleararea(){
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }