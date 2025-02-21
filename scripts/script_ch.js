
    const canvasch = document.getElementById('canvas');
    const ctxch = canvasch.getContext('2d');
    
    let ch = document.querySelector('.ch');
    let progressch = 0;
    let stagech = 1;
    const speedch = 0.01;
    const totalStagesch = 4; // Добавлен этап для горизонтальной линии
    let filledStagesch = [false, false, false, false];

    function drawSymbolch(progressch) {
        ctxch.clearRect(0, 0, canvasch.width, canvasch.height);

        ctxch.strokeStyle = "#ccc";
        ctxch.lineWidth = 20;
        // ctx.lineCap = "round";

        // Контур символа
        // Горизонтальная линия сверху
        ctxch.beginPath();
        ctxch.moveTo(50, 50);
        ctxch.lineTo(150, 50);
        ctxch.stroke();

        // Центральная вертикальная линия до 1/3
        ctxch.beginPath();
        ctxch.moveTo(100, 50);
        ctxch.lineTo(100, 100);
        ctxch.stroke();

        // Левая наклонная линия
        ctxch.beginPath();
        ctxch.moveTo(100, 100);
        ctxch.lineTo(50, 150);
        ctxch.stroke();

        // Правая наклонная линия
        ctxch.beginPath();
        ctxch.moveTo(100, 100);
        ctxch.lineTo(150, 150);
        ctxch.stroke();

        ctxch.strokeStyle = "#05414E";

        // Первая часть: горизонтальная линия сверху
        if (filledStagesch[0] || stagech === 1) {
            const lineProgressch = filledStagesch[0] ? 1 : Math.min(progressch, 1);
            ctxch.beginPath();
            ctxch.moveTo(50, 50);
            ctxch.lineTo(50 + 100 * lineProgressch, 50);
            ctxch.stroke();
        }

        // Вторая часть: центральная вертикальная линия
        if (filledStagesch[1] || stagech === 2) {
            const lineProgressch = filledStagesch[1] ? 1 : Math.min(progressch, 1);
            ctxch.beginPath();
            ctxch.moveTo(100, 50);
            ctxch.lineTo(100, 50 + 50 * lineProgressch);
            ctxch.stroke();
        }

        // Третья часть: левая наклонная линия
        if (filledStagesch[2] || stagech === 3) {
            const lineProgressch = filledStagesch[2] ? 1 : Math.min(progressch, 1);
            ctxch.beginPath();
            ctxch.moveTo(100, 100);
            ctxch.lineTo(100 - 50 * lineProgressch, 100 + 50 * lineProgressch);
            ctxch.stroke();
        }

        // Четвертая часть: правая наклонная линия
        if (filledStagesch[3] || stagech === 4) {
            const lineProgressch = filledStagesch[3] ? 1 : Math.min(progressch, 1);
            ctxch.beginPath();
            ctxch.moveTo(100, 100);
            ctxch.lineTo(100 + 50 * lineProgressch, 100 + 50 * lineProgressch);
            ctxch.stroke();
        }
    }

    function animateFillch() {
        progressch += speedch;

        if (progressch >= 1) {
            filledStagesch[stagech - 1] = true;
            progressch = 0;
            stagech++;
            if (stagech > totalStagesch) return;
        }

        drawSymbolch(progressch);
        requestAnimationFrame(animateFillch);
    }

    ch.addEventListener('mouseenter', () => {
        if (!filledStagesch.includes(false)) return;
        progressch = 0;
        stagech = 1;
        animateFillch();
        poyasnenie.innerHTML='аналогичен русскому, "мягкому" ч'
    });

    drawSymbolch(progressch);
