// opjects -component- of the game 
var wall = [];
var block = [];
var home ;
// to count the levels 
var level = 0;
// creat sounds of the game 
faile = new sound("https://audio.code.org/failure3.mp3");
win = new sound("https://audio.code.org/winpoint1.mp3");




// start game method 
function startGame() {
  // creat game paice
  yazan = new component(20, 40, "https://i.imgur.com/i7gnEf7.png", 35, 220, "image");
  // creat win area 
  home = new component(20, 40, "https://i.imgur.com/0p3v838.png", 380, 220, "image");
  // start the area 
  myGameArea.start();
}

//to play the sounds 
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  // add it to docoment
  document.body.appendChild(this.sound);
  // play function 
  this.play = function(){
      this.sound.play();
  }
  //when we want to stop it 
  this.stop = function(){
      this.sound.pause();
  }    
}





//creat canvas and put it in docmunt 
var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.frameNo = 0;
      this.interval = setInterval(updateGameArea, 20);
      window.addEventListener('keydown', function (e) {
        myGameArea.key = e.keyCode;
    })
    window.addEventListener('keyup', function (e) {
        myGameArea.key = false;
    })
  }, 
  clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
      clearInterval(this.interval);
  }
}
//to add and drow component to game area 
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
  //updat yazan speed 
  this.newPos = function() {

      this.x += this.speedX;
      this.y += this.speedY;        
  }

//check if it crach with any opjects and check in case win or lose  

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
  if ((mybottom < othertop-10) || (mytop > otherbottom-10) || (myright < otherleft+3) || (myleft > otherright+3)) {
      crash = false;//in case not crash 
  }
  return crash;//in case crash 
}


this.crashWith2 = function(otherobj) {
  var myleft = this.x;
  var myright = this.x + (this.width);
  var mytop = this.y;
  var mybottom = this.y + (this.height);
  var otherleft = otherobj.x;
  var otherright = otherobj.x + (otherobj.width);
  var othertop = otherobj.y;
  var otherbottom = otherobj.y + (otherobj.height);
  var crash = true;

  if ((mybottom < othertop+20) || (mytop > otherbottom+20) || (myright < otherleft+3) || (myleft > otherright+3)) {
    crash = false;//in case not crash 
  }
  return crash;//in case crash 
}

}

//to updat it and check in case lose or win  
function updateGameArea() {
  var x, y;
  for (i = 0; i < wall.length; i += 1) {
      if (yazan.crashWith(wall[i])) {
      //sound play 
        // faile.play();

      //  popupWindow1 = window.open("/Users/mac/JDI/projects/Project-1/gameover.jpg");
       //stop the game now 
       myGameArea.stop();
         return;
      } 
  //    myGameArea.start();
  }

  for (i = 0; i < block.length; i += 1) {
    if (yazan.crashWith2(block[i])) {
    
      //sound play 
      // faile.play();

    //  popupWindow1 = window.open("/Users/mac/JDI/projects/Project-1/gameover.jpg");
         //stop the game now 
    myGameArea.stop();

    return;

    } 
//myGameArea.start();
}

//in case win 
  if (yazan.crashWith(home)){
    // sound play 
    win.play();
    // count level + 1  to go to next level 
    level++;
    //confirm massage to show the level and tell you if you win 
    if (confirm("you are win in level:"+level)) {
      //start the game again with another level 
      startGame();
    } else {
      //if user not confirm massage go to home page 
      window.location.replace("file:///Users/mac/JDI/projects/Project-1/home.html")
    }
    //stop the game 
    myGameArea.stop();

       }




  myGameArea.clear();
    yazan.speedX = 0;
    yazan.speedY = 0;



  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(150)) {
      x = myGameArea.canvas.width;
      y = myGameArea.canvas.height - 200;
      //check the level if add more Obstacles to be harder 
      if(level <= 1)
      //add wall with randomly higth 
      wall.push(new component(20, Math.floor(Math.random() * 180), "https://i.imgur.com/AHuKWRI.png", x, y, "image"));
      if (level > 1){
              //add wall with randomly higth and stone 
        wall.push(new component(20, Math.floor(Math.random() * 100), "https://i.imgur.com/AHuKWRI.png", x, y, "image"));
        block.push(new component(20,30, "https://i.imgur.com/jCQpRkp.png", 380,  220, "image"));

      }
  }
  //move the walls 
  for (i = 0; i < wall.length; i += 2) {
    wall[i].x += -0.8;
    wall[i].update();
  }
    //move the stons 
  for (i = 0; i < block.length; i += 2) {
    block[i].x += -0.8;
    block[i].update();
  }



  if (myGameArea.key && myGameArea.key == 37) {yazan.speedX = -1;
  }
  if (myGameArea.key && myGameArea.key == 39) {yazan.speedX = 1; }
  if (myGameArea.key && myGameArea.key == 38) {yazan.speedY = -1; }
  if (myGameArea.key && myGameArea.key == 40) {yazan.speedY = 1; }

//updats other components
home.update();
yazan.newPos();    
yazan.update();
}




function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}



//to go to home 
 function EXit(){
   window.location.replace("file:///Users/mac/JDI/projects/Project-1/home.html")
 }