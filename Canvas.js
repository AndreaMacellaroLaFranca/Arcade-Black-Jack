const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const background = new Image();
    background.src = "images/Black-Jack-Table.png"; 
    background.onload = () => {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    };
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();