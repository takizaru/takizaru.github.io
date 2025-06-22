


const canvaswee = document.getElementById('canvas');
const ctxwee = canvaswee.getContext('2d');

let wee = document.querySelector('.wee');

let progresswee = 0;
let stagewee = 1;
const speedwee = 0.01;
const totalStageswee = 3;
let filledStageswee = [false, false, false];

function drawSymbolwee(progresswee) {
    ctxwee.clearRect(0, 0, canvaswee.width, canvaswee.height);

    ctxwee.fillStyle = "#ccc";
    // Контур символа
   
   



    ctxwee.fillRect(70, 70, 20, 60); // 1 vertical линия
    ctxwee.fillRect(30, 110, 100, 20);  // 1 goriz линия


    
   

    ctxwee.fillRect(140, 30, 20, 140); // 2 vertical линия

    ctxwee.fillStyle = "#05414E";


     // 1 вертикальная линия
     if (filledStageswee[0] || stagewee === 1) {
        const lineProgresswee = filledStageswee[0] ? 1 : Math.min(progresswee, 1);
        ctxwee.fillRect(70, 70, 20, 60 * lineProgresswee);
    }
     // 1 горизонтальная линия
     if (filledStageswee[1] || stagewee === 2) {
        const lineProgresswee = filledStageswee[1] ? 1 : Math.min(progresswee, 1);
        ctxwee.fillRect(30, 110, 100 * lineProgresswee, 20);
    }

   
   
 
   
    // 2   вертикальная линия
    if (filledStageswee[2] || stagewee === 3) {
        const lineProgresswee = filledStageswee[2] ? 1 : Math.min(progresswee, 1);
        ctxwee.fillRect(140, 30, 20, 140 * lineProgresswee);
    }

  
}

function animateFillwee() {
    progresswee += speedwee;

    if (progresswee >= 1) {
        filledStageswee[stagewee - 1] = true;
        progresswee = 0;
        stagewee++;
        if (stagewee > totalStageswee) return;
    }

    drawSymbolwee(progresswee);
    requestAnimationFrame(animateFillwee);
}

wee.addEventListener('mouseenter', () => {
    if (!filledStageswee.includes(false)) return;
    progresswee = 0;
    stagewee = 1;
    animateFillwee();

    // poyasnenie

    
    // poyasnenie.innerHTML='wee´это типа wee ';
});

drawSymbolwee(progresswee);


