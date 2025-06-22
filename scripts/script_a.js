let a = document.querySelector('.a');

const canvasa = document.getElementById('canvas');
const ctxa = canvasa.getContext('2d');

let progressa = 0;
let stagea = 1;
const speeda = 0.01;
const totalStagesa = 2;
let filledStagesa = [false, false];

function drawSymbola(progressa) {
    ctxa.clearRect(0, 0, canvasa.width, canvasa.height);

    ctxa.fillStyle = "#ccc";
    // Контур символа
    ctxa.fillRect(90, 50, 20, 100); // vertical линия
   

    
    ctxa.fillRect(90, 90, 50, 20);  // goriz линия
    ctxa.fillStyle = "#05414E";

   
    //вертикальная линия
    if (filledStagesa[0] || stagea === 1) {
        const lineProgressa = filledStagesa[0] ? 1 : Math.min(progressa, 1);
        ctxa.fillRect(90, 50, 20, 100 * lineProgressa);
    }


    //  горизонтальная линия
    if (filledStagesa[1] || stagea === 2) {
        const lineProgressa = filledStagesa[1] ? 1 : Math.min(progressa, 1);
        ctxa.fillRect(90, 90, 50 * lineProgressa, 20);
    }

  
}

function animateFilla() {
    progressa += speeda;

    if (progressa >= 1) {
        filledStagesa[stagea - 1] = true;
        progressa = 0;
        stagea++;
        if (stagea > totalStagesa) return;
    }

    drawSymbola(progressa);
    requestAnimationFrame(animateFilla);
}

a.addEventListener('click', () => {
    if (!filledStagesa.includes(false)) return;
    progressa = 0;
    stagea = 1;
    animateFilla();


    poyasnenie.innerHTML='аналогичен русскому а';
});

drawSymbola(progressa);
