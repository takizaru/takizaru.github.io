const canvaswi = document.getElementById('canvas');
    const ctxwi = canvaswi.getContext('2d');


    let wi = document.querySelector('.wi');


    const poyasneniewi = document.getElementById('poyasnenie'); // Элемент для пояснения
 
    let progresswi = 0;
    let stagewi = 1;
    const speedwi = 0.01;
    const totalStageswi = 3; // Три линии для символа ㅟ
    let filledStageswi = [false, false, false];

    function drawSymbolwi(progresswi) {
        ctxwi.clearRect(0, 0, canvaswi.width, canvaswi.height);

        ctxwi.fillStyle = "#ccc";
        // Контур символа ㅟ
        ctxwi.fillRect(30, 80, 105, 20);  // Горизонтальная линия
        ctxwi.fillRect(75, 80, 20, 80);   // Вертикальная линия (короткая)
        ctxwi.fillRect(140, 30, 20, 140); // Вертикальная линия (длинная)

        ctxwi.fillStyle = "#05414E";

        // Горизонтальная линия
        if (filledStageswi[0] || stagewi === 1) {
            const lineProgresswi = filledStageswi[0] ? 1 : Math.min(progresswi, 1);
            ctxwi.fillRect(30, 80, 105 * lineProgresswi, 20);
        }

        // Вертикальная линия (короткая)
        if (filledStageswi[1] || stagewi === 2) {
            const lineProgresswi = filledStageswi[1] ? 1 : Math.min(progresswi, 1);
            ctxwi.fillRect(75, 80, 20, 80 * lineProgresswi);
        }

        // Вертикальная линия (длинная)
        if (filledStageswi[2] || stagewi === 3) {
            const lineProgresswi = filledStageswi[2] ? 1 : Math.min(progresswi, 1);
            ctxwi.fillRect(140, 30, 20, 140 * lineProgresswi);
        }
    }

    function animateFillwi() {
        progresswi += speedwi;

        if (progresswi >= 1) {
            filledStageswi[stagewi - 1] = true;
            progresswi = 0;
            stagewi++;
            if (stagewi > totalStageswi) return;
        }

        drawSymbolwi(progresswi);
        requestAnimationFrame(animateFillwi);
    }

    wi.addEventListener('mouseenter', () => {
        if (!filledStageswi.includes(false)) return;
        progresswi = 0;
        stagewi = 1;
        animateFillwi();

        // Добавляем пояснение
        // poyasneniewi.innerHTML = 'Это символ ㅟ (ви)';
    
    });

    drawSymbolwi(progresswi);