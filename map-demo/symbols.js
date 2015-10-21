function pattern_0(sX,sY) {		} // unexplored, no symbol

function pattern_1(sX,sY) {	// Hansa
	ctx.lineCap = 'butt';
	// ring
	ctx.strokeStyle = '#FFFFFF';
	ctx.lineWidth = 1*scale;
	circle(sX,sY,4*scale); ctx.stroke();
	// dots
	ctx.fillStyle = '#FFFFFF';
	circle(sX,sY-4*scale,1*scale); ctx.stroke(); ctx.fill();
	circle(sX,sY+4*scale,1*scale); ctx.stroke(); ctx.fill();
	circle(sX-4*scale,sY,1*scale); ctx.stroke(); ctx.fill();
	circle(sX+4*scale,sY,1*scale); ctx.stroke(); ctx.fill();	
}

function pattern_2(sX,sY) { // Red Line
	ctx.lineCap = 'butt';
	var fontSize = 14*scale;
	ctx.font = 'normal '+fontSize+'px sans-serif';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#FFFF00';
	var h= '262d';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx.fillText(sym,sX,sY+5*scale);
}

function pattern_3(sX,sY) {	// Polis
	ctx.lineCap = 'butt';
	ctx.lineWidth = 1*scale;
	ctx.fillStyle = '#FFFFFF';
	ctx.strokeStyle = '#FFFFFF';
	// roof
	ctx.beginPath();
	ctx.moveTo(sX,sY-5*scale);
	ctx.lineTo(sX-4*scale,sY-3*scale);
	ctx.lineTo(sX+4*scale,sY-3*scale);
	ctx.closePath();
	ctx.fill();
	// base
	ctx.beginPath();
	ctx.moveTo(sX-4*scale,sY+4*scale);
	ctx.lineTo(sX+4*scale,sY+4*scale);
	ctx.lineTo(sX+3*scale,sY+3*scale);
	ctx.lineTo(sX-3*scale,sY+3*scale);
	ctx.closePath();
	ctx.fill();
	// pillars
	ctx.beginPath(); ctx.moveTo(sX-2*scale,sY+2*scale); ctx.lineTo(sX-2*scale,sY-2*scale); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(sX,sY+2*scale); ctx.lineTo(sX,sY-2*scale); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(sX+2*scale,sY+2*scale); ctx.lineTo(sX+2*scale,sY-2*scale); ctx.stroke();
}

function pattern_4(sX,sY) {	// Arbat Confederation
	ctx.lineCap = 'butt';
	var fontSize = 12*scale;
	ctx.font = 'bold '+fontSize+'px sans-serif';
	ctx.fillStyle = '#FFFFFF';
	ctx.fillText('A',sX,sY+4*scale);
}

function pattern_5(sX,sY) {pattern_star(sX,sY,'#FFFFFF');} // VDNKh Commonwealth
function pattern_6(sX,sY) {pattern_star(sX,sY,'#FFFFFF');} // 1905 Confederation

function pattern_7(sX,sY) {	// 4th Reich
	ctx.lineCap = 'butt';
	ctx.lineWidth = 2*scale;
	ctx.strokeStyle = '#FFFFFF';
	ctx.beginPath(); ctx.moveTo(sX,sY); ctx.lineTo(sX,sY-5*scale); ctx.lineTo(sX+4*scale,sY-4*scale); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(sX,sY); ctx.lineTo(sX+5*scale,sY+2*scale); ctx.lineTo(sX+3*scale,sY+5*scale); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(sX,sY); ctx.lineTo(sX-4*scale,sY+3*scale); ctx.lineTo(sX-5*scale,sY-1*scale); ctx.stroke();
}

