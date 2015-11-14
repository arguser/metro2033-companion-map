/*****************************************/
// Code to draw station symbols for each
// faction. A miracle of rare device!
/*****************************************/

function pattern_0(sX,sY,canvas=1) { // Holder
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

function pattern_1(sX,sY,canvas=1) { // unexplored
	ctx[canvas].lineCap = 'butt';
	var fontSize = 12*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].fillStyle = '#AAAAAA';
	ctx[canvas].fillText('?',sX,sY);
} 

function pattern_2(sX,sY,canvas=1) { // Destroyed
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

function pattern_3(sX,sY,canvas=1) {	// Abandoned
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 3*scale;
	ctx[canvas].strokeStyle = '#323232';
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX-4*scale,sY+4*scale);
	ctx[canvas].lineTo(sX+4*scale,sY-4*scale);
	ctx[canvas].closePath();
	ctx[canvas].stroke();
}

function pattern_4(sX,sY,canvas=1) { // Independent Stations
	ctx[canvas].lineCap = "butt";
	ctx[canvas].strokeStyle = '#FFFFFF';
	ctx[canvas].fillStyle = '#FFFFFF';
	ctx[canvas].lineWidth = 5*scale;
	ctx[canvas].beginPath();
	arc(sX,sY,3*scale,330,30);
	arc(sX,sY,3*scale,60,120);
	arc(sX,sY,3*scale,150,210);
	arc(sX,sY,3*scale,240,300);
	ctx[canvas].lineWidth = 1*scale;
	circle(sX,sY,3*scale);
	ctx[canvas].fill();
}

function pattern_5(sX,sY,canvas=1) {	// Hansa
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

function pattern_6(sX,sY,canvas=1) { // Red Line
	ctx[canvas].lineCap = 'butt';
	var fontSize = 14*scale;
	ctx[canvas].font = 'normal '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#FFFF00';
	var h= '262d';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_7(sX,sY,canvas=1) {	// Polis
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

function pattern_8(sX,sY,canvas=1) {	// 4th Reich
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 2*scale;
	ctx[canvas].strokeStyle = '#FFFFFF';
	ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY,canvas=1); ctx[canvas].lineTo(sX,sY-5*scale); ctx[canvas].lineTo(sX+4*scale,sY-4*scale); ctx[canvas].stroke();
	ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY,canvas=1); ctx[canvas].lineTo(sX+5*scale,sY+2*scale); ctx[canvas].lineTo(sX+3*scale,sY+5*scale); ctx[canvas].stroke();
	ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY,canvas=1); ctx[canvas].lineTo(sX-4*scale,sY+3*scale); ctx[canvas].lineTo(sX-5*scale,sY-1*scale); ctx[canvas].stroke();
}

function pattern_9(sX,sY,canvas=1) {pattern_star(sX,sY,'#FFFFFF');} // VDNKh Commonwealth

function pattern_10(sX,sY,canvas=1) {pattern_star(sX,sY,'#FFFFFF');} // 1905 Confederation

function pattern_11(sX,sY,canvas=1) {	// Emerald City
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

function pattern_12(sX,sY,canvas=1) {	// Collective Farms
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

function pattern_13(sX,sY,canvas=1) { // Baumansky
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
	ctx[canvas].lineTo(sX,sY,canvas=1);
	ctx[canvas].lineTo(sX+3*scale,sY-3*scale);
	ctx[canvas].lineTo(sX+1*scale,sY+1*scale);
	ctx[canvas].lineTo(sX,sY,canvas=1);
	ctx[canvas].closePath();
	ctx[canvas].stroke();
}

function pattern_14(sX,sY,canvas=1) {	// Arbat Confederation
	ctx[canvas].lineCap = 'butt';
	var fontSize = 12*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].fillStyle = '#FFFFFF';
	ctx[canvas].fillText('A',sX,sY);
}

function pattern_15(sX,sY,canvas=1) { // Pervomay Republic

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

function pattern_16(sX,sY,canvas=1) {pattern_star(sX,sY,'#000000');} // Kalinin

function pattern_17(sX,sY,canvas=1) {pattern_star(sX,sY,'#FFFFFF');} // Petchatniki

function pattern_18(sX,sY,canvas=1) {pattern_star(sX,sY,'#FFFFFF');} // Yasenevo

function pattern_19(sX,sY,canvas=1) {  // Human Mutants
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

function pattern_20(sX,sY,canvas=1) { // Great Worm
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

function pattern_21(sX,sY,canvas=1) {pattern_star(sX,sY,'#FFFF00');} // Trotskyists

function pattern_220(sX,sY,canvas=1) { // Gangster Hearts
	ctx[canvas].lineCap = 'butt';
	var fontSize = 18*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#000000';
	var h= '2665';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_221(sX,sY,canvas=1) { // Gangster Clubs
	ctx[canvas].lineCap = 'butt';
	var fontSize = 18*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#000000';
	var h= '2663';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_222(sX,sY,canvas=1) { // Gangster Diamonds
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

function pattern_223(sX,sY,canvas=1) { // Gangster Spades
	ctx[canvas].lineCap = 'butt';
	var fontSize = 18*scale;
	ctx[canvas].font = 'bold '+fontSize+'px sans-serif';
	ctx[canvas].textAlign = 'center';
	ctx[canvas].fillStyle = '#000000';
	var h= '2660';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx[canvas].fillText(sym,sX,sY);
}

function pattern_224(sX,sY,canvas=1) { // Gangster Star
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

function pattern_23(sX,sY,canvas=1) { // Sebastapol
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

function pattern_24(sX,sY,canvas=1) { // Occupied by Mutants
	ctx[canvas].lineCap = 'butt';
	ctx[canvas].fillStyle = '#CBFF00';
	circle(sX,sY-3*scale,2*scale); ctx[canvas].fill();
	circle(sX-3*scale,sY+2*scale,2*scale); ctx[canvas].fill();
	circle(sX+3*scale,sY+2*scale,2*scale); ctx[canvas].fill();
}

function pattern_25(sX,sY,canvas=1) { // Satanists
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

function pattern_50(sX,sY,canvas=1) { // Anarchists
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

function pattern_51(sX,sY,canvas=1) { // Krishnas

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

function pattern_52(sX,sY,canvas=1) { // Jehovas Witnesses
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


function pattern_star(sX,sY,colorFill,canvas=1) { // Generic Star
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