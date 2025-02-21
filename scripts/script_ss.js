
    const canvasss = document.getElementById('canvas');
    const ctxss = canvasss.getContext('2d');
    
    let ss = document.querySelector('.ss');
    let progressss = 0;
    let stagess = 1;
    const speedss = 0.01;
    const totalStagesss = 6;
    let filledStagesss = new Array(totalStagesss).fill(false);

    function drawSymbolss(progressss) {
        ctxss.clearRect(0, 0, canvasss.width, canvasss.height);

        ctxss.strokeStyle = "#ccc";
        ctxss.lineWidth = 20;

        // Контур символа
        // Первая часть: центральная вертикальная линия
        ctxss.beginPath();
        ctxss.moveTo(75, 50);
        ctxss.lineTo(75, 100);
        ctxss.stroke();

        // Вторая часть: левая наклонная линия
        ctxss.beginPath();
        ctxss.moveTo(75, 100);
        ctxss.lineTo(25, 150);
        ctxss.stroke();

        // Третья часть: правая наклонная линия
        ctxss.beginPath();
        ctxss.moveTo(75, 100);
        ctxss.lineTo(125, 150);
        ctxss.stroke();

        // Четвертая часть: центральная вертикальная линия
        ctxss.beginPath();
        ctxss.moveTo(125, 50);
        ctxss.lineTo(125, 100);
        ctxss.stroke();

        // Пятая часть: левая наклонная линия
        ctxss.beginPath();
        ctxss.moveTo(125, 100);
        ctxss.lineTo(75, 150);
        ctxss.stroke();

        // Шестая часть: правая наклонная линия
        ctxss.beginPath();
        ctxss.moveTo(125, 100);
        ctxss.lineTo(175, 150);
        ctxss.stroke();

        ctxss.strokeStyle = "#05414E";

        // Заливка линий в зависимости от стадии
        if (filledStagesss[0] || stagess === 1) {
            const lineProgressss = filledStagesss[0] ? 1 : Math.min(progressss, 1);
            ctxss.beginPath();
            ctxss.moveTo(75, 50);
            ctxss.lineTo(75, 50 + 50 * lineProgressss);
            ctxss.stroke();
        }

        if (filledStagesss[1] || stagess === 2) {
            const lineProgressss = filledStagesss[1] ? 1 : Math.min(progressss, 1);
            ctxss.beginPath();
            ctxss.moveTo(75, 100);
            ctxss.lineTo(75 - 50 * lineProgressss, 100 + 50 * lineProgressss);
            ctxss.stroke();
        }

        if (filledStagesss[2] || stagess === 3) {
            const lineProgressss = filledStagesss[2] ? 1 : Math.min(progressss, 1);
            ctxss.beginPath();
            ctxss.moveTo(75, 100);
            ctxss.lineTo(75 + 50 * lineProgressss, 100 + 50 * lineProgressss);
            ctxss.stroke();
        }

        if (filledStagesss[3] || stagess === 4) {
            const lineProgressss = filledStagesss[3] ? 1 : Math.min(progressss, 1);
            ctxss.beginPath();
            ctxss.moveTo(125, 50);
            ctxss.lineTo(125, 50 + 50 * lineProgressss);
            ctxss.stroke();
        }

        if (filledStagesss[4] || stagess === 5) {
            const lineProgressss = filledStagesss[4] ? 1 : Math.min(progressss, 1);
            ctxss.beginPath();
            ctxss.moveTo(125, 100);
            ctxss.lineTo(125 - 50 * lineProgressss, 100 + 50 * lineProgressss);
            ctxss.stroke();
        }

        if (filledStagesss[5] || stagess === 6) {
            const lineProgressss = filledStagesss[5] ? 1 : Math.min(progressss, 1);
            ctxss.beginPath();
            ctxss.moveTo(125, 100);
            ctxss.lineTo(125 + 50 * lineProgressss, 100 + 50 * lineProgressss);
            ctxss.stroke();
        }
    }

    function animateFillss() {
        progressss += speedss;

        if (progressss >= 1) {
            filledStagesss[stagess - 1] = true;
            progressss = 0;
            stagess++;
            if (stagess > totalStagesss) return;
        }

        drawSymbolss(progressss);
        requestAnimationFrame(animateFillss);
    }

    ss.addEventListener('mouseenter', () => {
        if (!filledStagesss.includes(false)) return;
        progressss = 0;
        stagess = 1;
        animateFillss();

        
    // poyasnenie.innerHTML='o´это типа ';
    });

    drawSymbolss(progressss);