function pattern_8(sX,sY) {	// Emerald City
	ctx.lineCap = 'butt';
	sY++;
	ctx.lineWidth = 1*scale;
	ctx.strokeStyle = '#FFFFFF';
	ctx.fillStyle = '#FFFFFF';
	ctx.beginPath();
	ctx.moveTo(sX-5*scale,sY+3*scale);
	ctx.lineTo(sX+5*scale,sY+3*scale);
	ctx.lineTo(sX+5*scale,sY-1*scale);  // right tower
	ctx.lineTo(sX+4*scale,sY+1*scale);
	ctx.lineTo(sX+2*scale,sY+1*scale);
	ctx.lineTo(sX+2*scale,sY-1*scale); // central tower
	ctx.lineTo(sX+1*scale,sY-1*scale);
	ctx.lineTo(sX+1*scale,sY-2*scale);
	ctx.lineTo(sX,sY-7); // peak
	ctx.lineTo(sX-1*scale,sY-2*scale);
	ctx.lineTo(sX-1*scale,sY-1*scale);
	ctx.lineTo(sX-2*scale,sY-1*scale); // central tower
	ctx.lineTo(sX-2*scale,sY+1*scale);
	ctx.lineTo(sX-4*scale,sY+1*scale);
	ctx.lineTo(sX-5*scale,sY-1*scale); // left tower
	ctx.closePath();
	ctx.fill();
}

function pattern_9(sX,sY) {	// Collective Farms
	ctx.lineCap = 'butt';
	ctx.lineWidth = 1*scale;
	ctx.fillStyle = '#39980E';
	ctx.beginPath();
	ctx.moveTo(sX-6*scale,sY);
	ctx.lineTo(sX-5*scale,sY-1*scale);
	ctx.lineTo(sX-6*scale,sY-2*scale);
	ctx.lineTo(sX-5*scale,sY-2*scale);
	ctx.bezierCurveTo(sX-2*scale,sY-4*scale, sX+5*scale,sY-4*scale, sX+6*scale,sY);
	ctx.lineTo(sX+5*scale,sY+1*scale);
	ctx.lineTo(sX+4*scale,sY+3*scale);	
	ctx.lineTo(sX+3*scale,sY+3*scale);
	ctx.lineTo(sX+3*scale,sY+2*scale);
	ctx.lineTo(sX-2*scale,sY+2*scale);
	ctx.lineTo(sX-2*scale,sY+3*scale);
	ctx.lineTo(sX-3*scale,sY+3*scale);
	ctx.lineTo(sX-3*scale,sY+2*scale);
	ctx.lineTo(sX-4*scale,sY+1*scale);
	ctx.lineTo(sX-5*scale,sY+1*scale);
	ctx.lineTo(sX-6*scale,sY+1*scale);
	ctx.closePath();
	ctx.fill();	
}

function pattern_10(sX,sY) { // Baumansky
	ctx.lineCap = 'butt';
	ctx.strokeStyle = '#1D58FF';
	ctx.lineWidth = 1*scale;
	// cog circle
	circle(sX,sY,4*scale); ctx.stroke();
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
	ctx.beginPath();
	ctx.moveTo(sX-3*scale,sY+3*scale);
	ctx.lineTo(sX-1*scale,sY-1*scale);
	ctx.lineTo(sX,sY);
	ctx.lineTo(sX+3*scale,sY-3*scale);
	ctx.lineTo(sX+1*scale,sY+1*scale);
	ctx.lineTo(sX,sY);
	ctx.closePath();
	ctx.stroke();
}

function pattern_11(sX,sY) { // Pervomay Republic
	ctx.lineCap = 'butt';
	ctx.strokeStyle = '#FFFF00';
	ctx.fillStyle = '#FFFF00';
	ctx.lineWidth = 1*scale;

	ctx.beginPath();
	ctx.moveTo(sX,sY-5);
	ctx.lineTo(sX+1*scale,sY-4*scale);
	ctx.lineTo(sX+2*scale,sY-4*scale);
	ctx.lineTo(sX+3*scale,sY-5*scale);
	ctx.lineTo(sX+5*scale,sY-3*scale);
	ctx.lineTo(sX+4*scale,sY-2*scale);	
	ctx.quadraticCurveTo(sX+5*scale,sY+2*scale, sX+4*scale,sY+4*scale);
	ctx.quadraticCurveTo(sX+2*scale,sY+4*scale, sX,sY+6*scale);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(sX,sY-5*scale);
	ctx.lineTo(sX-1*scale,sY-4*scale);
	ctx.lineTo(sX-2*scale,sY-4*scale);
	ctx.lineTo(sX-3*scale,sY-5*scale);
	ctx.lineTo(sX-5*scale,sY-3*scale);
	ctx.lineTo(sX-4*scale,sY-2*scale);	
	ctx.quadraticCurveTo(sX-5*scale,sY+2*scale, sX-4*scale,sY+4*scale);
	ctx.quadraticCurveTo(sX-2*scale,sY+4*scale, sX,sY+6*scale);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.strokeStyle = '#1D58FF';
	ctx.moveTo(sX-2*scale,sY+3*scale);
	ctx.lineTo(sX-2*scale,sY-2*scale);
	ctx.lineTo(sX+2*scale,sY-2*scale);
	ctx.lineTo(sX+2*scale,sY+3*scale);
	ctx.stroke();
}

