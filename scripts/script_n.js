const canvasn = document.getElementById('canvas');
const ctxn = canvasn.getContext('2d');
let n=document.querySelector('.n');
let progressn = 0;
let stagen = 1;
const speedn = 0.01;
const totalStagesn = 2;
let filledStagesn = [false, false];

function drawSymboln(progressn) {
    ctxn.clearRect(0, 0, canvasn.width, canvasn.height);

    ctxn.fillStyle = "#ccc";
    // Контур символа
   
   
    
    ctxn.fillRect(50, 50, 20, 100);  //  линия vert
    ctxn.fillRect(50, 130, 100, 20); //  линия gor

    ctxn.fillStyle = "#05414E";

  

    //  вертикальная линия
    if (filledStagesn[0] || stagen === 1) {
        const lineProgressn = filledStagesn[0] ? 1 : Math.min(progressn, 1);
        ctxn.fillRect(50, 50, 20, 100 * lineProgressn);
    }

    // горизонтальная линия
if (filledStagesn[1] || stagen === 2) {
    const lineProgressn = filledStagesn[1] ? 1 : Math.min(progressn, 1);
    ctxn.fillRect(50, 130, 100 * lineProgressn, 20);
}

   
}

function animateFilln() {
    progressn += speedn;

    if (progressn >= 1) {
        filledStagesn[stagen - 1] = true;
        progressn = 0;
        stagen++;
        if (stagen > totalStagesn) return;
    }

    drawSymboln(progressn);
    requestAnimationFrame(animateFilln);
}

n.addEventListener('mouseenter', () => {
    if (!filledStagesn.includes(false)) return;
    progressn = 0;
    stagen = 1;
    animateFilln();

    
    
        poyasnenie.innerHTML='аналогичен русскому н';
});

drawSymbolk(progressk);





// let n=document.querySelector('.n');


// const canvasn = document.getElementById('canvas');
// const ctxn = canvas.getContext('2d');

// // Прогресс для горизонтальной и вертикальной частей
// let horizontalProgressn = 0; 
// let verticalProgressn = 0; 
// let animationFramen; // ID текущей анимации
// let stagen = 1; // Этап анимации: 1 = горизонтальная, 2 = вертикальная

// // Настройки стиля
// const lineWidthn = 10;
// const strokeColorn = '#333';
// const fillColorn = 'red';
// const animationSpeedn = 0.02; // Скорость анимации заливки
// // k.addEventListener('click',function(){
// function drawLettern(hProgressn, vProgressn) {
//     ctxn.clearRect(0, 0, canvas.width, canvas.height);

//     // Нарисуем контур буквы
//    ctxn.beginPath();
//    ctxn.lineWidth = lineWidthn;
//    ctxn.strokeStyle = strokeColorn;
//    ctxn.moveTo(50, 50);
//     ctxn.lineTo(50, 150); // Вертикальная линия
//     ctxn.lineTo(150, 150); // Горизонтальная линия
//     ctxn.stroke();

//     // Горизонтальная заливка
//     if (hProgressn > 0) {
//         ctxn.fillStyle = fillColor;
//         ctxn.beginPath();
//         ctxn.moveTo(50, 150);
//         ctxn.lineTo(50 + 100 * hProgressn, 150);
//         ctxn.lineTo(50 + 100 * hProgressn, 160);
//         ctxn.lineTo(50, 160);
//         ctxn.closePath();
//         ctxn.fill();
//     }

//     // Вертикальная заливка
//     if (vProgressn > 0) {
//         ctxn.fillStyle = fillColor;
//         ctxn.beginPath();
//         ctxn.moveTo(40, 50);
//         ctxn.lineTo(50, 50);
//         ctxn.lineTo(50, 50 + 100 * vProgressn);
//         ctxn.lineTo(40, 50 + 100 * vProgressn);
//         ctxn.closePath();
//         ctxn.fill();
//     }
// }

// // Анимация заливки
// function animateFilln() {
//     if (stagen === 1) {
//         verticalProgressn += animationSpeedn;
//         if (verticalProgressn >= 1) {
//             stagen = 2; // Переход к вертикальной части
//         }
//     } else if (stagen === 2) {
//         horizontalProgressn += animationSpeedn;
//         if (horizontalProgressn >= 1) {
//             cancelAnimationFrame(animationFramen); // Завершаем анимацию
//             return;
//         }
//     }

//     drawLettern(horizontalProgressn, verticalProgressn);
//     animationFramen = requestAnimationFrame(animateFilln);
// }

// // События для Canvas
// n.addEventListener('click', () => {
//     cancelAnimationFrame(animationFramen); // Останавливаем текущую анимацию, если она идет
//     animateFilln();

//     poyasnenie.innerHTML='n это типа n';

// });

// // Первоначальный вызов для отрисовки буквы
// // drawLetter(horizontalProgress, verticalProgress);
// // });