
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let pp = document.querySelector('.pp');
    let progress = 0;
    let stage = 1;
    const speed = 0.01;
    const totalStages = 8; // Восемь этапов для буквы ㅃ (два символа ㅂ)
    let filledStages = [false, false, false, false, false, false, false, false];

    // Центрирование буквы ㅃ
    const symbolWidth = 120; // Ширина двух символов ㅂ
    const symbolHeight = 100; // Высота символов
    const startX = (canvas.width - symbolWidth) / 2; // Начальная координата X для центрирования
    const startY = (canvas.height - symbolHeight) / 2; // Начальная координата Y для центрирования

    function drawSymbol(progress) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ccc";
        // Контур первого символа ㅂ
        ctx.fillRect(startX - 20, startY, 20, symbolHeight); // Левая линия
        ctx.fillRect(startX + 35, startY, 20, symbolHeight); // Правая линия
        ctx.fillRect(startX, startY + 40, 50, 20);  // Средняя линия
        ctx.fillRect(startX, startY + 80, 50, 20); // Нижняя линия

        // Контур второго символа ㅂ (смещен вправо)
        ctx.fillRect(startX + 65, startY, 20, symbolHeight); // Левая линия
        ctx.fillRect(startX + 120, startY, 20, symbolHeight); // Правая линия
        ctx.fillRect(startX + 80, startY + 40, 60, 20); // Средняя линия
        ctx.fillRect(startX + 80, startY + 80, 60, 20); // Нижняя линия

        ctx.fillStyle = "#05414E";

        // Первый символ ㅂ
        // Левая вертикальная линия
        if (filledStages[0] || stage === 1) {
            const lineProgress = filledStages[0] ? 1 : Math.min(progress, 1);
            ctx.fillRect(startX - 20, startY, 20, symbolHeight * lineProgress);
        }

        // Правая вертикальная линия
        if (filledStages[1] || stage === 2) {
            const lineProgress = filledStages[1] ? 1 : Math.min(progress, 1);
            ctx.fillRect(startX + 35, startY, 20, symbolHeight * lineProgress);
        }

        // Средняя горизонтальная линия
        if (filledStages[2] || stage === 3) {
            const lineProgress = filledStages[2] ? 1 : Math.min(progress, 1);
            ctx.fillRect(startX, startY + 40, 50 * lineProgress, 20);
        }

        // Нижняя горизонтальная линия
        if (filledStages[3] || stage === 4) {
            const lineProgress = filledStages[3] ? 1 : Math.min(progress, 1);
            ctx.fillRect(startX, startY + 80, 50 * lineProgress, 20);
        }

        // Второй символ ㅂ
        // Левая вертикальная линия
        if (filledStages[4] || stage === 5) {
            const lineProgress = filledStages[4] ? 1 : Math.min(progress, 1);
            ctx.fillRect(startX + 65, startY, 20, symbolHeight * lineProgress);
        }

        // Правая вертикальная линия
        if (filledStages[5] || stage === 6) {
            const lineProgress = filledStages[5] ? 1 : Math.min(progress, 1);
            ctx.fillRect(startX + 120, startY, 20, symbolHeight * lineProgress);
        }

        // Средняя горизонтальная линия
        if (filledStages[6] || stage === 7) {
            const lineProgress = filledStages[6] ? 1 : Math.min(progress, 1);
            ctx.fillRect(startX + 80, startY + 40, 60 * lineProgress, 20);
        }

        // Нижняя горизонтальная линия
        if (filledStages[7] || stage === 8) {
            const lineProgress = filledStages[7] ? 1 : Math.min(progress, 1);
            ctx.fillRect(startX + 80, startY + 80, 60 * lineProgress, 20);
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

    pp.addEventListener('mouseenter', () => {
        if (!filledStages.includes(false)) return;
        progress = 0;
        stage = 1;
        animateFill();
            
    // poyasnenie.innerHTML='o´это типа ';
    });

    drawSymbol(progress);
