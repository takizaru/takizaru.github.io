
    const canvaschh = document.getElementById('canvas');
    const ctxchh = canvaschh.getContext('2d');
    let chh = document.querySelector('.chh');
    let progresschh = 0;
    let stagechh = 1;
    const speedchh = 0.01;
    const totalStageschh = 5; // Добавлен этап для новой вертикальной палки
    let filledStageschh = [false, false, false, false, false];

    function drawSymbolchh(progresschh) {
        ctxchh.clearRect(0, 0, canvaschh.width, canvaschh.height);

        ctxchh.strokeStyle = "#ccc";
        ctxchh.lineWidth = 20;

        // Контур символа
        // Новая вертикальная палка сверху (длина 20px)
        ctxchh.beginPath();
        ctxchh.moveTo(100, 30); // Начало в центре сверху
        ctxchh.lineTo(100, 50); // Конец на 20px ниже
        ctxchh.stroke();

        // Горизонтальная линия сверху
        ctxchh.beginPath();
        ctxchh.moveTo(50, 50);
        ctxchh.lineTo(150, 50);
        ctxchh.stroke();

        // Центральная вертикальная линия до 1/3
        ctxchh.beginPath();
        ctxchh.moveTo(100, 50);
        ctxchh.lineTo(100, 100);
        ctxchh.stroke();

        // Левая наклонная линия
        ctxchh.beginPath();
        ctxchh.moveTo(100, 100);
        ctxchh.lineTo(50, 150);
        ctxchh.stroke();

        // Правая наклонная линия
        ctxchh.beginPath();
        ctxchh.moveTo(100, 100);
        ctxchh.lineTo(150, 150);
        ctxchh.stroke();

        ctxchh.strokeStyle = "#05414E";

        // Первая часть: новая вертикальная палка сверху (длина 20px)
        if (filledStageschh[0] || stagechh === 1) {
            const lineProgresschh = filledStageschh[0] ? 1 : Math.min(progresschh, 1);
            ctxchh.beginPath();
            ctxchh.moveTo(100, 30); // Начало в центре сверху
            ctxchh.lineTo(100, 30 + 20 * lineProgresschh); // Конец на 20px ниже
            ctxchh.stroke();
        }

        // Вторая часть: горизонтальная линия сверху
        if (filledStageschh[1] || stagechh === 2) {
            const lineProgresschh = filledStageschh[1] ? 1 : Math.min(progresschh, 1);
            ctxchh.beginPath();
            ctxchh.moveTo(50, 50);
            ctxchh.lineTo(50 + 100 * lineProgresschh, 50);
            ctxchh.stroke();
        }

        // Третья часть: центральная вертикальная линия
        if (filledStageschh[2] || stagechh === 3) {
            const lineProgresschh = filledStageschh[2] ? 1 : Math.min(progresschh, 1);
            ctxchh.beginPath();
            ctxchh.moveTo(100, 50);
            ctxchh.lineTo(100, 50 + 50 * lineProgresschh);
            ctxchh.stroke();
        }

        // Четвертая часть: левая наклонная линия
        if (filledStageschh[3] || stagechh === 4) {
            const lineProgresschh = filledStageschh[3] ? 1 : Math.min(progresschh, 1);
            ctxchh.beginPath();
            ctxchh.moveTo(100, 100);
            ctxchh.lineTo(100 - 50 * lineProgresschh, 100 + 50 * lineProgresschh);
            ctxchh.stroke();
        }

        // Пятая часть: правая наклонная линия
        if (filledStageschh[4] || stagechh === 5) {
            const lineProgresschh = filledStageschh[4] ? 1 : Math.min(progresschh, 1);
            ctxchh.beginPath();
            ctxchh.moveTo(100, 100);
            ctxchh.lineTo(100 + 50 * lineProgresschh, 100 + 50 * lineProgresschh);
            ctxchh.stroke();
        }
    }

    function animateFillchh() {
        progresschh += speedchh;

        if (progresschh >= 1) {
            filledStageschh[stagechh - 1] = true;
            progresschh = 0;
            stagechh++;
            if (stagechh > totalStageschh) return;
        }

        drawSymbolchh(progresschh);
        requestAnimationFrame(animateFillchh);
    }

    chh.addEventListener('mouseenter', () => {
        if (!filledStageschh.includes(false)) return;
        progresschh = 0;
        stagechh = 1;
        animateFillchh();

        // poyasnenie.innerHTML='e´это типа e';
    });

    drawSymbolchh(progresschh);

