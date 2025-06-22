
    const canvasye = document.getElementById('canvas');
    const ctxye = canvasye.getContext('2d');

    let ye =document.querySelector('.ye');
    let progressye = 0;
    let stageye = 1;
    const speedye = 0.01;
    const totalStagesye = 3;
    let filledStagesye = [false, false, false];

    function drawSymbolye(progressye) {
        ctxye.clearRect(0, 0, canvasye.width, canvasye.height);

        ctxye.fillStyle = "#ccc";
        // Контур символа
        ctxye.fillRect(50, 80, 40, 20); // 1 палка (горизонтальная, по центру)
        ctxye.fillRect(90, 35, 20, 110); // 2 палка (вертикальная, слева)
        ctxye.fillRect(120, 30, 20, 120); // 3 палка (вертикальная, справа)

        ctxye.fillStyle = "#05414E";

        // 1 палка - горизонтальная (по центру)
        if (filledStagesye[0] || stageye === 1) {
            const lineProgressye = filledStagesye[0] ? 1 : Math.min(progressye, 1);
            ctxye.fillRect(50, 80, 40 * lineProgressye, 20);
        }

        // 2 палка - вертикальная (слева)
        if (filledStagesye[1] || stageye === 2) {
            const lineProgressye = filledStagesye[1] ? 1 : Math.min(progressye, 1);
            ctxye.fillRect(90, 35, 20, 110 * lineProgressye);
        }

        // 3 палка - вертикальная (справа)
        if (filledStagesye[2] || stageye === 3) {
            const lineProgressye = filledStagesye[2] ? 1 : Math.min(progressye, 1);
            ctxye.fillRect(120, 30, 20, 120 * lineProgressye);
        }
    }

    function animateFillye() {
        progressye += speedye;

        if (progressye >= 1) {
            filledStagesye[stageye - 1] = true;
            progressye = 0;
            stageye++;
            if (stageye > totalStagesye) return;
        }

        drawSymbolye(progressye);
        requestAnimationFrame(animateFillye);
    }

    ye.addEventListener('mouseenter', () => {
        if (!filledStagesye.includes(false)) return;
        progressye = 0;
        stageye = 1;
        animateFillye();

        poyasnenie.innerHTML='неогубленный гласный переднего ряда; на слух напоминает русский "е"; ';
    });

    drawSymbolye(progressye);
