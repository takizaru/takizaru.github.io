const canvasje = document.getElementById('canvas');
const ctxje = canvasje.getContext('2d');

let je = document.querySelector('.je');

let progressje = 0;
let stageje = 1;
const speedje = 0.01;
const totalStagesje = 4;
let filledStagesje = [false, false, false, false];

function drawSymbolje(progressje) {
    ctxje.clearRect(0, 0, canvasje.width, canvasje.height);

    ctxje.fillStyle = "#ccc";
    // Контур символа
    ctxje.fillRect(70, 40, 20, 120); // 1 vertical линия
   
    ctxje.fillRect(90, 70, 20, 20);  // 1 goriz линия
    
    ctxje.fillRect(90, 110, 20, 20);  // 2  goriz линия

    ctxje.fillRect(110, 30, 20, 140); //2 vertical линия

    ctxje.fillStyle = "#05414E";

    //вертикальная линия
    if (filledStagesje[0] || stageje === 1) {
        const lineProgressje = filledStagesje[0] ? 1 : Math.min(progressje, 1);
        ctxje.fillRect(70, 40, 20, 120 * lineProgressje);
    }


    // 1 горизонтальная линия
    if (filledStagesje[1] || stageje === 2) {
        const lineProgressje = filledStagesje[1] ? 1 : Math.min(progressje, 1);
        ctxje.fillRect(90, 70, 20 * lineProgressje, 20);
    }

   // 2 горизонтальная линия
   if (filledStagesje[2] || stageje === 3) {
        const lineProgressje = filledStagesje[2] ? 1 : Math.min(progressje, 1);
        ctxje.fillRect(90, 110, 20 * lineProgressje, 20);
    }
    // 2 вертикальная линия
    if (filledStagesje[3] || stageje === 4) {
        const lineProgressje = filledStagesje[3] ? 1 : Math.min(progressje, 1);
        ctxje.fillRect(110, 30, 20, 140 * lineProgressje);
    }
}

function animateFillje() {
    progressje += speedje;

    if (progressje >= 1) {
        filledStagesje[stageje - 1] = true;
        progressje = 0;
        stageje++;
        if (stageje > totalStagesje) return;
    }

    drawSymbolje(progressje);
    requestAnimationFrame(animateFillje);
}

je.addEventListener('mouseenter', () => {
    if (!filledStagesje.includes(false)) return;
    progressje = 0;
    stageje = 1;
    animateFillje();

    // poyasnenie
   
    
    // poyasnenie.innerHTML='je´это типа je';
});

drawSymbolje(progressje);


