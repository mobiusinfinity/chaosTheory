
function multiChaos() {

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var fillColor = "black";
	ctx.fillStyle = "black";

	

	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	//ctx.restore();

	var diceSides = 3;


	var color = document.getElementById("color").checked;

	var shapes = document.getElementById("shape");
	var shape = shapes.options[shapes.selectedIndex].value;

	var centreDot = document.getElementById("centerDot").checked;
	

	var numDots = document.getElementById("number").value;
	var sizeDots = document.getElementById("size").value;
	var alpha = document.getElementById("opacity").value;
	// var numPoints = document.getElementById("points").value;


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

			    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

			    hex1 = hex1.replace(shorthandRegex, function(m, r, g, b) {
			        return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex1);
			    // return result ? {
		       var r1 = parseInt(result[1], 16);
		       var g1 = parseInt(result[2], 16);
		       var b1 = parseInt(result[3], 16);

			    hex2 = hex2.replace(shorthandRegex, function(m, r, g, b) {
		       		 return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex2);
			
		       var r2 = parseInt(result[1], 16);
		       var g2 = parseInt(result[2], 16);
		       var b2 = parseInt(result[3], 16);


   			    hex3 = hex3.replace(shorthandRegex, function(m, r, g, b) {
		       		return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex3);
		
		       var r3 = parseInt(result[1], 16);
		       var g3 = parseInt(result[2], 16);
		       var b3 = parseInt(result[3], 16);



   			    hex4 = hex4.replace(shorthandRegex, function(m, r, g, b) {
	       			return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex4);
	
			       var r4 = parseInt(result[1], 16);
			       var g4 = parseInt(result[2], 16);
			       var b4 = parseInt(result[3], 16);



  			    hex5 = hex5.replace(shorthandRegex, function(m, r, g, b) {
			        return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex5);
			 
			       var r5 = parseInt(result[1], 16);
			       var g5 = parseInt(result[2], 16);
			       var b5 = parseInt(result[3], 16);


			    hex6 = hex6.replace(shorthandRegex, function(m, r, g, b) {
			        return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex6);
			
		       var r6 = parseInt(result[1], 16);
		       var g6 = parseInt(result[2], 16);
		       var b6 = parseInt(result[3], 16);

			    hex7 = hex7.replace(shorthandRegex, function(m, r, g, b) {
			        return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex7);
			
		       var r7 = parseInt(result[1], 16);
		       var g7 = parseInt(result[2], 16);
		       var b7 = parseInt(result[3], 16);


			    hex8 = hex8.replace(shorthandRegex, function(m, r, g, b) {
			        return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex8);
			
			       var r8 = parseInt(result[1], 16);
			       var g8 = parseInt(result[2], 16);
			       var b8 = parseInt(result[3], 16);

			    hex9 = hex9.replace(shorthandRegex, function(m, r, g, b) {
			        return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex9);
			
			       var r9 = parseInt(result[1], 16);
			       var g9 = parseInt(result[2], 16);
			       var b9 = parseInt(result[3], 16);
			 
			    hex10 = hex10.replace(shorthandRegex, function(m, r, g, b) {
			        return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex10);
			
			       var r10 = parseInt(result[1], 16);
			       var g10 = parseInt(result[2], 16);
			       var b10 = parseInt(result[3], 16);

			    hex11 = hex11.replace(shorthandRegex, function(m, r, g, b) {
			        return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex11);
			
			       var r11 = parseInt(result[1], 16);
			       var g11= parseInt(result[2], 16);
			       var b11 = parseInt(result[3], 16);


			    hex12 = hex12.replace(shorthandRegex, function(m, r, g, b) {
			        return r + r + g + g + b + b;
			    });

			    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex12);
			
			       var r12 = parseInt(result[1], 16);
			       var g12= parseInt(result[2], 16);
			       var b12 = parseInt(result[3], 16);



	var pointColor1 = "rgba(" + r1 +"," + g1 +"," + b1 +"," + alpha +")";
	var pointColor2 = "rgba(" + r2 +"," + g2 +"," + b2 +"," + alpha +")";
	var pointColor3 = "rgba(" + r3 +"," + g3 +"," + b3 +"," + alpha +")";
	var pointColor4 = "rgba(" + r4 +"," + g4 +"," + b4 +"," + alpha +")";

	var pointColor5 = "rgba(" + r5 +"," + g5 +"," + b5 +"," + alpha +")";
	var pointColor6 = "rgba(" + r6 +"," + g6 +"," + b6 +"," + alpha +")";


	var pointColor7 = "rgba(" + r7 +"," + g7 +"," + b7 +"," + alpha +")";
	var pointColor8 = "rgba(" + r8 +"," + g8 +"," + b8 +"," + alpha +")";
	var pointColor9 = "rgba(" + r9 +"," + g9 +"," + b9 +"," + alpha +")";
	var pointColor10 = "rgba(" + r10 +"," + g10 +"," + b10 +"," + alpha +")";

	var pointColor11 = "rgba(" + r11 +"," + g11 +"," + b11 +"," + alpha +")";
	var pointColor12 = "rgba(" + r12 +"," + g12 +"," + b12 +"," + alpha +")";

	// var pointColor1 = "rgba(255,0,0," + alpha +")";
	// var pointColor2 = "rgba(0,255,0," + alpha +")";
	// var pointColor3 = "rgba(0,0,255," + alpha +")";
	// var pointColor4 = "rgba(255,255,255," + alpha +")";



	var diceSides;

	switch(shape) {
    case "Circle":

  	// 		var diceSides = 1;

			// var x1 = 400;
			// var y1 = 400;

			// if (centreDot == true) {
			// 	var x1 = 400;
			// 	var y1 = 400;
			// }
    		
        break;
    case "Triangle":
    		var diceSides = 3;

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
			var diceSides = 4;

	    	var x1 = 50;
			var y1 = 50 ;

			var x2 = 750;
			var y2 = 50;

			var x3 = 50;
			var y3 = 750;

			var x4 = 750;
			var y4 = 750;

			if (centreDot == true) {
				var x5 = 375;
				var y5 = 375;
			}
		
   		break;
    case "Pentagon":
			var diceSides = 5;

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
    		var diceSides = 6;
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
    		var diceSides = 7;
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
    		var diceSides = 8;
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
    		var diceSides = 9;
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
    		var diceSides = 10;
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
    		var diceSides = 11;
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
    		var diceSides = 12;
    		var x1 = 400;
			var y1 = 20;

			var x2 = 590;
			var y2 = 70;

			var x3 = 730;
			var y3 = 210;
			//////
			var x4 = 780;
			var y4 = 400;

			var x5 = 730;
			var y5 = 590;

			var x6 = 590;
			var y6 = 730;
			//////
			var x7 = 400;
			var y7 = 780;

			var x8 = 210;
			var y8 = 730;

			var x9 = 70;
			var y9 = 590;
			///////
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
		diceSides++;
	}

	// generate two random numbers for the initial dot position
	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;


	var newX = randX;
	var newY = randY;

	// this is used for drawing lines it needs a start position to draw from
	ctx.moveTo(randX, randY);

	//for (var i = 0; i < numDots; i++) {
	function drawDots() {

			var randNum = Math.floor(Math.random() * diceSides) + 1 ;

			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = pointColor1;
		        strokeColor = pointColor1;
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor = pointColor2;
		        strokeColor = pointColor2;
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor = pointColor3;
		        strokeColor = pointColor3;
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor = pointColor4;
		        strokeColor = pointColor4;
		   		break;
		    case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
		        fillColor = pointColor5;
		        strokeColor = pointColor5;
		   		break;
		    case 6:
		    	x = (newX + x6) / 2;
		        y = (newY + y6) / 2;
		        fillColor = pointColor6;
		        strokeColor = pointColor6;
		   		break;
		    case 7:
		        x = (newX + x7) / 2;
		        y = (newY + y7) / 2;
		        fillColor = pointColor7;
		        strokeColor = pointColor7;
		        break;
		    case 8:
		    	x = (newX + x8) / 2;
		        y = (newY + y8) / 2;
		        fillColor = pointColor8;
		        strokeColor = pointColor8;
		        break;
		    case 9:
		    	x = (newX + x9) / 2;
		        y = (newY + y9) / 2;
		        fillColor = pointColor9;
		        strokeColor = pointColor9;
		   		break;
		    case 10:
		    	x = (newX + x10) / 2;
		        y = (newY + y10) / 2;
		        fillColor = pointColor10;
		        strokeColor = pointColor10;
		   		break;
		    case 11:
		    	x = (newX + x11) / 2;
		        y = (newY + y11) / 2;
		        fillColor = pointColor11;
		        strokeColor = pointColor11;
		   		break;
		    case 12:
		    	x = (newX + x12) / 2;
		        y = (newY + y12) / 2;
		        fillColor = pointColor12;
		        strokeColor = pointColor12;
		   		break;
		    case 13:
		    	x = (newX + x13) / 2;
		        y = (newY + y13) / 2;
		        fillColor = pointColor12;
		        strokeColor = pointColor12;
		   		break;
			}

			x = Math.round(x);
			y = Math.round(y);

			newX = x;
			newY = y;





			if (sizeDots <= 1) {



				// use this code to draw small dots less than 1px
				// it draws lines from point a to b not dots
				// but it is more resource friendly for large calculations

				if (color == true) {
					ctx.strokeStyle = strokeColor;
					ctx.fillStyle = fillColor;
				
				} else {
					ctx.strokeStyle = "rgba(255,255,255," + alpha +")";
					ctx.fillStyle = "rgba(255,255,255," + alpha +")";
				
				}

				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x+0.1,y+0.1);


				ctx.lineWidth = sizeDots;
				

				ctx.stroke();

				//ctx.save();

			} else {

				//ctx.restore();

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
	// }

	
}

//window.onload  =  multiChaos();

//setInterval(multiChaos, 100000)

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