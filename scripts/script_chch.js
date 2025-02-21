
    const canvaschch = document.getElementById('canvas');
    const ctxchch = canvaschch.getContext('2d');
    let chch = document.querySelector('.chch');

    let progresschch = 0;
    let stagechch = 1;
    const speedchch = 0.01;
    const totalStageschch = 8;
    let filledStageschch = new Array(totalStageschch).fill(false);

    function drawSymbolchch(progresschch) {
        ctxchch.clearRect(0, 0, canvaschch.width, canvaschch.height);

        ctxchch.strokeStyle = "#ccc";
        ctxchch.lineWidth = 20;

        // Контур символа
        // 1 горизонтальная линия
        ctxchch.beginPath();
        ctxchch.moveTo(35, 50);
        ctxchch.lineTo(110, 50);
        ctxchch.stroke();

        // 1 вертикальная линия
        ctxchch.beginPath();
        ctxchch.moveTo(75, 50);
        ctxchch.lineTo(75, 100);
        ctxchch.stroke();

        // 1 левая наклонная линия
        ctxchch.beginPath();
        ctxchch.moveTo(75, 100);
        ctxchch.lineTo(25, 150);
        ctxchch.stroke();

        // 1 правая наклонная линия
        ctxchch.beginPath();
        ctxchch.moveTo(75, 100);
        ctxchch.lineTo(125, 150);
        ctxchch.stroke();

        // 2 горизонтальная линия
        ctxchch.beginPath();
        ctxchch.moveTo(95, 50);
        ctxchch.lineTo(165, 50);
        ctxchch.stroke();

        // 2 вертикальная линия
        ctxchch.beginPath();
        ctxchch.moveTo(125, 50);
        ctxchch.lineTo(125, 100);
        ctxchch.stroke();

        // 2 левая наклонная линия
        ctxchch.beginPath();
        ctxchch.moveTo(125, 100);
        ctxchch.lineTo(75, 150);
        ctxchch.stroke();

        // 2 правая наклонная линия
        ctxchch.beginPath();
        ctxchch.moveTo(125, 100);
        ctxchch.lineTo(175, 150);
        ctxchch.stroke();

        ctxchch.strokeStyle = "#05414E";

        // Заливка 1 горизонтальной линии
        if (filledStageschch[0] || stagechch === 1) {
            const lineProgresschch = filledStageschch[0] ? 1 : Math.min(progresschch, 1);
            ctxchch.beginPath();
            ctxchch.moveTo(35, 50);
            ctxchch.lineTo(35 + 75 * lineProgresschch, 50);
            ctxchch.stroke();
        }

        // Заливка 1 вертикальной линии
        if (filledStageschch[1] || stagechch === 2) {
            const lineProgresschch = filledStageschch[1] ? 1 : Math.min(progresschch, 1);
            ctxchch.beginPath();
            ctxchch.moveTo(75, 50);
            ctxchch.lineTo(75, 50 + 50 * lineProgresschch);
            ctxchch.stroke();
        }

        // Заливка 1 левой наклонной линии
        if (filledStageschch[2] || stagechch === 3) {
            const lineProgresschch = filledStageschch[2] ? 1 : Math.min(progresschch, 1);
            ctxchch.beginPath();
            ctxchch.moveTo(75, 100);
            ctxchch.lineTo(75 - 50 * lineProgresschch, 100 + 50 * lineProgresschch);
            ctxchch.stroke();
        }

        // Заливка 1 правой наклонной линии
        if (filledStageschch[3] || stagechch === 4) {
            const lineProgresschch = filledStageschch[3] ? 1 : Math.min(progresschch, 1);
            ctxchch.beginPath();
            ctxchch.moveTo(75, 100);
            ctxchch.lineTo(75 + 50 * lineProgresschch, 100 + 50 * lineProgresschch);
            ctxchch.stroke();
        }

        // Заливка 2 горизонтальной линии
        if (filledStageschch[4] || stagechch === 5) {
            const lineProgresschch = filledStageschch[4] ? 1 : Math.min(progresschch, 1);
            ctxchch.beginPath();
            ctxchch.moveTo(95, 50);
            ctxchch.lineTo(95 + 70 * lineProgresschch, 50);
            ctxchch.stroke();
        }

        // Заливка 2 вертикальной линии
        if (filledStageschch[5] || stagechch === 6) {
            const lineProgresschch = filledStageschch[5] ? 1 : Math.min(progresschch, 1);
            ctxchch.beginPath();
            ctxchch.moveTo(125, 50);
            ctxchch.lineTo(125, 50 + 50 * lineProgresschch);
            ctxchch.stroke();
        }

        // Заливка 2 левой наклонной линии
        if (filledStageschch[6] || stagechch === 7) {
            const lineProgresschch = filledStageschch[6] ? 1 : Math.min(progresschch, 1);
            ctxchch.beginPath();
            ctxchch.moveTo(125, 100);
            ctxchch.lineTo(125 - 50 * lineProgresschch, 100 + 50 * lineProgresschch);
            ctxchch.stroke();
        }

        // Заливка 2 правой наклонной линии
        if (filledStageschch[7] || stagechch === 8) {
            const lineProgresschch = filledStageschch[7] ? 1 : Math.min(progresschch, 1);
            ctxchch.beginPath();
            ctxchch.moveTo(125, 100);
            ctxchch.lineTo(125 + 50 * lineProgresschch, 100 + 50 * lineProgresschch);
            ctxchch.stroke();
        }
    }

    function animateFillchch() {
        progresschch += speedchch;

        if (progresschch >= 1) {
            filledStageschch[stagechch - 1] = true;
            progresschch = 0;
            stagechch++;
            if (stagechch > totalStageschch) return;
        }

        drawSymbolchch(progresschch);
        requestAnimationFrame(animateFillchch);
    }

    chch.addEventListener('mouseenter', () => {
        if (!filledStageschch.includes(false)) return;
        progresschch = 0;
        stagechch = 1;
        animateFillchch();
         // poyasnenie.innerHTML='e´это типа e'; 
    });

    drawSymbolchch(progresschch);
