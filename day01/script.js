
function playSound(e){
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // console.log(audio);
    if(!audio) return; //stop the function from running all together

    audio.currentTime = 0; //rewind to the start
    audio.play();

    // console.log(key);
    key.classList.add('playing');
}

document.addEventListener('keydown', playSound);

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if it's not a tranform
    this.classList.remove('playing');
}

//remove the plying class, adding transition end event
const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));