<?php 

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Chaos Theory</title>
	<meta charset="utf-8">
	<script type="text/javascript" src="js/script.js" defer></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/cover.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
	<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>
 <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Chaos Theory</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="container">

  		<div class="starter-template">
	        <h1>Chaos Theory</h1>
	        <p class="lead">Create Chaos...</p>


	        <canvas id="myCanvas" width="800" height="800" style="border:1px solid #000000;">
	        Sorry canvas not supported.
			</canvas>
	      	<div id="variableContainer">
		      	<table style="width:100%">
			        <colgroup>
					    <col style=" width: 25%;">
				  	</colgroup>
				  		  <tr>
					  <td  colspan="2"><input id="run"  type="button"   value="Run"  onclick="multiChaos();" /></td>
					  <td  colspan="2"><input id="stop" type="button"   value="Stop" onclick="stopFunc();" /></td>
					  </tr>

					  <tr>
					    <td>Number: </td>
					    <td><input id="number" type="number" value="100000" min="1" max="100000000"/></td>
					    <td>Size: </td> 
					    <td><input id="size" type="number" value="1" min="0.0" max="10.0" step="0.01"/></td>
					  </tr>
					  <tr>
					    <td>Opacity: </td>
					    <td><input id="opacity" type="number" value="1" min="0.0" max="1.0" step="0.01"/></td>
					    <td>Color: </td>
					    <td><input id="color" type="checkbox" checked /></td>
					  </tr>

			  		  <tr class="colors">
					    <td>Color 1: </td>
					    <td><input id="hex1" type="color" value="#ff0000" /></td>
					    <td>Color 2: </td>
					    <td><input id="hex2" type="color" value="#ff00ff" /></td>
					  </tr>
			  		  <tr  class="colors">
					    <td>Color 3: </td>
					    <td><input id="hex3" type="color" value="#0000ff" /></td>
					    <td>Color 4: </td>
					    <td><input id="hex4" type="color" value="#00ffff" /></td>
					  </tr>
					  <tr  class="colors">
					    <td>Color 5: </td>
					    <td><input id="hex5" type="color" value="#00ff00" /></td>
					    <td>Color 6: </td>
					    <td><input id="hex6" type="color" value="#ffff00" /></td>
					  </tr>

	  		  		  <tr class="colors">
					    <td>Color 7: </td>
					    <td><input id="hex7" type="color" value="#ff0000" /></td>
					    <td>Color 8: </td>
					    <td><input id="hex8" type="color" value="#ff00ff" /></td>
					  </tr>
			  		  <tr  class="colors">
					    <td>Color 9: </td>
					    <td><input id="hex9" type="color" value="#0000ff" /></td>
					    <td>Color 10: </td>
					    <td><input id="hex10" type="color" value="#00ffff" /></td>
					  </tr>
					  <tr  class="colors">
					    <td>Color 11: </td>
					    <td><input id="hex11" type="color" value="#00ff00" /></td>
					    <td>Color 12: </td>
					    <td><input id="hex12" type="color" value="#ffff00" /></td>
					  </tr>

 					 <tr>
					    <td>Shape: </td>
					    <td><select id="shape" style="width: 100%;">
					   	  <option value="Circle">Circle</option>
						  <option value="Triangle" selected>Triangle</option>
						  <option value="Square">Square</option>
						  <option value="Pentagon">Pentagon</option>
						  <option value="Hexagon">Hexagon</option>

					  	  <option value="Heptagon">Heptagon</option>
						  <option value="Octagon">Octagon</option>
						  <option value="Nonagon">Nonagon</option>
						  <option value="Decagon">Decagon</option>
						  <option value="Hendecagon">Hendecagon</option>
						  <option value="Dodecagon">Dodecagon</option>
						</select></td>
						<td>Center Dot: </td>
						<td><input id="centerDot" type="checkbox" checked /></td>
					  </tr>

					  <tr>
					 	<td>File Name: </td>
					    <td><input id="fileName" type="text" placeholder="filename"/></td>
					    <td><select id="fileType">
						  <option >jpeg</option>
						  <option value=".png">png</option>
						  <option value=".gif">gif</option>
						</select></td>
					    <td  colspan="2"><a id="download" download="triangle.png"><button type="button" onClick="download()">Download</button></a></td>
					  </tr>
  				
				
				</table>
				<br>

				

				<br>

				

	      	</div>
		</div>

	</div>
 
	
  	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

</body>
<script type="text/javascript">


		//uniChaos();
		//dualChaos();
		 //triangleChaos(); 
		// funChaos();
		 //squareChaos(); 
		// starChaos();
		 //hexChaos();
		//septChaos();
		 //octChaos();
		 //ninChaos();
		 //decChaos();
		//elevChaos();
		//twelvChaos();



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





		///// triangleChaos(); 
		  //    //// triangle
		  //       ctx.beginPath();
				// polygon(ctx,400,500,450,3,-Math.PI/2);
				// ctx.fillStyle="rgba(227,11,93,0.75)";
				// ctx.fill();
				// ctx.stroke();


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

</html>
