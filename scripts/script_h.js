
    const canvash = document.getElementById('canvas');
    const ctxh=canvash.getContext('2d');
    let h = document.querySelector('.h');
    let progressh = 0;
    const speedh = 0.01; // Скорость анимации
    const radiush = 40; // Радиус круга
    const strokeWidthh = 20; // Ширина линий и края круга (20px)
    const centerXh = 100; // Центр канваса по X
    const centerYh = 100; // Центр канваса по Y

    // Вертикальная линия (длина 20px, выше центра)
    function drawVerticalLineh(progressh) {
        const lineLengthh = 20; // Длина вертикальной линии
        const startYh = centerYh - 70; // Начинаем выше центра
        const endYh = startYh + lineLengthh * progressh;

        ctxh.strokeStyle = "#05414E";
        ctxh.lineWidth = strokeWidthh;
        ctxh.beginPath();
        ctxh.moveTo(centerXh, startYh);
        ctxh.lineTo(centerXh, endYh);
        ctxh.stroke();
    }

    // Горизонтальная линия (под вертикальной линией)
    function drawHorizontalLineh(progressh) {
        const lineLengthh = 100; // Длина горизонтальной линии
        const startXh = centerXh - lineLengthh / 2;
        const endXh = startXh + lineLengthh * progressh;

        ctxh.strokeStyle = "#05414E";
        ctxh.lineWidth = strokeWidthh;
        ctxh.beginPath();
        ctxh.moveTo(startXh, centerYh - 40); // Под вертикальной линией
        ctxh.lineTo(endXh, centerYh - 40);
        ctxh.stroke();
    }

    // Круг (под горизонтальной линией с отступом 20px)
    function drawCircleh(progressh) {
        ctxh.strokeStyle = "#05414E";
        ctxh.lineWidth = strokeWidthh;
        ctxh.beginPath();
        ctxh.arc(centerXh, centerYh + 20, radiush, -Math.PI / 2, (-Math.PI / 2) - (Math.PI * 2 * progressh), true);
        ctxh.stroke();
    }

    function animateFillh() {
        progressh += speedh;

        if (progressh >= 1) {
            progressh = 1; // Ограничиваем прогресс до 100%
            drawVerticalLineh(1);
            drawHorizontalLineh(1);
            drawCircleh(1);
            return; // Завершение анимации
        }

        ctxh.clearRect(0, 0, canvash.width, canvash.height);

        if (progressh <= 0.33) {
            drawVerticalLineh(progressh / 0.33);
        } else if (progressh <= 0.66) {
            drawVerticalLineh(1);
            drawHorizontalLineh((progressh - 0.33) / 0.33);
        } else {
            drawVerticalLineh(1);
            drawHorizontalLineh(1);
            drawCircleh((progressh - 0.66) / 0.34);
        }

        requestAnimationFrame(animateFillh);
    }

    h.addEventListener('mouseenter', () => {
        if (progressh >= 1) return; // Если анимация завершена, не запускаем снова
        progressh = 0;
        animateFillh();

        // poyasnenie.innerHTML='аналогичен русскому а';
    });

    // Начальное состояние
    ctxh.clearRect(0, 0, canvash.width, canvash.height);
    drawVerticalLineh(0);
    drawHorizontalLineh(0);
    drawCircleh(0);
