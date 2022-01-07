var stop = false;

function multiChaos() {
stop = false;

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");


	// This just Sets the background to black at the begining of the function
	// This also acts as a way to clear the screen
	var fillColor = "black";
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	// numCoords is the amount of coordinate points there are for that shape chosen
	var numCoords = 3;

	// Setting the settings viarables to their defaults
	var color = document.getElementById("color").checked;
	var shapes = document.getElementById("shape");
	var shape = shapes.options[shapes.selectedIndex].value;
	var centreDot = document.getElementById("centerDot").checked;
	var numDots = document.getElementById("number").value;
	var sizeDots = document.getElementById("size").value;
	var alpha = document.getElementById("opacity").value;
	/////// var numPoints = document.getElementById("points").value;


	var hex1 = document.getElementById("hex1").value;
	var hex2 = document.getElementById("hex2").value;
	var hex3 = document.getElementById("hex3").value;
	var hex4 = document.getElementById("hex4").value;
	var hex5 = document.getElementById("hex5").value;
	var hex6 = document.getElementById("hex6").value;


	var hex7 = document.getElementById("hex7").value;
	var hex8 = document.getElementById("hex8").value;
	var hex9 = document.getElementById("hex9").value;
	var hex10 = document.getElementById("hex10").value;
	var hex11 = document.getElementById("hex11").value;
	var hex12 = document.getElementById("hex12").value;

	var hexColors = [hex1, hex2, hex3, hex4, hex5, hex6, hex7, hex8, hex9, hex10, hex11, hex12];

	var result = 0;
	var r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12 = 0;
	var r = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12];

	var g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12= 0;
	var g = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

	var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12 = 0;
	var b = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12];

	var pointColor1, pointColor2, pointColor3, pointColor4, pointColor5, pointColor6, pointColor7, pointColor8, pointColor9, pointColor10, pointColor11, pointColor12;
	var pointColors = [pointColor1, pointColor2, pointColor3, pointColor4, pointColor5, pointColor6, pointColor7, pointColor8, pointColor9, pointColor10, pointColor11, pointColor12];


  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

		for(var i = 0; i < hexColors.length; i++) {

	    hexColors[i] = hexColors[i].replace(shorthandRegex, function(m, r, g, b) {
	        return r + r + g + g + b + b;
	    });

	    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColors[i]);
	    // return result ? {
       r[i] = parseInt(result[1], 16);
       g[i] = parseInt(result[2], 16);
       b[i] = parseInt(result[3], 16);

       pointColors[i]  = "rgba(" + r[i] +"," + g[i] +"," + b[i] +"," + alpha +")";
    }

	var numCoords;

	switch(shape) {

    case "Circle":

  		var numCoords = 2;
			var x1 = 400;
			var y1 = 0;

			if (centreDot == true) {
				var x2 = 400;
				var y2 = 800;
			}
    break;

    case "Triangle":
    	var numCoords = 3;

			var x1 = 400;
			var y1 = 50;

			var x2 = 10;
			var y2 = 725;

			var x3 = 790;
			var y3 = 725;

			var x4 = 400;
			var y4 = 500;

			if (centreDot == true) {
				var x5 = 400;
				var y5 = 400;
			}
    break;

    case "Square":
			var numCoords = 4;

	    var x1 = 50;
			var y1 = 50 ;

			var x2 = 750;
			var y2 = 50;

			var x3 = 50;
			var y3 = 750;

			var x4 = 750;
			var y4 = 750;

			if (centreDot == true) {
				var x5 = 400;
				var y5 = 400;
			}
   	break;

    case "Pentagon":
			var numCoords = 5;

	    var x1 = 400;
			var y1 = 30;

			var x2 = 780;
			var y2 = 306;

			var x3 = 636;
			var y3 = 753;

			var x4 = 164;
			var y4 = 753;

			var x5 = 20;
			var y5 = 306;

			if (centreDot == true) {
				var x6 = 400;
				var y6 = 400;
			}
   	break;

    case "Hexagon":
    	var numCoords = 6;

	    var x1 = 400;
			var y1 = 20;

			var x2 = 730;
			var y2 = 210;

			var x3 = 730;
			var y3 = 590;

			var x4 = 400;
			var y4 = 780;

			var x5 = 70;
			var y5 = 590;

			var x6 = 70;
			var y6 = 210;

			if (centreDot == true) {
				var x7 = 400;
				var y7 = 400;
			}
   	break;

    case "Heptagon":
    	var numCoords = 7;
			var x1 = 400;
			var y1 = 30;

			var x2 = 705;
			var y2 = 176;

			var x3 = 780;
			var y3 = 505;

			var x4 = 570;
			var y4 = 770;

			var x5 = 230;
			var y5 = 770;

			var x6 = 20;
			var y6 = 505;

			var x7 = 95;
			var y7 = 176;    

			if (centreDot == true) {
				var x8 = 400;
				var y8 = 400;
			}		
   	break;

    case "Octagon":
    	var numCoords = 8;
			var x1 = 400;
			var y1 = 20;

			var x2 = 670;
			var y2 = 130;

			var x3 = 780;
			var y3 = 400;

			var x4 = 670;
			var y4 = 670;

			var x5 = 400;
			var y5 = 780;

			var x6 = 130;
			var y6 = 670;

			var x7 = 20;
			var y7 = 400;

			var x8 = 130;
			var y8 = 130;

			if (centreDot == true) {
				var x9 = 400;
				var y9 = 400;
			}
   	break;

    case "Nonagon":
    	var numCoords = 9;
    	var x1 = 400;
			var y1 = 20;

			var x2 = 645;
			var y2 = 110;

			var x3 = 775;
			var y3 = 335;

			var x4 = 730;
			var y4 = 590;

			var x5 = 530;
			var y5 = 760;

			var x6 = 270;
			var y6 = 760;

			var x7 = 70;
			var y7 = 590;

			var x8 = 25;
			var y8 = 335;

			var x9 = 155;
			var y9 = 110;

			var x10 = 400;
			var y10 = 390;

			if (centreDot == true) {
				var x11 = 400;
				var y11 = 400;
			}
   	break;

    case "Decagon":
    	var numCoords = 10;

    	var x1 = 400;
			var y1 = 20;

			var x2 = 625;
			var y2 = 93;

			var x3 = 762;
			var y3 = 283;

			var x4 = 762;
			var y4 = 518;

			var x5 = 625;
			var y5 = 706;

			var x6 = 400;
			var y6 = 780;

			var x7 = 177;
			var y7 = 708;

			var x8 = 38;
			var y8 = 518;

			var x9 = 38;
			var y9 = 283;

			var x10 = 177;
			var y10 = 93;

			if (centreDot == true) {
				var x11 = 400;
				var y11 = 400;
			}
		break;

    case "Hendecagon":
    	var numCoords = 11;
    	var x1 = 400;
			var y1 = 20;

			var x2 = 625;
			var y2 = 93;

			var x3 = 762;
			var y3 = 283;

			var x4 = 762;
			var y4 = 518;

			var x5 = 625;
			var y5 = 706;

			var x6 = 400;
			var y6 = 780;

			var x7 = 177;
			var y7 = 708;

			var x8 = 38;
			var y8 = 518;

			var x9 = 38;
			var y9 = 283;

			var x10 = 177;
			var y10 = 93;

			var x11 = 177;
			var y11 = 93;

			if (centreDot == true) {
				var x12 = 400;
				var y12 = 400;
			}
   	break;

    case "Dodecagon":
    	var numCoords = 12;
    	var x1 = 400;
			var y1 = 20;

			var x2 = 590;
			var y2 = 70;

			var x3 = 730;
			var y3 = 210;

			var x4 = 780;
			var y4 = 400;

			var x5 = 730;
			var y5 = 590;

			var x6 = 590;
			var y6 = 730;

			var x7 = 400;
			var y7 = 780;

			var x8 = 210;
			var y8 = 730;

			var x9 = 70;
			var y9 = 590;

			var x10 = 20;
			var y10 = 400;

			var x11 = 70;
			var y11 = 210;

			var x12 = 210;
			var y12 = 70;

			if (centreDot == true) {
				var x13 = 400;
				var y13 = 400;
			}
   		break;
	}

	if (centreDot == true) {
		numCoords++;
	}

	// generate two random numbers for the initial dot position
	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;


	var newX = randX;
	var newY = randY;

	var d = 2; // divide by

	// this is used for drawing lines it needs a start position to draw from
	ctx.moveTo(randX, randY);

	//for (var i = 0; i < numDots; i++) {
	function drawDots() {
		if (stop == true) {	return; }

			var randNum = Math.floor(Math.random() * numCoords) + 1 ;

			switch(randNum) {
		    case 1:
		        x = (newX + x1) / d;
		        y = (newY + y1) / d;
		        fillColor =   pointColors[0];
		        strokeColor =   pointColors[0];
		        break;
		    case 2:
		    	x = (newX + x2) / d;
		        y = (newY + y2) / d;
		        fillColor =   pointColors[1];
		        strokeColor =   pointColors[1];
		        break;
		    case 3:
		    	x = (newX + x3) / d;
		        y = (newY + y3) / d;
		        fillColor =   pointColors[2];
		        strokeColor =   pointColors[2];
		   		break;
		    case 4:
		    	x = (newX + x4) / d;
		        y = (newY + y4) / d;
		        fillColor =   pointColors[3];
		        strokeColor =   pointColors[3];
		   		break;
		    case 5:
		    	x = (newX + x5) / d;
		        y = (newY + y5) / d;
		        fillColor =   pointColors[4];
		        strokeColor =   pointColors[4];
		   		break;
		    case 6:
		    	x = (newX + x6) / d;
		        y = (newY + y6) / d;
		        fillColor =   pointColors[5];
		        strokeColor =   pointColors[5];
		   		break;
		    case 7:
		        x = (newX + x7) / d;
		        y = (newY + y7) / d;
		        fillColor =   pointColors[6];
		        strokeColor =   pointColors[6];
		        break;
		    case 8:
		    	x = (newX + x8) / d;
		        y = (newY + y8) / d;
		        fillColor =   pointColors[7];
		        strokeColor =   pointColors[7];
		        break;
		    case 9:
		    	x = (newX + x9) / d;
		        y = (newY + y9) / d;
		        fillColor =   pointColors[8];
		        strokeColor =   pointColors[8];
		   		break;
		    case 10:
		    	x = (newX + x10) / d;
		        y = (newY + y10) / d;
		        fillColor =   pointColors[9];
		        strokeColor =   pointColors[9];
		   		break;
		    case 11:
		    	x = (newX + x11) / d;
		        y = (newY + y11) / d;
		        fillColor =   pointColors[10];
		        strokeColor =   pointColors[10];
		   		break;
		    case 12:
		    	x = (newX + x12) / d;
		        y = (newY + y12) / d;
		        fillColor =   pointColors[11];
		        strokeColor =   pointColors[11];
		   		break;
		    case 13:
		    	x = (newX + x13) / d;
		        y = (newY + y13) / d;
		        fillColor =   pointColors[12];
		        strokeColor =   pointColors[12];
		   		break;
			}

			x = Math.round(x);
			y = Math.round(y);

			newX = x;
			newY = y;

			if (sizeDots < 1) {

				// use this code to draw small dots less than 1px
				// it draws lines from point a to b not dots
				// but it is more resource friendly for large calculations

				ctx.beginPath();
				ctx.lineWidth = sizeDots;


				if (color == true) {
					ctx.strokeStyle = strokeColor;
					ctx.fillStyle = fillColor;
				
				} else {
					ctx.strokeStyle = "rgba(255,255,255," + alpha +")";
					ctx.fillStyle = "rgba(255,255,255," + alpha +")";
				
				}

				ctx.moveTo(x, y);
				ctx.lineTo(x+0.5,y+0.5);

				ctx.stroke();

			} else {

				//Use this code to draw circles - better for big dots, more resourse intensive
				ctx.beginPath();
				ctx.arc(x, y,sizeDots,0,2*Math.PI);
				ctx.stroke();

				if (color == true) {
					ctx.strokeStyle = strokeColor;
					ctx.fillStyle = fillColor;
					
				} else {
					ctx.strokeStyle = "rgba(255,255,255," + alpha +")";
					ctx.fillStyle = "rgba(255,255,255," + alpha +")";
					
				}

				ctx.fill();
				//ctx.save();

			}

		}

		drawDots();
		setInterval(drawDots, 0.1);

};


