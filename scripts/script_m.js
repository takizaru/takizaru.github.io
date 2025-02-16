
const canvasm = document.getElementById('canvas');
const ctxm = canvasm.getContext('2d');
let m=document.querySelector('.m');
let progressm = 0;
let stagem = 1;
const speedm = 0.01;
const totalStagesm = 4;
let filledStagesm = [false, false, false, false];

function drawSymbolm(progressm) {
    ctxm.clearRect(0, 0, canvasm.width, canvasm.height);

    ctxm.fillStyle = "#ccc";
    // Контур символа
   
   
   
    ctxm.fillRect(50, 50, 20, 100);  //  линия vert
    ctxm.fillRect(50, 50, 100, 20); //  линия gor
    
    ctxm.fillRect(130, 50, 20, 100);  //  линия vert
    ctxm.fillRect(50, 130, 100, 20); //  линия gor

    ctxm.fillStyle = "#05414E";

   //  вертикальная линия
   if (filledStagesm[0] || stagem === 1) {
    const lineProgressm = filledStagesm[0] ? 1 : Math.min(progressm, 1);
    ctxm.fillRect(50, 50, 20, 100 * lineProgressm);
}
 // горизонтальная линия
 if (filledStagesm[1] || stagem === 2) {
    const lineProgressm = filledStagesm[1] ? 1 : Math.min(progressm, 1);
    ctxm.fillRect(50, 50, 100 * lineProgressm, 20);
}
    //  вертикальная линия
    if (filledStagesm[2] || stagem === 3) {
        const lineProgressm = filledStagesm[2] ? 1 : Math.min(progressm, 1);
        ctxm.fillRect(130, 50, 20, 100 * lineProgressm);
    }

    // горизонтальная линия
if (filledStagesm[3] || stagem === 4) {
    const lineProgressm = filledStagesm[3] ? 1 : Math.min(progressm, 1);
    ctxm.fillRect(50, 130, 100 * lineProgressm, 20);
}

   
}

function animateFillm() {
    progressm += speedm;

    if (progressm >= 1) {
        filledStagesm[stagem - 1] = true;
        progressm = 0;
        stagem++;
        if (stagem > totalStagesm) return;
    }

    drawSymbolm(progressm);
    requestAnimationFrame(animateFillm);
}

m.addEventListener('mouseenter', () => {
    if (!filledStagesm.includes(false)) return;
    progressm = 0;
    stagem = 1;
    animateFillm();

    
    
        poyasnenie.innerHTML='аналогичен русскому м';
});

drawSymbolm(progressm);




// let m=document.querySelector('.m');


// const canvasm = document.getElementById('canvas');
// const ctxm = canvasm.getContext('2d');

// // Прогресс для горизонтальной и вертикальной частей
// let horizontalProgressm = 0; 
// let verticalProgressm = 0; 
// let animationFramem; // ID текущей анимации
// let stagem = 1; // Этап анимации: 1 = горизонтальная, 2 = вертикальная

// // Настройки стиля
// const lineWidthm= 10;
// const strokeColorm = '#333';
// const fillColorm = 'red';
// const animationSpeedm = 0.02; // Скорость анимации заливки
// // k.addEventListener('click',functionm(){
// function drawLetterm(hProgressm, vProgressm) {
//     ctxm.clearRect(0, 0, canvasm.width, canvasm.height);

//     // Нарисуем контур буквы - черный
//    ctxm.beginPath();
//    ctxm.lineWidth = lineWidthm;
//    ctxm.strokeStyle = strokeColorm;
//    ctxm.moveTo(50, 50);
//     ctxm.lineTo(50, 150); //  Вертикальная линия
   
    
//     ctxm.stroke();
//     ctxm.moveTo(50, 50);
//     ctxm.lineTo(150, 50); // Горизонтальная линия
//     ctxm.lineTo(150, 150); //  Вертикальная линия
//     ctxm.stroke();

//     ctxm.moveTo(50, 150);
//     ctxm.lineTo(150, 150); // Горизонтальная линия
    
//     ctxm.stroke();

  
//    // Вертикальная заливка
//    if (vProgressm > 0) {
//     ctxm.fillStyle = fillColorm;
//     ctxm.beginPath();
//     ctxm.moveTo(40, 50);
//     ctxm.lineTo(50, 50);
//     ctxm.lineTo(50 + 50 + 100 * vProgressm);
//     ctxm.lineTo(40, 50 + 100 * vProgressm);
//     ctxm.closePath();
//     ctxm.fill();
// }
  
//     // Горизонтальная заливка
//     if (hProgressm > 0) {
//         ctxm.fillStyle = fillColorm;
//         ctxm.beginPath();
//         ctxm.moveTo(50, 50);
//         ctxm.lineTo(50 + 100 * hProgressm, 50);
//         ctxm.lineTo(50 + 100 * hProgressm, 60);
//         ctxm.lineTo(50, 60);
//         ctxm.closePath();
//         ctxm.fill();
//     }

//     // Вертикальная заливка
//     if (vProgressm > 0) {
//         ctxm.fillStyle = fillColorm;
//         ctxm.beginPath();
//         ctxm.moveTo(140, 50);
//         ctxm.lineTo(150, 50);
//         ctxm.lineTo(150, 50 + 100 * vProgressm);
//         ctxm.lineTo(140, 50 + 100 * vProgressm);
//         ctxm.closePath();
//         ctxm.fill();
//     }
// }

// // Анимация заливки
// function animateFillm() {
//     if (stagem === 1) {
//         verticalProgressm += animationSpeedm;
//         if (verticalProgressm >= 1) {
//             stagem = 2; // Переход к вертикальной части сверху - вниз
//         }
//     if (stagem === 2) {
//         horizontalProgressm += animationSpeedm;
//         if (horizontalProgressm >= 2) {
//             stagem = 3; // Переход к вертикальной части
//         }
//     } else if (stagem === 3) {
//         verticalProgressm += animationSpeedm;
//         if (verticalProgressm >= 2) {
//             cancelAnimationFrame(animationFramem); // Завершаем анимацию
//             return;
//         }
//     }
// }
//     drawLetterm(horizontalProgressm, verticalProgressm);
//     animationFramem = requestAnimationFrame(animateFillm);
// }

// // События для Canvas
// m.addEventListener('click', () => {
//     cancelAnimationFrame(animationFramem); // Останавливаем текущую анимацию, если она идет
//     animateFillm();
// });

// // Первоначальный вызов для отрисовки буквы
// // drawLetter(horizontalProgress, verticalProgress);
// // });