var numberofbuttons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofbuttons;i++){ //loop to add event listner to every button//
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
     

          var htminput=this.innerHTML; // records the key which we pressed//
          
          makesound(htminput); // used to see which button we clicked//
        buttonanim(htminput);

    });
}
document.addEventListener("keydown",function (event ){ // we used this to enitre document to listen to all keystrokes//
  makesound(event.key); // used to know the keyboard press//
 buttonanim(event.key);
     

});

function makesound(input){
    switch (input) {
        case "w":
          var crash= new Audio("sounds/crash.mp3");// creating an audio object//
          crash.play();
            
            break;
            case "w":
              var crash= new Audio("sounds/crash.mp3");
              crash.play();
                
                break;
                case "a":
                  var crash1= new Audio("sounds/kick-bass.mp3");
                  crash1.play();
                    
                    break;
                    case "s":
                      var crash2= new Audio("sounds/snare.mp3");
                      crash2.play();
                        
                        break;
                        case "d":
                          var crash3= new Audio("sounds/tom-1.mp3");
                          crash3.play();
                            
                            break;
                            case "j":
          var crash4= new Audio("sounds/tom-2.mp3");
          crash4.play();
            
            break;
            case "k":
              var crash5= new Audio("sounds/tom-3.mp3");
              crash5.play();
                
                break;
                case "l":
          var crash6= new Audio("sounds/tom-4.mp3");
          crash6.play();
            
            break;
    
        
                                            
        default:
            console.log("nothing");
            break;
    }

 }

 function buttonanim(input ){
     var buttonkey= document.querySelector("."+input); // for knowing the class which the button is //
     buttonkey.classList.add("pressed");
     setTimeout(() => {
         buttonkey.classList.remove("pressed");
         
     }, 100);

 }
