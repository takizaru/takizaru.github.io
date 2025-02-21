const canvasoo = document.getElementById('canvas');
const ctxoo = canvasoo.getContext('2d');
let oo=document.querySelector('.oo');

let progressoo = 0;
let stageoo = 1;
const speedoo = 0.01;
const totalStagesoo = 2;
let filledStagesoo = [false, false];

function drawSymboloo(progressoo) {
    ctxoo.clearRect(0, 0, canvasoo.width, canvasoo.height);

    ctxoo.fillStyle = "#ccc";
    // Контур символа
    
    ctxoo.fillRect(90, 70, 20, 40); // vverh линия
            ctxoo.fillRect(50, 90, 100, 20);  // Средняя линия
            
  
            
            // zalivka bukvi
        
            ctxoo.fillStyle = "#05414E";
              // вертикальная линия
                  if (filledStagesoo[0] || stageoo === 1) {
            const lineProgressoo = filledStagesoo[0] ? 1 : Math.min(progressoo, 1);
            ctxoo.fillRect(90, 70, 20, 40 * lineProgressoo);
                    }
        //  горизонтальная лини1
                    if (filledStagesoo[1] || stageoo === 2) {
                        const lineProgressoo = filledStagesoo[1] ? 1 : Math.min(progressoo, 1);
                        ctxoo.fillRect(50, 90, 100 * lineProgressoo, 20);
                    }

        

                }
     

function animateFilloo() {
    progressoo += speedoo;

    if (progressoo >= 1) {
        filledStagesoo[stageoo - 1] = true;
        progressoo = 0;
        stageoo++;
        if (stageoo > totalStagesoo) return;
    }

    drawSymboloo(progressoo);
    requestAnimationFrame(animateFilloo);
}

oo.addEventListener('mouseenter', () => {
    if (!filledStagesoo.includes(false)) return;
    progressoo = 0;
    stageoo = 1;
    animateFilloo();



    
    // poyasnenie.innerHTML='oo´это типа oo';
});

drawSymboloo(progressoo);