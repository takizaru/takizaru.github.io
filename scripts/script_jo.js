

    const canvasjo = document.getElementById('canvas');
    const ctxjo = canvasjo.getContext('2d');
    let jo = document.querySelector('.jo');
    let progressjo = 0;
    let stagejo = 1;
    const speedjo = 0.01;
    const totalStagesjo = 3;
    let filledStagesjo = [false, false, false];

    function drawSymboljo(progressjo) {
        ctxjo.clearRect(0, 0, canvasjo.width, canvasjo.height);

        ctxjo.fillStyle = "#ccc";
        // Контур символа
        ctxjo.fillRect(80, 70, 40, 20); // Верхняя горизонтальная линия (выше центра)
        ctxjo.fillRect(80, 110, 40, 20); // Нижняя горизонтальная линия (ниже центра)
        ctxjo.fillRect(100, 50, 20, 100); // Вертикальная линия (после горизонтальных линий)

        ctxjo.fillStyle = "#05414E";

        // Верхняя горизонтальная линия
        if (filledStagesjo[0] || stagejo === 1) {
            const lineProgressjo = filledStagesjo[0] ? 1 : Math.min(progressjo, 1);
            ctxjo.fillRect(80, 70, 40 * lineProgressjo, 20);
        }

        // Нижняя горизонтальная линия
        if (filledStagesjo[1] || stagejo === 2) {
            const lineProgressjo = filledStagesjo[1] ? 1 : Math.min(progressjo, 1);
            ctxjo.fillRect(80, 110, 40 * lineProgressjo, 20);
        }

        // Вертикальная линия
        if (filledStagesjo[2] || stagejo === 3) {
            const lineProgressjo = filledStagesjo[2] ? 1 : Math.min(progressjo, 1);
            ctxjo.fillRect(100, 50, 20, 100 * lineProgressjo);
        }
    }

    function animateFilljo() {
        progressjo += speedjo;

        if (progressjo >= 1) {
            filledStagesjo[stagejo - 1] = true;
            progressjo = 0;
            stagejo++;
            if (stagejo > totalStagesjo) return;
        }

        drawSymboljo(progressjo);
        requestAnimationFrame(animateFilljo);
    }

    jo.addEventListener('mouseenter', () => {
        if (!filledStagesjo.includes(false)) return;
        progressjo = 0;
        stagejo = 1;
        animateFilljo();

        // poyasnenie.innerHTML='аналогичен русскому а';
    });

    drawSymboljo(progressjo);
