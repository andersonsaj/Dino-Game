const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let speed = 10.0;

const handleKeyUp = (event) => {
    if (event.keyCode === 38) {
        if(!isJumping) {
            jump();
        }
    }
}
  
function jump() {

    isJumping = true;
  
    //subindo
    let upInterval = setInterval(() => {
        if (position >= 170) {
            clearInterval(upInterval);
            //descendo
            let downInternal = setInterval(() => {
                if (position <= 0) { 
                    clearInterval(downInternal);
                    isJumping = false;
                }else{

                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },30)
        }else {
            
            position += 20;
            dino.style.bottom = position + 'px';
        }
    },20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1300;
    let randomTime = Math.random() * 6000;
    speed += 0.2;
    cactus.classList.add('cactus');
    cactus.style.left = 1300 + 'px';
    background.appendChild(cactus);

    let leftInternal = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInternal);
            background.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 60 && position < 60 ){
            //Gamer over
            clearInterval(leftInternal);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'        
        } else {
            console.log(speed);
            cactusPosition -= speed;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp)