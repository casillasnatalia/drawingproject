var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

// watering can //

canvas.fillStyle = "brown"
canvas.fillRect(400, 430, 200, 200);
canvas.beginPath();

canvas.moveTo(200,200);
canvas.lineTo(400,555);
canvas.lineTo(400,515);
canvas.fill();

//sun//

canvas.beginPath();
canvas.arc(1000, 100, 50, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "yellow";
canvas.fill();
canvas.stroke();

//small cloud//

canvas.beginPath();
canvas.arc(900, 75, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(875, 75, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(840, 75, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(805, 75, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(900, 99, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(875, 99, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(840, 99, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(805, 99, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

//big cloud//

canvas.beginPath();
canvas.arc(590, 75, 30, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(560, 75, 30, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(530, 75, 30, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(500, 75, 30, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(590, 99, 30, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(560, 99, 30, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(530, 99, 30, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(500, 99, 30, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

// small cloud again//

canvas.beginPath();
canvas.arc(100, 75, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(130, 75, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(160, 75, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(190, 75, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(100, 99, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(130, 99, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(160, 99, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(190, 99, 20, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "blue";
canvas.fill();
canvas.stroke();
