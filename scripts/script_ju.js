const canvasju = document.getElementById('canvas');
const ctxju = canvasju.getContext('2d');
let ju=document.querySelector('.ju');

let progressju = 0;
let stageju = 1;
const speedju = 0.01;
const totalStagesju = 3;
let filledStagesju = [false, false, false];

function drawSymbolju(progressju) {
    ctxju.clearRect(0, 0, canvas.width, canvas.height);

    ctxju.fillStyle = "#ccc";
    // Контур символа
    
   
    ctxju.fillRect(50, 90, 100, 20);  // Средняя gorizont линия
    
    ctxju.fillRect(70, 90, 20, 40); // vniz  1 линия

    ctxju.fillRect(110, 90, 20, 40); // vniz 2  линия
      
    // zalivka bukvi
   
    ctxju.fillStyle = "#05414E";

   // Нижняя горизонтальная линия
            if (filledStagesju[0] || stageju === 1) {
                const lineProgressju = filledStagesju[0] ? 1 : Math.min(progressju, 1);
                ctxju.fillRect(50, 90, 100 * lineProgressju, 20);
            }

    // вертикальная линия
    if (filledStagesju[1] || stageju === 2) {
      const lineProgressju = filledStagesju[1] ? 1 : Math.min(progressju, 1);
      ctxju.fillRect(70, 90, 20, 40 * lineProgressju);
            }
    // вертикальная линия
    if (filledStagesju[2] || stageju === 3) {
            const lineProgressju = filledStagesju[2] ? 1 : Math.min(progressju, 1);
            ctxju.fillRect(110, 90, 20, 40 * lineProgressju);
                    }
        }
     

function animateFillju() {
    progressju += speedju;

    if (progressju >= 1) {
        filledStagesju[stageju - 1] = true;
        progressju = 0;
        stageju++;
        if (stageju > totalStagesju) return;
    }

    drawSymbolju(progressju);
    requestAnimationFrame(animateFillju);
}

ju.addEventListener('mouseenter', () => {
    if (!filledStagesju.includes(false)) return;
    progressju = 0;
    stageju = 1;
    animateFillju();

    poyasnenie.innerHTML='ju´это типа ju';
});

drawSymbolju(progressju);