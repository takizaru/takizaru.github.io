const canvast = document.getElementById('canvas');
const ctxt = canvast.getContext('2d');
let t = document.querySelector('.t');
let progresst = 0;
let staget = 1;
const speedt = 0.01;
const totalStagest = 3;
let filledStagest = [false, false, false];

function drawSymbolt(progresst) {
    ctxt.clearRect(0, 0, canvast.width, canvast.height);

    ctxt.fillStyle = "#ccc";
    // Контур символа
   
   
    ctxt.fillRect(50, 50, 100, 20); //  линия gor
    ctxt.fillRect(50, 50, 20, 100);  //  линия vert
    ctxt.fillRect(50, 130, 100, 20); //  линия gor

    ctxt.fillStyle = "#05414E";

  
 // горизонтальная линия
 if (filledStagest[0] || staget === 1) {
    const lineProgresst = filledStagest[0] ? 1 : Math.min(progresst, 1);
    ctxt.fillRect(50, 50, 100 * lineProgresst, 20);
}
    //  вертикальная линия
    if (filledStagest[1] || staget === 2) {
        const lineProgresst = filledStagest[1] ? 1 : Math.min(progresst, 1);
        ctxt.fillRect(50, 50, 20, 100 * lineProgresst);
    }

    // горизонтальная линия
if (filledStagest[2] || staget === 3) {
    const lineProgresst = filledStagest[2] ? 1 : Math.min(progresst, 1);
    ctxt.fillRect(50, 130, 100 * lineProgresst, 20);
}

   
}

function animateFillt() {
    progresst += speedt;

    if (progresst >= 1) {
        filledStagest[staget - 1] = true;
        progresst = 0;
        staget++;
        if (staget > totalStagest) return;
    }

    drawSymbolt(progresst);
    requestAnimationFrame(animateFillt);
}

t.addEventListener('mouseenter', () => {
    if (!filledStagest.includes(false)) return;
    progresst = 0;
    staget = 1;
    animateFillt();

    
    
        poyasnenie.innerHTML='аналогичен русскому т';
});

drawSymbolt(progresst);



