/*****************************************/
// Code to draw station symbols for each
// faction. A miracle of rare device!
/*****************************************/

function pattern_0(sX,sY,canvas) { // Holder
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 2*scale;
	ctx[canvas].strokeStyle = '#AAAAAA';
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-5*scale,sY+5*scale);
	ctx[canvas].lineTo(sX+5*scale,sY-5*scale);
	ctx[canvas].closePath();
	ctx[canvas].stroke();
	ctx[canvas].moveTo(sX+5*scale,sY+5*scale);
	ctx[canvas].lineTo(sX-5*scale,sY-5*scale);
	ctx[canvas].closePath();
	ctx[canvas].stroke();
}

function pattern_1(sX,sY,canvas) { // unexplored
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	var fontSize = 12*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].fillStyle = '#AAAAAA';
	ctx[canvas].fillText('?',sX,sY);
}

function pattern_2(sX,sY,canvas) { // Destroyed
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 3*scale;
	ctx[canvas].strokeStyle = '#000000';
	ctx[canvas].fillStyle = '#000000';
	arc(sX,sY,6*scale,10,90);
	arc(sX,sY,6*scale,135,170);
	arc(sX,sY,6*scale,190,270);
	arc(sX,sY,6*scale,300,340);
	ctx[canvas].lineWidth = 2*scale;
	circle(sX,sY,4*scale);
	ctx[canvas].fill();
}

function pattern_3(sX,sY,canvas) {	// Abandoned
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 3*scale;
	ctx[canvas].strokeStyle = '#323232';
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-4*scale,sY+4*scale);
	ctx[canvas].lineTo(sX+4*scale,sY-4*scale);
	ctx[canvas].closePath();
	ctx[canvas].stroke();
}

function pattern_4(sX,sY,canvas) { // Independent Stations
	canvas = 1;
	ctx[canvas].lineCap = "butt";
	ctx[canvas].strokeStyle = '#FFFFFF';
	ctx[canvas].fillStyle = '#FFFFFF';
	ctx[canvas].lineWidth = 5*scale;
	ctx[canvas].beginPath();
	arc(sX,sY,3*scale,330, 30,  canvas);
	arc(sX,sY,3*scale,60,  120, canvas);
	arc(sX,sY,3*scale,150, 210, canvas);
	arc(sX,sY,3*scale,240, 300, canvas);
	ctx[canvas].lineWidth = 1*scale;
	circle(sX,sY,3*scale, canvas);
	ctx[canvas].fill();
}

function pattern_5(sX,sY,canvas) {	// Hansa
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	// ring
	ctx[canvas].strokeStyle = '#FFFFFF';
	ctx[canvas].lineWidth = 1*scale;
	circle(sX,sY,4*scale); ctx[canvas].stroke();
	// dots
	ctx[canvas].fillStyle = '#FFFFFF';
	circle(sX,sY-4*scale,1*scale); ctx[canvas].stroke(); ctx[canvas].fill();
	circle(sX,sY+4*scale,1*scale); ctx[canvas].stroke(); ctx[canvas].fill();
	circle(sX-4*scale,sY,1*scale); ctx[canvas].stroke(); ctx[canvas].fill();
	circle(sX+4*scale,sY,1*scale); ctx[canvas].stroke(); ctx[canvas].fill();
}

function pattern_6(sX,sY,canvas) { // Red Line
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	var fontSize = 14*scale;
	ctx[canvas].font = 'normal '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#FFFF00';
	var h= '262d';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_7(sX,sY,canvas) {	// Polis
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 1*scale;
	ctx[canvas].fillStyle = '#FFFFFF';
	ctx[canvas].strokeStyle = '#FFFFFF';
	// roof
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY-5*scale);
	ctx[canvas].lineTo(sX-4*scale,sY-3*scale);
	ctx[canvas].lineTo(sX+4*scale,sY-3*scale);
	ctx[canvas].closePath();
	ctx[canvas].fill();
	// base
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-4*scale,sY+4*scale);
	ctx[canvas].lineTo(sX+4*scale,sY+4*scale);
	ctx[canvas].lineTo(sX+3*scale,sY+3*scale);
	ctx[canvas].lineTo(sX-3*scale,sY+3*scale);
	ctx[canvas].closePath();
	ctx[canvas].fill();
	// pillars
	ctx[canvas].beginPath(); ctx[canvas].moveTo(sX-2*scale,sY+2*scale); ctx[canvas].lineTo(sX-2*scale,sY-2*scale); ctx[canvas].stroke();
	ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY+2*scale); ctx[canvas].lineTo(sX,sY-2*scale); ctx[canvas].stroke();
	ctx[canvas].beginPath(); ctx[canvas].moveTo(sX+2*scale,sY+2*scale); ctx[canvas].lineTo(sX+2*scale,sY-2*scale); ctx[canvas].stroke();
}

