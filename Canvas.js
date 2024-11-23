const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas to fill the screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw a background for the game
    const background = new Image();
    background.src = "images/Black-Jack-Table.png"; // Use your image path
    background.onload = () => {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    };
}

// Resize canvas on load and window resize
window.addEventListener("resize", resizeCanvas);
resizeCanvas();


