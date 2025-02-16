



const canvase = document.getElementById('canvas');
const ctxe = canvase.getContext('2d');

let e = document.querySelector('.a');

let progresse = 0;
let stagee = 1;
const speede = 0.01;
const totalStagese = 3;
let filledStagese = [false, false, false];

function drawSymbole(progresse) {
    ctxe.clearRect(0, 0, canvase.width, canvase.height);

    ctxe.fillStyle = "#ccc";
    // Контур символа
    ctxe.fillRect(70, 40, 20, 120); // 1 vertical линия
   

    
    ctxe.fillRect(90, 90, 20, 20);  // goriz линия

    ctxe.fillRect(110, 30, 20, 140); //2 vertical линия

    ctxe.fillStyle = "#05414E";

    //вертикальная линия
    if (filledStagese[0] || stagee === 1) {
        const lineProgresse = filledStagese[0] ? 1 : Math.min(progresse, 1);
        ctxe.fillRect(70, 40, 20, 120 * lineProgresse);
    }


    //  горизонтальная линия
    if (filledStagese[1] || stagee === 2) {
        const lineProgresse = filledStagese[1] ? 1 : Math.min(progresse, 1);
        ctxe.fillRect(90, 90, 20 * lineProgresse, 20);
    }

  
    // 2 вертикальная линия
    if (filledStagese[2] || stagee === 3) {
        const lineProgresse = filledStagese[2] ? 1 : Math.min(progresse, 1);
        ctxe.fillRect(110, 30, 20, 140 * lineProgresse);
    }
}

function animateFille() {
    progresse += speede;

    if (progresse >= 1) {
        filledStagese[stagee - 1] = true;
        progresse = 0;
        stagee++;
        if (stagee > totalStagese) return;
    }

    drawSymbole(progresse);
    requestAnimationFrame(animateFille);
}

e.addEventListener('mouseenter', () => {
    if (!filledStagese.includes(false)) return;
    progresse = 0;
    stagee = 1;
    animateFille();

    // poyasnenie
    let poyasnenie=document.querySelector('#poyasnenie');
    
    poyasnenie.innerHTML='e´это типа e';
});

drawSymbole(progresse);

