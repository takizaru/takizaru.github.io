
    const canvaswe2 = document.getElementById('canvas');
    const ctxwe2 = canvaswe2.getContext('2d');

    let we2 = document.querySelector('.we2');

    let progresswe2 = 0;
    let stagewe2 = 1;
    const speedwe2 = 0.01;
    const totalStageswe2 = 5;
    let filledStageswe2 = [false, false, false, false, false];

    function drawSymbolwe2(progresswe2) {
        ctxwe2.clearRect(0, 0, canvaswe2.width, canvaswe2.height);

        ctxwe2.fillStyle = "#ccc";
        // Контур символа
        ctxwe2.fillRect(40, 70, 80, 20); // 1 палка (горизонтальная, выше центра)
        ctxwe2.fillRect(70, 80, 20, 60); // 2 палка (вертикальная, от центра первой палки)
        ctxwe2.fillRect(100, 100, 30, 20); // 3 палка (горизонтальная, короткая, от центра)
        ctxwe2.fillRect(130, 30, 20, 120); // 4 палка (вертикальная, справа)
        ctxwe2.fillRect(160, 30, 20, 120); // 5 палка (вертикальная, справа, с небольшим отступом)

        ctxwe2.fillStyle = "#05414E";

        // 1 палка - горизонтальная (выше центра)
        if (filledStageswe2[0] || stagewe2 === 1) {
            const lineProgresswe2 = filledStageswe2[0] ? 1 : Math.min(progresswe2, 1);
            ctxwe2.fillRect(40, 70, 80 * lineProgresswe2, 20);
        }

        // 2 палка - вертикальная (от центра первой палки)
        if (filledStageswe2[1] || stagewe2 === 2) {
            const lineProgresswe2 = filledStageswe2[1] ? 1 : Math.min(progresswe2, 1);
            ctxwe2.fillRect(70, 80, 20, 60 * lineProgresswe2);
        }

        // 3 палка - горизонтальная (короткая, от центра)
        if (filledStageswe2[2] || stagewe2 === 3) {
            const lineProgresswe2 = filledStageswe2[2] ? 1 : Math.min(progresswe2, 1);
            ctxwe2.fillRect(100, 100, 30 * lineProgresswe2, 20);
        }

        // 4 палка - вертикальная (справа)
        if (filledStageswe2[3] || stagewe2 === 4) {
            const lineProgresswe2 = filledStageswe2[3] ? 1 : Math.min(progresswe2, 1);
            ctxwe2.fillRect(130, 30, 20, 120 * lineProgresswe2);
        }

        // 5 палка - вертикальная (справа, с небольшим отступом)
        if (filledStageswe2[4] || stagewe2 === 5) {
            const lineProgresswe2 = filledStageswe2[4] ? 1 : Math.min(progresswe2, 1);
            ctxwe2.fillRect(160, 30, 20, 120 * lineProgresswe2);
        }
    }

    function animateFillwe2() {
        progresswe2 += speedwe2;

        if (progresswe2 >= 1) {
            filledStageswe2[stagewe2 - 1] = true;
            progresswe2 = 0;
            stagewe2++;
            if (stagewe2 > totalStageswe2) return;
        }

        drawSymbolwe2(progresswe2);
        requestAnimationFrame(animateFillwe2);
    }

    we2.addEventListener('mouseenter', () => {
        if (!filledStageswe2.includes(false)) return;
        progresswe2 = 0;
        stagewe2 = 1;
        animateFillwe2();
    });

    drawSymbolwe2(progresswe2);
