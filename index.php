<?php 

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Chaos Theory</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="js/script.js"></script>
  	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
</head>
<body>
<h1 id="mainHeading">Chaos Theory</h1>

<div id="canvasWrapper">
<canvas id="myCanvas" width="800" height="800" style="border:1px solid #000000;">

<script type="text/javascript">
//triangleChaos(); 

 //squareChaos(); 
// starChaos();
 //hexChaos();
//septChaos();
// octChaos();
// ninChaos();
 //decChaos();
//elevChaos();
twelvChaos();

	// var c = document.getElementById("myCanvas");
	// var ctx = c.getContext("2d");

	// function polygon(ctx, x, y, radius, sides, startAngle, anticlockwise) {
	//   if (sides < 3) return;
	//   var a = (Math.PI * 2)/sides;
	//   a = anticlockwise?-a:a;
	//   ctx.save();
	//   ctx.translate(x,y);
	//   ctx.rotate(startAngle);
	//   ctx.moveTo(radius,0);
	//   for (var i = 1; i < sides; i++) {
	//     ctx.lineTo(radius*Math.cos(a*i),radius*Math.sin(a*i));
	//   }
	//   ctx.closePath();
	//   ctx.restore();
	// }

 //      function writeMessage(canvas, message) {
 //        var context = canvas.getContext('2d');
 //        context.clearRect(0, 0, canvas.width, canvas.height);
 //        context.font = '18pt Calibri';
 //        context.fillStyle = 'black';
 //        context.fillText(message, 10, 25);
 //      }
 //      function getMousePos(canvas, evt) {
 //        var rect = canvas.getBoundingClientRect();
 //        return {
 //          x: evt.clientX - rect.left,
 //          y: evt.clientY - rect.top
 //        };
 //      }
 //      var canvas = document.getElementById('myCanvas');
 //      var context = canvas.getContext('2d');

 //      canvas.addEventListener('mousemove', function(evt) {
 //        var mousePos = getMousePos(canvas, evt);
 //        document.getElementById("mainHeading").innerHTML = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
 //        // console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
 //        //writeMessage(canvas, message);
 //      }, false);


//// pentagon
  //       ctx.beginPath();
		// polygon(ctx,400,430,400,5,-Math.PI/2);
		// ctx.fillStyle="rgba(227,11,93,0.75)";
		// ctx.fill();
		// ctx.stroke();

////hexagon
  //       ctx.beginPath();
		// polygon(ctx,400,400,380,6,-Math.PI/2);
		// ctx.fillStyle="rgba(227,0,0,0.75)";
		// ctx.fill();
		// ctx.stroke();

////septagon
  //       ctx.beginPath();
		// polygon(ctx,400,420,390,7,-Math.PI/2);
		// ctx.fillStyle="rgba(227,0,0,0.75)";
		// ctx.fill();
		// ctx.stroke();

// // octagon
  //      ctx.beginPath();
		// polygon(ctx,400,400,380,8,-Math.PI/2);
		// ctx.fillStyle="rgba(227,0,0,0.75)";
		// ctx.fill();
		// ctx.stroke();

// // nineagon
  //       ctx.beginPath();
		// polygon(ctx,400,400,380,9,-Math.PI/2);
		// ctx.fillStyle="rgba(227,0,0,0.75)";
		// ctx.fill();
		// ctx.stroke();

//// decagon
  //       ctx.beginPath();
		// polygon(ctx,400,400,380,10,-Math.PI/2);
		// ctx.fillStyle="rgba(227,0,0,0.75)";
		// ctx.fill();
		// ctx.stroke();
// //elevengon
  //       ctx.beginPath();
		// polygon(ctx,400,400,380,10,-Math.PI/2);
		// ctx.fillStyle="rgba(227,0,0,0.75)";
		// ctx.fill();
		// ctx.stroke();

//// twelevgon
  //       ctx.beginPath();
		// polygon(ctx,400,400,380,12,-Math.PI/2);
		// ctx.fillStyle="rgba(200,100,0,1)";
		// ctx.fill();
		// ctx.stroke();
</script>
</canvas>
</div>
</body>

</html>