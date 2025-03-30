const canvass = document.getElementById('canvas');
const ctxs = canvass.getContext('2d');

let s = document.querySelector('.s');
let progresss = 0;
const speeds = 0.005;
let isAnimating = false;

// Функция очистки канваса
function clearCanvas() {
    ctxs.clearRect(0, 0, canvass.width, canvass.height);
}

// Функция для рисования контура
function drawOutline() {
    ctxs.strokeStyle = "#ccc";
    ctxs.lineWidth = 20;
 
    
    // Левая палочка (с закруглением)
    ctxs.beginPath();
    ctxs.moveTo(100, 50);
    ctxs.quadraticCurveTo(85, 110, 50, 150);
    ctxs.stroke();
    
    // Правая палочка (с закруглением)
    ctxs.beginPath();
    ctxs.moveTo(100, 50);
    ctxs.quadraticCurveTo(90, 90, 150, 150);
    ctxs.stroke();
}

// Функция для анимации заполнения одной палочки
function animateStroke(startX, startY, cpX, cpY, endX, endY, progress) {
    ctxs.strokeStyle = "#05414E";
    ctxs.lineWidth = 20;

    
    const currentCpX = startX + (cpX - startX) * progress;
    const currentCpY = startY + (cpY - startY) * progress;
    const currentEndX = startX + (endX - startX) * progress;
    const currentEndY = startY + (endY - startY) * progress;
    
    ctxs.beginPath();
    ctxs.moveTo(startX, startY);
    ctxs.quadraticCurveTo(currentCpX, currentCpY, currentEndX, currentEndY);
    ctxs.stroke();
}

function animate() {
    if (!isAnimating) return;
    
    progresss += speeds;
    
    // Очищаем canvas и рисуем контур
    ctxs.clearRect(0, 0, canvass.width, canvass.height);
    drawOutline();
    
    // Анимация левой палочки (первая половина прогресса)
    if (progresss <= 0.5) {
        const strokeProgress = progresss / 0.5;
        animateStroke(100, 50, 85, 110, 50, 150, strokeProgress);
    } 
    // Анимация правой палочки (вторая половина прогресса)
    else if (progresss <= 1) {
        animateStroke(100, 50, 85, 110, 50, 150, 1);
        const strokeProgress = (progresss - 0.5) / 0.5;
        animateStroke(100, 50, 90, 90, 150, 150, strokeProgress);
    } 
    // Анимация завершена
    else {
        progresss = 1;
        animateStroke(100, 50, 85, 110, 50, 150, 1);
        animateStroke(100, 50, 90, 90, 150, 150, 1);
        isAnimating = false;
        return;
    }
    
    requestAnimationFrame(animate);
}

s.addEventListener('mouseenter', () => {
    if (isAnimating) {
        progresss = 0;
    } else {
        progresss = 0;
        isAnimating = true;
        animate();
    }

    let poyasnenie = document.querySelector('#poyasnenie');
    poyasnenie.innerHTML = 'аналогичен русскому с';
});

s.addEventListener('mouseleave', () => {
    // При уходе курсора очищаем канвас
    isAnimating = false;
    clearCanvas();
});

// Инициализация - очищаем канвас
clearCanvas();
