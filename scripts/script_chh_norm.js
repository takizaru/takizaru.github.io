const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let chh = document.querySelector('.chh');
let progress = 0;
const speed = 0.005;
let isAnimating = false;

// Функция для рисования контура
function drawOutline() {
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 20;
    // ctx.lineCap = 'round';
    
    // Вертикальная палочка сверху (20px)
    ctx.beginPath();
    ctx.moveTo(100, 30);
    ctx.lineTo(100, 50);
    ctx.stroke();
    
    // Горизонтальная линия
    ctx.beginPath();
    ctx.moveTo(50, 70);
    ctx.lineTo(150, 70);
    ctx.stroke();
    
    // Левая изогнутая линия
    ctx.beginPath();
    ctx.moveTo(100, 70);
    ctx.quadraticCurveTo(85, 130, 50, 170);
    ctx.stroke();
    
    // Правая изогнутая линия
    ctx.beginPath();
    ctx.moveTo(100, 70);
    ctx.quadraticCurveTo(90, 110, 150, 170);
    ctx.stroke();
}

// Функция для анимации линии
function animateLine(startX, startY, endX, endY, progress) {
    ctx.strokeStyle = "#05414E";
    ctx.lineWidth = 20;
    // ctx.lineCap = 'round';
    
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + (endX - startX) * progress, startY + (endY - startY) * progress);
    ctx.stroke();
}

// Функция для анимации кривой
function animateCurve(startX, startY, cpX, cpY, endX, endY, progress) {
    ctx.strokeStyle = "#05414E";
    ctx.lineWidth = 20;
    // ctx.lineCap = 'round';
    
    const currentCpX = startX + (cpX - startX) * progress;
    const currentCpY = startY + (cpY - startY) * progress;
    const currentEndX = startX + (endX - startX) * progress;
    const currentEndY = startY + (endY - startY) * progress;
    
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(currentCpX, currentCpY, currentEndX, currentEndY);
    ctx.stroke();
}

function animate() {
    if (!isAnimating) return;
    
    progress += speed;
    
    // Очищаем canvas и рисуем контур
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawOutline();
    
    // Анимация в 4 этапа:
    // 1. Вертикальная палочка (0-25%)
    if (progress <= 0.25) {
        const strokeProgress = progress / 0.25;
        animateLine(100, 30, 100, 50, strokeProgress);
    } 
    // 2. Горизонтальная линия (25-50%)
    else if (progress <= 0.5) {
        animateLine(100, 30, 100, 50, 1);
        const strokeProgress = (progress - 0.25) / 0.25;
        animateLine(50, 70, 150, 70, strokeProgress);
    } 
    // 3. Левая изогнутая линия (50-75%)
    else if (progress <= 0.75) {
        animateLine(100, 30, 100, 50, 1);
        animateLine(50, 70, 150, 70, 1);
        const strokeProgress = (progress - 0.5) / 0.25;
        animateCurve(100, 70, 85, 130, 50, 170, strokeProgress);
    } 
    // 4. Правая изогнутая линия (75-100%)
    else if (progress <= 1) {
        animateLine(100, 30, 100, 50, 1);
        animateLine(50, 70, 150, 70, 1);
        animateCurve(100, 70, 85, 130, 50, 170, 1);
        const strokeProgress = (progress - 0.75) / 0.25;
        animateCurve(100, 70, 90, 110, 150, 170, strokeProgress);
    } 
    // Анимация завершена
    else {
        progress = 1;
        animateLine(100, 30, 100, 50, 1);
        animateLine(50, 70, 150, 70, 1);
        animateCurve(100, 70, 85, 130, 50, 170, 1);
        animateCurve(100, 70, 90, 110, 150, 170, 1);
        isAnimating = false;
        return;
    }
    
    requestAnimationFrame(animate);
}

chh.addEventListener('mouseenter', () => {
    if (isAnimating) {
        progress = 0;
    } else {
        progress = 0;
        isAnimating = true;
        animate();
    }

    let poyasnenie = document.querySelector('#poyasnenie');
    poyasnenie.innerHTML = 'аналогичен русскому, "мягкому" ч';
});

// Инициализация - рисуем только контур
drawOutline();