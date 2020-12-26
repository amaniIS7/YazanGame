
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