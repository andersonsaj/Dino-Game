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
  
    //subindo
    let upInterval = setInterval(() => {
        if (position >= 170) {
            clearInterval(upInterval);
            //descendo
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
            
            position += 20;
            dino.style.bottom = position + 'px';
        }
    },20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 2000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 2000 + 'px';
    background.appendChild(cactus);

    let leftInternal = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInternal);
            background.removeChild(cactus);
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp)