const canvaswa = document.getElementById('canvas');
    const ctxwa = canvaswa.getContext('2d');
    let progresswa = 0;
    let stagewa = 1;
    const speedwa = 0.01;
    const totalStageswa = 4;
    let filledStageswa = [false, false, false, false];

    function drawSymbolwa(progresswa) {
        ctxwa.clearRect(0, 0, canvaswa.width, canvaswa.height);

        ctxwa.fillStyle = "#ccc";
        // Контур символа
        ctxwa.fillRect(40, 100, 80, 20); // 1 палка (горизонтальная, выше центра)
        ctxwa.fillRect(70, 60, 20, 40); // 2 палка (вертикальная, от центра первой палки)
        ctxwa.fillRect(120, 70, 40, 20); // 3 палка (горизонтальная, короткая, от центра)
        ctxwa.fillRect(110, 30, 20, 120); // 4 палка (вертикальная, справа)

        ctxwa.fillStyle = "#05414E";
 // 1 палка - вертикальная (от центра первой палки)
 if (filledStageswa[0] || stagewa === 1) {
            const lineProgresswa = filledStageswa[0] ? 1 : Math.min(progresswa, 1);
            ctxwa.fillRect(70, 60, 20, 40 * lineProgresswa);
        }
        // 2 палка - горизонтальная (выше центра)
        if (filledStageswa[1] || stagewa === 2) {
            const lineProgresswa = filledStageswa[1] ? 1 : Math.min(progresswa, 1);
            ctxwa.fillRect(40, 100, 80 * lineProgresswa, 20);
        }

          // 3 палка - вертикальная (справа)
          if (filledStageswa[2] || stagewa === 3) {
            const lineProgresswa = filledStageswa[2] ? 1 : Math.min(progresswa, 1);
            ctxwa.fillRect(110, 30, 20, 120 * lineProgresswa);
        }

        // 4 палка - горизонтальная (короткая, от центра)
        if (filledStageswa[3] || stagewa === 4) {
            const lineProgresswa = filledStageswa[3] ? 1 : Math.min(progresswa, 1);
            ctxwa.fillRect(120, 70, 40 * lineProgresswa, 20);
        }

     
    }

    function animateFillwa() {
        progresswa += speedwa;

        if (progresswa >= 1) {
            filledStageswa[stagewa - 1] = true;
            progresswa = 0;
            stagewa++;
            if (stagewa > totalStageswa) return;
        }

        drawSymbolwa(progresswa);
        requestAnimationFrame(animateFillwa);
    }

    canvaswa.addEventListener('mouseenter', () => {
        if (!filledStageswa.includes(false)) return;
        progresswa = 0;
        stagewa = 1;
        animateFillwa();
    });

    drawSymbolwa(progresswa);

    