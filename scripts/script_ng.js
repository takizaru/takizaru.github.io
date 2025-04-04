
    const canvasng = document.getElementById('canvas');
    const ctxng = canvasng.getContext('2d');

    
    let ng = document.querySelector('.ng');
    let progressng = 0;
    const speedng = 0.01; // Скорость анимации
    const radiusng = 60; // Радиус круга
    const strokeWidthng = 20; // Ширина края круга
    const centerXng = 100; // Центр круга по X
    const centerYng = 100; // Центр круга по Y

    function drawCircleng(progressng) {
        ctxng.clearRect(0, 0, canvasng.width, canvasng.height);

        // Контур круга
        ctxng.strokeStyle = "#ccc";
        ctxng.lineWidth = strokeWidthng;
        ctxng.beginPath();
        ctxng.arc(centerXng, centerYng, radiusng, 0, Math.PI * 2);
        ctxng.stroke();

        // Заливка края круга (против часовой стрелки)
        ctxng.strokeStyle = "#05414E";
        ctxng.lineWidth = strokeWidthng;
        ctxng.beginPath();
        ctxng.arc(centerXng, centerYng, radiusng, -Math.PI / 2, (-Math.PI / 2) - (Math.PI * 2 * progressng), true); // Изменено на true
        ctxng.stroke();
    }

    function animateFillng() {
        progressng += speedng;

        if (progressng >= 1) {
            progressng = 1; // Ограничиваем прогресс до 100%
            drawCircleng(progressng);
            return; // Завершение анимации
        }

        drawCircleng(progressng);
        requestAnimationFrame(animateFillng);
    }

    ng.addEventListener('mouseenter', () => {
        if (progressng >= 1) return; // Если анимация завершена, не запускаем снова
        progressng = 0;
        animateFillng();
        
        poyasnenie.innerHTML='аналогичен носовому н, как в слове long';
    });

    drawCircleng(progressng); // Начальное состояние