function stopFunc() {
 stop = true;
};


/////setInterval(multiChaos, 100000)

	window.onload =  function onloadFunction() {

		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");

		// get the text from input box from user for filename
		var fileName = document.getElementById("download").download;

		// get the option from select drop down for filetype from use
		var fileType = document.getElementById("fileType");
		var type = fileType.options[fileType.selectedIndex].value;

		var shapes = document.getElementById("shape");
		var shape = shapes.options[shapes.selectedIndex].value;

		fileName = shape + type;



		document.getElementById('download').addEventListener('click', function() {
		    save(this);
		}, false);




		function save(link) {

		// get the text from input box from user for filename
		var fileName = document.getElementById("fileName").value;
		var download = document.getElementById("download");


		// get the option from select drop down for filetype from use
		var fileType = document.getElementById("fileType");
		var type = fileType.options[fileType.selectedIndex].value;

		var shapes = document.getElementById("shape");
		var shape = shapes.options[shapes.selectedIndex].value;

		if (!fileName) {
			download.download = shape + "." + type;
		} else {
			download.download = fileName + "." + type;
		}

		
			var save = document.getElementById("save");
			var image = document.getElementById("myCanvas").toDataURL("image/png")
                .replace("image/" + type + "", "image/octet-stream");
		    download.setAttribute("href", image);
		};
};