function pattern_12(sX,sY) {pattern_star(sX,sY,'#000000');} // Kalinin
function pattern_13(sX,sY) {pattern_star(sX,sY,'#FFFFFF');} // Petchatniki
function pattern_14(sX,sY) {pattern_star(sX,sY,'#FFFFFF');} // Yasenevo

function pattern_15(sX,sY) {  // Technicians
	ctx.lineCap = 'butt';
	ctx.strokeStyle = '#BBBBBB';
	ctx.lineWidth = 2*scale;
	arc(sX+2*scale,sY-2*scale,2*scale,0,270);
	ctx.lineCap = 'round';
	ctx.beginPath();
	ctx.moveTo(sX+1*scale,sY-1*scale);
	ctx.lineTo(sX-3*scale,sY+3*scale);
	ctx.stroke();
}

function pattern_16(sX,sY) {  // Human Mutants
	ctx.lineCap = 'butt';
	ctx.fillStyle = '#CBFF00';
	ctx.strokeStyle = '#CBFF00';
	ctx.lineWidth = 1*scale;
	// circles
	circle(sX,sY+3*scale,2*scale); ctx.fill();
	circle(sX-3*scale,sY-2*scale,2*scale); ctx.fill();
	circle(sX+3*scale,sY-2*scale,2*scale); ctx.fill();
	// lines
	ctx.beginPath();
	ctx.moveTo(sX,sY+3*scale,1*scale);
	ctx.lineTo(sX-3*scale,sY-2*scale);
	ctx.lineTo(sX+3*scale,sY-2*scale);
	ctx.closePath();
	ctx.stroke();
}

function pattern_17(sX,sY) { // Independent Stations
	ctx.lineCap = "butt";
	ctx.strokeStyle = '#FFFFFF';
	ctx.fillStyle = '#FFFFFF';
	ctx.lineWidth = 5*scale;
	ctx.beginPath();
	arc(sX,sY,3*scale,330,30);
	arc(sX,sY,3*scale,60,120);
	arc(sX,sY,3*scale,150,210);
	arc(sX,sY,3*scale,240,300);
	ctx.lineWidth = 1*scale;
	circle(sX,sY,3*scale);
	ctx.fill();
}

function pattern_18(sX,sY) { // Gangster Hearts
	ctx.lineCap = 'butt';
	var fontSize = 18*scale;
	ctx.font = 'bold '+fontSize+'px sans-serif';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#000000';
	var h= '2665';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx.fillText(sym,sX,sY+6*scale);
}

function pattern_19(sX,sY) { // Gangster Clubs
	ctx.lineCap = 'butt';
	var fontSize = 18*scale;
	ctx.font = 'bold '+fontSize+'px sans-serif';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#000000';
	var h= '2663';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx.fillText(sym,sX,sY+5*scale);
}

function pattern_20(sX,sY) { // Gangster Diamonds
	ctx.lineCap = 'butt';
	ctx.beginPath();
	ctx.moveTo(sX,sY-6*scale);
	ctx.lineTo(sX-4*scale,sY);
	ctx.lineTo(sX,sY+6*scale);
	ctx.lineTo(sX+4*scale,sY);
	ctx.closePath();
	ctx.fillStyle = '#000000';
	ctx.fill();
}

function pattern_21(sX,sY) { // Gangster Spades
	ctx.lineCap = 'butt';
	var fontSize = 18*scale;
	ctx.font = 'bold '+fontSize+'px sans-serif';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#000000';
	var h= '2660';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx.fillText(sym,sX,sY+5*scale);
}

function pattern_22(sX,sY) { // Gangster Star
	ctx.lineCap = 'butt';
	ctx.beginPath();
	ctx.moveTo(sX,sY-6*scale);
	ctx.lineTo(sX-2*scale,sY-2*scale);
	ctx.lineTo(sX-6*scale,sY);
	ctx.lineTo(sX-2*scale,sY+2*scale);
	ctx.lineTo(sX,sY+6*scale);
	ctx.lineTo(sX+2*scale,sY+2*scale);
	ctx.lineTo(sX+6*scale,sY);
	ctx.lineTo(sX+2*scale,sY-2*scale);
	ctx.closePath();
	ctx.fillStyle = '#000000';
	ctx.fill();
}

