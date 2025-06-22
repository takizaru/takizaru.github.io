const canvasss = document.getElementById('canvas');
const ctxss = canvasss.getContext('2d');

let ss = document.querySelector('.ss');
let progressss = 0;
const speedss = 0.005; // Медленная скорость анимации
let isAnimatingss = false;

// Функция очистки канваса
function clearCanvas() {
    ctxss.clearRect(0, 0, canvasss.width, canvasss.height);
}

// Функция для рисования контура
function drawOutliness() {
    ctxss.strokeStyle = "#ccc";
    ctxss.lineWidth = 20;
    
    // Первый символ ㅅ (левая часть)
    ctxss.beginPath();
    ctxss.moveTo(75, 50);
    ctxss.quadraticCurveTo(60, 110, 25, 150);
    ctxss.stroke();
    
    ctxss.beginPath();
    ctxss.moveTo(75, 50);
    ctxss.quadraticCurveTo(65, 90, 125, 150);
    ctxss.stroke();
    
    // Второй символ ㅅ (правая часть)
    ctxss.beginPath();
    ctxss.moveTo(125, 50);
    ctxss.quadraticCurveTo(110, 110, 75, 150);
    ctxss.stroke();
    
    ctxss.beginPath();
    ctxss.moveTo(125, 50);
    ctxss.quadraticCurveTo(115, 90, 175, 150);
    ctxss.stroke();
}

// Функция для анимации заполнения кривой
function animateStrokess(startX, startY, cpX, cpY, endX, endY, progress) {
    ctxss.strokeStyle = "#05414E";
    ctxss.lineWidth = 20;
    
    const currentCpX = startX + (cpX - startX) * progress;
    const currentCpY = startY + (cpY - startY) * progress;
    const currentEndX = startX + (endX - startX) * progress;
    const currentEndY = startY + (endY - startY) * progress;
    
    ctxss.beginPath();
    ctxss.moveTo(startX, startY);
    ctxss.quadraticCurveTo(currentCpX, currentCpY, currentEndX, currentEndY);
    ctxss.stroke();
}

function animatess() {
    if (!isAnimatingss) return;
    
    progressss += speedss;
    
    // Очищаем canvas и рисуем контур
    ctxss.clearRect(0, 0, canvasss.width, canvasss.height);
    drawOutliness();
    
    // Анимация в 4 этапа:
    // 1. Первая левая палочка (0-25%)
    if (progressss <= 0.25) {
        const strokeProgress = progressss / 0.25;
        animateStrokess(75, 50, 60, 110, 25, 150, strokeProgress);
    } 
    // 2. Первая правая палочка (25-50%)
    else if (progressss <= 0.5) {
        animateStrokess(75, 50, 60, 110, 25, 150, 1);
        const strokeProgress = (progressss - 0.25) / 0.25;
        animateStrokess(75, 50, 65, 90, 125, 150, strokeProgress);
    }
    // 3. Вторая левая палочка (50-75%)
    else if (progressss <= 0.75) {
        animateStrokess(75, 50, 60, 110, 25, 150, 1);
        animateStrokess(75, 50, 65, 90, 125, 150, 1);
        const strokeProgress = (progressss - 0.5) / 0.25;
        animateStrokess(125, 50, 110, 110, 75, 150, strokeProgress);
    }
    // 4. Вторая правая палочка (75-100%)
    else if (progressss <= 1) {
        animateStrokess(75, 50, 60, 110, 25, 150, 1);
        animateStrokess(75, 50, 65, 90, 125, 150, 1);
        animateStrokess(125, 50, 110, 110, 75, 150, 1);
        const strokeProgress = (progressss - 0.75) / 0.25;
        animateStrokess(125, 50, 115, 90, 175, 150, strokeProgress);
    }
    // Анимация завершена
    else {
        progressss = 1;
        animateStrokess(75, 50, 60, 110, 25, 150, 1);
        animateStrokess(75, 50, 65, 90, 125, 150, 1);
        animateStrokess(125, 50, 110, 110, 75, 150, 1);
        animateStrokess(125, 50, 115, 90, 175, 150, 1);
        isAnimatingss = false;
        return;
    }
    
    requestAnimationFrame(animatess);
}

ss.addEventListener('mouseenter', () => {
    // Сбрасываем анимацию при новом наведении
    if (isAnimatingss) {
        progressss = 0;
    } else {
        progressss = 0;
        isAnimatingss = true;
        animatess();
    }

    let poyasnenie = document.querySelector('#poyasnenie');
    poyasnenie.innerHTML = 'аналогичен русскому сс (удвоенный звук)';
});

ss.addEventListener('mouseleave', () => {
    // При уходе курсора очищаем канвас
    isAnimatingss = false;
    clearCanvas();
});

// Инициализация - очищаем канвас
clearCanvas();