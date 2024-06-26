const FMA1l1text = 'SPEED';
const FMA1l2text = '';
const FMA1l3text = '';
const FMA2l1text = 'G/S';
const FMA2l2text = '';
const FMA2l3text = '';
const FMA3l1text = 'LOC';
const FMA3l2text = '';
const FMA3l3text = '';
const FMA4l1text = 'CAT3';
const FMA4l2text = 'DUAL';
const FMA4l3text = '';
const FMA5l1text = 'AP1+2';
const FMA5l2text = '1 FD 2';
const FMA5l3text = 'A/THR';
const pressureL1text = 'QNH 1013';
const NAVPFDl1text = 'IMED';
const NAVPFDl2text = '111.10';
const NAVPFDl3text = '57NM';
let variableChanged = '';
let celdaEditada = '';


const FMAfont = '50px "Andale Mono", monospace';
const FMAfontWeight = 100;
const pressureFont = '35px "Andale Mono", monospace';
const NAVPFDfont = '40px "Andale Mono", monospace';
const altIndicatorFont = '80px "Andale Mono", monospace';
const altIndicatorTenthsFont = '50px "Andale Mono", monospace';
const VSIfont = '72px "Andale Mono", monospace';
const ASIfont = '90px "Andale Mono", monospace';
const ASIfontWeight = 200;
const wayptFont = '90px "Andale Mono", monospace';




const t1 = 'SPEED';
const t11 = 'SPEED1';
//const t2 = 'ASI';
const t3 = 'HDG';
const t4 = 'VSI';
const t41 = 'V';
const t42 = 'S';
const t43 = 'I';
const t5 = 'AH';
//const t6 = 'ALT';

var a = -1;

const QUASApopup = document.getElementById('QUASA');
var QUASAstatementPlaceholder = document.getElementById('QUASAstatementPlaceholder');
const valoresBotones = ["Très faible", "Faible", "Neutral", "Élevé", "Très élevé"];
const contenedorBotones = document.getElementById("contenedorNivelConfianza");
let QUASAconfidence = null;
let botones=[];
let timeNiveauConfianceQUASA = null; timePremiereSelectionNiveauConfianceQUASA = null;
  /*var etiquetasNiveles = ["Très faible", "Faible", "Neutral", "Élevé", "Très élevé"];

  // Event listener para el cambio en el slider
  document.getElementById('nivConfiance').addEventListener('input', function() {
    var valorNivelConfianza = document.getElementById('nivConfiance').value;
    var etiquetaNivelConfianza = etiquetasNiveles[valorNivelConfianza - 1];
    document.getElementById('valorNivelConfiance').textContent = etiquetaNivelConfianza;
  });*/

    function asignarNivelConfianza(nivel,boton1) {
        QUASAconfidence = nivel;
        console.log("Nivel de confianza seleccionado:", QUASAconfidence);

        botones.forEach(boton => {
        	boton.classList.remove("seleccionado");
    	});
    		// Marcar el botón seleccionado
    	boton1.classList.add("seleccionado");
    }

    valoresBotones.forEach(valor => {
        const boton = document.createElement("button");
        boton.textContent = valor;
        boton.addEventListener("click", function() {
            asignarNivelConfianza(valor,boton);
            timeNiveauConfianceQUASA = Date.now();
            if (timePremiereSelectionNiveauConfianceQUASA === null){
            	timePremiereSelectionNiveauConfianceQUASA = timeNiveauConfianceQUASA;
            }
        });
        contenedorBotones.appendChild(boton);
        botones.push(boton);
    });

function changeQUASAstatement(frase) {
    QUASAstatementPlaceholder.textContent = frase;
}

const notificationFont = ' 70px "Andale Mono", monospace';
const notificationFont2 = 'bold 70px "Andale Mono", monospace';

