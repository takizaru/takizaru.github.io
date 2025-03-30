const canvasr = document.getElementById('canvas');
const ctxr = canvasr.getContext('2d');
let r = document.querySelector('.r');
let progressr = 0;
let stager = 1;
const speedr = 0.01;
const totalStagesr = 5;
let filledStagesr = [false, false, false, false, false];

function drawSymbolr(progressr) {
    ctxr.clearRect(0, 0, canvasr.width, canvasr.height);

    ctxr.fillStyle = "#ccc";
    // Контур символа
   
   
    ctxr.fillRect(50, 50, 100, 20); //  линия gor
    
    ctxr.fillRect(130, 50, 20, 50);  //  линия vert
    ctxr.fillRect(50, 90, 100, 20);  // Средняя линия gor
    ctxr.fillRect(50, 90, 20, 50);  //  линия vert
    ctxr.fillRect(50, 130, 100, 20); //  линия gor


    ctxr.fillStyle = "#05414E";

   //  горизонтальная линия
if (filledStagesr[0] || stager === 1) {
        const lineProgressr = filledStagesr[0] ? 1 : Math.min(progressr, 1);
        ctxr.fillRect(50, 50, 100 * lineProgressr, 20);
    }

    // вертикальная линия
    if (filledStagesr[1] || stager === 2) {
        const lineProgressr = filledStagesr[1] ? 1 : Math.min(progressr, 1);
        ctxr.fillRect(130, 50, 20, 50 * lineProgressr);
    }
  //  горизонтальная линия
  if (filledStagesr[2] || stager === 3) {
    const lineProgressr = filledStagesr[2] ? 1 : Math.min(progressr, 1);
    ctxr.fillRect(50, 90, 100 * lineProgressr, 20);
}

    //  вертикальная линия
    if (filledStagesr[3] || stager === 4) {
        const lineProgressr = filledStagesr[3] ? 1 : Math.min(progressr, 1);
        ctxr.fillRect(50, 90, 20, 50 * lineProgressr);
    }

    // горизонтальная линия
if (filledStagesr[4] || stager === 5) {
    const lineProgressr = filledStagesr[4] ? 1 : Math.min(progressr, 1);
    ctxr.fillRect(50, 130, 100 * lineProgressr, 20);
}

   
}

function animateFillr() {
    progressr += speedr;

    if (progressr >= 1) {
        filledStagesr[stager - 1] = true;
        progressr = 0;
        stager++;
        if (stager > totalStagesr) return;
    }

    drawSymbolr(progressr);
    requestAnimationFrame(animateFillr);
}

r.addEventListener('mouseenter', () => {
    if (!filledStagesr.includes(false)) return;
    progressr = 0;
    stager = 1;
    animateFillr();

    
    
        poyasnenie.innerHTML='корейский л, чуть мягче, чем русский; в отличие от русского - не дрожащий, одноударен и более мягкий';
});

drawSymbolr(progressr);

