
function drawLine() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var x1 = 400-2.5;
	var y1 = 50;

	var x2 = 100-2.5;
	var y2 = 750;

	var x3 = 700-2.5;
	var y3 = 750;

	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;

	//var randNum = Math.floor(Math.random() * 3) + 1 ;

	// var x = 0.0;
	// var y = 0.0;


	// switch(randNum) {
 //    case 1:
 //        x = (randX + x1) / 2;
 //        y = (randY + y1) / 2;
 //        break;
 //    case 2:
 //    	 x = (randX + x2) / 2;
 //        y = (randY + y2) / 2;
 //        break;
 //    case 3:
 //    	 x = (randX + x3) / 2;
 //        y = (randY + y3) / 2;
 //   		break;
 //    default:
     
	// }


	ctx.beginPath();
	ctx.arc(x1,y1,5,0,2*Math.PI, false);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();


	ctx.beginPath();
	ctx.arc(x2,y2,5,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();

	ctx.beginPath();
	ctx.arc(x3,y3,5,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();

	// // random red dot
	// ctx.beginPath();
	// ctx.arc(randX,randY,5,0,2*Math.PI);
	// ctx.stroke();
	// ctx.fillStyle = "red";
	// ctx.fill();


	// ctx.beginPath();
	// ctx.arc(x,y,5,0,2*Math.PI);
	// ctx.stroke();
	// ctx.fillStyle = "green";
	// ctx.fill();

	//console.log(randNum, x, y);

	// get halfway point between b and c
	// var x = (x2 + x3) / 2;
	// var y = (y2 + y3) / 2;
	// var c = Math.sqrt(xx*xx);
	// var d = Math.sqrt(yy*yy);
	// console.log(c, d);
	// console.log(x2, y2, xx);
	// console.log(x3, y3, yy);

	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	for (var i = 0; i < 100000; i++) {

	

	var randNum = Math.floor(Math.random() * 3) + 1 ;

	// var x = 0.0;
	// var y = 0.0;
	ctx.fillStyle = "black";
	


	switch(randNum) {
    case 1:
        x = (newX + x1) / 2;
        y = (newY + y1) / 2;
        fillColor = "red";
        strokeColor = "red";
        break;
    case 2:
    	x = (newX + x2) / 2;
        y = (newY + y2) / 2;
        fillColor = "blue";
        strokeColor = "blue";
        break;
    case 3:
    	x = (newX + x3) / 2;
        y = (newY + y3) / 2;
        fillColor = "yellow";
        strokeColor = "yellow";
   		break;
    default:
     
	}

	newX = x;
	newY = y;

	ctx.beginPath();
	ctx.arc(x, y,1,0,2*Math.PI);
	ctx.stroke();
	ctx.strokeStyle = strokeColor;
	ctx.fillStyle = fillColor;
	ctx.fill();
	}
	

}