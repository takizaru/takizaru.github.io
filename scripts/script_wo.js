
const canvaswo = document.getElementById('canvas');
const ctxwo = canvaswo.getContext('2d');

let wo=document.querySelector('.wo');

let progresswo = 0;
let stagewo = 1;
const speedwo = 0.01;
const totalStageswo = 4;
let filledStageswo = [false, false, false, false];

function drawSymbolwo(progresswo) {
    ctxwo.clearRect(0, 0, canvaswo.width, canvaswo.height);

    ctxwo.fillStyle = "#ccc";
    // Контур символа
   
   
    ctxwo.fillRect(30, 80, 100, 20);  // 1 goriz линия

ctxwo.fillRect(70, 80, 20, 80); // 1 vertical линия
    
    ctxwo.fillRect(110, 110, 40, 20);  // 2 goriz линия

    ctxwo.fillRect(140, 30, 20, 140); // 2 vertical линия

    ctxwo.fillStyle = "#05414E";

     // 1 горизонтальная линия
     if (filledStageswo[0] || stagewo === 1) {
        const lineProgresswo = filledStageswo[0] ? 1 : Math.min(progresswo, 1);
        ctxwo.fillRect(30, 80, 100 * lineProgresswo, 20);
    }

   
    // 1 вертикальная линия
    if (filledStageswo[1] || stagewo === 2) {
        const lineProgresswo = filledStageswo[1] ? 1 : Math.min(progresswo, 1);
        ctxwo.fillRect(70, 80, 20, 80 * lineProgresswo);
    }
 //  2   горизонтальная линия
 if (filledStageswo[2] || stagewo === 3) {
        const lineProgresswo = filledStageswo[2] ? 1 : Math.min(progresswo, 1);
        ctxwo.fillRect(110, 110, 40 * lineProgresswo, 20);
    }

   
    // 2   вертикальная линия
    if (filledStageswo[3] || stagewo === 4) {
        const lineProgresswo = filledStageswo[3] ? 1 : Math.min(progresswo, 1);
        ctxwo.fillRect(140, 30, 20, 140 * lineProgresswo);
    }

  
}

function animateFillwo() {
    progresswo += speedwo;

    if (progresswo >= 1) {
        filledStageswo[stagewo - 1] = true;
        progresswo = 0;
        stagewo++;
        if (stagewo > totalStageswo) return;
    }

    drawSymbolwo(progresswo);
    requestAnimationFrame(animateFillwo);
}

wo.addEventListener('mouseenter', () => {
    if (!filledStageswo.includes(false)) return;
    progresswo = 0;
    stagewo = 1;
    animateFillwo();

    // poyasnenie

    
    // poyasnenie.innerHTML='wo´это типа wo ';
});

drawSymbolwo(progresswo);
