const canvask = document.getElementById('canvas');
const ctxk = canvask.getContext('2d');
let k=document.querySelector('.k');
let progressk = 0;
let stagek = 1;
const speedk = 0.01;
const totalStagesk = 2;
let filledStagesk = [false, false];

function drawSymbolk(progressk) {
    ctxk.clearRect(0, 0, canvask.width, canvask.height);

    ctxk.fillStyle = "#ccc";
    // Контур символа
   
    ctxk.fillRect(50, 50, 100, 20); //  линия gor
    
    ctxk.fillRect(130, 50, 20, 100);  //  линия vert

    ctxk.fillStyle = "#05414E";

   // Средняя горизонтальная линия
if (filledStagesk[0] || stagek === 1) {
        const lineProgressk = filledStagesk[0] ? 1 : Math.min(progressk, 1);
        ctxk.fillRect(50, 50, 100 * lineProgressk, 20);
    }

    // Правая вертикальная линия
    if (filledStagesk[1] || stagek === 2) {
        const lineProgressk = filledStagesk[1] ? 1 : Math.min(progressk, 1);
        ctxk.fillRect(130, 50, 20, 100 * lineProgressk);
    }

   

   
}

function animateFillk() {
    progressk += speedk;

    if (progressk >= 1) {
        filledStagesk[stagek - 1] = true;
        progressk = 0;
        stagek++;
        if (stagek > totalStagesk) return;
    }

    drawSymbolk(progressk);
    requestAnimationFrame(animateFillk);
}

k.addEventListener('mouseenter', () => {
    if (!filledStagesk.includes(false)) return;
    progressk = 0;
    stagek = 1;
    animateFillk();

    let poyasnenie=document.querySelector('#poyasnenie');
    
        poyasnenie.innerHTML='аналогичен русскому к';
});

drawSymbolk(progressk);


// let vivodbukvi=document.querySelector('.animation');
// let k=document.querySelector('.k');


// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// // Прогресс для горизонтальной и вертикальной частей
// let horizontalProgress = 0; 
// let verticalProgress = 0; 
// let animationFrame; // ID текущей анимации
// let stage = 1; // Этап анимации: 1 = горизонтальная, 2 = вертикальная

// // Настройки стиля
// const lineWidth = 10;
// const strokeColor = '#333';
// const fillColor = 'red';
// const animationSpeed = 0.02; // Скорость анимации заливки
// // k.addEventListener('click',function(){
// function drawLetter(hProgress, vProgress) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Нарисуем контур буквы - черный
//    ctx.beginPath();
//    ctx.lineWidth = lineWidth;
//    ctx.strokeStyle = strokeColor;
//    ctx.moveTo(50, 50);
//     ctx.lineTo(150, 50); // Горизонтальная линия
//     ctx.lineTo(150, 150); // Вертикальная линия
//     ctx.stroke();

//     // Горизонтальная заливка
//     if (hProgress > 0) {
//         ctx.fillStyle = fillColor;
//         ctx.beginPath();
//         ctx.moveTo(50, 50);
//         ctx.lineTo(50 + 100 * hProgress, 50);
//         ctx.lineTo(50 + 100 * hProgress, 60);
//         ctx.lineTo(50, 60);
//         ctx.closePath();
//         ctx.fill();
//     }

//     // Вертикальная заливка
//     if (vProgress > 0) {
//         ctx.fillStyle = fillColor;
//         ctx.beginPath();
//         ctx.moveTo(140, 50);
//         ctx.lineTo(150, 50);
//         ctx.lineTo(150, 50 + 100 * vProgress);
//         ctx.lineTo(140, 50 + 100 * vProgress);
//         ctx.closePath();
//         ctx.fill();
//     }
// }


// // Анимация заливки
// function animateFill() {
//     if (stage === 1) {
//         horizontalProgress += animationSpeed;
//         if (horizontalProgress >= 1) {
//             stage = 2; // Переход к вертикальной части
//         }
//     } else if (stage === 2) {
//         verticalProgress += animationSpeed;
//         if (verticalProgress >= 1) {
//             cancelAnimationFrame(animationFrame); // Завершаем анимацию
//             return;
//         }
//     }

//     drawLetter(horizontalProgress, verticalProgress);
//     animationFrame = requestAnimationFrame(animateFill);
// }

// // События для Canvas
// k.addEventListener('click', () => {
//     cancelAnimationFrame(animationFrame); // Останавливаем текущую анимацию, если она идет
//     animateFill();

//     let poyasnenie=document.querySelector('#poyasnenie');
    
//     poyasnenie.innerHTML='k´это типа к';
// });

// // Первоначальный вызов для отрисовки буквы
// // drawLetter(horizontalProgress, verticalProgress);
// // });

