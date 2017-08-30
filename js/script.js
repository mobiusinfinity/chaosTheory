
function multiChaos() {

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var fillColor = "black";
	ctx.fillStyle = "black";

	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);



	// var shape = ;
	var color = document.getElementById("color").checked;

	


	

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



	var pointColor1 = "rgba(" + r1 +"," + g1 +"," + b1 +"," + alpha +")";
	var pointColor2 = "rgba(" + r2 +"," + g2 +"," + b2 +"," + alpha +")";
	var pointColor3 = "rgba(" + r3 +"," + g3 +"," + b3 +"," + alpha +")";
	var pointColor4 = "rgba(" + r4 +"," + g4 +"," + b4 +"," + alpha +")";

	var pointColor5 = "rgba(" + r5 +"," + g5 +"," + b5 +"," + alpha +")";
	var pointColor6 = "rgba(" + r6 +"," + g6 +"," + b6 +"," + alpha +")";

	// var pointColor1 = "rgba(255,0,0," + alpha +")";
	// var pointColor2 = "rgba(0,255,0," + alpha +")";
	// var pointColor3 = "rgba(0,0,255," + alpha +")";
	// var pointColor4 = "rgba(255,255,255," + alpha +")";



	// Set the value of the coordinates below

	// var x1 = 400;
	// var y1 = 50;

	// var x2 = 10;
	// var y2 = 725;

	// var x3 = 790;
	// var y3 = 725;

	// var x4 = 400;
	// var y4 = 500;


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

	// generate two random numbers for the initial dot position
	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;



	var newX = randX;
	var newY = randY;

	// this is used for drawing lines it needs a start position to draw from
	ctx.moveTo(randX, randY);

	for (var i = 0; i < numDots; i++) {

	var randNum = Math.floor(Math.random() * 6) + 1 ;

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
	}


	newX = x;
	newY = y;



	// Use this code to draw circles - better for big dots, more resourse intensive
	// ctx.beginPath();
	// ctx.arc(x, y,sizeDots,0,2*Math.PI);
	// ctx.stroke();


	// this code changes the color of dots from custom to white.
		if (color == true) {
		ctx.strokeStyle = strokeColor;
		ctx.fillStyle = fillColor;
		 //console.log("checked");
		} else {
			ctx.strokeStyle = "rgba(255,255,255," + alpha +")";
			ctx.fillStyle = "rgba(255,255,255," + alpha +")";
			// console.log("unchecked");
		}

	// // ctx.fillStyle = "black";
	//   ctx.fill();

		// use this code to draw small dots less than 1px
		// it draws lines from point a to b not dots
		// but it is more resource friendly for large calculations
		ctx.beginPath();
		 ctx.moveTo(x, y);
		ctx.lineTo(x+0.1,y+0.1);
		// ctx.lineTo(newX,newY);

		ctx.lineWidth = sizeDots;
	//	ctx.strokeStyle = strokeColor;

		ctx.stroke();

	}

	
}

window.onload  =  multiChaos();

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

		console.log(fileName);

		// var fillColor = "black";
		// ctx.fillStyle = "black";

		// ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

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

		

		//console.log(fileName);
			var save = document.getElementById("save");
			var image = document.getElementById("myCanvas").toDataURL("image/png")
                .replace("image/" + type + "", "image/octet-stream");
		    download.setAttribute("href", image);
		};
	};