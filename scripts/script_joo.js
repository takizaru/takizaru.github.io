
    const canvasjoo = document.getElementById('canvas');
    const ctxjoo = canvasjoo.getContext('2d');
    let joo = document.querySelector('.joo');

    let progressjoo = 0;
    let stagejoo = 1;
    const speedjoo = 0.01;
    const totalStagesjoo = 3;
    let filledStagesjoo = [false, false, false];

    function drawSymboljoo(progressjoo) {
        ctxjoo.clearRect(0, 0, canvasjoo.width, canvasjoo.height);

        ctxjoo.fillStyle = "#ccc";
        // Контур символа
        
        ctxjoo.fillRect(70, 70, 20, 40); //   1 vniz линия


        ctxjoo.fillRect(110, 70, 20, 40); //   2 vniz линия

        ctxjoo.fillRect(40, 90, 120, 20);  // gorizont линия
        
        
          
        // zalivka bukvi
       
        ctxjoo.fillStyle = "#05414E";



         //  1 вертикальная линия
         if (filledStagesjoo[0] || stagejoo === 1) {
          const lineProgressjoo = filledStagesjoo[0] ? 1 : Math.min(progressjoo, 1);
          ctxjoo.fillRect(70, 70, 20, 40 * lineProgressjoo);
                }

                //  2 вертикальная линия
        if (filledStagesjoo[1] || stagejoo === 2) {
          const lineProgressjoo = filledStagesjoo[1] ? 1 : Math.min(progressjoo, 1);
          ctxjoo.fillRect(110, 70, 20, 40 * lineProgressjoo);
                }
       //  горизонтальная линия
                if (filledStagesjoo[2] || stagejoo === 3) {
                    const lineProgressjoo = filledStagesjoo[2] ? 1 : Math.min(progressjoo, 1);
                    ctxjoo.fillRect(40, 90, 120 * lineProgressjoo, 20);
                }

        

            }
         

    function animateFilljoo() {
        progressjoo += speedjoo;

        if (progressjoo >= 1) {
            filledStagesjoo[stagejoo - 1] = true;
            progressjoo = 0;
            stagejoo++;
            if (stagejoo > totalStagesjoo) return;
        }

        drawSymboljoo(progressjoo);
        requestAnimationFrame(animateFilljoo);
    }

    joo.addEventListener('mouseenter', () => {
        if (!filledStagesjoo.includes(false)) return;
        progressjoo = 0;
        stagejoo = 1;
        animateFilljoo();



        // poyasnenie.innerHTML=' joo´это типа joo';
    });

    drawSymboljoo(progressjoo);
