var canvas = document.getElementById('canvas');

if(canvas.getContext){
  var ctx = canvas.getContext('2d');
  //console.log("ok");

// ctx.beginPath();
// ctx.moveTo(0,100);
// ctx.lineTo(50,0);
// ctx.lineTo(100,100);
// ctx.fill();


// ctx.beginPath();
// ctx.arc(50,50,30,0,Math.PI,false);
// ctx.stroke();


// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.arcTo(65,75,275,100,50);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.quadraticCurveTo(150,300,300,0);
// ctx.stroke();

// ctx.font = '24px sans-serif';
// ctx.fillText("Pankaj Singh",25,25);

// var img = new Image();
// img.onload = function(){
  // ctx.drawImage(img,-12,-12);
// }
// img.src = "googlelogo_color_120x44dp.png";
var sun = new Image();
var earth = new Image();
var moon = new Image();
function start(){

sun.src = 'Canvas_sun.png';
earth.src = 'Canvas_earth.png';
moon.src = 'Canvas_moon.png';

window.requestAnimationFrame(draw);
}

function draw(){
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300);

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

  var time = new Date();
  ctx.rotate((2*Math.PI/60)*time.getSeconds()  +  (2*Math.PI/60000)*time.getMilliseconds());
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24);
  ctx.drawImage(earth,-12,-12);

  ctx.save();
  ctx.rotate((2*Math.PI/6)*time.getSeconds()  +  (2*Math.PI/6000)*time.getMilliseconds());
  ctx.translate(0,29.5);


  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();






ctx.restore();
ctx.beginPath();
ctx.arc(150,150,105,0,2*Math.PI,true);
ctx.stroke();

ctx.drawImage(sun,0,0,300,300);

window.requestAnimationFrame(draw);


}
start();
}
