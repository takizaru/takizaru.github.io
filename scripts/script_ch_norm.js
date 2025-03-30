const canvasch = document.getElementById('canvas');
const ctxch = canvasch.getContext('2d');

let ch = document.querySelector('.ch');
let progressch = 0;
const speedch = 0.005; // Медленная скорость анимации
let isAnimatingch = false;

// Функция для рисования контура
function drawOutlinech() {
    ctxch.strokeStyle = "#ccc";
    ctxch.lineWidth = 20;
    // ctxch.lineCap = 'round';
    
    // Горизонтальная линия сверху
    ctxch.beginPath();
    ctxch.moveTo(50, 50);
    ctxch.lineTo(150, 50);
    ctxch.stroke();
    
    // Левая палочка (с закруглением)
    ctxch.beginPath();
    ctxch.moveTo(100, 50);
    ctxch.quadraticCurveTo(85, 110, 50, 150);
    ctxch.stroke();
    
    // Правая палочка (с закруглением)
    ctxch.beginPath();
    ctxch.moveTo(100, 50);
    ctxch.quadraticCurveTo(90, 90, 150, 150);
    ctxch.stroke();
}

// Функция для анимации заполнения линии
function animateLine(startX, startY, endX, endY, progress) {
    ctxch.strokeStyle = "#05414E";
    ctxch.lineWidth = 20;
    // ctxch.lineCap = 'round';
    
    ctxch.beginPath();
    ctxch.moveTo(startX, startY);
    ctxch.lineTo(startX + (endX - startX) * progress, startY + (endY - startY) * progress);
    ctxch.stroke();
}

// Функция для анимации заполнения кривой
function animateCurve(startX, startY, cpX, cpY, endX, endY, progress) {
    ctxch.strokeStyle = "#05414E";
    ctxch.lineWidth = 20;
    // ctxch.lineCap = 'round';
    
    const currentCpX = startX + (cpX - startX) * progress;
    const currentCpY = startY + (cpY - startY) * progress;
    const currentEndX = startX + (endX - startX) * progress;
    const currentEndY = startY + (endY - startY) * progress;
    
    ctxch.beginPath();
    ctxch.moveTo(startX, startY);
    ctxch.quadraticCurveTo(currentCpX, currentCpY, currentEndX, currentEndY);
    ctxch.stroke();
}

function animatech() {
    if (!isAnimatingch) return;
    
    progressch += speedch;
    
    // Очищаем canvas и рисуем контур
    ctxch.clearRect(0, 0, canvasch.width, canvasch.height);
    drawOutlinech();
    
    // Анимация в 3 этапа:
    // 1. Горизонтальная линия (0-33%)
    if (progressch <= 0.33) {
        const strokeProgress = progressch / 0.33;
        animateLine(50, 50, 150, 50, strokeProgress);
    } 
    // 2. Левая палочка (33-66%)
    else if (progressch <= 0.66) {
        // Горизонтальная линия полностью нарисована
        animateLine(50, 50, 150, 50, 1);
        
        const strokeProgress = (progressch - 0.33) / 0.33;
        animateCurve(100, 50, 85, 110, 50, 150, strokeProgress);
    } 
    // 3. Правая палочка (66-100%)
    else if (progressch <= 1) {
        // Горизонтальная линия и левая палочка полностью нарисованы
        animateLine(50, 50, 150, 50, 1);
        animateCurve(100, 50, 85, 110, 50, 150, 1);
        
        const strokeProgress = (progressch - 0.66) / 0.34;
        animateCurve(100, 50, 90, 90, 150, 150, strokeProgress);
    } 
    // Анимация завершена
    else {
        progressch = 1;
        animateLine(50, 50, 150, 50, 1);
        animateCurve(100, 50, 85, 110, 50, 150, 1);
        animateCurve(100, 50, 90, 90, 150, 150, 1);
        isAnimatingch = false;
        return;
    }
    
    requestAnimationFrame(animatech);
}

ch.addEventListener('mouseenter', () => {
    // Сбрасываем анимацию при новом наведении
    if (isAnimatingch) {
        progressch = 0;
    } else {
        progressch = 0;
        isAnimatingch = true;
        animatech();
    }

    let poyasnenie = document.querySelector('#poyasnenie');
    poyasnenie.innerHTML = 'аналогичен русскому, "мягкому" ч';
});

// Инициализация - рисуем только контур
drawOutlinech();