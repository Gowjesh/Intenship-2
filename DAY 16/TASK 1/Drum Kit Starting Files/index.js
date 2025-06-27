// Helper function to play sound
function playSound(key) {
    switch(key){
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log(key);
    }
}

const sw = document.getElementsByClassName("drum");
for(let i=0; i<sw.length; i++){
    sw[i].addEventListener("click", function(){
        let bsw = this.innerHTML;
        playSound(bsw);
        buttonAnimation(bsw);
    });
}

document.addEventListener("keydown", function
    (event){
    let key = event.key;
    playSound(key);
    buttonAnimation(key);
});

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    if(activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
