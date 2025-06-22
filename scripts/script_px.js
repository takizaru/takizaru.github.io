
    const canvasph = document.getElementById('canvas');
    const ctxph = canvasph.getContext('2d');
    let ph = document.querySelector('.ph');
    let progressph = 0;
    let stageph = 1;
    const speedph = 0.01; // Скорость анимации
    const totalStagesph = 4; // Четыре линии
    let filledStagesph = [false, false, false, false]; // Состояние линий

    function drawSymbolph(progressph) {
        ctxph.clearRect(0, 0, canvasph.width, canvasph.height);

        ctxph.fillStyle = "#ccc";
        // Контур символа
        ctxph.fillRect(50, 50, 100, 20); // Верхняя линия
        ctxph.fillRect(70, 50, 20, 100); // Левая вертикальная линия
        ctxph.fillRect(110, 50, 20, 100); // Правая вертикальная линия
        ctxph.fillRect(50, 130, 100, 20); // Нижняя линия

        ctxph.fillStyle = "#05414E";

        // Верхняя горизонтальная линия
        if (filledStagesph[0] || stageph === 1) {
            const lineProgressph = filledStagesph[0] ? 1 : Math.min(progressph, 1);
            ctxph.fillRect(50, 50, 100 * lineProgressph, 20);
        }

        // Левая вертикальная линия
        if (filledStagesph[1] || stageph === 2) {
            const lineProgressph = filledStagesph[1] ? 1 : Math.min(progressph, 1);
            ctxph.fillRect(70, 50, 20, 100 * lineProgressph);
        }

        // Правая вертикальная линия
        if (filledStagesph[2] || stageph === 3) {
            const lineProgressph = filledStagesph[2] ? 1 : Math.min(progressph, 1);
            ctxph.fillRect(110, 50, 20, 100 * lineProgressph);
        }

        // Нижняя горизонтальная линия
        if (filledStagesph[3] || stageph === 4) {
            const lineProgressph = filledStagesph[3] ? 1 : Math.min(progressph, 1);
            ctxph.fillRect(50, 130, 100 * lineProgressph, 20);
        }
    }

    function animateFillph() {
        progressph += speedph;

        if (progressph >= 1) {
            filledStagesph[stageph - 1] = true;
            progressph = 0;
            stageph++;
            if (stageph > totalStagesph) return; // Завершение анимации
        }

        drawSymbolph(progressph);
        requestAnimationFrame(animateFillph);
    }

    ph.addEventListener('mouseenter', () => {
        if (!filledStagesph.includes(false)) return; // Если всё уже залито, не анимируем
        progresph = 0;
        stageph = 1;
        animateFillph();

        // poyasnenie.innerHTML='аналогичен русскому а';
    });

    drawSymbolph(progressph);
