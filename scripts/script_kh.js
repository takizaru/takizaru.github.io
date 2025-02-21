
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let kh = document.querySelector('.kh');
    let progress = 0;
    let stage = 1;
    const speed = 0.01;
    const totalStages = 3;
    let filledStages = [false, false, false];

    function drawSymbol(progress) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ccc";
        // Контур символа
        ctx.fillRect(50, 50, 100, 20); // Верхняя горизонтальная линия
        ctx.fillRect(50, 90, 100, 20); // Центральная горизонтальная линия
        ctx.fillRect(130, 50, 20, 100); // Вертикальная линия

        ctx.fillStyle = "#05414E";

        // Верхняя горизонтальная линия
        if (filledStages[0] || stage === 1) {
            const lineProgress = filledStages[0] ? 1 : Math.min(progress, 1);
            ctx.fillRect(50, 50, 100 * lineProgress, 20);
        }
 // Вертикальная линия
 if (filledStages[1] || stage === 2) {
            const lineProgress = filledStages[1] ? 1 : Math.min(progress, 1);
            ctx.fillRect(130, 50, 20, 100 * lineProgress);
        }
        // Центральная горизонтальная линия
        if (filledStages[2] || stage === 3) {
            const lineProgress = filledStages[2] ? 1 : Math.min(progress, 1);
            ctx.fillRect(50, 90, 100 * lineProgress, 20);
        }

       
    }

    function animateFill() {
        progress += speed;

        if (progress >= 1) {
            filledStages[stage - 1] = true;
            progress = 0;
            stage++;
            if (stage > totalStages) return;
        }

        drawSymbol(progress);
        requestAnimationFrame(animateFill);
    }

    kh.addEventListener('mouseenter', () => {
        if (!filledStages.includes(false)) return;
        progress = 0;
        stage = 1;
        animateFill();

        // poyasnenie.innerHTML='аналогичен русскому а';
    });

    drawSymbol(progress);