function pattern_23(sX,sY) {pattern_star(sX,sY,'#FFFF00');} // Trotskyists

function pattern_24(sX,sY) { // Anarchists
	ctx.lineCap = 'butt';
	ctx.lineWidth = 1*scale;
	ctx.strokeStyle = '#FF0000';
	circle(sX,sY,4*scale);
	ctx.moveTo(sX-1*scale,sY-6*scale);ctx.lineTo(sX+5*scale,sY+5*scale);
	ctx.moveTo(sX+2*scale,sY-6*scale);ctx.lineTo(sX-5*scale,sY+4*scale);
	ctx.moveTo(sX-6*scale,sY+1*scale);ctx.lineTo(sX+6*scale,sY+2*scale);ctx.stroke();
}

function pattern_25(sX,sY) { // Krishnas
	ctx.lineCap = 'butt';
	ctx.fillStyle = '#7F007F';
	var fontSize = 12*scale;
	ctx.font = 'bold '+fontSize+'px sans-serif';
	ctx.textAlign = 'center';
	var h= '0950';
	var sym = String.fromCharCode(parseInt(h, 16));
	ctx.fillText(sym,sX,sY+5*scale);
}

function pattern_26(sX,sY) {	// Transit
	ctx.lineCap = 'butt';
	ctx.lineWidth = 1*scale;
	ctx.strokeStyle = '#005400';
	ctx.fillStyle = '#005400';
	// top arrow
	ctx.beginPath();
	ctx.moveTo(sX-5*scale,sY-1*scale);
	ctx.lineTo(sX+5*scale,sY-1*scale); // point
	ctx.lineTo(sX+1*scale,sY-4*scale); // top
	ctx.lineTo(sX+1*scale,sY-2*scale);
	ctx.lineTo(sX-5*scale,sY-2*scale);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	// bottom arrow
	ctx.beginPath();
	ctx.moveTo(sX+5*scale,sY+1*scale);
	ctx.lineTo(sX-5*scale,sY+1*scale); // point
	ctx.lineTo(sX-1*scale,sY+4*scale); // bottom
	ctx.lineTo(sX-1*scale,sY+2*scale);
	ctx.lineTo(sX+5*scale,sY+2*scale);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}

function pattern_27(sX,sY) { // Destroyed
	ctx.lineCap = 'butt';
	ctx.lineWidth = 3*scale;
	ctx.strokeStyle = '#000000';
	ctx.fillStyle = '#000000';
	arc(sX,sY,6*scale,10,90);
	arc(sX,sY,6*scale,135,170);
	arc(sX,sY,6*scale,190,270);
	arc(sX,sY,6*scale,300,340);
	ctx.lineWidth = 2*scale;
	circle(sX,sY,4*scale);
	ctx.fill();	
}

function pattern_28(sX,sY) {	// Abandoned
	ctx.lineCap = 'butt';
	ctx.lineWidth = 3*scale;
	ctx.strokeStyle = '#323232';
	ctx.beginPath();
	ctx.moveTo(sX-4*scale,sY+4*scale);
	ctx.lineTo(sX+4*scale,sY-4*scale);
	ctx.closePath();
	ctx.stroke();
}

function pattern_29(sX,sY) { // Irradiated
	ctx.lineCap = 'butt';
	ctx.lineWidth = 0;
	ctx.strokeStyle = '#000000';
	ctx.fillStyle = '#000000';
	circle(sX,sY,2*scale);
	ctx.fill();
	ctx.lineWidth = 4*scale;
	arc(sX,sY,4*scale,240,300);
	arc(sX,sY,4*scale,0,60);
	arc(sX,sY,4*scale,120,180);
	ctx.stroke();
	ctx.strokeStyle = '#FFFF00';
	ctx.lineWidth = 1*scale;
	circle(sX,sY,2*scale);
	ctx.stroke();
}

