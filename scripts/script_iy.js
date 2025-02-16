


const canvasiy = document.getElementById('canvas');
const ctxiy = canvasiy.getContext('2d');

let iy = document.querySelector('.iy');

let progressiy = 0;
let stageiy = 1;
const speediy = 0.01;
const totalStagesiy = 2;
let filledStagesiy = [false, false];

function drawSymboliy(progressiy) {
    ctxiy.clearRect(0, 0, canvasiy.width, canvasiy.height);

    ctxiy.fillStyle = "#ccc";
    // Контур символа
   

    ctxiy.fillRect(50, 110, 100, 20);  // 1 goriz линия


    ctxiy.fillRect(140, 30, 20, 140); // 1 vertical линия

    ctxiy.fillStyle = "#05414E";


     
     // 1 горизонтальная линия
     if (filledStagesiy[0] || stageiy === 1) {
        const lineProgressiy = filledStagesiy[0] ? 1 : Math.min(progressiy, 1);
        ctxiy.fillRect(50, 110, 100 * lineProgressiy, 20);
    }

   
   
 
   
    // 1   вертикальная линия
    if (filledStagesiy[1] || stageiy === 2) {
        const lineProgressiy = filledStagesiy[1] ? 1 : Math.min(progressiy, 1);
        ctxiy.fillRect(140, 30, 20, 140 * lineProgressiy);
    }

  
}

function animateFilliy() {
    progressiy += speediy;

    if (progressiy >= 1) {
        filledStagesiy[stageiy - 1] = true;
        progressiy = 0;
        stageiy++;
        if (stageiy > totalStagesiy) return;
    }

    drawSymboliy(progressiy);
    requestAnimationFrame(animateFilliy);
}

iy.addEventListener('mouseenter', () => {
    if (!filledStagesiy.includes(false)) return;
    progressiy = 0;
    stageiy = 1;
    animateFilliy();

    // poyasnenie

    
    poyasnenie.innerHTML='iy´это типа iy ';
});

drawSymboliy(progressiy);

