var myObstacles = [];
var home ;

function startGame() {
  myGamePiece = new component(40, 60, "/Users/mac/JDI/projects/Project-1/download.png", 10, 120, "image");
  home = new component(20, 40, "/Users/mac/JDI/projects/Project-1/grandma.png", 380, 220, "image");

  myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.frameNo = 0;
      this.interval = setInterval(updateGameArea, 20);
      },
  clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
      clearInterval(this.interval);
  }
}

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image") {
      this.image = new Image();
      this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;    
  this.x = x;
  this.y = y;    
  this.update = function() {
      ctx = myGameArea.context;
      if (type == "image") {
          ctx.drawImage(this.image, 
              this.x, 
              this.y,
              this.width, this.height);
      } else {
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      }
  }
  this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;        
  }

//if crach with wall

this.crashWith = function(otherobj) {
  var myleft = this.x;
  var myright = this.x + (this.width);
  var mytop = this.y;
  var mybottom = this.y + (this.height);
  var otherleft = otherobj.x;
  var otherright = otherobj.x + (otherobj.width);
  var othertop = otherobj.y;
  var otherbottom = otherobj.y + (otherobj.height);
  var crash = true;
  if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
      crash = false;
  }
  return crash;
}
}


function updateGameArea() {
  var x, y;
  for (i = 0; i < myObstacles.length; i += 1) {
      if (myGamePiece.crashWith(myObstacles[i])) {
        popupWindow1 = window.open("/Users/mac/JDI/projects/Project-1/gameover.jpg");
        myGameArea.stop();
          return;
      } 

  }

  if (myGamePiece.crashWith(home)){
    alert("you are win");
            myGameArea.stop();}
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(150)) {
      x = myGameArea.canvas.width;
      y = myGameArea.canvas.height - 200;
      myObstacles.push(new component(20, Math.floor(Math.random() * 150), "/Users/mac/JDI/projects/Project-1/wall.png", x, y, "image"));
  }
  for (i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].x += -1;
      myObstacles[i].update();
  }
  home.update();
  myGamePiece.newPos();    
  myGamePiece.update();
}




function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}



function moveup() {
  myGamePiece.speedY = -1; 
}

function movedown() {
  myGamePiece.speedY = 1; 
}

function moveleft() {
  myGamePiece.speedX = -1; 
}

function moveright() {
  myGamePiece.speedX = 1; 
}

function clearmove() {
  myGamePiece.speedX = 0; 
  myGamePiece.speedY = 0; 
}
 

 function EXit(){
   window.location.replace("file:///Users/mac/JDI/projects/Project-1/home.html")
 }


function hideme() {
 document.getElementsByClassName('image2').style.visibility='hidden';

}

function showme() {
  document.getElgetElementsByClassNameementById('image2').style.visibility="visible";
 
 }