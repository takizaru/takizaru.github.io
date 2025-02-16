
    const canvass = document.getElementById('canvas');
    const ctxs = canvass.getContext('2d');

    let s=document.querySelector('.s');
    let progresss = 0;
    let stages = 1;
    const speeds = 0.01;
    const totalStagess = 3;
    let filledStagess = [false, false, false];

    function drawSymbols(progresss) {
        ctxs.clearRect(0, 0, canvass.width, canvass.height);

        ctxs.strokeStyle = "#ccc";
        ctxs.lineWidth = 20;
        // ctx.lineCap = "round";

        // Контур символа
        // Центральная вертикальная линия до 1/3
        ctxs.beginPath();
        ctxs.moveTo(100, 50);
        ctxs.lineTo(100, 100);
        ctxs.stroke();

        // Левая наклонная линия
        ctxs.beginPath();
        ctxs.moveTo(100, 100);
        ctxs.lineTo(50, 150);
        ctxs.stroke();

        // Правая наклонная линия
        ctxs.beginPath();
        ctxs.moveTo(100, 100);
        ctxs.lineTo(150, 150);
        ctxs.stroke();

        ctxs.strokeStyle = "#05414E";

        // Первая часть: центральная вертикальная линия
        if (filledStagess[0] || stages === 1) {
            const lineProgresss = filledStagess[0] ? 1 : Math.min(progresss, 1);
            ctxs.beginPath();
            ctxs.moveTo(100, 50);
            ctxs.lineTo(100, 50 + 50 * lineProgresss);
            ctxs.stroke();
        }

        // Вторая часть: левая наклонная линия
        if (filledStagess[1] || stages === 2) {
            const lineProgresss = filledStagess[1] ? 1 : Math.min(progresss, 1);
            ctxs.beginPath();
            ctxs.moveTo(100, 100);
            ctxs.lineTo(100 - 50 * lineProgresss, 100 + 50 * lineProgresss);
            ctxs.stroke();
        }

        // Третья часть: правая наклонная линия
        if (filledStagess[2] || stages === 3) {
            const lineProgresss = filledStagess[2] ? 1 : Math.min(progresss, 1);
            ctxs.beginPath();
            ctxs.moveTo(100, 100);
            ctxs.lineTo(100 + 50 * lineProgresss, 100 + 50 * lineProgresss);
            ctxs.stroke();
        }
    }

    function animateFills() {
        progresss += speeds;

        if (progresss >= 1) {
            filledStagess[stages - 1] = true;
            progresss = 0;
            stages++;
            if (stages > totalStagess) return;
        }

        drawSymbols(progresss);
        requestAnimationFrame(animateFills);
    }

    s.addEventListener('mouseenter', () => {
        if (!filledStagess.includes(false)) return;
        progresss = 0;
        stages = 1;
        animateFills();

        poyasnenie.innerHTML='аналогичен русскому м';
    });

    drawSymbols(progresss);


