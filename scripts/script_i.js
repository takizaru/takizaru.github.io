let i=document.querySelector('.i');

const canvasi = document.getElementById('canvas');
const ctxi = canvasi.getContext('2d');

let progressi = 0;
let stagei = 1;
const speedi = 0.01;
const totalStagesi = 1;
let filledStagesi = [false];

function drawSymboli(progressi) {
    ctxi.clearRect(0, 0, canvasi.width, canvasi.height);

    ctxi.fillStyle = "#ccc";
    // Контур символа
    ctxi.fillRect(90, 50, 20, 100); // vertical линия
   
    ctxi.fillStyle = "#05414E";

    // Левая вертикальная линия
    if (filledStagesi[0] || stagei === 1) {
        const lineProgressi = filledStagesi[0] ? 1 : Math.min(progressi, 1);
        ctxi.fillRect(90, 50, 20, 100 * lineProgressi);
    }


  
}

function animateFilli() {
    progressi += speedi;

    if (progressi >= 1) {
        filledStagesi[stagei - 1] = true;
        progressi = 0;
        stagei++;
        if (stagei > totalStagesi) return;
    }

    drawSymboli(progressi);
    requestAnimationFrame(animateFilli);
}

i.addEventListener('mouseenter', () => {
    if (!filledStagesi.includes(false)) return;
    progressi = 0;
    stagei = 1;
    animateFilli();

    let poyasnenie=document.querySelector('#poyasnenie');
    
        poyasnenie.innerHTML='аналогичен русскому и';
});

drawSymboli(progressi);