function pattern_8(sX,sY,canvas) {	// 4th Reich
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 2*scale;
	ctx[canvas].strokeStyle = '#FFFFFF';
	ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY,canvas); ctx[canvas].lineTo(sX,sY-5*scale); ctx[canvas].lineTo(sX+4*scale,sY-4*scale); ctx[canvas].stroke();
	ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY,canvas); ctx[canvas].lineTo(sX+5*scale,sY+2*scale); ctx[canvas].lineTo(sX+3*scale,sY+5*scale); ctx[canvas].stroke();
	ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY,canvas); ctx[canvas].lineTo(sX-4*scale,sY+3*scale); ctx[canvas].lineTo(sX-5*scale,sY-1*scale); ctx[canvas].stroke();
}

function pattern_9(sX,sY,canvas) {pattern_star(sX,sY,'#FFFFFF');} // VDNKh Commonwealth

function pattern_10(sX,sY,canvas) {pattern_star(sX,sY,'#FFFFFF');} // 1905 Confederation

function pattern_11(sX,sY,canvas) {	// Emerald City
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 1*scale;
	ctx[canvas].strokeStyle = '#FFFFFF';
	ctx[canvas].fillStyle = '#FFFFFF';
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-5*scale,sY+3*scale);
	ctx[canvas].lineTo(sX+5*scale,sY+3*scale);
	ctx[canvas].lineTo(sX+5*scale,sY-1*scale);  // right tower
	ctx[canvas].lineTo(sX+4*scale,sY+1*scale);
	ctx[canvas].lineTo(sX+2*scale,sY+1*scale);
	ctx[canvas].lineTo(sX+2*scale,sY-1*scale); // central tower
	ctx[canvas].lineTo(sX+1*scale,sY-1*scale);
	ctx[canvas].lineTo(sX+1*scale,sY-2*scale);
	ctx[canvas].lineTo(sX,sY-7); // peak
	ctx[canvas].lineTo(sX-1*scale,sY-2*scale);
	ctx[canvas].lineTo(sX-1*scale,sY-1*scale);
	ctx[canvas].lineTo(sX-2*scale,sY-1*scale); // central tower
	ctx[canvas].lineTo(sX-2*scale,sY+1*scale);
	ctx[canvas].lineTo(sX-4*scale,sY+1*scale);
	ctx[canvas].lineTo(sX-5*scale,sY-1*scale); // left tower
	ctx[canvas].closePath();
	ctx[canvas].fill();
}

function pattern_12(sX,sY,canvas) {	// Collective Farms
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 1*scale;
	ctx[canvas].fillStyle = '#39980E';
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-6*scale,sY);
	ctx[canvas].lineTo(sX-5*scale,sY-1*scale);
	ctx[canvas].lineTo(sX-6*scale,sY-2*scale);
	ctx[canvas].lineTo(sX-5*scale,sY-2*scale);
	ctx[canvas].bezierCurveTo(sX-2*scale,sY-4*scale, sX+5*scale,sY-4*scale, sX+6*scale,sY);
	ctx[canvas].lineTo(sX+5*scale,sY+1*scale);
	ctx[canvas].lineTo(sX+4*scale,sY+3*scale);
	ctx[canvas].lineTo(sX+3*scale,sY+3*scale);
	ctx[canvas].lineTo(sX+3*scale,sY+2*scale);
	ctx[canvas].lineTo(sX-2*scale,sY+2*scale);
	ctx[canvas].lineTo(sX-2*scale,sY+3*scale);
	ctx[canvas].lineTo(sX-3*scale,sY+3*scale);
	ctx[canvas].lineTo(sX-3*scale,sY+2*scale);
	ctx[canvas].lineTo(sX-4*scale,sY+1*scale);
	ctx[canvas].lineTo(sX-5*scale,sY+1*scale);
	ctx[canvas].lineTo(sX-6*scale,sY+1*scale);
	ctx[canvas].closePath();
	ctx[canvas].fill();
}

