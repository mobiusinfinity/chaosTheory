
function drawLine() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	// ctx.moveTo(0,0);
	// ctx.lineTo(200,200);
	// ctx.stroke();


	ctx.beginPath();
	ctx.arc(400-2.5,50,5,0,2*Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(100-2.5,750,5,0,2*Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(700-2.5,750,5,0,2*Math.PI);
	ctx.stroke();
}