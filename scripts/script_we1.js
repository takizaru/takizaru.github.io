
    const canvaswe1 = document.getElementById('canvas');
    const ctxwe1 = canvaswe1.getContext('2d');
    let we1 = document.querySelector('.we1');
    let progresswe1 = 0;
    let stagewe1 = 1;
    const speedwe1 = 0.01;
    const totalStageswe1 = 5;
    let filledStageswe1 = [false, false, false, false, false];

    function drawSymbolwe1(progresswe1) {
        ctxwe1.clearRect(0, 0, canvaswe1.width, canvaswe1.height);

        ctxwe1.fillStyle = "#ccc";
        // Контур символа
        ctxwe1.fillRect(40, 100, 80, 20); // 1 палка (горизонтальная, выше центра)
        ctxwe1.fillRect(70, 60, 20, 40); // 2 палка (вертикальная, от центра первой палки)
        ctxwe1.fillRect(120, 70, 40, 20); // 3 палка (горизонтальная, короткая, от центра)
        ctxwe1.fillRect(110, 30, 20, 120); // 4 палка (вертикальная, справа)
        ctxwe1.fillRect(140, 30, 20, 120); // 5 палка (вертикальная, справа от четвертой палки)

        ctxwe1.fillStyle = "#05414E";

        // 1 палка - вертикальная (от центра первой палки)
        if (filledStageswe1[0] || stagewe1 === 1) {
            const lineProgresswe1 = filledStageswe1[0] ? 1 : Math.min(progresswe1, 1);
            ctxwe1.fillRect(70, 60, 20, 40 * lineProgresswe1);
        }

        // 2 палка - горизонтальная (выше центра)
        if (filledStageswe1[1] || stagewe1 === 2) {
            const lineProgresswe1 = filledStageswe1[1] ? 1 : Math.min(progresswe1, 1);
            ctxwe1.fillRect(40, 100, 80 * lineProgresswe1, 20);
        }

        // 3 палка - вертикальная (справа)
        if (filledStageswe1[2] || stagewe1 === 3) {
            const lineProgresswe1 = filledStageswe1[2] ? 1 : Math.min(progresswe1, 1);
            ctxwe1.fillRect(110, 30, 20, 120 * lineProgresswe1);
        }

        // 4 палка - горизонтальная (короткая, от центра)
        if (filledStageswe1[3] || stagewe1 === 4) {
            const lineProgresswe1 = filledStageswe1[3] ? 1 : Math.min(progresswe1, 1);
            ctxwe1.fillRect(120, 70, 40 * lineProgresswe1, 20);
        }

        // 5 палка - вертикальная (последняя, справа от четвертой палки)
        if (filledStageswe1[4] || stagewe1 === 5) {
            const lineProgresswe1 = filledStageswe1[4] ? 1 : Math.min(progresswe1, 1);
            ctxwe1.fillRect(140, 30, 20, 120 * lineProgresswe1);
        }
    }

    function animateFillwe1() {
        progresswe1 += speedwe1;

        if (progresswe1 >= 1) {
            filledStageswe1[stagewe1 - 1] = true;
            progresswe1 = 0;
            stagewe1++;
            if (stagewe1 > totalStageswe1) return;
        }

        drawSymbolwe1(progresswe1);
        requestAnimationFrame(animateFillwe1);
    }

    we1.addEventListener('mouseenter', () => {
        if (!filledStageswe1.includes(false)) return;
        progresswe1 = 0;
        stagewe1 = 1;
        animateFillwe1();
    });

    drawSymbolwe1(progresswe1);
