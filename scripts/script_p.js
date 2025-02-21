
    let p=document.querySelector('.p');
    const canvasp = document.getElementById('canvas');
        const ctxp = canvasp.getContext('2d');

        let progressp = 0;
        let stagep = 1;
        const speedp = 0.01;
        const totalStagesp = 4;
        let filledStagesp = [false, false, false, false];

        function drawSymbolp(progressp) {
            ctxp.clearRect(0, 0, canvasp.width, canvasp.height);

            ctxp.fillStyle = "#ccc";
            // Контур символа
            ctxp.fillRect(50, 50, 20, 100); // Левая линия
            ctxp.fillRect(130, 50, 20, 100); // Правая линия
            ctxp.fillRect(50, 90, 100, 20);  // Средняя линия
            ctxp.fillRect(50, 130, 100, 20); // Нижняя линия

            ctxp.fillStyle = "#05414E";

            // Левая вертикальная линия
            if (filledStagesp[0] || stagep === 1) {
                const lineProgressp = filledStagesp[0] ? 1 : Math.min(progressp, 1);
                ctxp.fillRect(50, 50, 20, 100 * lineProgressp);
            }

            // Правая вертикальная линия
            if (filledStagesp[1] || stagep === 2) {
                const lineProgressp = filledStagesp[1] ? 1 : Math.min(progressp, 1);
                ctxp.fillRect(130, 50, 20, 100 * lineProgressp);
            }

            // Средняя горизонтальная линия
            if (filledStagesp[2] || stagep === 3) {
                const lineProgressp = filledStagesp[2] ? 1 : Math.min(progressp, 1);
                ctxp.fillRect(50, 90, 100 * lineProgressp, 20);
            }

            // Нижняя горизонтальная линия
            if (filledStagesp[3] || stagep === 4) {
                const lineProgressp = filledStagesp[3] ? 1 : Math.min(progressp, 1);
                ctxp.fillRect(50, 130, 100 * lineProgressp, 20);
            }
        }

        function animateFillp() {
            progressp += speedp;

            if (progressp >= 1) {
                filledStagesp[stagep - 1] = true;
                progressp = 0;
                stagep++;
                if (stagep > totalStagesp) return;
            }

            drawSymbolp(progressp);
            requestAnimationFrame(animateFillp);
        }

        p.addEventListener('mouseenter', () => {
            if (!filledStagesp.includes(false)) return;
            progressp = 0;
            stagep = 1;
            animateFillp();


            poyasnenie.innerHTML='аналогичен русскому п, без работы голосовых связок';
        });

        drawSymbolp(progressp);

    //     // События для Canvas
    // p.addEventListener('mouseenter', () => {
    //     cancelAnimationFrame(animationFramep); // Останавливаем текущую анимацию, если она идет
    //     animateFillp();   
       
    // });

    // Первоначальный вызов для отрисовки буквы
    // drawLetter(horizontalProgress, verticalProgress);
    // });