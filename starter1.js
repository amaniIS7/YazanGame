// var zone1 = document.getElementById('zone-1')
// zone1.onmouseover = function(){zone1.style.backgroundColor = "green"}
// zone1.onmouseleave = function(){zone1.style.backgroundColor = "white"};

function moveup() {
//     container.speedY -= 1; 


var elem = document.getElementById("container");   
var pos = 0;
var id = setInterval(frame, 5);
function frame() {
  if (pos == 350) {
    clearInterval(id);
  } else {
    pos++; 
    elem.style.top = pos + "px"; 
    elem.style.left = pos + "px"; 
  }

 }

// function movedown() {
//     container.speedY += 1; 
// }

// function moveleft() {
//     container.speedX -= 1; 
// }

// function moveright() {
//     container.speedX += 1; 
// }

// $(document).ready(function(){
//     $("button").click(function(){
//       $("container").slideUp(2000).slideDown(2000);
//     });
//   });



