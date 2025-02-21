
const canvaso = document.getElementById('canvas');
const ctxo = canvaso.getContext('2d');

let o = document.querySelector('.o');

let progresso = 0;
let stageo = 1;
const speedo = 0.01;
const totalStageso = 2;
let filledStageso = [false, false];

function drawSymbolo(progresso) {
    ctxo.clearRect(0, 0, canvaso.width, canvaso.height);

    ctxo.fillStyle = "#ccc";
    // Контур символа
   
   

    
    ctxo.fillRect(60, 90, 40, 20);  // goriz линия

    ctxo.fillRect(90, 50, 20, 100); // vertical линия

    ctxo.fillStyle = "#05414E";

     //  горизонтальная линия
     if (filledStageso[0] || stageo === 1) {
        const lineProgresso = filledStageso[0] ? 1 : Math.min(progresso, 1);
        ctxo.fillRect(60, 90, 40 * lineProgresso, 20);
    }

   
    //вертикальная линия
    if (filledStageso[1] || stageo === 2) {
        const lineProgresso = filledStageso[1] ? 1 : Math.min(progresso, 1);
        ctxo.fillRect(90, 50, 20, 100 * lineProgresso);
    }


  
}

function animateFillo() {
    progresso += speedo;

    if (progresso >= 1) {
        filledStageso[stageo - 1] = true;
        progresso = 0;
        stageo++;
        if (stageo > totalStageso) return;
    }

    drawSymbolo(progresso);
    requestAnimationFrame(animateFillo);
}

o.addEventListener('mouseenter', () => {
    if (!filledStageso.includes(false)) return;
    progresso = 0;
    stageo = 1;
    animateFillo();

    // poyasnenie

    
    // poyasnenie.innerHTML='o´это типа ';
});

drawSymbolo(progresso);

