const canvaschch = document.getElementById('canvas');
const ctxchch = canvaschch.getContext('2d');

let chch = document.querySelector('.chch');
let progresschch = 0;
const speedchch = 0.005; // Медленная скорость анимации
let isAnimatingchch = false;

// Функция для рисования контура
function drawOutlinechch() {
    ctxchch.strokeStyle = "#ccc";
    ctxchch.lineWidth = 20;
    // ctxchch.lineCap = 'round';
    
    // Первый символ ㅈ (левая часть)
    // Горизонтальная линия
    ctxchch.beginPath();
    ctxchch.moveTo(35, 50);
    ctxchch.lineTo(110, 50);
    ctxchch.stroke();
    
    // Левая палочка (с закруглением)
    ctxchch.beginPath();
    ctxchch.moveTo(75, 50);
    ctxchch.quadraticCurveTo(60, 110, 25, 150);
    ctxchch.stroke();
    
    // Правая палочка (с закруглением)
    ctxchch.beginPath();
    ctxchch.moveTo(75, 50);
    ctxchch.quadraticCurveTo(65, 90, 125, 150);
    ctxchch.stroke();
    
    // Второй символ ㅈ (правая часть)
    // Горизонтальная линия
    ctxchch.beginPath();
    ctxchch.moveTo(95, 50);
    ctxchch.lineTo(165, 50);
    ctxchch.stroke();
    
    // Левая палочка (с закруглением)
    ctxchch.beginPath();
    ctxchch.moveTo(125, 50);
    ctxchch.quadraticCurveTo(110, 110, 75, 150);
    ctxchch.stroke();
    
    // Правая палочка (с закруглением)
    ctxchch.beginPath();
    ctxchch.moveTo(125, 50);
    ctxchch.quadraticCurveTo(115, 90, 175, 150);
    ctxchch.stroke();
}

// Функция для анимации линии
function animateLinechch(startX, startY, endX, endY, progress) {
    ctxchch.strokeStyle = "#05414E";
    ctxchch.lineWidth = 20;
    // ctxchch.lineCap = 'round';
    
    ctxchch.beginPath();
    ctxchch.moveTo(startX, startY);
    ctxchch.lineTo(startX + (endX - startX) * progress, startY + (endY - startY) * progress);
    ctxchch.stroke();
}

// Функция для анимации кривой
function animateCurvechch(startX, startY, cpX, cpY, endX, endY, progress) {
    ctxchch.strokeStyle = "#05414E";
    ctxchch.lineWidth = 20;
    // ctxchch.lineCap = 'round';
    
    const currentCpX = startX + (cpX - startX) * progress;
    const currentCpY = startY + (cpY - startY) * progress;
    const currentEndX = startX + (endX - startX) * progress;
    const currentEndY = startY + (endY - startY) * progress;
    
    ctxchch.beginPath();
    ctxchch.moveTo(startX, startY);
    ctxchch.quadraticCurveTo(currentCpX, currentCpY, currentEndX, currentEndY);
    ctxchch.stroke();
}

function animatechch() {
    if (!isAnimatingchch) return;
    
    progresschch += speedchch;
    
    // Очищаем canvas и рисуем контур
    ctxchch.clearRect(0, 0, canvaschch.width, canvaschch.height);
    drawOutlinechch();
    
    // Анимация в 6 этапов:
    // 1. Первая горизонтальная линия (0-16%)
    if (progresschch <= 0.16) {
        const strokeProgress = progresschch / 0.16;
        animateLinechch(35, 50, 110, 50, strokeProgress);
    }
    // 2. Первая левая палочка (16-33%)
    else if (progresschch <= 0.33) {
        animateLinechch(35, 50, 110, 50, 1);
        const strokeProgress = (progresschch - 0.16) / 0.17;
        animateCurvechch(75, 50, 60, 110, 25, 150, strokeProgress);
    }
    // 3. Первая правая палочка (33-50%)
    else if (progresschch <= 0.5) {
        animateLinechch(35, 50, 110, 50, 1);
        animateCurvechch(75, 50, 60, 110, 25, 150, 1);
        const strokeProgress = (progresschch - 0.33) / 0.17;
        animateCurvechch(75, 50, 65, 90, 125, 150, strokeProgress);
    }
    // 4. Вторая горизонтальная линия (50-66%)
    else if (progresschch <= 0.66) {
        animateLinechch(35, 50, 110, 50, 1);
        animateCurvechch(75, 50, 60, 110, 25, 150, 1);
        animateCurvechch(75, 50, 65, 90, 125, 150, 1);
        const strokeProgress = (progresschch - 0.5) / 0.16;
        animateLinechch(95, 50, 165, 50, strokeProgress);
    }
    // 5. Вторая левая палочка (66-83%)
    else if (progresschch <= 0.83) {
        animateLinechch(35, 50, 110, 50, 1);
        animateCurvechch(75, 50, 60, 110, 25, 150, 1);
        animateCurvechch(75, 50, 65, 90, 125, 150, 1);
        animateLinechch(95, 50, 165, 50, 1);
        const strokeProgress = (progresschch - 0.66) / 0.17;
        animateCurvechch(125, 50, 110, 110, 75, 150, strokeProgress);
    }
    // 6. Вторая правая палочка (83-100%)
    else if (progresschch <= 1) {
        animateLinechch(35, 50, 110, 50, 1);
        animateCurvechch(75, 50, 60, 110, 25, 150, 1);
        animateCurvechch(75, 50, 65, 90, 125, 150, 1);
        animateLinechch(95, 50, 165, 50, 1);
        animateCurvechch(125, 50, 110, 110, 75, 150, 1);
        const strokeProgress = (progresschch - 0.83) / 0.17;
        animateCurvechch(125, 50, 115, 90, 175, 150, strokeProgress);
    }
    // Анимация завершена
    else {
        progresschch = 1;
        animateLinechch(35, 50, 110, 50, 1);
        animateCurvechch(75, 50, 60, 110, 25, 150, 1);
        animateCurvechch(75, 50, 65, 90, 125, 150, 1);
        animateLinechch(95, 50, 165, 50, 1);
        animateCurvechch(125, 50, 110, 110, 75, 150, 1);
        animateCurvechch(125, 50, 115, 90, 175, 150, 1);
        isAnimatingchch = false;
        return;
    }
    
    requestAnimationFrame(animatechch);
}

chch.addEventListener('mouseenter', () => {
    // Сбрасываем анимацию при новом наведении
    if (isAnimatingchch) {
        progresschch = 0;
    } else {
        progresschch = 0;
        isAnimatingchch = true;
        animatechch();
    }

    let poyasnenie = document.querySelector('#poyasnenie');
    poyasnenie.innerHTML = 'аналогичен русскому, "твердому" ч (удвоенный звук)';
});

// Инициализация - рисуем только контур
drawOutlinechch();