function pattern_30(sX,sY) {	// Hazardous
	ctx.lineCap = 'butt';
	// skull
	ctx.beginPath();
	ctx.arc(sX,sY,7*scale,rad(180),rad(360));
	ctx.quadraticCurveTo(sX+2*scale,sY+4*scale, sX+4*scale,sY+6*scale);
	ctx.quadraticCurveTo(sX,sY+8*scale, sX-4*scale,sY+6*scale);
	ctx.quadraticCurveTo(sX-2*scale,sY+4*scale, sX-7*scale,sY);
	ctx.closePath();
	ctx.fillStyle = '#FF0000';
	ctx.fill();
	// nose
	ctx.beginPath();
	ctx.moveTo(sX,sY-1*scale);
	ctx.lineTo(sX+1*scale,sY+2*scale);
	ctx.lineTo(sX-1*scale,sY+2*scale);
	ctx.closePath();
	ctx.fillStyle = '#000000';
	ctx.fill();
	// teeth
	ctx.lineWidth = 1*scale;
	line(sX+2*scale,sY+7*scale,sX+2*scale,sY+4*scale);
	line(sX,sY+7*scale,sX,sY+4*scale);
	line(sX-2*scale,sY+7*scale,sX-2*scale,sY+4*scale);
	sY++;
	// left eye
	ctx.beginPath();
	ctx.moveTo(sX-5*scale,sY-2*scale);
	ctx.quadraticCurveTo(sX-3*scale,sY-4*scale, sX,sY-2*scale);
	ctx.quadraticCurveTo(sX-4*scale,sY+1*scale, sX-5*scale,sY-2*scale);
	ctx.closePath();
	ctx.fill();
	// right eye
	ctx.beginPath();
	ctx.moveTo(sX+5*scale,sY-2*scale);
	ctx.quadraticCurveTo(sX+3*scale,sY-4*scale, sX,sY-2*scale);
	ctx.quadraticCurveTo(sX+4*scale,sY+1*scale, sX+5*scale,sY-2*scale);
	ctx.closePath();
	ctx.fill();
}

function pattern_31(sX,sY) { // Occupied by Mutants
	ctx.lineCap = 'butt';
	ctx.fillStyle = '#CBFF00';
	circle(sX,sY-3*scale,2*scale); ctx.fill();
	circle(sX-3*scale,sY+2*scale,2*scale); ctx.fill();
	circle(sX+3*scale,sY+2*scale,2*scale); ctx.fill();
}

function pattern_32(sX,sY) { // Great Worm
	ctx.lineCap = 'round';
	ctx.lineWidth = 2*scale;
	ctx.strokeStyle = "#004000";
	ctx.beginPath();
	ctx.moveTo(sX-4*scale,sY+3*scale);
	ctx.bezierCurveTo(sX-4*scale,sY+6*scale, sX+5*scale,sY+5*scale, sX+5*scale,sY+1*scale);
	ctx.bezierCurveTo(sX+5*scale,sY-2*scale, sX-5*scale,sY+2*scale, sX-5*scale,sY-1*scale);
	ctx.bezierCurveTo(sX-5*scale,sY-4*scale, sX+3*scale,sY-5*scale, sX+4*scale,sY-3*scale);
	ctx.lineTo(sX+2*scale,sY-3*scale);
	ctx.stroke();
}

function pattern_33(sX,sY) { // Satanists
	ctx.lineCap = 'butt';
	ctx.lineWidth = 1*scale;
	ctx.beginPath();
	ctx.moveTo(sX,sY+4*scale);
	ctx.lineTo(sX+3*scale,sY-4*scale);
	ctx.lineTo(sX-4*scale,sY+1*scale);
	ctx.lineTo(sX+4*scale,sY+1*scale);
	ctx.lineTo(sX-3*scale,sY-4*scale);
	ctx.closePath();
	ctx.strokeStyle = "#FF0000";
	ctx.stroke();
}

function pattern_star(sX,sY,colorFill) { // Generic Star
	ctx.lineCap = 'butt';
	ctx.beginPath();
	ctx.moveTo(sX,sY-6*scale);
	ctx.lineTo(sX+4*scale,sY+5*scale);
	ctx.lineTo(sX-6*scale,sY-2*scale);
	ctx.lineTo(sX+6*scale,sY-2*scale);
	ctx.lineTo(sX-4*scale,sY+5*scale);
	ctx.lineTo(sX,sY-6*scale);
	ctx.closePath();
	ctx.fillStyle = colorFill;
	ctx.fill();
}
