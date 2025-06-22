
    const canvasjee = document.getElementById('canvas');
    const ctxjee = canvasjee.getContext('2d');
    let jee = document.querySelector('.jee');
    let progressjee = 0;
    let stagejee = 1;
    const speedjee = 0.01;
    const totalStagesjee = 4;
    let filledStagesjee = [false, false, false, false];

    function drawSymboljee(progressjee) {
        ctxjee.clearRect(0, 0, canvasjee.width, canvasjee.height);

        ctxjee.fillStyle = "#ccc";
        // Контур символа
        ctxjee.fillRect(60, 70, 40, 20); // Верхняя горизонтальная линия (выше центра)
        ctxjee.fillRect(60, 110, 40, 20); // Нижняя горизонтальная линия (ниже центра)
        ctxjee.fillRect(90, 45, 20, 110); // Первая вертикальная линия (после горизонтальных линий)
        ctxjee.fillRect(120, 40, 20, 120); // Вторая вертикальная линия (после первой вертикальной линии)

        ctxjee.fillStyle = "#05414E";

        // Верхняя горизонтальная линия
        if (filledStagesjee[0] || stagejee === 1) {
            const lineProgressjee = filledStagesjee[0] ? 1 : Math.min(progressjee, 1);
            ctxjee.fillRect(60, 70, 40 * lineProgressjee, 20);
        }

        // Нижняя горизонтальная линия
        if (filledStagesjee[1] || stagejee === 2) {
            const lineProgressjee = filledStagesjee[1] ? 1 : Math.min(progressjee, 1);
            ctxjee.fillRect(60, 110, 40 * lineProgressjee, 20);
        }

        // Первая вертикальная линия
        if (filledStagesjee[2] || stagejee === 3) {
            const lineProgressjee = filledStagesjee[2] ? 1 : Math.min(progressjee, 1);
            ctxjee.fillRect(90, 45, 20, 110 * lineProgressjee);
        }

        // Вторая вертикальная линия
        if (filledStagesjee[3] || stagejee === 4) {
            const lineProgressjee = filledStagesjee[3] ? 1 : Math.min(progressjee, 1);
            ctxjee.fillRect(120, 40, 20, 120 * lineProgressjee);
        }
    }

    function animateFilljee() {
        progressjee += speedjee;

        if (progressjee >= 1) {
            filledStagesjee[stagejee - 1] = true;
            progressjee = 0;
            stagejee++;
            if (stagejee > totalStagesjee) return;
        }

        drawSymboljee(progressjee);
        requestAnimationFrame(animateFilljee);
    }

    jee.addEventListener('mouseenter', () => {
        if (!filledStagesjee.includes(false)) return;
        progressjee = 0;
        stagejee = 1;
        animateFilljee();

        // poyasnenie.innerHTML='аналогичен русскому а';
    });

    drawSymboljee(progressjee);