function CSnotificationBoxTextGenerator(text1, text2){
	ctxNotificationBoxCS.clearRect(0, 0, notificationBoxCS.width, notificationBoxCS.height);
	ctxNotificationBoxCS.font = notificationFont;
	ctxNotificationBoxCS.fontWeight = 100;
	var textWidth = ctxNotificationBoxCS.measureText(text1).width;
	var x = notificationBoxCS.width/2 - textWidth/2;
	var y = 40;
	ctxNotificationBoxCS.fillStyle = 'white';
	ctxNotificationBoxCS.fillText(text1,x,100);
	ctxNotificationBoxCS.font = notificationFont;
	var textWidth = ctxNotificationBoxCS.measureText(text2).width;
	var x = notificationBoxCS.width/2 - textWidth/2;
	ctxNotificationBoxCS.fillStyle = 'white';
	ctxNotificationBoxCS.fillText(text2,x,180);
}

function FMAtextGenerator(){

	ctxFMA1.font = FMAfont;
	ctxFMA1.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA1.measureText(FMA1l1text).width;
	var x = (FMA1.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA1.fillStyle = 'lime';
	ctxFMA1.fillText(FMA1l1text,x,y);

	ctxFMA2.font = FMAfont;
	ctxFMA2.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA2.measureText(FMA2l1text).width;
	var x = (FMA2.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA2.fillStyle = 'lime';
	ctxFMA2.fillText(FMA2l1text,x,y);

	ctxFMA3.font = FMAfont;
	ctxFMA3.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA3.measureText(FMA3l1text).width;
	var x = (FMA3.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA3.fillStyle = 'lime';
	ctxFMA3.fillText(FMA3l1text,x,y);

	ctxFMA4.font = FMAfont;
	ctxFMA4.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA4.measureText(FMA4l1text).width;
	var x = (FMA4.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA4.fillStyle = 'white';
	ctxFMA4.fillText(FMA4l1text,x,y);
	var textWidth = ctxFMA4.measureText(FMA4l2text).width;
	var x = (FMA4.width / 2) - textWidth/2;
	var y = 2*40+10;
	ctxFMA4.fillStyle = 'white';
	ctxFMA4.fillText(FMA4l2text,x,y);

	ctxFMA5.font = FMAfont;
	ctxFMA5.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA5.measureText(FMA5l1text).width;
	var x = (FMA5.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA5.fillStyle = 'white';
	ctxFMA5.fillText(FMA5l1text,x,y);
	var textWidth = ctxFMA5.measureText(FMA5l2text).width;
	var x = (FMA5.width / 2) - textWidth/2;
	var y = 2*40+10;
	ctxFMA5.fillStyle = 'white';
	ctxFMA5.fillText(FMA5l2text,x,y);
	var textWidth = ctxFMA5.measureText(FMA5l3text).width;
	var x = (FMA5.width / 2) - textWidth/2;
	var y = 3*40+2*10;
	ctxFMA5.fillStyle = 'white';
	ctxFMA5.fillText(FMA5l3text,x,y);


/*ctxASI.font = '60px "Lucida Console", monospace';
var textWidth2 = ctxASI.measureText(t2).width;
var x2 = (ASI.width / 2) - textWidth2/2;
var y2 = ASI.height / 2;
ctxASI.fillStyle = 'white';
ctxASI.fillText(t2,x2,y2);
//ctxAH.font = '30px Arial';
//var textWidth3 = ctxAH.measureText(t5).width;
//var x3 = (AH.width / 2) - textWidth3/2;
//var y3 = AH.height / 2;
//ctxAH.fillStyle = 'white';
//ctxAH.fillText(t5,x3,y3);
ctxHDG.font = '30px "Lucida Console", monospace';
var textWidth4 = ctxHDG.measureText(t3).width;
var x4 = (HDG.width / 2) - textWidth4/2;
var y4 = HDG.height / 2;
ctxHDG.fillStyle = 'white';
ctxHDG.fillText(t3,x4,y4);
/*ctxVSI.font = '60px Arial';
var textWidth5 = ctxVSI.measureText(t4).width;
var x5 = (VSI.width / 2) - 2*textWidth5/2;
var y5 = VSI.height/2;
ctxVSI.fillStyle = 'white';
ctxVSI.textAlign = 'left';
ctxVSI.fillText(t41,x5,y5-35);
ctxVSI.fillText(t42,x5,y5+15);
ctxVSI.fillText(t43,x5,y5+65); 
ctxALT.font = '100 60px "Lucida Console", monospace';
var textWidth = ctxALT.measureText(t6).width;
var x = (ALT.width / 2) - textWidth/2;
var y = ALT.height / 2;
ctxALT.fillStyle = 'white';
ctxALT.fillText(t6,x,y);*/


/*ctxVSItext.font = '60px "Lucida Console", monospace';
var textWidth5 = ctxVSItext.measureText(t4).width;
var x5 = (VSI.width / 2) - 2*textWidth5/2;
var y5 = VSI.height/2;
ctxVSItext.fillStyle = 'white';
ctxVSItext.textAlign = 'left';
ctxVSItext.fillText(t41,x5,y5-35);
ctxVSItext.fillText(t42,x5,y5+15);
ctxVSItext.fillText(t43,x5,y5+65);*/

};

function pressureTextGenerator(){
	ctxPressure.font = pressureFont;
	ctxPressure.fontWeight = FMAfontWeight;
	var textWidth = ctxPressure.measureText(pressureL1text).width;
	var x = 0*((pressure.width / 2) - textWidth/2)+10;
	var y = 45;
	ctxPressure.fillStyle = 'cyan';
	ctxPressure.fillText(pressureL1text,x,y);
};

function NAVPFDtextGenerator(){
	ctxNAVPFD.font = NAVPFDfont;
	ctxNAVPFD.fontWeight = FMAfontWeight;
	var textWidth = ctxNAVPFD.measureText(NAVPFDl1text).width;
	var x = 0*((NAVPFD.width / 2) - textWidth/2)+50;
	var y = 45;
	ctxNAVPFD.fillStyle = 'fuchsia';
	ctxNAVPFD.fillText(NAVPFDl1text,x,y);
	var textWidth = ctxNAVPFD.measureText(NAVPFDl2text).width;
	var x = 0*((NAVPFD.width / 2) - textWidth/2)+50;
	var y = NAVPFD.height*1/3+25;
	ctxNAVPFD.fillStyle = 'fuchsia';
	ctxNAVPFD.fillText(NAVPFDl2text,x,y);
	var textWidth = ctxNAVPFD.measureText(NAVPFDl3text).width;
	var x = NAVPFD.width - textWidth-40;
	var y = NAVPFD.height*2/3+5;
	ctxNAVPFD.fillStyle = 'fuchsia';
	ctxNAVPFD.fillText(NAVPFDl3text,x,y);
}

function resetCase2(){
	variableChanged = '';
	celdaEditada = '';
}

function resetCase(canvasWaypt1PositionTop,canvasWaypt1PositionLeft,canvasWaypt2PositionTop,canvasWaypt2PositionLeft){
	variableChanged = '';
	celdaEditada = '';

	let avionNDdifferenceY = avionNDinitialPositionTop - canvasAvionND.offsetTop;
  	let avionNDdifferenceX = avionNDinitialPositionLeft - canvasAvionND.offsetLeft;
  	canvasAvionND.style.transform = `translate(${avionNDdifferenceX}px, ${avionNDdifferenceY}px)`;
  	startX = 0;
  	startY = 0;
  	canvasAvionNDX = 0;
  	canvasAvionNDY = 0;

  	let canvasWaypt1differenceY = canvasWaypt1PositionTop - canvasWaypt1.offsetTop;
  	let canvasWaypt1differenceX = canvasWaypt1PositionLeft - canvasWaypt1.offsetLeft;
  	console.log('Reset',canvasWaypt1PositionTop,canvasWaypt1PositionLeft);
  	canvasWaypt1.style.transform = `translate(${canvasWaypt1differenceX}px, ${canvasWaypt1differenceY}px)`;
  	startX = 0;
  	startY = 0;
  	canvasWaypt1X = 0;
  	canvasWaypt1Y = 0;

  	let canvasWaypt2differenceY = canvasWaypt2PositionTop - canvasWaypt2.offsetTop;
  	let canvasWaypt2differenceX = canvasWaypt2PositionLeft - canvasWaypt2.offsetLeft;
  	canvasWaypt2.style.transform = `translate(${canvasWaypt2differenceX}px, ${canvasWaypt2differenceY}px)`;
  	startX = 0;
  	startY = 0;
  	canvasWaypt2X = 0;
  	canvasWaypt2Y = 0;


}

function drawVSI(){
	ctxVSI.beginPath();
	ctxVSI.moveTo(0,0);
	ctxVSI.lineTo(VSI.width/2,0);
	ctxVSI.lineTo(VSI.width,VSI.height/6);
	ctxVSI.lineTo(VSI.width,VSI.height*5/6);
	ctxVSI.lineTo(VSI.width/2,VSI.height);
	ctxVSI.lineTo(0,VSI.height);
	ctxVSI.closePath();
	ctxVSI.strokeStyle = 'rgb(150, 150, 150)';
	ctxVSI.lineWidth = 10;
	ctxVSI.stroke();
	ctxVSI.fillStyle = 'rgb(150, 150, 150)';
	ctxVSI.fill();
}

function drawAltIndicatorBox(){
	ctxAltIndicator.beginPath();
	ctxAltIndicator.moveTo(-4,altIndicator.height/5);
	ctxAltIndicator.lineTo(altIndicator.width*2/3,altIndicator.height/5);
	ctxAltIndicator.lineTo(altIndicator.width*2/3,4);
	ctxAltIndicator.lineTo(altIndicator.width-4,4);
	ctxAltIndicator.lineTo(altIndicator.width-4,altIndicator.height-4);
	ctxAltIndicator.lineTo(altIndicator.width*2/3,altIndicator.height-4);
	ctxAltIndicator.lineTo(altIndicator.width*2/3,altIndicator.height*4/5);
	ctxAltIndicator.lineTo(-4,altIndicator.height*4/5);
	ctxAltIndicator.closePath();
	ctxAltIndicator.strokeStyle = 'yellow';
	ctxAltIndicator.lineWidth = 8;
	ctxAltIndicator.stroke();
	ctxAltIndicator.fillStyle = 'black';
	ctxAltIndicator.fill();
}


function drawVSIindicatorBox(vertSpeed){
	// Falta la condición de que la ROC>200ft/min para que se dibuje la caja (?)
	ctxVSI.beginPath();
	var yBox = (vertSpeed-4000)/8000*-1;
	ctxVSI.moveTo(VSI.width*1/3-0.5,VSI.height*yBox-2.75*10.5);
	ctxVSI.lineTo(VSI.width,VSI.height*yBox-2.75*10.5);
	ctxVSI.lineTo(VSI.width,VSI.height*yBox+2.75*10.5);
	ctxVSI.lineTo(VSI.width*1/3-0.5,VSI.height*yBox+2.75*10.5);
	ctxVSI.closePath();
	//ctxAltIndicator.strokeStyle = 'yellow';
	//ctxAltIndicator.lineWidth = 8;
	ctxVSI.stroke();
	ctxVSI.fillStyle = 'black';
	ctxVSI.fill();
	VSItextGenerator(vertSpeed)
}

function VSItextGenerator(vertSpeed){
	ctxVSI.font = VSIfont;
	ctxVSI.fontWeight = FMAfontWeight;
	var vertSpeedString = (Math.abs(vertSpeed)/100).toString();
	if (Math.abs(vertSpeed/100) < 10){
		vertSpeedString = '0'+vertSpeedString;
	}
	var textWidth = ctxVSI.measureText(vertSpeedString).width;
	var x = VSI.width*1/3;
	var yBox = (vertSpeed-4000)/8000*-1;
	var y = VSI.height*yBox+2.5*10;
	if (Math.abs(vertSpeed)<=3500){
		ctxVSI.fillStyle = 'lime';
	} else{
		ctxVSI.fillStyle = 'orange';
	}
	
	ctxVSI.fillText(vertSpeedString,x,y);
}


function altitudeTextGenerator(altitude,color){
	ctxAltIndicator.clearRect(0, 0, altIndicator.width, altIndicator.height);
	drawAltIndicatorBox();
	var altitudeInt = Math.floor(altitude/100);
	var altitudeTenths = altitude - altitudeInt*100;
	var altitudeIntString = altitudeInt.toString();
	var altitudeTenthsString = altitudeTenths.toString();
	var altitudeTenthsStringl1 = (altitudeTenths-10).toString();
	if (altitudeTenths == 90){
		var altitudeTenthsStringl3 = '00';
	} else {
		var altitudeTenthsStringl3 = (altitudeTenths+10).toString();
	}

	if (altitudeTenthsString == "0") {
  		altitudeTenthsString = '00';
  		altitudeTenthsStringl1 = '90';
	} else if (altitudeTenthsStringl1 == "0") {
  		altitudeTenthsStringl1 = '00';
	} else if (altitudeTenthsStringl3 == "0") {
  		altitudeTenthsStringl3 = '00';
	}

	ctxAltIndicator.font = altIndicatorFont;
	ctxAltIndicator.fontWeight = FMAfontWeight;
	var textWidth = ctxAltIndicator.measureText(altitudeIntString).width;
	var x = ALT.width/2 - textWidth/1.8;
	var y = altIndicator.height*3/5 + 5;
	ctxAltIndicator.fillStyle = color; //lime
	ctxAltIndicator.fillText(altitudeIntString,x,y);
	// Tenths
	ctxAltIndicator.font =altIndicatorTenthsFont;
	var textWidth = ctxAltIndicator.measureText(altitudeTenthsString).width;
	var x = altIndicator.width*2/3;
	var y = altIndicator.height*3/5 + 5;
	ctxAltIndicator.fillStyle = color; //lime
	ctxAltIndicator.fillText(altitudeTenthsString,x,y-5);
	ctxAltIndicator.fillText(altitudeTenthsStringl1,x,y-50);
	ctxAltIndicator.fillText(altitudeTenthsStringl3,x,y+40);
}

function processAltValue(value) {
  console.log('Valor introducido:', value);
  altitudeTextGenerator(value,'lime');
};




altIndicator.addEventListener('click', function () {
if(waypointChoisi != -1 && condition == 3 && (variableChanged == '' || variableChanged == 'ALT')){

  const inputValue = prompt('Introduce altitude value:');
  if (inputValue <= 99990 && inputValue >= 10){
  	const alt = Math.round(inputValue / 10) * 10;
  	processAltValue(alt);
  	variableChanged = 'ALT';
  } else {
  	alert('La valeur introduite pour l\'altitude n\'est pas valide. Svp introduisez une valeur valide.');
  }
  } else if (waypointChoisi != -1 && condition == 3 && (variableChanged != '' || variableChanged != 'ALT')) {
		alert("Vous avez déjà modifié un facteur, veuillez réinitialiser le cas pour pouvoir modifier un autre facteur.");
	}
});




/*	if(waypointChoisi == -1) {
		const message = 'Voulez-vous choisir le waypoint 1?';
		const result = confirm(message);
	

		if (result) {
  			waypointChoisi = 1;
  			showButtonsContrefacutel();
		} else {
	}} else if (wasDragged == true) {
		wasDragged = false;
	}
});

waypt2.addEventListener('click', function () {
	if(waypointChoisi == -1) {
	const message = 'Voulez-vous choisir le waypoint 2?';
	const result = confirm(message);

	if (result) {
  		waypointChoisi = 2;
  		showButtonsContrefacutel();
	} else {
  		
	}
}
});*/

function processVSIValue(value){
	ctxVSI.clearRect(0, 0, VSI.width, VSI.height);
	drawVSI();
	drawVSIindicatorBox(value);
	VSItextGenerator(value);
	console.log('Valor', value);
}

VSI.addEventListener('click', function () {
	if(waypointChoisi != -1 && condition == 3){
	console.log('Sabe que he clicado');
  const inputValue = prompt('Introduce vertical speed value:');
  if (inputValue <= 4000 && inputValue >= -4000){
  	const vertSpeed = Math.round(inputValue / 10) * 10;
  	processVSIValue(vertSpeed);
  } else {
  	alert('La valeur introduite pour la vitesse verticale n\'est pas valide. Svp introduisez une valeur entre -4000 et 4000.');
  }
  }
});

function divisionGenerator(canvas,ctx,numberOfDivisions){
	const segmentHeight = canvas.height/numberOfDivisions;
	ctx.lineWidth = 2*4;  
    ctx.strokeStyle = "white";  

	for (var x=segmentHeight; x <= canvas.height-segmentHeight; x += segmentHeight) {
		ctx.beginPath();
		ctx.moveTo(canvas.width*4/5, x);
		ctx.lineTo(canvas.width,x);
		ctx.stroke();
	}
}

function horizontalDivisionGenerator(canvas,ctx,numberOfDivisions){
	const segmentWidth = canvas.width/numberOfDivisions;
	ctx.lineWidth = 2;  
    ctx.strokeStyle = "white";  

	for (var x=0; x <= canvas.width-segmentWidth; x += segmentWidth) {
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.lineTo(x,canvas.height*2/5);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(x+segmentWidth/2, 0);
		ctx.lineTo(x+segmentWidth/2,canvas.height*1/5);
		ctx.stroke();
	}
}

function ASItextGenerator(ASIvalue){
	ctxASI.clearRect(0, 0, ASI.width, ASI.height);
	divisionGenerator(ASI,ctxASI,8);
	ctxASI.font = ASIfont;
	ctxASI.fontWeight = ASIfontWeight;
	var ASIString = (ASIvalue).toString();
	var textWidth = ctxASI.measureText(ASIString).width;
	var x = ASI.width*0/3;
	var y = ASI.height/2+2.5*10;
	ctxASI.fillStyle = 'white';
	ctxASI.fillText(ASIString,x,y);
	var ASIl1 = ASIvalue - 20;
	var ASIl1String = ASIl1.toString();
	var x = ASI.width*0/3;
	var y = ASI.height/2+2.5*10*4.5+2*ASI.height/11;
	ctxASI.fillStyle = 'white';
	ctxASI.fillText(ASIl1String,x,y);
	var ASIl3 = ASIvalue + 20;
	var ASIl3String = ASIl3.toString();
	var x = ASI.width*0/3;
	var y = ASI.height/2-2.5*10*2.5-2*ASI.height/11;
	ctxASI.fillStyle = 'white';
	ctxASI.fillText(ASIl3String,x,y);
}

function processASIValue(value){
	ASItextGenerator(value);
}

/*ASI.addEventListener('click', function () {
	if(waypointChoisi != -1 && condition == 3){
	console.log('Sabe que he clicado');
  const inputValue = prompt('Introduce airspeed value:');
  if (inputValue <= 9990 && inputValue >= 10){
  	const ASIvalue = Math.round(inputValue / 10) * 10;
  	processASIValue(ASIvalue);
  } else {
  	alert('La valeur introduite pour la vitesse n\'est pas valide. Svp introduisez une valeur valide.');
  }
}
});*/

function getColor(colorValue) {
  if (colorValue === 1) {
    return 'green';
  } else if (colorValue === 2) {
    return 'yellow';
  } else if (colorValue === 3) {
    return 'red';
  }
  return 'black'; 
}

function cellGenerator(jsonFileName){
	fetch(jsonFileName)
    	.then(response => response.json())
    	.then(data => processData(data));

    for (const item of data) {
    	const x = ND.width * item.x;
    	const y = ND.height * item.y;
    	const colorValue = item.color;

    	ctxND.beginPath();
    	ctxND.arc(x, y, 5, 0, Math.PI * 2); 
    	ctxND.fillStyle = getColor(colorValue); 
    	ctxND.fill();
    	ctxND.closePath();
  	}
}

function generateWaypoint(x,y) {
	x1 = ND.width*x;
	y1 = ND.height*y;
	ctxND.beginPath();
    ctxND.moveTo(x1-40,y1); 
    ctxND.lineTo(x1,y1+60);
    ctxND.lineTo(x1+40,y1);
    ctxND.lineTo(x1,y1-60);
	ctxND.closePath();
	ctxND.strokeStyle = 'red';
	ctxND.lineWidth = 10;
	ctxND.stroke();
	ctxND.fill();
}

function drawWaypoints(colorWp1,colorWp2){
	x1 = waypt1.width;
	y1 = waypt1.height;
	x2 = waypt2.width;
	y2 = waypt2.height;
	ctxWaypt1.beginPath();
    ctxWaypt1.moveTo(x1/4-20,y1/2); 
    ctxWaypt1.lineTo(x1/2,y1/4-30);
    ctxWaypt1.lineTo(x1*3/4+20,y1/2);
    ctxWaypt1.lineTo(x1/2,y1*3/4+30);
	ctxWaypt1.closePath();
	ctxWaypt1.fillStyle = "black"; // Color negro para el relleno
    ctxWaypt1.fill(); // Llenar el interior del rombo con color negro
	ctxWaypt1.strokeStyle = colorWp1;
	ctxWaypt1.lineWidth = 10;
	ctxWaypt1.stroke();
	//ctxWaypt1.fill();

	ctxWaypt1.font = wayptFont;
	ctxWaypt1.fontWeight = ASIfontWeight;
	var waypt1Tag = '1';
	ctxWaypt1.fillStyle = colorWp1;
	ctxWaypt1.fillText(waypt1Tag,x1/2-25,y1*3/4 - 35);


	ctxWaypt2.beginPath();
    ctxWaypt2.moveTo(x2/4-20,y2/2); 
    ctxWaypt2.lineTo(x2/2,y2/4-30);
    ctxWaypt2.lineTo(x2*3/4+20,y2/2);
    ctxWaypt2.lineTo(x2/2,y2*3/4+30);
	ctxWaypt2.closePath();
	ctxWaypt2.fillStyle = "black"; // Color negro para el relleno
    ctxWaypt2.fill(); // Llenar el interior del rombo con color negro
	ctxWaypt2.strokeStyle = colorWp2;
	ctxWaypt2.lineWidth = 10;
	ctxWaypt2.stroke();
	//ctxWaypt2.fill();

	ctxWaypt2.font = wayptFont;
	ctxWaypt2.fontWeight = ASIfontWeight;
	var waypt2Tag = '2';
	ctxWaypt2.fillStyle = colorWp2;
	ctxWaypt2.fillText(waypt2Tag,x1/2-25,y1*3/4 - 35);
}

function compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS,currentImage,caso){
	let datosGuardar = {"Timestamp": Date.now(), 
	"Participant": numParticipant, 
	"Participant CS": participantCS, 
	"Session": session, 
	"Condition": condition,
	"Cas": caso,
	"Numero de cas": currentImage,
	"Presentation cas": timeStampPresentacionCaso, 
	"Waypoint Choisi": waypointChoisi, 
	"Waypoint Initial": waypointChoisiInitialement, 
	"Recommendation CS": recomendacionCS};
	feautresGuardar = calculadoraVariablesCS(currentImage);
	globalGuardar = Object.assign({}, datosGuardar, feautresGuardar);
	return globalGuardar;
}

function waitForButtonClick() {
  return new Promise((resolve, reject) => {
    // Agregar listeners de eventos a los botones
    document.getElementById('accepterRecommandationCS').addEventListener('click', () => resolve('accepted'));
    document.getElementById('rejeterRecommandationCS').addEventListener('click', () => resolve('rejected'));
  });
}

function mostrarBoxNotification(){
notificationBoxCS.style.display = '';
accepterRecommandationCS.style.display = '';
rejeterRecommandationCS.style.display = '';
buttonParDessus.style.display = 'none';
buttonsansChangement.style.display = 'none';
buttonOption1.style.display = 'none';
buttonOption2.style.display = 'none';
}

async function esperaBotonesRecomendacionCS() {
  // console.log('Mostrando los botones...');
  
  mostrarBoxNotification();

  //console.log('Esperando que el usuario haga clic en uno de los botones...');
  const botonPresionado = await waitForButtonClick();
  //console.log(`El usuario ha presionado el botón: ${botonPresionado}`);
  buttonParDessus.style.display = '';
  buttonsansChangement.style.display = '';
  buttonOption1.style.display = '';
  buttonOption2.style.display = '';
  return botonPresionado;
}

function ocultarBoxNotification(){
notificationBoxCS.style.display = 'none';
accepterRecommandationCS.style.display = 'none';
rejeterRecommandationCS.style.display = 'none';
}

/*function editCellMatrizCorrelacion(e){//, waypointChoisi, condition, variableChanged){


	const cell = e.target;
	const input = document.createElement("input");
	
	input.value = cell.textContent;
	var a = cell.textContent;

	cell.textContent = '';
	cell.appendChild(input);

	input.focus();

	input.addEventListener("blur", () => {
		cell.textContent = input.value;
		return true;
	});

	input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
      cell.textContent = input.value; 
      input.blur();


      return true;
      
    } else if (e.key === "Escape") {
    	input.blur();
    	cell.textContent = a;
    	return false;
    }

  });
}*/