function pattern_13(sX,sY,canvas) { // Baumansky
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].strokeStyle = '#1D58FF';
	ctx[canvas].lineWidth = 1*scale;
	// cog circle
	circle(sX,sY,4*scale); ctx[canvas].stroke();
	// cog pegs
	arc(sX,sY,5*scale,350,10);  // 0
	arc(sX,sY,5*scale,35,55);  // 45
	arc(sX,sY,5*scale,80,100); // 90
	arc(sX,sY,5*scale,125,145);  // 135
	arc(sX,sY,5*scale,170,190);  // 180
	arc(sX,sY,5*scale,215,235);  // 225
	arc(sX,sY,5*scale,260,280);  // 270
	arc(sX,sY,5*scale,305,325);  // 315
	// bolt
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-3*scale,sY+3*scale);
	ctx[canvas].lineTo(sX-1*scale,sY-1*scale);
	ctx[canvas].lineTo(sX,sY,canvas);
	ctx[canvas].lineTo(sX+3*scale,sY-3*scale);
	ctx[canvas].lineTo(sX+1*scale,sY+1*scale);
	ctx[canvas].lineTo(sX,sY,canvas);
	ctx[canvas].closePath();
	ctx[canvas].stroke();
}

function pattern_14(sX,sY,canvas) {	// Arbat Confederation
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	var fontSize = 12*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].fillStyle = '#FFFFFF';
	ctx[canvas].fillText('A',sX,sY);
}

function pattern_15(sX,sY,canvas) { // Pervomay Republic
canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].strokeStyle = '#FFFF00';
	ctx[canvas].fillStyle = '#FFFF00';
	ctx[canvas].lineWidth = 1*scale;

	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY-5*scale);
	ctx[canvas].lineTo(sX+1*scale,sY-4*scale);
	ctx[canvas].lineTo(sX+2*scale,sY-4*scale);
	ctx[canvas].lineTo(sX+3*scale,sY-5*scale);
	ctx[canvas].lineTo(sX+5*scale,sY-3*scale);
	ctx[canvas].lineTo(sX+4*scale,sY-2*scale);
	ctx[canvas].quadraticCurveTo(sX+5*scale,sY+2*scale, sX+4*scale,sY+4*scale);
	ctx[canvas].quadraticCurveTo(sX+2*scale,sY+4*scale, sX,sY+6*scale);
	ctx[canvas].quadraticCurveTo(sX-2*scale,sY+4*scale, sX-4*scale,sY+4*scale);
	ctx[canvas].quadraticCurveTo(sX-5*scale,sY+2*scale, sX-4*scale,sY-2*scale);
	ctx[canvas].lineTo(sX-5*scale,sY-3*scale);
	ctx[canvas].lineTo(sX-3*scale,sY-5*scale);
	ctx[canvas].lineTo(sX-2*scale,sY-4*scale);
	ctx[canvas].lineTo(sX-1*scale,sY-4*scale);
	ctx[canvas].closePath();
	ctx[canvas].fill();

	ctx[canvas].beginPath();
	ctx[canvas].strokeStyle = '#1D58FF';
	ctx[canvas].moveTo(sX-2*scale,sY+3*scale);
	ctx[canvas].lineTo(sX-2*scale,sY-2*scale);
	ctx[canvas].lineTo(sX+2*scale,sY-2*scale);
	ctx[canvas].lineTo(sX+2*scale,sY+3*scale);
	ctx[canvas].stroke();
}

function pattern_16(sX,sY,canvas) {pattern_star(sX,sY,'#000000');} // Kalinin

function pattern_17(sX,sY,canvas) {pattern_star(sX,sY,'#FFFFFF');} // Petchatniki

function pattern_18(sX,sY,canvas) {pattern_star(sX,sY,'#FFFFFF');} // Yasenevo

function pattern_19(sX,sY,canvas) {  // Human Mutants
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].fillStyle = '#CBFF00';
	ctx[canvas].strokeStyle = '#CBFF00';
	ctx[canvas].lineWidth = 1*scale;
	// circles
	circle(sX,sY+3*scale,2*scale); ctx[canvas].fill();
	circle(sX-3*scale,sY-2*scale,2*scale); ctx[canvas].fill();
	circle(sX+3*scale,sY-2*scale,2*scale); ctx[canvas].fill();
	// lines
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY+3*scale,1*scale);
	ctx[canvas].lineTo(sX-3*scale,sY-2*scale);
	ctx[canvas].lineTo(sX+3*scale,sY-2*scale);
	ctx[canvas].closePath();
	ctx[canvas].stroke();
}

