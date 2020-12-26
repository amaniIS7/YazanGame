
 var  myGamePiece = document.getElementById("container");

 function startGame() {  
     myGameArea.start();}

var myGameArea = {
  canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 880;
        this.canvas.height = 370;
this.context = this.canvas.getContext("2d");  
         document.body.insertBefore(this.canvas, document.body.childNodes[1]);
     }  
 }






 function moveup() {}
 function movedown() {}

 function moveleft() {}

 function moveright() {}



 function EXit(){
   window.location.replace("file:///Users/mac/JDI/projects/Project-1/home.html")
 }
