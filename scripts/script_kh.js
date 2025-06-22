
    const canvaskh = document.getElementById('canvas');
    const ctxkh = canvaskh.getContext('2d');
    let kh = document.querySelector('.kh');
    let progresskh = 0;
    let stagekh = 1;
    const speedkh = 0.01;
    const totalStageskh = 3;
    let filledStageskh = [false, false, false];

    function drawSymbolkh(progresskh) {
        ctxkh.clearRect(0, 0, canvaskh.width, canvaskh.height);

        ctxkh.fillStyle = "#ccc";
        // Контур символа
        ctxkh.fillRect(50, 50, 100, 20); // Верхняя горизонтальная линия
        ctxkh.fillRect(50, 90, 100, 20); // Центральная горизонтальная линия
        ctxkh.fillRect(130, 50, 20, 100); // Вертикальная линия

        ctxkh.fillStyle = "#05414E";

        // Верхняя горизонтальная линия
        if (filledStageskh[0] || stagekh === 1) {
            const lineProgresskh = filledStageskh[0] ? 1 : Math.min(progresskh, 1);
            ctxkh.fillRect(50, 50, 100 * lineProgresskh, 20);
        }
 // Вертикальная линия
 if (filledStageskh[1] || stagekh === 2) {
            const lineProgresskh = filledStageskh[1] ? 1 : Math.min(progresskh, 1);
            ctxkh.fillRect(130, 50, 20, 100 * lineProgresskh);
        }
        // Центральная горизонтальная линия
        if (filledStageskh[2] || stagekh === 3) {
            const lineProgresskh = filledStageskh[2] ? 1 : Math.min(progresskh, 1);
            ctxkh.fillRect(50, 90, 100 * lineProgresskh, 20);
        }

       
    }

    function animateFillkh() {
        progresskh += speedkh;

        if (progresskh >= 1) {
            filledStageskh[stagekh - 1] = true;
            progresskh = 0;
            stagekh++;
            if (stagekh > totalStageskh) return;
        }

        drawSymbolkh(progresskh);
        requestAnimationFrame(animateFillkh);
    }

    kh.addEventListener('mouseenter', () => {
        if (!filledStageskh.includes(false)) return;
        progresskh = 0;
        stagekh = 1;
        animateFillkh();

        // poyasnenie.innerHTML='аналогичен русскому а';
    });

    drawSymbolkh(progresskh);
