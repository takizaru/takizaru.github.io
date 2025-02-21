const canvasu = document.getElementById('canvas');
const ctxu = canvasu.getContext('2d');
let u = document.querySelector('.u');

let progressu = 0;
let stageu = 1;
const speedu = 0.01;
const totalStagesu = 2;
let filledStagesu = [false, false];

function drawSymbolu(progressu) {
    ctxu.clearRect(0, 0, canvasu.width, canvasu.height);

    ctxu.fillStyle = "#ccc";
    // Контур символа
    
   
    ctxu.fillRect(50, 90, 100, 20);  // Средняя линия
    
    ctxu.fillRect(90, 90, 20, 40); // vniz линия
      
    // zalivka bukvi
   
    ctxu.fillStyle = "#05414E";

   // Нижняя горизонтальная линия
            if (filledStagesu[0] || stageu === 1) {
                const lineProgressu = filledStagesu[0] ? 1 : Math.min(progressu, 1);
                ctxu.fillRect(50, 90, 100 * lineProgressu, 20);
            }

    // вертикальная линия
    if (filledStagesu[1] || stageu === 2) {
      const lineProgressu = filledStagesu[1] ? 1 : Math.min(progressu, 1);
      ctxu.fillRect(90, 90, 20, 40 * lineProgressu);
            }

        }
     

function animateFillu() {
    progressu += speedu;

    if (progressu >= 1) {
        filledStagesu[stageu - 1] = true;
        progressu = 0;
        stageu++;
        if (stageu > totalStagesu) return;
    }

    drawSymbolu(progressu);
    requestAnimationFrame(animateFillu);
}

u.addEventListener('mouseenter', () => {
    if (!filledStagesu.includes(false)) return;
    progressu = 0;
    stageu = 1;
    animateFillu();

    poyasnenie.innerHTML='аналогичен русскому у, но губы менее вытянуты вперед и слегка округлены';
});

drawSymbolu(progressu);
