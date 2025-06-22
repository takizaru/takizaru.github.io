

const canvasja = document.getElementById('canvas');
const ctxja = canvasja.getContext('2d');

let ja=document.querySelector('.ja');

let progressja = 0;
let stageja = 1;
const speedja = 0.01;
const totalStagesja = 3;
let filledStagesja = [false, false, false];

function drawSymbolja(progressja) {
    ctxja.clearRect(0, 0, canvasja.width, canvasja.height);

    ctxja.fillStyle = "#ccc";
    // Контур символа
    ctxja.fillRect(90, 50, 20, 100); // vertical линия
   
    ctxja.fillRect(90, 70, 40, 20);  // goriz линия
    
    ctxja.fillRect(90, 110, 40, 20);  // goriz линия

    // zalivka bukvi
    ctxja.fillStyle = "#05414E";  

    //вертикальная линия
    if (filledStagesja[0] || stageja === 1) {
        const lineProgressja = filledStagesja[0] ? 1 : Math.min(progressja, 1);
        ctxja.fillRect(90, 50, 20, 100 * lineProgressja);
    }

    //  горизонтальная линия
    if (filledStagesja[1] || stageja === 2) {
        const lineProgressja = filledStagesja[1] ? 1 : Math.min(progressja, 1);
        ctxja.fillRect(90, 70, 40 * lineProgressja, 20);
    }
 //  горизонтальная линия
 if (filledStagesja[2] || stageja === 3) {
        const lineProgressja = filledStagesja[2] ? 1 : Math.min(progressja, 1);
        ctxja.fillRect(90, 110, 40 * lineProgressja, 20);
    }
  
}

function animateFillja() {
    progressja += speedja;

    if (progressja >= 1) {
        filledStagesja[stageja - 1] = true;
        progressja = 0;
        stageja++;
        if (stageja > totalStagesja) return;
    }




drawSymbolja(progressja);
        requestAnimationFrame(animateFillja);
    }

    ja.addEventListener('mouseenter', () => {
        if (!filledStagesja.includes(false)) return;
        progressja = 0;
        stageja = 1;
        animateFillja();


         poyasnenie
   
    
    poyasnenie.innerHTML='"й" - образный дифтонгоид (й + а), на слух похож на русский - я"';
    });

    drawSymbolja(progressja);


