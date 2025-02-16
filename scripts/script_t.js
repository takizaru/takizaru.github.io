const canvast = document.getElementById('canvas');
const ctxt = canvast.getContext('2d');
let t=document.querySelector('.t');
let progresst = 0;
let staget = 1;
const speedt = 0.01;
const totalStagest = 3;
let filledStagest = [false, false, false];

function drawSymbolt(progresst) {
    ctxt.clearRect(0, 0, canvast.width, canvast.height);

    ctxt.fillStyle = "#ccc";
    // Контур символа
   
   
    ctxt.fillRect(50, 50, 100, 20); //  линия gor
    ctxt.fillRect(50, 50, 20, 100);  //  линия vert
    ctxt.fillRect(50, 130, 100, 20); //  линия gor

    ctxt.fillStyle = "#05414E";

  
 // горизонтальная линия
 if (filledStagest[0] || staget === 1) {
    const lineProgresst = filledStagest[0] ? 1 : Math.min(progresst, 1);
    ctxt.fillRect(50, 50, 100 * lineProgresst, 20);
}
    //  вертикальная линия
    if (filledStagest[1] || staget === 2) {
        const lineProgresst = filledStagest[1] ? 1 : Math.min(progresst, 1);
        ctxt.fillRect(50, 50, 20, 100 * lineProgresst);
    }

    // горизонтальная линия
if (filledStagest[2] || staget === 3) {
    const lineProgresst = filledStagest[2] ? 1 : Math.min(progresst, 1);
    ctxt.fillRect(50, 130, 100 * lineProgresst, 20);
}

   
}

function animateFillt() {
    progresst += speedt;

    if (progresst >= 1) {
        filledStagest[staget - 1] = true;
        progresst = 0;
        staget++;
        if (staget > totalStagest) return;
    }

    drawSymbolt(progresst);
    requestAnimationFrame(animateFillt);
}

t.addEventListener('mouseenter', () => {
    if (!filledStagest.includes(false)) return;
    progresst = 0;
    staget = 1;
    animateFillt();

    
    
        poyasnenie.innerHTML='аналогичен русскому т';
});

drawSymbolt(progresst);





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



// let t=document.querySelector('.t');


// const canvast = document.getElementById('canvas');
// const ctxt = canvast.getContext('2d');

// // Прогресс для горизонтальной и вертикальной частей
// let horizontalProgresst = 0; 
// let verticalProgresst = 0; 
// let animationFramet; // ID текущей анимации
// let staget = 1; // Этап анимации: 1 = горизонтальная, 2 = вертикальная

// // Настройки стиля
// const lineWidtht = 10;
// const strokeColort = '#333';
// const fillColort = 'red';
// const animationSpeedt = 0.02; // Скорость анимации заливки
// // t.addEventListener('click',function(){
// function drawLettert(hProgresst, vProgresst) {
//     ctxt.clearRect(0, 0, canvas.width, canvas.height);

//     // Нарисуем контур буквы - черный
//    ctxt.beginPath();
//    ctxt.lineWidth = lineWidtht;
//    ctxt.strokeStyle = strokeColort;
//    ctxt.moveTo(50, 50);
//     ctxt.lineTo(150, 50); // Горизонтальная линия
 
//     ctxt.stroke();

//     ctxn.moveTo(50, 50);
//     ctxn.lineTo(50, 150); // Вертикальная линия
//     ctxn.lineTo(150, 150); // Горизонтальная линия
//     ctxn.stroke();

//     // Горизонтальная заливка
//     if (hProgresst > 0) {
//         ctxt.fillStyle = fillColor;
//         ctxt.beginPath();
//         ctxt.moveTo(50, 50);
//         ctxt.lineTo(50 + 100 * hProgresst, 50);
//         ctxt.lineTo(50 + 100 * hProgresst, 60);
//         ctxt.lineTo(50, 60);
//         ctxt.closePath();
//         ctxt.fill();
//     }

//     // Вертикальная заливка
//     if (vProgresst > 0) {
//         ctxt.fillStyle = fillColor;
//         ctxt.beginPath();
//         ctxt.moveTo(140, 50);
//         ctxt.lineTo(150, 50);
//         ctxt.lineTo(150, 50 + 100 * vProgresst);
//         ctxt.lineTo(140, 50 + 100 * vProgresst);
//         ctxt.closePath();
//         ctxt.fill();
//     }
// }

// // Анимация заливки
// function animateFillt() {
//     if (staget === 1) {
//         horizontalProgresst += animationSpeedt;
//         if (horizontalProgresst >= 1) {
//             staget = 2; // Переход к вертикальной части
//         }
//     } else if (staget === 2) {
//         verticalProgresst += animationSpeedt;
//         if (verticalProgrests >= 1) {
//             cancelAnimationFrame(animationFramet); // Завершаем анимацию
//             return;
//         }
//     }

//     drawLettert(horizontalProgresst, verticalProgresst);
//     animationFramet = requestAnimationFrame(animateFillt);
// }

// // События для Canvas
// t.addEventListener('click', () => {
//     cancelAnimationFrame(animationFramet); // Останавливаем текущую анимацию, если она идет
//     animateFillt();
// });

// // Первоначальный вызов для отрисовки буквы
// // drawLetter(horizontalProgress, verticalProgress);
// // });