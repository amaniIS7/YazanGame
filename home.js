
function hello() {
    var txt;
    var person = prompt("Please enter your name:");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
       alert( "Hello " + person + " Enjoy");
      window.location.replace("file:///Users/mac/JDI/projects/Project-1/index.html")
    } 
  }

  function story() {
    alert("Help the child Yazan to reach his grandmother's house and escape obstacles.If he gets to his grandmother's house, you get passed the first level and he takes you to the second level If you hit the obstacles, you will lose the game. Good luck with that");


  }