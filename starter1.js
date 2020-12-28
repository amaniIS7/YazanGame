var wall = [];
var home ;
var level = 0;
function startGame() {
  yazan = new component(15, 60, "/Users/mac/JDI/projects/Project-1/download.png", 35, 210, "image");
  home = new component(20, 40, "/Users/mac/JDI/projects/Project-1/grandma.png", 380, 220, "image");
  faile = new sound("https://audio.code.org/failure3.mp3");
  win = new sound("https://audio.code.org/winpoint1.mp3");
  myGameArea.start();
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }    
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
  for (i = 0; i < wall.length; i += 1) {
      if (yazan.crashWith(wall[i])) {
        faile.play();
        myGameArea.stop();
        popupWindow1 = window.open("/Users/mac/JDI/projects/Project-1/gameover.jpg");
          return;
      } 

  }

  if (yazan.crashWith(home)){
    win.play();
    level++;
    if (confirm("you are win in level:"+level)) {
      startGame();
    } else {
      window.location.replace("file:///Users/mac/JDI/projects/Project-1/home.html")
    }
    myGameArea.stop();

       }
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(150)) {
      x = myGameArea.canvas.width;
      y = myGameArea.canvas.height - 200;
      wall.push(new component(20, Math.floor(Math.random() * 150), "/Users/mac/JDI/projects/Project-1/wall.png", x, y, "image"));
  }
  for (i = 0; i < wall.length; i += 1) {
    wall[i].x += -1;
    wall[i].update();
  }
  home.update();
  yazan.newPos();    
  yazan.update();
}




function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}



function moveup() {
  yazan.speedY = -1; 
}

function movedown() {
  yazan.speedY = 1; 
}

function moveleft() {
  yazan.speedX = -1; 
}

function moveright() {
  yazan.speedX = 1; 
}

function clearmove() {
  yazan.speedX = 0; 
  yazan.speedY = 0; 
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