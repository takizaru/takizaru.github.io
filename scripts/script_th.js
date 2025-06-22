
        const canvasth = document.getElementById('canvas');
        const ctxth = canvasth.getContext('2d');
        let th = document.querySelector('.th');
        let progressth = 0;
        let stageth = 1;
        const speedth = 0.01; // Скорость анимации
        const totalStagesth = 4; // Четыре линии
        let filledStagesth = [false, false, false, false]; // Состояние линий

        function drawSymbolth(progressth) {
            ctxth.clearRect(0, 0, canvasth.width, canvasth.height);

            ctxth.fillStyle = "#ccc";
            // Контур символа
            ctxth.fillRect(50, 50, 100, 20); // Верхняя линия
            ctxth.fillRect(50, 50, 20, 100); // Вертикальная линия
            ctxth.fillRect(50, 90, 100, 20); // Центральная линия
            ctxth.fillRect(50, 130, 100, 20); // Нижняя линия

            ctxth.fillStyle = "#05414E";

            // Верхняя горизонтальная линия
            if (filledStagesth[0] || stageth === 1) {
                const lineProgressth = filledStagesth[0] ? 1 : Math.min(progressth, 1);
                ctxth.fillRect(50, 50, 100 * lineProgressth, 20);
            }
   // Центральная горизонтальная линия
   if (filledStagesth[1] || stageth === 2) {
                const lineProgressth = filledStagesth[1] ? 1 : Math.min(progressth, 1);
                ctxth.fillRect(50, 90, 100 * lineProgressth, 20);
            }

            // Вертикальная линия
            if (filledStagesth[2] || stageth === 3) {
                const lineProgressth = filledStagesth[2] ? 1 : Math.min(progressth, 1);
                ctxth.fillRect(50, 50, 20, 100 * lineProgressth);
            }
            // Нижняя горизонтальная линия
            if (filledStagesth[3] || stageth === 4) {
                const lineProgressth = filledStagesth[3] ? 1 : Math.min(progressth, 1);
                ctxth.fillRect(50, 130, 100 * lineProgressth, 20);
            }
         

        }

        function animateFillth() {
            progressth += speedth;

            if (progressth >= 1) {
                filledStagesth[stageth - 1] = true;
                progressth = 0;
                stageth++;
                if (stageth > totalStagesth) return; // Завершение анимации
            }

            drawSymbolth(progressth);
            requestAnimationFrame(animateFillth);
        }

        th.addEventListener('mouseenter', () => {
            if (!filledStagesth.includes(false)) return; // Если всё уже залито, не анимируем
            progressth = 0;
            stageth = 1;
            animateFillth();

            // poyasnenie.innerHTML='аналогичен русскому а';
        });

        drawSymbolth(progressth);
 