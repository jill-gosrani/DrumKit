var listt = document.querySelectorAll(".drum");
for(var i =0; i < listt.length;i++){
    listt[i].addEventListener("click", function (event){
        checkKey(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keydown", function(event){
    checkKey(event.key);
    buttonAnimation(event.key);
});
function checkKey(key){
    switch (key) {
        case 'w':
            new Audio('./sounds/tom-1.mp3').play();
            break;
        case 'a':
            new Audio('./sounds/tom-2.mp3').play();
            break;
        case 's':
            new Audio('./sounds/tom-3.mp3').play();
            break;
        case 'd':
            new Audio('./sounds/tom-4.mp3').play();
            break;
        case 'j':
            new Audio('./sounds/snare.mp3').play();
            break;
        case 'k':
            new Audio('./sounds/crash.mp3').play();
            break;                      
        default:
            new Audio('./sounds/kick-bass.mp3').play();
    }
}

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },90);
}