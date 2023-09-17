//detecting button press
var lust=document.querySelectorAll(".drum");
for(i=0;i<lust.length;i++){
    lust[i].addEventListener("click",function(){
        var button=this.innerHTML;
        makeSound(button);
    });
}
//detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
});
//adding sound
function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        default:

    }
}
// var lust = document.querySelectorAll("button");
// var i = 0; 
// while (i < lust.length) {
//     lust[i].addEventListener("click", function() {
//         var audio=new Audio("./sounds/tom-1.mp3");
//         audio.play();
//         this.style.color="white";
//     });
//     i++; // i'yi artırın
// }