function pattern_20(sX,sY,canvas) { // Great Worm
	canvas = 1;
	ctx[canvas].lineCap = 'round';
	ctx[canvas].lineWidth = 2*scale;
	ctx[canvas].strokeStyle = "#004000";
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-4*scale,sY+3*scale);
	ctx[canvas].bezierCurveTo(sX-4*scale,sY+6*scale, sX+5*scale,sY+5*scale, sX+5*scale,sY+1*scale);
	ctx[canvas].bezierCurveTo(sX+5*scale,sY-2*scale, sX-5*scale,sY+2*scale, sX-5*scale,sY-1*scale);
	ctx[canvas].bezierCurveTo(sX-5*scale,sY-4*scale, sX+3*scale,sY-5*scale, sX+4*scale,sY-3*scale);
	ctx[canvas].lineTo(sX+2*scale,sY-3*scale);
	ctx[canvas].stroke();
}

function pattern_21(sX,sY,canvas) {pattern_star(sX,sY,'#FFFF00');} // Trotskyists

function pattern_220(sX,sY,canvas) { // Gangster Hearts
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	var fontSize = 18*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#000000';
	var h= '2665';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_221(sX,sY,canvas) { // Gangster Clubs
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	var fontSize = 18*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#000000';
	var h= '2663';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_222(sX,sY,canvas) { // Gangster Diamonds
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY-6*scale);
	ctx[canvas].lineTo(sX-4*scale,sY);
	ctx[canvas].lineTo(sX,sY+6*scale);
	ctx[canvas].lineTo(sX+4*scale,sY);
	ctx[canvas].closePath();
	ctx[canvas].fillStyle = '#000000';
	ctx[canvas].fill();
}

function pattern_223(sX,sY,canvas) { // Gangster Spades
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	var fontSize = 18*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#000000';
	var h= '2660';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_224(sX,sY,canvas) { // Gangster Star
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY-6*scale);
	ctx[canvas].lineTo(sX-2*scale,sY-2*scale);
	ctx[canvas].lineTo(sX-6*scale,sY);
	ctx[canvas].lineTo(sX-2*scale,sY+2*scale);
	ctx[canvas].lineTo(sX,sY+6*scale);
	ctx[canvas].lineTo(sX+2*scale,sY+2*scale);
	ctx[canvas].lineTo(sX+6*scale,sY);
	ctx[canvas].lineTo(sX+2*scale,sY-2*scale);
	ctx[canvas].closePath();
	ctx[canvas].fillStyle = '#000000';
	ctx[canvas].fill();
}

function pattern_23(sX,sY,canvas) { // Sebastapol
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 0.5*scale;
	ctx[canvas].fillStyle = '#0000AA';
	ctx[canvas].strokeStyle = '#499EFF';

	sX = sX-2; sY = sY+1;
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY-6*scale); ctx[canvas].lineTo(sX+3*scale,sY); ctx[canvas].bezierCurveTo(sX+3*scale,sY+7,  sX-3*scale,sY+7,  sX-3*scale,sY);
	ctx[canvas].closePath();
	ctx[canvas].fill();

	sX = sX+5; sY = sY+1;
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY-6*scale); ctx[canvas].lineTo(sX+3*scale,sY); ctx[canvas].bezierCurveTo(sX+3*scale,sY+7,  sX-3*scale,sY+7,  sX-3*scale,sY);
	ctx[canvas].closePath();
	ctx[canvas].fill();
	ctx[canvas].stroke();
}

function pattern_24(sX,sY,canvas) { // Occupied by Mutants
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].fillStyle = '#CBFF00';
	circle(sX,        sY-3*scale,2*scale,canvas); ctx[canvas].fill();
	circle(sX-3*scale,sY+2*scale,2*scale,canvas); ctx[canvas].fill();
	circle(sX+3*scale,sY+2*scale,2*scale,canvas); ctx[canvas].fill();
}

function pattern_25(sX,sY,canvas) { // Satanists
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 1*scale;
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY+4*scale);
	ctx[canvas].lineTo(sX+3*scale,sY-4*scale);
	ctx[canvas].lineTo(sX-4*scale,sY+1*scale);
	ctx[canvas].lineTo(sX+4*scale,sY+1*scale);
	ctx[canvas].lineTo(sX-3*scale,sY-4*scale);
	ctx[canvas].closePath();
	ctx[canvas].strokeStyle = "#FF0000";
	ctx[canvas].stroke();
}

