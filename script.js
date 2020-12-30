const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

const handleKeyUp = (event) => {
    if (event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }
    }
}
  
function jump() {
    let position = 0;

    isJumping = true;
  
    let upInterval = setInterval(() => {
        if (position >= 170) {
            clearInterval(upInterval);

            let downInternal = setInterval(() => {
                if (position <= 20) { 
                    clearInterval(downInternal);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            })
        }else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    },20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

}

createCactus();

document.addEventListener('keyup', handleKeyUp)