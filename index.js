
// var numberOfDrums = document.querySelectorAll(".drum").length;

// for(var i = 0; i < numberOfDrums; i++){
//    document.querySelectorAll(".drum")[i].addEventListener("click",doSomething);
// }

// function doSomething(){
  
//    var letter = this.innerHTML;
//    switch (letter) {
//       case "w":
//          var tom1= new Audio("sounds/tom-1.mp3");
//          tom1.play();
//          break;
//       case "a":
//          var tom2 = new Audio("sounds/tom-2.mp3");
//          tom2.play();
//          break;   
//       case "s":
//          var tom3 = new Audio("sounds/tom-3.mp3");
//          tom3.play();
//          break;
//       case "d":
//          var tom4 = new Audio("sounds/tom-4.mp3");
//          tom4.play();
//          break;
//       case "j":
//          var snare = new Audio("sounds/snare.mp3");
//          audio.play();
//          break;
//       case "k":
//          var kick = new Audio("sounds/kick-bass.mp3");
//          kick.play();
//          break; 
//       case "l":
//          var crash = new Audio("sounds/crash.mp3");
//          crash.play();
//          break; 

//       default:
//          console.log(letter);
//          break;
//    }
// }

// document.addEventListener("keypress", handkeKey);

// function handkeKey(event){
//    var keyPressed = event.key;

//    switch (keyPressed) {
//       case "w":
//          var tom1= new Audio("sounds/tom-1.mp3");
//          tom1.play();
//          break;
//       case "a":
//          var tom2 = new Audio("sounds/tom-2.mp3");
//          tom2.play();
//          break;   
//       case "s":
//          var tom3 = new Audio("sounds/tom-3.mp3");
//          tom3.play();
//          break;
//       case "d":
//          var tom4 = new Audio("sounds/tom-4.mp3");
//          tom4.play();
//          break;
//       case "j":
//          var snare = new Audio("sounds/snare.mp3");
//          audio.play();
//          break;
//       case "k":
//          var kick = new Audio("sounds/kick-bass.mp3");
//          kick.play();
//          break; 
//       case "l":
//          var crash = new Audio("sounds/crash.mp3");
//          crash.play();
//          break; 

//       default:
//          console.log("press a valid key");
//          break;
//    }
// }


// more prefered way
var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrums; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var keyClicked = this.innerHTML;
      makeSound(keyClicked);
      buttonAnimation(keyClicked);
   });
   
}

document.addEventListener("keypress", function(event){
   var keyPressed = event.key;
   makeSound(keyPressed);
   buttonAnimation(keyPressed);
})

function makeSound(letter){
   switch (letter) {
      case "w":
         var tom1= new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
      case "a":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;   
      case "s":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
      case "d":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
      case "j":
         var snare = new Audio("sounds/snare.mp3");
         audio.play();
         break;
      case "k":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break; 
      case "l":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break; 

      default:
         console.log("press a valid key");
         break;
   }
}

function buttonAnimation(pressedKey){
   var activeButton = document.querySelector("." + pressedKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
      activeButton.classList.remove("pressed");
   }, 100);

}