
const canvaskk = document.getElementById('canvas');
const ctxkk = canvaskk.getContext('2d');
let kk=document.querySelector('.kk');
let progresskk = 0;
let stagekk = 1;
const speedkk = 0.01;
const totalStageskk = 2;
let filledStageskk = [false, false];

function drawSymbolkk(progresskk) {
    ctxkk.clearRect(0, 0, canvaskk.width, canvaskk.height);

    ctxkk.fillStyle = "#ccc";
    // Контур символа
   
    ctxkk.fillRect(40, 50, 80, 20); //  1 линия gor
    
    ctxkk.fillRect(80, 50, 20, 80);  // 1  линия vert

    ctxkk.fillRect(80, 50, 80, 20); // 2 линия gor
    
    ctxkk.fillRect(80, 50, 20, 80);  // 2 линия vert

    ctxkk.fillStyle = "#05414E";

   // 1 горизонтальная линия
if (filledStageskk[0] || stagekk === 1) {
        const lineProgresskk = filledStageskk[0] ? 1 : Math.min(progresskk, 1);
        ctxkk.fillRect(50, 50, 100 * lineProgresskk, 20);
    }

    // 1 вертикальная линия
    if (filledStageskk[1] || stagekk === 2) {
        const lineProgresskk = filledStageskk[1] ? 1 : Math.min(progresskk, 1);
        ctxkk.fillRect(130, 50, 20, 100 * lineProgresskk);
    }
        //   2 gorizont 
    if (filledStageskk[0] || stagekk === 1) {
        const lineProgresskk = filledStageskk[0] ? 1 : Math.min(progresskk, 1);
        ctxkk.fillRect(50, 50, 100 * lineProgresskk, 20);
    }

    // 2 вертикальная линия
    if (filledStageskk[1] || stagekk === 2) {
        const lineProgresskk = filledStageskk[1] ? 1 : Math.min(progresskk, 1);
        ctxkk.fillRect(130, 50, 20, 100 * lineProgresskk);
    }


   
}

function animateFillkk() {
    progressk += speedk;

    if (progresskk >= 1) {
        filledStageskk[stagekk - 1] = true;
        progresskk = 0;
        stagekk++;
        if (stagekk > totalStageskk) return;
    }

    drawSymbolkk(progresskk);
    requestAnimationFrame(animateFillkk);
}

kk.addEventListener('mouseenter', () => {
    if (!filledStageskk.includes(false)) return;
    progresskk = 0;
    stagekk = 1;
    animateFillkk();

   
    
        poyasnenie.innerHTML='kk´это типа kк';
});

drawSymbolkk(progresskk);







// let kk=document.querySelector('.kk');


// const canvas1 = document.getElementById('canvas');
// const ctx1 = canvas.getContext('2d');

// // Прогресс для горизонтальной и вертикальной частей
// let horizontalProgress1 = 0; 
// let verticalProgress1 = 0; 
// let animationFrame1; // ID текущей анимации

// let stage1 = 1; // Этап анимации: 1 = горизонтальная, 2 = вертикальная

// // Настройки стиля
// const lineWidth1 = 10;
// const strokeColor1 = '#333';
// const fillColor1 = 'red';
// const animationSpeed1 = 0.02; 

// // k.addEventListener('click',function(){
// function drawLetter1(hProgress1, vProgress1) {
//     ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

//     // Нарисуем контур буквы
//    ctx1.beginPath();
//    ctx1.lineWidth1 = lineWidth1;
//    ctx1.strokeStyle = strokeColor1;
//    ctx1.moveTo(50, 50);
//     ctx1.lineTo(150, 50); // Горизонтальная линия
//     ctx1.lineTo(150, 150); // Вертикальная линия
    
//     ctx1.moveTo(150, 50);
//     ctx1.lineTo(250, 50); // Горизонтальная линия
//     ctx1.lineTo(250, 150); // Вертикальная линия
//     ctx1.stroke();



//     // Горизонтальная заливка
//     if (hProgress1 > 0) {
//         ctx1.fillStyle = fillColor1;
//         ctx1.beginPath();
//         ctx1.moveTo(50, 50);
//         ctx1.lineTo(50 + 100 * hProgress1, 50);
//         ctx1.lineTo(50 + 100 * hProgress1, 60);
//         ctx1.lineTo(50, 60);
//         ctx1.moveTo(150, 50);
//         ctx1.lineTo(150 + 100 * hProgress1, 50);
//         ctx1.lineTo(150 + 100 * hProgress1, 60);
//         ctx1.lineTo(150, 60);
//         ctx1.closePath();
//         ctx1.fill();
//     }

//     // Вертикальная заливка
//     if (vProgress1 > 0) {
//         ctx1.fillStyle = fillColor1;
//         ctx1.beginPath();
//         ctx1.moveTo(140, 50);
//         ctx1.lineTo(150, 50);
//         ctx1.lineTo(150, 50 + 100 * vProgress1);
//         ctx1.lineTo(140, 50 + 100 * vProgress1);
//         ctx1.moveTo(240, 50);
//         ctx1.lineTo(250, 50);
//         ctx1.lineTo(250, 50 + 100 * vProgress1);
//         ctx1.lineTo(240, 50 + 100 * vProgress1);
//         ctx1.fill();
//     }

// }


// // Анимация заливки
// function animateFill1() {
//     if (stage1 === 1) {
//         horizontalProgress1 += animationSpeed1;
//         if (horizontalProgress1 >= 1) {
//             stage1 = 2; // Переход к вертикальной части
//         }
//     } else if (stage1 === 2) {
//         verticalProgress1 += animationSpeed1;
//         if (verticalProgress1 >= 1) {
//             cancelAnimationFrame(animationFrame1); // Завершаем анимацию
//             return;
//         }
//     }
   
//     drawLetter1(horizontalProgress1, verticalProgress1);
//     animationFrame1 = requestAnimationFrame(animateFill1);
    
// }
// // События для Canvas
// kk.addEventListener('click', () => {
//     cancelAnimationFrame(animationFrame1); // Останавливаем текущую анимацию, если она идет
//     animateFill1();
   
// });

// // Первоначальный вызов для отрисовки буквы
// // drawLetter(horizontalProgress, verticalProgress);
// // });