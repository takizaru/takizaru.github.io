let ii=document.querySelector('.ii');

const canvasii = document.getElementById('canvas');
const ctxii = canvasii.getContext('2d');

let progressii = 0;
let stageii = 1;
const speedii = 0.01;
const totalStagesii = 1;
let filledStagesii = [false];

function drawSymbolii(progressii) {
    ctxii.clearRect(0, 0, canvasii.width, canvasii.height);

    ctxii.fillStyle = "#ccc";
    // Контур символа
   
    ctxii.fillRect(50, 90, 100, 20);  // Средняя линия
   

    ctxii.fillStyle = "#05414E";

  

    //  горизонтальная линия
    if (filledStagesii[1] || stageii === 1) {
        const lineProgressii = filledStagesii[2] ? 1 : Math.min(progressii, 1);
        ctxii.fillRect(50, 90, 100 * lineProgressii, 20);
    }

   
}

function animateFillii() {
    progressii += speedii;

    if (progressii >= 1) {
        filledStagesii[stageii - 1] = true;
        progressii = 0;
        stageii++;
        if (stageii > totalStagesii) return;
    }

    drawSymbolii(progressii);
    requestAnimationFrame(animateFillii);
}

ii.addEventListener('mouseenter', () => {
    if (!filledStagesii.includes(false)) return;
    progressii = 0;
    stageii = 1;
    animateFillii();


    poyasnenie.innerHTML='попробуйте приготовиться произнести у, но сказать ы';
});

drawSymbolii(progressii);