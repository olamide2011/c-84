canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_image="mars.jpg";

rover_image="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

   rover_imgTag=new Image();
   rover_imgTag.onload=uploadrover;
   rover_imgTag.src=rover_image;
 

}