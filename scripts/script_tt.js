
    const canvastt = document.getElementById('canvas');
    const ctxtt = canvastt.getContext('2d');
    let tt = document.querySelector('.tt');
    let progresstt = 0;
    let stagett = 1;
    const speedtt = 0.01; // Скорость анимации
    const totalStagestt = 6; // Шесть линий (по 3 на каждую букву)
    let filledStagestt = [false, false, false, false, false, false]; // Состояние линий

    function drawSymboltt(progresstt) {
        ctxtt.clearRect(0, 0, canvastt.width, canvastt.height);

        ctxtt.fillStyle = "#ccc";
        // Контур первой буквы ㄷ
        ctxtt.fillRect(30, 50, 65, 20); // Верхняя линия
        ctxtt.fillRect(30, 50, 20, 100); // Вертикальная линия
        ctxtt.fillRect(30, 130, 65, 20); // Нижняя линия

        // Контур второй буквы ㄷ (смещена вправо)
        ctxtt.fillRect(105, 50, 65, 20); // Верхняя линия
        ctxtt.fillRect(105, 50, 20, 100); // Вертикальная линия
        ctxtt.fillRect(105, 130, 65, 20); // Нижняя линия

        ctxtt.fillStyle = "#05414E";

        // Первая буква ㄷ
        // Верхняя горизонтальная линия
        if (filledStagestt[0] || stagett === 1) {
            const lineProgresstt = filledStagestt[0] ? 1 : Math.min(progresstt, 1);
            ctxtt.fillRect(30, 50, 65 * lineProgresstt, 20);
        }

        // Вертикальная линия
        if (filledStagestt[1] || stagett === 2) {
            const lineProgresstt = filledStagestt[1] ? 1 : Math.min(progresstt, 1);
            ctxtt.fillRect(30, 50, 20, 100 * lineProgresstt);
        }

        // Нижняя горизонтальная линия
        if (filledStagestt[2] || stagett === 3) {
            const lineProgresstt = filledStagestt[2] ? 1 : Math.min(progresstt, 1);
            ctxtt.fillRect(30, 130, 65 * lineProgresstt, 20);
        }

        // Вторая буква ㄷ
        // Верхняя горизонтальная линия
        if (filledStagestt[3] || stagett === 4) {
            const lineProgresstt = filledStagestt[3] ? 1 : Math.min(progresstt, 1);
            ctxtt.fillRect(105, 50, 65 * lineProgresstt, 20);
        }

        // Вертикальная линия
        if (filledStagestt[4] || stagett === 5) {
            const lineProgresstt = filledStagestt[4] ? 1 : Math.min(progresstt, 1);
            ctxtt.fillRect(105, 50, 20, 100 * lineProgresstt);
        }

        // Нижняя горизонтальная линия
        if (filledStagestt[5] || stagett === 6) {
            const lineProgresstt = filledStagestt[5] ? 1 : Math.min(progresstt, 1);
            ctxtt.fillRect(105, 130, 65 * lineProgresstt, 20);
        }
    }

    function animateFilltt() {
        progresstt += speedtt;

        if (progresstt >= 1) {
            filledStagestt[stagett - 1] = true;
            progresstt = 0;
            stagett++;
            if (stagett > totalStagestt) return; // Завершение анимации
        }

        drawSymboltt(progresstt);
        requestAnimationFrame(animateFilltt);
    }

    tt.addEventListener('mouseenter', () => {
        if (!filledStagestt.includes(false)) return; // Если всё уже залито, не анимируем
        progresstt = 0;
        stagett = 1;
        animateFilltt();

        // poyasnenie.innerHTML='o´это типа ';
    });

    drawSymboltt(progresstt);
