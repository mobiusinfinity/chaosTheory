

function uniChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");


	var x1 = 400;
	var y1 = 400;



	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
	ctx.fillStyle = "black";
	var alpha = 0.5;

	for (var i = 0; i < 20000000; i++) {


	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;

	var randZ = Math.floor(Math.random() * 800) + 1 ;
	var randA = Math.floor(Math.random() * 800) + 1 ;

	var randB = Math.floor(Math.random() * 800) + 1 ;
	var randC = Math.floor(Math.random() * 800) + 1 ;

	var randD = Math.floor(Math.random() * 800) + 1 ;
	var randE = Math.floor(Math.random() * 800) + 1 ;



	var randColorR = Math.floor(Math.random() * 255);
	var randColorG = Math.floor(Math.random() * 255);
	var randColorB = Math.floor(Math.random() * 255);



    x = (randX + randZ + randB + randD) / 4;
    y = (randY + randA + randC + randE) / 4;
    fillColor = "rgba(" + randColorR +"," + randColorG +"," + randColorB +"," + alpha +")";
    strokeColor = "rgba(" + randColorR +"," + randColorG +"," + randColorB +"," + alpha +")";


	
	//var randE = Math.floor(Math.random() * 800) + 1 ;



	ctx.beginPath();
	ctx.arc(x, y,0.5,0,2*Math.PI);
	ctx.stroke();
	ctx.strokeStyle = strokeColor;
	ctx.fillStyle = fillColor;

	// ctx.strokeStyle = "rgba(255,255,255," + alpha +")";
	// ctx.fillStyle = "rgba(255,255,255," + alpha +")";
	ctx.fill();
	}
}

function dualChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	// var x1 = 400;
	// var y1 = 50;

	// var x2 = 10;
	// var y2 = 725;

	// var x3 = 790;
	// var y3 = 725;

	// var x4 = 400;
	// var y4 = 500;
	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;

	var x1 = 400;
	var y1 = 50;

	var x2 = 400;
	var y2 = 750;

	var x3 = 50;
	var y3 = 750;

	var x4 = 750;
	var y4 = 750;

	var x5 = 400;
	var y5 = 400;


	// var randX = Math.floor(Math.random() * 800) + 1 ;
	// var randY = Math.floor(Math.random() * 800) + 1 ;



	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";

	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
	ctx.fillStyle = "black";
	var alpha = 0.1;

	for (var i = 0; i < 10000000; i++) {

	var randNum = Math.floor(Math.random() * 2) + 1 ;

	switch(randNum) {
    case 1:
        x = (newX + x1) / 2;
        y = (newY + y1) / 2;
        fillColor = "rgba(255,0,255," + alpha +")";
        strokeColor = "rgba(255,0,255," + alpha +")";
        break;
    case 2:
    	x = (newX + x2) / 2;
        y = (newY + y2) / 2;
        fillColor = "rgba(0,255,255," + alpha +")";
        strokeColor = "rgba(0,255,255," + alpha +")";
        break;
    case 3:
    	x = (newX + x3) / 2;
        y = (newY + y3) / 2;
        fillColor = "rgba(0,0,255," + alpha +")";
        strokeColor = "rgba(0,0,255," + alpha +")";
   		break;
    case 4:
    	x = (newX + x4) / 2;
        y = (newY + y4) / 2;
        fillColor = "rgba(255,255,255," + alpha +")";
        strokeColor = "rgba(255,255,255," + alpha +")";
   		break;
    case 5:
    	x = (newX + x5) / 2;
        y = (newY + y5) / 2;
        fillColor = "rgba(0,255,0," + alpha +")";
        strokeColor = "rgba(0,255,0," + alpha +")";
   		break;
	}

	newX = x;
	newY = y;

	ctx.beginPath();
	ctx.arc(x, y,0.1,0,2*Math.PI);
	ctx.stroke();
	ctx.strokeStyle = strokeColor;
	ctx.fillStyle = fillColor;

	// ctx.strokeStyle = "rgba(255,255,255," + alpha +")";
	// ctx.fillStyle = "rgba(255,255,255," + alpha +")";
	ctx.fill();
	}
}

function triangleChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var x1 = 400;
	var y1 = 50;

	var x2 = 10;
	var y2 = 725;

	var x3 = 790;
	var y3 = 725;

	var x4 = 400;
	var y4 = 500;

	// var x1 = 50;
	// var y1 = 50;

	// var x2 = 750;
	// var y2 = 50;

	// var x3 = 50;
	// var y3 = 750;

	// var x4 = 750;
	// var y4 = 750;

	// var x5 = 400;
	// var y5 = 400;


	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;



	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";

	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
//	ctx.fillStyle = "black";
	var alpha = 0.2;

	for (var i = 0; i < 10000; i++) {

	var randNum = Math.floor(Math.random() * 3) + 1 ;

	switch(randNum) {
    case 1:
        x = (newX + x1) / 2;
        y = (newY + y1) / 2;
        fillColor = "rgba(255,0,0," + alpha +")";
        strokeColor = "rgba(255,0,0," + alpha +")";
        break;
    case 2:
    	x = (newX + x2) / 2;
        y = (newY + y2) / 2;
        fillColor = "rgba(255,255,0," + alpha +")";
        strokeColor = "rgba(255,255,0," + alpha +")";
        break;
    case 3:
    	x = (newX + x3) / 2;
        y = (newY + y3) / 2;
        fillColor = "rgba(0,0,255," + alpha +")";
        strokeColor = "rgba(0,0,255," + alpha +")";
   		break;
    // case 4:
    // 	x = (newX + x4) / 2;
    //     y = (newY + y4) / 2;
    //     fillColor = "rgba(255,255,255," + alpha +")";
    //     strokeColor = "rgba(255,255,255," + alpha +")";
   	// 	break;
    // case 5:
    // 	x = (newX + x5) / 2;
    //     y = (newY + y5) / 2;
    //     fillColor = "rgba(0,255,0," + alpha +")";
    //     strokeColor = "rgba(0,255,0," + alpha +")";
   	// 	break;
	}

	newX = x;
	newY = y;

	ctx.beginPath();
	ctx.arc(x, y,0.2,0,2*Math.PI);
	ctx.stroke();
	ctx.strokeStyle = strokeColor;
	ctx.fillStyle = fillColor;

	// ctx.strokeStyle = "rgba(255,255,255," + alpha +")";
	// ctx.fillStyle = "rgba(255,255,255," + alpha +")";
	ctx.fill();
	}
}

function funChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");


	var x1 = 400;
	var y1 = 50;

	var x2 = 10;
	var y2 = 725;

	var x3 = 790;
	var y3 = 725;

	var x4 = 750;
	var y4 = 750;

	var x5 = 400;
	var y5 = 400;



	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;

	var newX = randX;
	var newY = randY;

	var fillColor = "black";
	var strokeColor = "black";

	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
	ctx.fillStyle = "black";
	var alpha = 0.1;


	for (var i = 0; i < 10000000; i++) {

	var randNum = Math.floor(Math.random() * 3) + 1 ;

	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;




	
	switch(randNum) {
    case 1:
        x = (newX + randX + x1) / 3;
        y = (newY + randY +  y1) / 3;
        fillColor = "rgba(255,0,0," + alpha +")";
        strokeColor = "rgba(255,0,0," + alpha +")";
        break;
    case 2:
        x = (newX + randX + x2) / 3;
        y = (newY + randY +  y2) / 3;
        fillColor = "rgba(255,0,0," + alpha +")";
        strokeColor = "rgba(255,0,0," + alpha +")";
        break;
    case 3:
        x = (newX + randX + x3) / 3;
        y = (newY + randY +  y3) / 3;
        fillColor = "rgba(0,0,255," + alpha +")";
        strokeColor = "rgba(0,0,255," + alpha +")";
   		break;
    // case 4:
    // 	x = (newX + x4) / 2;
    //     y = (newY + y4) / 2;
    //     fillColor = "rgba(255,255,255," + alpha +")";
    //     strokeColor = "rgba(255,255,255," + alpha +")";
   	// 	break;
    // case 5:
    // 	x = (newX + x5) / 2;
    //     y = (newY + y5) / 2;
    //     fillColor = "rgba(0,255,0," + alpha +")";
    //     strokeColor = "rgba(0,255,0," + alpha +")";
   	// 	break;
	}

	newX = x;
	newY = y;

	ctx.beginPath();
	ctx.arc(x, y,0.1,0,2*Math.PI);
	ctx.stroke();
	ctx.strokeStyle = strokeColor;
	ctx.fillStyle = fillColor;

	// ctx.strokeStyle = "rgba(255,255,255," + alpha +")";
	// ctx.fillStyle = "rgba(255,255,255," + alpha +")";
	ctx.fill();
	}
}
///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////** SQUARE CHAOS **////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
function squareChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var x1 = 50;
	var y1 = 50 ;

	var x2 = 750;
	var y2 = 50;

	var x3 = 50;
	var y3 = 750;

	var x4 = 750;
	var y4 = 750;

	var x5 = 375;
	var y5 = 375;

	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;



	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
	var alpha = 0.05;

	for (var i = 0; i < 100000000; i++) {

			var randNum = Math.floor(Math.random() * 5) + 1 ;


			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = "rgba(255,0,0," + alpha +")";
		        strokeColor = "rgba(255,0,0," + alpha +"1)";
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor = "rgba(0,255,0," + alpha +")";
		        strokeColor = "rgba(0,255,0," + alpha +")";
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor = "rgba(0,0,255," + alpha +")";
		        strokeColor = "rgba(0,0,255," + alpha +")";
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor = "rgba(255,255,0," + alpha +")";
		        strokeColor = "rgba(255,255,0," + alpha +")";
		   		break;
	   		case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
  				fillColor = "rgba(255,0,255," + alpha +")";
		        strokeColor = "rgba(255,0,255," + alpha +")";
		   		break;
		    default:
		     
			}

			newX = x;
			newY = y;

			ctx.beginPath();
			ctx.arc(x, y,0.05,0,2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = strokeColor;
			ctx.fillStyle = fillColor;

			// ctx.strokeStyle = 'rgba(255,255,255,0.1)';
			// ctx.fillStyle = 'rgba(255,255,255,0.1)';
			ctx.fill();
	}
	

}
///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////** STAR CHAOS **////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
function starChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

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

	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;



	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
	
	for (var i = 0; i < 10000000; i++) {

			var randNum = Math.floor(Math.random() * 5) + 1 ;

			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = "rgba(255,0,0,0.05)";
		        strokeColor = "rgba(255,0,0,0.05)";
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor = "rgba(255,255,0,0.05)";
		        strokeColor = "rgba(255,255,0,0.05)";
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor = "rgba(0,255,0,0.05)";
		        strokeColor = "rgba(0,255,0,0.05)";
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor = "rgba(0,0,255,0.05)";
		        strokeColor = "rgba(0,0,255,0.05)";
		   		break;
	   		case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
		        fillColor = "rgba(255,0,255,0.05)";
		        strokeColor = "rgba(255,0,255,0.05)";
		   		break;

		     
			}

			newX = x;
			newY = y;

			ctx.beginPath();
			ctx.arc(x, y,0.2,0,2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = strokeColor;
			ctx.fillStyle = fillColor;
	        // ctx.fillStyle = "rgba(255,255,255,0.2)";
	        // ctx.strokeStyle = "rgba(255,255,255,0.2)";
			ctx.fill();
	}
	

}

function hexChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

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

	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;



	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	for (var i = 0; i < 5000000; i++) {

			var randNum = Math.floor(Math.random() *6) + 1 ;

			ctx.fillStyle = "white";
			


			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = "rgba(255,0,0,0.5)";
		        strokeColor = "rgba(255,0,0,0.5)";
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor = "rgba(255,255,0,0.5)";
		        strokeColor = "rgba(255,255,0,0.5)";
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor = "rgba(0,255,0,0.5)";
		        strokeColor = "rgba(0,255,0,0.5)";
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor = "rgba(0,255,255,0.5)";
		        strokeColor = "rgba(0,255,255,0.5)";
		   		break;
	   		case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
		        fillColor = "rgba(0,0,255,0.5)";
		        strokeColor = "rgba(0,0,255,0.5)";
		   		break;
	   		case 6:
		    	x = (newX + x6) / 2;
		        y = (newY + y6) / 2;
		        fillColor = "rgba(255,0,255,0.5)";
		        strokeColor = "rgba(255,0,255,0.5)";
		   		break;
		    default:
		     
			}

			newX = x;
			newY = y;

			ctx.beginPath();
			ctx.arc(x, y, 0.05,0,2*Math.PI);
			ctx.stroke();
			// ctx.strokeStyle = "rgba(255,255,255,0.05)";
			// ctx.fillStyle = "rgba(255,255,255,0.05)";

			ctx.strokeStyle = strokeColor;
			ctx.fillStyle = fillColor;
			ctx.fill();
	}
	

}

function septChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

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

	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;



	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	for (var i = 0; i < 10000000; i++) {

			var randNum = Math.floor(Math.random() * 7) + 1 ;

			ctx.fillStyle = "white";
			


			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = "rgba(255,0,0,0.1)";
		        strokeColor = "rgba(255,0,0,0.1)";
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor = "rgba(255,255,0,0.1)";
		        strokeColor = "rgba(255,255,0,0.1)";
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor = "rgba(0,255,0,0.1)";
		        strokeColor = "rgba(0,255,0,0.1)";
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor = "rgba(0,255,255,0.1)";
		        strokeColor = "rgba(0,255,255,0.1)";
		   		break;
	   		case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
		        fillColor = "rgba(0,0,255,0.1)";
		        strokeColor = "rgba(0,0,255,0.1)";
		   		break;
	   		case 6:
		    	x = (newX + x6) / 2;
		        y = (newY + y6) / 2;
		        fillColor = "rgba(255,0,255,0.1)";
		        strokeColor = "rgba(255,0,255,0.1)";
		   		break;
   	   		case 7:
		    	x = (newX + x7) / 2;
		        y = (newY + y7) / 2;
		        fillColor = "rgba(255,255,255,0.1)";
		        strokeColor = "rgba(255,255,255,0.1)";
		   		break;
		    default:
		     
			}

			newX = x;
			newY = y;

			ctx.beginPath();
			ctx.arc(x, y, 0.1,0,2*Math.PI);
			ctx.stroke();
			// ctx.strokeStyle = fillColor;
			// ctx.fillStyle = fillColor

			ctx.strokeStyle = "rgba(0,255,255,0.1)";
			ctx.fillStyle = "rgba(0,255,255,0.1)";
			ctx.fill();
	}
	

}

function octChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	// var x1 = 400;
	// var y1 = 20;

	// var x2 = 670;
	// var y2 = 130;

	// var x3 = 780;
	// var y3 = 400;

	// var x4 = 670;
	// var y4 = 670;

	// var x5 = 400;
	// var y5 = 780;

	// var x6 = 130;
	// var y6 = 670;

	// var x7 = 20;
	// var y7 = 400;

	// var x8 = 130;
	// var y8 = 130;

	var x1 = 0;
	var y1 = 0;

	var x2 = 800;
	var y2 = 0;

	var x3 = 0;
	var y3 = 800;

	var x4 = 800;
	var y4 = 800;

	var x5 = 200;
	var y5 = 200;

	var x6 = 200;
	var y6 = 600;

	var x7 = 600;
	var y7 = 200;

	var x8 = 600;
	var y8 = 600;

	var x9 = 400;
	var y9 = 400;



	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;



	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	var alpha = 0.05;

	for (var i = 0; i < 10000000; i++) {

			var randNum = Math.floor(Math.random() * 8) + 1 ;

			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor = "rgba(255,255,255," + alpha + ")";
		        strokeColor = "rgba(255,255,255," + alpha + ")";
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor = "rgba(0,0,0," + alpha + ")";
		        strokeColor = "rgba(0,0,0," + alpha + ")";
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		   		break;
	   		case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
		        fillColor = "rgba(255,255,0," + alpha + ")";
		        strokeColor = "rgba(255,255,0," + alpha + ")";
		   		break;
	   		case 6:
		    	x = (newX + x6) / 2;
		        y = (newY + y6) / 2;
		        fillColor = "rgba(0,255,0," + alpha + ")";
		        strokeColor = "rgba(0,255,0," + alpha + ")";
		   		break;
		   	case 7:
		    	x = (newX + x7) / 2;
		        y = (newY + y7) / 2;
		        fillColor = "rgba(255,0,255," + alpha + ")";
		        strokeColor = "rgba(255,0,255," + alpha + ")";
		   		break;
		   	case 8:
		    	x = (newX + x8) / 2;
		        y = (newY + y8) / 2;
		        fillColor = "rgba(0,255,255," + alpha + ")";
		        strokeColor = "rgba(0,255,255," + alpha + ")";
		   		break;
  		 	case 9:
		    	x = (newX + x9) / 2;
		        y = (newY + y9) / 2;
		        fillColor = "rgba(255,255,255," + alpha + ")";
		        strokeColor = "rgba(255,255,255," + alpha + ")";
		   		break;	
		     
			}

			newX = x;
			newY = y;

			ctx.beginPath();
			ctx.arc(x, y,0.2,0,2*Math.PI);
			ctx.stroke();
			// ctx.strokeStyle = "rgba(255,255,255,0.05)";
			// ctx.fillStyle = "rgba(255,255,255,0.05)";

			ctx.strokeStyle = strokeColor;
			ctx.fillStyle = fillColor;
			ctx.fill();
	}
}

function ninChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

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

	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;

	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	var alpha = 0.05;
	for (var i = 0; i < 10000000; i++) {

			var randNum = Math.floor(Math.random() *9) + 1 ;

			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor   = "rgba(0,255,0," + alpha + ")";
		        strokeColor = "rgba(0,255,0," + alpha + ")";
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor   = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		   		break;
	   		case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
		        fillColor   = "rgba(0,255,0," + alpha + ")";
		        strokeColor = "rgba(0,255,0," + alpha + ")";
		   		break;
	   		case 6:
		    	x = (newX + x6) / 2;
		        y = (newY + y6) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		   	case 7:
		    	x = (newX + x7) / 2;
		        y = (newY + y7) / 2;
		        fillColor   = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		   		break;
		   	case 8:
		    	x = (newX + x8) / 2;
		        y = (newY + y8) / 2;
		        fillColor   = "rgba(0,255,0," + alpha + ")";
		        strokeColor = "rgba(0,255,0," + alpha + ")";
		   		break;
		   	case 9:
		    	x = (newX + x9) / 2;
		        y = (newY + y9) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
    	   	case 10:
		    	x = (newX + x10) / 2;
		        y = (newY + y10) / 2;
  				fillColor   = "rgba(255,255,255," + alpha + ")";
		        strokeColor = "rgba(255,255,255," + alpha + ")";
		   		break;
		     
			}

			newX = x;
			newY = y;

			ctx.beginPath();
			ctx.arc(x, y, 0.1,0,2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = "rgba(255,255,255,0.1)";
			ctx.fillStyle = "rgba(255,255,255,0.1)";
			// ctx.strokeStyle = strokeColor;
			// ctx.fillStyle = fillColor;
			ctx.fill();
	}
}

function decChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

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

	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;

	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	var alpha = 0.05;
	for (var i = 0; i < 10000000; i++) {

			var randNum = Math.floor(Math.random() * 10) + 1 ;

			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor   = "rgba(255,255,0," + alpha + ")";
		        strokeColor = "rgba(255,255,0," + alpha + ")";
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor   = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		   		break;
	   		case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
		        fillColor   = "rgba(255,255,0," + alpha + ")";
		        strokeColor = "rgba(255,255,0," + alpha + ")";
		   		break;
	   		case 6:
		    	x = (newX + x6) / 2;
		        y = (newY + y6) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		   	case 7:
		    	x = (newX + x7) / 2;
		        y = (newY + y7) / 2;
		        fillColor   = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		   		break;
		   	case 8:
		    	x = (newX + x8) / 2;
		        y = (newY + y8) / 2;
		        fillColor   = "rgba(255,255,0," + alpha + ")";
		        strokeColor = "rgba(255,255,0," + alpha + ")";
		   		break;
		   	case 9:
		    	x = (newX + x9) / 2;
		        y = (newY + y9) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
   		   	case 10:
		    	x = (newX + x10) / 2;
		        y = (newY + y10) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		    default:
		     
			}

			newX = x;
			newY = y;

			ctx.beginPath();
			ctx.arc(x, y, 0.5,0,2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = "rgba(255,255,255,0.02)";
			ctx.fillStyle = "rgba(255,255,255,0.02)";
			// ctx.strokeStyle = strokeColor;
			// ctx.fillStyle = fillColor;
			ctx.fill();
	}
}

function elevChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

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

	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;

	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	var alpha = 0.05;
	for (var i = 0; i < 10000000; i++) {

			var randNum = Math.floor(Math.random() * 10) + 1 ;

			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor   = "rgba(255,255,0," + alpha + ")";
		        strokeColor = "rgba(255,255,0," + alpha + ")";
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor   = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		   		break;
	   		case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
		        fillColor   = "rgba(255,255,0," + alpha + ")";
		        strokeColor = "rgba(255,255,0," + alpha + ")";
		   		break;
	   		case 6:
		    	x = (newX + x6) / 2;
		        y = (newY + y6) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		   	case 7:
		    	x = (newX + x7) / 2;
		        y = (newY + y7) / 2;
		        fillColor   = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		   		break;
		   	case 8:
		    	x = (newX + x8) / 2;
		        y = (newY + y8) / 2;
		        fillColor   = "rgba(255,255,0," + alpha + ")";
		        strokeColor = "rgba(255,255,0," + alpha + ")";
		   		break;
		   	case 9:
		    	x = (newX + x9) / 2;
		        y = (newY + y9) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
   		   	case 10:
		    	x = (newX + x10) / 2;
		        y = (newY + y10) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		    default:
		     
			}

			newX = x;
			newY = y;

			ctx.beginPath();
			ctx.arc(x, y, 0.5,0,2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = "rgba(255,255,255,0.02)";
			ctx.fillStyle = "rgba(255,255,255,0.02)";
			// ctx.strokeStyle = strokeColor;
			// ctx.fillStyle = fillColor;
			ctx.fill();
	}
}

////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function twelvChaos() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

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
	///////
	var randX = Math.floor(Math.random() * 800) + 1 ;
	var randY = Math.floor(Math.random() * 800) + 1 ;

	var newX = randX;
	var newY = randY;
	var fillColor = "black";
	var strokeColor = "black";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	var alpha = 0.05;
	for (var i = 0; i < 10000000; i++) {

			var randNum = Math.floor(Math.random() * 12) + 1 ;



			switch(randNum) {
		    case 1:
		        x = (newX + x1) / 2;
		        y = (newY + y1) / 2;
		        fillColor = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		        break;
		    case 2:
		    	x = (newX + x2) / 2;
		        y = (newY + y2) / 2;
		        fillColor   = "rgba(0,255,0," + alpha + ")";
		        strokeColor = "rgba(0,255,0," + alpha + ")";
		        break;
		    case 3:
		    	x = (newX + x3) / 2;
		        y = (newY + y3) / 2;
		        fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		    case 4:
		    	x = (newX + x4) / 2;
		        y = (newY + y4) / 2;
		        fillColor   = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		   		break;
	   		case 5:
		    	x = (newX + x5) / 2;
		        y = (newY + y5) / 2;
		        fillColor   = "rgba(0,255,0," + alpha + ")";
		        strokeColor = "rgba(0,255,0," + alpha + ")";
		   		break;
	   		case 6:
		    	x = (newX + x6) / 2;
		        y = (newY + y6) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		   	case 7:
		    	x = (newX + x7) / 2;
		        y = (newY + y7) / 2;
		        fillColor   = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
		   		break;
		   	case 8:
		    	x = (newX + x8) / 2;
		        y = (newY + y8) / 2;
		        fillColor   = "rgba(0,255,0," + alpha + ")";
		        strokeColor = "rgba(0,255,0," + alpha + ")";
		   		break;
		   	case 9:
		    	x = (newX + x9) / 2;
		        y = (newY + y9) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
   		   	case 10:
		    	x = (newX + x10) / 2;
		        y = (newY + y10) / 2;
		        fillColor   = "rgba(255,0,0," + alpha + ")";
		        strokeColor = "rgba(255,0,0," + alpha + ")";
	   			break;
   		   	case 11:
		    	x = (newX + x11) / 2;
		        y = (newY + y11) / 2;
		        fillColor   = "rgba(0,255,0," + alpha + ")";
		        strokeColor = "rgba(0,255,0," + alpha + ")";
	   			break;
   		   	case 12:
		    	x = (newX + x12) / 2;
		        y = (newY + y12) / 2;
  				fillColor   = "rgba(0,0,255," + alpha + ")";
		        strokeColor = "rgba(0,0,255," + alpha + ")";
		   		break;
		    default:
		     
			}

			newX = x;
			newY = y;

			ctx.beginPath();
			ctx.arc(x, y, 0.5,0,2*Math.PI);
			ctx.stroke();
			ctx.strokeStyle = "rgba(255,255,255,0.01)";
			ctx.fillStyle   = "rgba(255,255,255,0.01)";
			// ctx.strokeStyle = strokeColor;
			// ctx.fillStyle = fillColor;
			ctx.fill();
	}
}