function pattern_26(sX,sY,canvas) { // Jehovas Witnesses
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 2*scale;
	ctx[canvas].strokeStyle = "#000000";

	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY-6*scale);
	ctx[canvas].lineTo(sX,sY+7*scale);
	ctx[canvas].closePath();
	ctx[canvas].stroke();

	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-4.5*scale,sY-1*scale);
	ctx[canvas].lineTo(sX+4.5*scale,sY-1*scale);
	ctx[canvas].closePath();
	ctx[canvas].stroke();

	ctx[canvas].strokeStyle = "#444444";

	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-10*scale,sY);
	ctx[canvas].lineTo(sX-26*scale,sY);
	ctx[canvas].stroke();

	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-26*scale,sY);
	ctx[canvas].lineTo(sX-23*scale,sY-3*scale);
	ctx[canvas].lineTo(sX-23*scale,sY+3*scale);
	ctx[canvas].closePath();
	ctx[canvas].stroke();

}

function pattern_27(sX,sY,canvas) {	// Flooded
	canvas = 1;
	ctx[canvas].lineCap = 'butt';

	ctx[canvas].lineWidth = 3*scale;
	ctx[canvas].strokeStyle = '#35A6BA';
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX+4*scale,sY+4*scale);
	ctx[canvas].lineTo(sX-4*scale,sY-4*scale);
	ctx[canvas].closePath();
	ctx[canvas].stroke();
}

function pattern_28(sX,sY,canvas) { // Anarchists
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 1*scale;

	// override background
	ctx[canvas].fillStyle = '#888888';
	circle(sX,sY,station_radius*scale,canvas);
	ctx[canvas].fill();

	// draw symbol
	ctx[canvas].strokeStyle = '#FF0000';
	circle(sX,sY,4*scale);
	ctx[canvas].moveTo(sX-1*scale,sY-6*scale);ctx[canvas].lineTo(sX+5*scale,sY+5*scale);
	ctx[canvas].moveTo(sX+2*scale,sY-6*scale);ctx[canvas].lineTo(sX-5*scale,sY+4*scale);
	ctx[canvas].moveTo(sX-6*scale,sY+1*scale);ctx[canvas].lineTo(sX+6*scale,sY+2*scale);ctx[canvas].stroke();
}

function pattern_29(sX,sY,canvas) { // Europe
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].fillStyle = '#FFCC00';
	circle(sX, sY-5*scale,1*scale,canvas); ctx[canvas].fill();
	circle(sX, sY+5*scale,1*scale,canvas); ctx[canvas].fill();
	circle(sX+5*scale, sY,1*scale,canvas); ctx[canvas].fill();
	circle(sX-5*scale, sY,1*scale,canvas); ctx[canvas].fill();

	circle(sX+3.5*scale, sY-3.5*scale,1*scale,canvas); ctx[canvas].fill();
	circle(sX+3.5*scale, sY+3.5*scale,1*scale,canvas); ctx[canvas].fill();
	circle(sX-3.5*scale, sY-3.5*scale,1*scale,canvas); ctx[canvas].fill();
	circle(sX-3.5*scale, sY+3.5*scale,1*scale,canvas); ctx[canvas].fill();
}

function pattern_30(sX,sY,canvas) { // Skaven CCC
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	var fontSize = 14*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#FF0302';
	var h= '2623';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_31(sX,sY,canvas) { // Skaven Emirate
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	var fontSize = 12*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#02FF03';
	var h= '127769';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_51(sX,sY,canvas) { // Krishnas
canvas = 1;
	// override background
	ctx[canvas].fillStyle = '#FF8800';
	circle(sX,sY,station_radius*scale,canvas);
	ctx[canvas].fill();

	ctx[canvas].lineCap = 'butt';
	ctx[canvas].fillStyle = '#7F007F';
	var fontSize = 12*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	var h= '0950';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY+1*scale);
}



function pattern_star(sX,sY,colorFill,canvas) { // Generic Star
	canvas = 1;
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY-6*scale);
	ctx[canvas].lineTo(sX+4*scale,sY+5*scale);
	ctx[canvas].lineTo(sX-6*scale,sY-2*scale);
	ctx[canvas].lineTo(sX+6*scale,sY-2*scale);
	ctx[canvas].lineTo(sX-4*scale,sY+5*scale);
	ctx[canvas].lineTo(sX,sY-6*scale);
	ctx[canvas].closePath();
	ctx[canvas].fillStyle = colorFill;
	ctx[canvas].fill();
}
