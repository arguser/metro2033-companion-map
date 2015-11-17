var baseScale = 1.5;  // scale factor for map. Should never be changed programatically
var scale=baseScale;
var station_radius=7; // radius of station circles
var xShim = 150*scale; // shifts the map on the x axis
var yShim = 20*scale; // shifts the map on the y axis

// utility - is object defined?
function isDefined(x) {
    var undefined;
    return x !== undefined;
}

// converts degrees of a circle into insane radians units
function rad(deg) {
	deg = (Math.PI/180)*deg;
	return deg;
}

// draw a line between two points
function line(sX,sY,eX,eY,canvas=1) {
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY);
	ctx[canvas].lineTo(eX,eY);
	ctx[canvas].stroke();
}
// draw a circle at a specific point
function circle(cX,cY,Rad,canvas=1) {
	ctx[canvas].beginPath();
	ctx[canvas].arc(cX,cY,Rad,0,rad(360));
}
// draw a section of a circle at a specific point
function arc(cX,cY,Rad,start,end,canvas=1) {
	ctx[canvas].beginPath();
	ctx[canvas].arc(cX,cY,Rad,rad(start),rad(end));
	ctx[canvas].stroke();
}
// draw a quadratic curve between two points
function quad(sX,sY,cX,cY,eX,eY,canvas=1) {
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY);
	ctx[canvas].quadraticCurveTo(eX,eY, cX,cY);
	ctx[canvas].stroke();
}
// draw a bezier curve between two points
function bezier(sX,sY,c1X,c1Y,c2X,c2Y,eX,eY,canvas=1) {
	ctx[canvas].beginPath();
	ctx[canvas].moveTo(sX,sY);
	ctx[canvas].bezierCurveTo(c1X,c1Y, c2X,c2Y, eX,eY);
	ctx[canvas].stroke();
}

// draw a station for a specific faction at a given point
function station(sX,sY,factionID,symbol,canvas=1,stationScale=1) {
	sX = (scale*sX)+xShim;
	sY = (scale*sY)+yShim;

	// change size of station graphic (if necessary)
	scale = scale*stationScale;

	ctx[canvas].shadowBlur=0;
	ctx[canvas].shadowColor="black";
	ctx[canvas].strokeStyle = '#000000';
	ctx[canvas].lineWidth = 2*scale;
	circle(sX,sY,station_radius*scale,canvas);
	ctx[canvas].stroke();

	// get faction
	faction = findRecord(factions,"faction_id",factionID);
	if (isDefined(faction[0])) {
		var fillColour = faction[0]["faction_colour"];
	} else {var fillColour="#FF0000";}

	ctx[canvas].fillStyle = fillColour;
	ctx[canvas].fill();

    ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 1;
	ctx[canvas].font = 'normal 12px sans-serif';
	ctx[canvas].textAlign = 'center';

    eval("pattern_"+symbol+"("+sX+","+sY+","+canvas+")");

    // reset scale
	scale = baseScale;
}


// Handled by Angular

// function clickable_station(sX,sY,sID) {
// 	var offset = (station_radius+1)*scale;
// 	var wh = (station_radius*2)*scale;
// 	sX = (scale*sX)-offset;
// 	sY = (scale*sY)-offset;
// 	var newEl = document.createElement('a');
// 	newEl.id = 'station_'+sID;
// 	newEl.setAttribute("ng-click", "map.highlight_stations("+sID+")");
// 	newEl.className = 'station_link';
// 	newEl.style.left = sX+"px";
// 	newEl.style.top  = sY+"px";
// 	newEl.style.width  = wh+"px";
// 	newEl.style.height = wh+"px";
// 	document.getElementById('canvasHolder').appendChild(newEl);
// }


// get selected data set from label menu and rewrite station labels
// function changeNames() {
// 	name_set=document.getElementById('name_set_dd').options[document.getElementById('name_set_dd').selectedIndex].value;
// 	print_station_labels();
// }

// print out station labels
function print_station_labels() {
	ctx[3].clearRect(0, 0, 2200, 2200);
	for (i=0;i<stations.length;i++) {
		thisStation = stations[i];
		name_station(thisStation['station_id'],thisStation['label_point'],thisStation['x_position'],thisStation['y_position']);
	}
}

// print out label for a specific station
function name_station(stationID,position,sX,sY) {
	var searchResult = findRecord(station_names,"station_id",stationID);
	searchResult = findRecord(searchResult,"name_set",name_set);
	if (searchResult.length>0) {

		switch(position) {
			case 1:    cX=7;   cY=-10; labelAlign="left";   break;
			case 2:    cX=10;  cY=-7;  labelAlign="left";   break;
			case 3:    cX=11;  cY=0;   labelAlign="left";   break;
			case 4:    cX=+10; cY=+7;  labelAlign="left";   break;
			case 5:    cX=+7;  cY=+11; labelAlign="left";   break;

			case 5.5:  cX=0;   cY=15;  labelAlign="left"; break;
			case 6:    cX=0;   cY=15;  labelAlign="center"; break;
			case 6.5:  cX=0;   cY=15;  labelAlign="right"; break;

			case 7:    cX=-7;  cY=+11; labelAlign="right";  break;
			case 8:    cX=-10; cY=+7;  labelAlign="right";  break;
			case 9:    cX=-11; cY=0;   labelAlign="right";  break;
			case 10:   cX=-10; cY=-7;  labelAlign="right";  break;
			case 11:   cX=-7;  cY=-10; labelAlign="right";  break;

			case 11.5: cX=0;   cY=-13; labelAlign="right"; break;
			case 12:   cX=0;   cY=-13; labelAlign="center"; break;
			case 12.5: cX=0;   cY=-13; labelAlign="left"; break;
		}

		var stationName = searchResult[0]['station_name'];
		if (stationName.length>0) {
			ctx[3].lineCap = 'butt';
			ctx[3].lineJoin = "round";
			var fontSize = 8*scale;
			ctx[3].font = 'bold '+fontSize+'px sans-serif';
			ctx[3].textAlign = 'left';
			ctx[3].fillStyle = '#000000';
			ctx[3].strokeStyle = '#ede9dd';
			ctx[3].shadowColor="#FFFFFF";
			ctx[3].lineWidth = 3*scale;
			ctx[3].textAlign = labelAlign;
			ctx[3].strokeText(stationName,((sX+cX)*scale)+xShim,((sY+cY)*scale)+yShim);
			ctx[3].fillText(stationName,((sX+cX)*scale)+xShim,((sY+cY)*scale)+yShim);
		}
	}
}

function draw_features() {
	// draw features
	for (i=0;i<features.length;i++) {
		thisFeature = features[i];
		ctx[2].fillStyle = '#FFFFFF';
		ctx[2].strokeStyle = '#000000';
    	ctx[2].lineWidth = 1*scale;

		sX = (thisFeature['x_position']*scale)+xShim;
		sY = (thisFeature['y_position']*scale)+yShim;
		sW = (thisFeature['width']*scale);
		sH = (thisFeature['height']*scale);
		sC = 4*scale; // corner size

		// draw box
		ctx[2].beginPath();
		ctx[2].moveTo(sX-(sW/2)+sC,sY-(sH/2));
		ctx[2].lineTo(sX+(sW/2)-sC,sY-(sH/2));
		ctx[2].quadraticCurveTo( sX+(sW/2),sY-(sH/2), sX+(sW/2),sY-(sH/2)+sC);
		ctx[2].lineTo(sX+(sW/2),sY+(sH/2)-sC);
		ctx[2].quadraticCurveTo( sX+(sW/2),sY+(sH/2), sX+(sW/2)-sC,sY+(sH/2));
		ctx[2].lineTo(sX-(sW/2)+sC,sY+(sH/2));
		ctx[2].quadraticCurveTo( sX-(sW/2),sY+(sH/2), sX-(sW/2),sY+(sH/2)-sC);
		ctx[2].lineTo(sX-(sW/2),sY-(sH/2)+sC);
		ctx[2].quadraticCurveTo( sX-(sW/2),sY-(sH/2), sX-(sW/2)+sC,sY-(sH/2));
		ctx[2].closePath();
    	ctx[2].fill();
    	ctx[2].stroke();

    	// label
    	var textlines = thisFeature['feature_name'];
    	if (textlines.indexOf("|")>0) {textlines = textlines.split('|'); } else { textlines = [textlines]; }
		var fontSize = 8*scale;
		ctx[2].font = "bold "+fontSize+"px 'trebuchet ms',sans-serif";
		ctx[2].textAlign = 'center';
		ctx[2].fillStyle = '#000000';
		lineCount=0;
		for (l=0;l<textlines.length;l++) {
			yPoint = sY;
			if (textlines.length>1) {
				if (lineCount==0) yPoint = yPoint-(5*scale);
				if (lineCount==1) yPoint = yPoint+(5*scale);
			}
			ctx[2].fillText(textlines[l],sX,yPoint);
			lineCount++;
		}

	}
}


// interchange code
function interchange_2(fX,fY, sX,sY, canvas=1) {

			fX = (fX*scale)+xShim;	fY = (fY*scale)+yShim;
			sX = (sX*scale)+xShim;	sY = (sY*scale)+yShim;

			ctx[canvas].strokeStyle = '#000000';
			ctx[canvas].fillStyle = '#FFFFFF';
			ctx[canvas].lineWidth = 2*scale;
			ctx[canvas].beginPath(); circle(fX,fY,9*scale); ctx[canvas].stroke();ctx[canvas].closePath(); ctx[canvas].fill();
			ctx[canvas].beginPath(); circle(sX,sY,9*scale); ctx[canvas].stroke();ctx[canvas].closePath(); ctx[canvas].fill();

			ctx[canvas].strokeStyle = '#000000';
			ctx[canvas].lineWidth = 10*scale;
      		ctx[canvas].beginPath();ctx[canvas].moveTo(fX,fY);ctx[canvas].lineTo(sX,sY);ctx[canvas].closePath();ctx[canvas].stroke();

			ctx[canvas].strokeStyle = '#FFFFFF';
			ctx[canvas].lineWidth = 8*scale;
      		ctx[canvas].beginPath();ctx[canvas].moveTo(fX,fY);ctx[canvas].lineTo(sX,sY);ctx[canvas].closePath();ctx[canvas].stroke();

			ctx[canvas].fillStyle = '#FFFFFF';
			ctx[canvas].beginPath();ctx[canvas].arc(fX,fY,9*scale,0,rad(360));ctx[canvas].closePath();ctx[canvas].fill();
			ctx[canvas].beginPath();ctx[canvas].arc(sX,sY,9*scale,0,rad(360));ctx[canvas].closePath();ctx[canvas].fill();
		}
function interchange_3(fX,fY, sX,sY, tX,tY, loop=1, canvas=1) {

			fX = (fX*scale)+xShim;	fY = (fY*scale)+yShim;
			sX = (sX*scale)+xShim;	sY = (sY*scale)+yShim;
			tX = (tX*scale)+xShim;	tY = (tY*scale)+yShim;

			// Base circles
			ctx[canvas].strokeStyle = '#000000';
			ctx[canvas].fillStyle = '#FFFFFF';
			ctx[canvas].lineWidth = 2*scale;
			ctx[canvas].beginPath(); circle(fX,fY,9*scale); ctx[canvas].stroke(); ctx[canvas].closePath(); ctx[canvas].fill();
			ctx[canvas].beginPath(); circle(sX,sY,9*scale); ctx[canvas].stroke(); ctx[canvas].closePath(); ctx[canvas].fill();
			ctx[canvas].beginPath(); circle(tX,tY,9*scale); ctx[canvas].stroke(); ctx[canvas].closePath(); ctx[canvas].fill();

			// Black Connections
			ctx[canvas].strokeStyle = '#000000';
			ctx[canvas].lineWidth = 10*scale;
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(fX,fY); ctx[canvas].lineTo(sX,sY); ctx[canvas].closePath(); ctx[canvas].stroke();
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY); ctx[canvas].lineTo(tX,tY); ctx[canvas].closePath(); ctx[canvas].stroke();
      		if (loop) ctx[canvas].beginPath(); ctx[canvas].moveTo(tX,tY); ctx[canvas].lineTo(fX,fY); ctx[canvas].closePath(); ctx[canvas].stroke();

			// White Connections
			ctx[canvas].strokeStyle = '#FFFFFF';
			ctx[canvas].lineWidth = 8*scale;
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(fX,fY); ctx[canvas].lineTo(sX,sY); ctx[canvas].closePath(); ctx[canvas].stroke();
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY); ctx[canvas].lineTo(tX,tY); ctx[canvas].closePath(); ctx[canvas].stroke();
      		if (loop) ctx[canvas].beginPath(); ctx[canvas].moveTo(tX,tY); ctx[canvas].lineTo(fX,fY); ctx[canvas].closePath(); ctx[canvas].stroke();

			// Circle Overlays
			ctx[canvas].fillStyle = '#FFFFFF';
			ctx[canvas].beginPath(); ctx[canvas].arc(fX,fY,9*scale,0,rad(360)); ctx[canvas].closePath(); ctx[canvas].fill();
			ctx[canvas].beginPath(); ctx[canvas].arc(sX,sY,9*scale,0,rad(360)); ctx[canvas].closePath(); ctx[canvas].fill();
			ctx[canvas].beginPath(); ctx[canvas].arc(tX,tY,9*scale,0,rad(360)); ctx[canvas].closePath(); ctx[canvas].fill();
		}

function interchange_4(fX,fY, sX,sY, tX,tY, rX,rY, canvas=1) {

			fX = (fX*scale)+xShim;	fY = (fY*scale)+yShim;
			sX = (sX*scale)+xShim;	sY = (sY*scale)+yShim;
			tX = (tX*scale)+xShim;	tY = (tY*scale)+yShim;
			rX = (rX*scale)+xShim;	rY = (rY*scale)+yShim;

			// Base circles
			ctx[canvas].strokeStyle = '#000000';
			ctx[canvas].fillStyle = '#FFFFFF';
			ctx[canvas].lineWidth = 2*scale;
			ctx[canvas].beginPath(); circle(fX,fY,9*scale); ctx[canvas].closePath(); ctx[canvas].stroke(); ctx[canvas].fill();
			ctx[canvas].beginPath(); circle(sX,sY,9*scale); ctx[canvas].closePath(); ctx[canvas].stroke(); ctx[canvas].fill();
			ctx[canvas].beginPath(); circle(tX,tY,9*scale); ctx[canvas].closePath(); ctx[canvas].stroke(); ctx[canvas].fill();
			ctx[canvas].beginPath(); circle(rX,rY,9*scale); ctx[canvas].closePath(); ctx[canvas].stroke(); ctx[canvas].fill();

			// Black Connections
			ctx[canvas].strokeStyle = '#000000';
			ctx[canvas].lineWidth = 8*scale;
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(fX,fY); ctx[canvas].lineTo(sX,sY); ctx[canvas].closePath(); ctx[canvas].stroke();
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY); ctx[canvas].lineTo(tX,tY); ctx[canvas].closePath(); ctx[canvas].stroke();
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(tX,tY); ctx[canvas].lineTo(rX,rY); ctx[canvas].closePath(); ctx[canvas].stroke();
			ctx[canvas].beginPath(); ctx[canvas].moveTo(rX,rY); ctx[canvas].lineTo(fX,fY); ctx[canvas].closePath(); ctx[canvas].stroke();

			ctx[canvas].beginPath(); ctx[canvas].moveTo(fX,fY); ctx[canvas].lineTo(tX,tY); ctx[canvas].closePath(); ctx[canvas].stroke();

			// White Connections
			ctx[canvas].strokeStyle = '#FFFFFF';
			ctx[canvas].lineWidth = 6*scale;
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(fX,fY); ctx[canvas].lineTo(sX,sY); ctx[canvas].closePath(); ctx[canvas].stroke();
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(sX,sY); ctx[canvas].lineTo(tX,tY); ctx[canvas].closePath(); ctx[canvas].stroke();
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(tX,tY); ctx[canvas].lineTo(rX,rY); ctx[canvas].closePath(); ctx[canvas].stroke();
      		ctx[canvas].beginPath(); ctx[canvas].moveTo(rX,rY); ctx[canvas].lineTo(fX,fY); ctx[canvas].closePath(); ctx[canvas].stroke();

			ctx[canvas].beginPath(); ctx[canvas].moveTo(fX,fY); ctx[canvas].lineTo(tX,tY); ctx[canvas].closePath(); ctx[canvas].stroke();

			// Circle Overlays
			ctx[canvas].fillStyle = '#FFFFFF';
			ctx[canvas].beginPath(); ctx[canvas].arc(fX,fY,9*scale,0,rad(360)); ctx[canvas].closePath(); ctx[canvas].fill();
			ctx[canvas].beginPath(); ctx[canvas].arc(sX,sY,9*scale,0,rad(360)); ctx[canvas].closePath(); ctx[canvas].fill();
			ctx[canvas].beginPath(); ctx[canvas].arc(tX,tY,9*scale,0,rad(360)); ctx[canvas].closePath(); ctx[canvas].fill();
			ctx[canvas].beginPath(); ctx[canvas].arc(rX,rY,9*scale,0,rad(360)); ctx[canvas].closePath(); ctx[canvas].fill();
}

// draw a river
function drawRiver(canvas=0) {
	for (i=0;i<rivers.length;i++) {
		var thisRiver=rivers[i];
		ctx[canvas].lineWidth = thisRiver[0];
		ctx[canvas].lineJoin = "round";
		ctx[canvas].strokeStyle = '#65D6EA';

		ctx[canvas].beginPath();
		ctx[canvas].moveTo((thisRiver[1][0]*scale)+xShim, (thisRiver[1][1]*scale)+yShim);

		for (j=2;j<thisRiver.length;j++) {
			var thisNode = thisRiver[j];

			ctx[canvas].lineTo( (thisRiver[j][0]*scale)+xShim,   (thisRiver[j][1]*scale)+yShim);
		}
   		ctx[canvas].stroke();
	}
}

// draw a rail line from coordinates
function drawLine(line,border=0) {

	var offset = 10; // larger offset equals more extreme curves

	ctx[1].lineCap = 'round';
	ctx[1].strokeStyle = (border==0) ? line['line_colour'] : "#000000" ;
	nodes = line['line_nodes'];
	switch(border) {
		case 0: ctx[1].lineWidth =  3.5*scale; break;
		case 1: ctx[1].lineWidth =  4.5*scale; break;
		case 2: ctx[1].lineWidth =    2*scale; break;
	}

	var undef;

	for (j=0;j<nodes.length;j++) {
		startNode 	= nodes[j];
		if (nodes[j+1]!=undef) {
			endNode = nodes[j+1];
		} else {
			endNode = nodes[j];
		}

		switch(startNode[0]) {

			case 0: // straight section
				ctx[1].beginPath();
		    	ctx[1].moveTo( (startNode[1]*scale)+xShim, (startNode[2]*scale)+yShim);
		    	ctx[1].lineTo( (endNode[1]*scale)+xShim,   (endNode[2]*scale)+yShim);
      			ctx[1].stroke();
			break;

			case 1: // curved section

				if (nodes[j-1]!=undef) { previousNode = nodes[j-1]; } else {previousNode = Array(startNode[1], startNode[2]); }
				if (nodes[j+2]!=undef) { finalNode    = nodes[j+2]; } else {finalNode    = Array(endNode[1],   endNode[2]);  }

				var dif = startNode[1]-previousNode[1];
				if (dif>0)  ControlX = startNode[1]+offset;
				if (dif==0) ControlX = startNode[1];
				if (dif<0)  ControlX = startNode[1]-offset;

				var dif = startNode[2]-previousNode[2];
				if (dif>0)  ControlY = startNode[2]+offset;
				if (dif==0) ControlY = startNode[2];
				if (dif<0)  ControlY = startNode[2]-offset;

				controlNode1 = Array(ControlX,ControlY);

				var dif = finalNode[1]-endNode[1];
				if (dif>0)  ControlX = endNode[1]-offset;
				if (dif==0) ControlX = endNode[1];
				if (dif<0)  ControlX = endNode[1]+offset;

				var dif = finalNode[2]-endNode[2];
				if (dif>0)  ControlY = endNode[2]-offset;
				if (dif==0) ControlY = endNode[2];
				if (dif<0)  ControlY = endNode[2]+offset;

				controlNode2 = Array(ControlX,ControlY);

				ctx[1].beginPath();
		      	ctx[1].moveTo((startNode[1]*scale)+xShim, (startNode[2]*scale)+yShim);
		      	ctx[1].bezierCurveTo((controlNode1[0]*scale)+xShim, (controlNode1[1]*scale)+yShim, (controlNode2[0]*scale)+xShim, (controlNode2[1]*scale)+yShim, (endNode[1]*scale)+xShim, (endNode[2]*scale)+yShim);
      			ctx[1].stroke();

			break;

			case 2: // circle section
				ctx[1].beginPath();
				ctx[1].arc((startNode[1]*scale)+xShim,(startNode[2]*scale)+yShim,startNode[3]*scale,0,rad(360));
				ctx[1].stroke();
			break;
		}
	}
}

function dangerous_tunnel(canvas=1) {

	ctx[canvas].lineCap = "square";
	
	for (i=0;i<dangerous_tunnels.length;i++) {
		tunnel = dangerous_tunnels[i];
		drawLine(tunnel,2);
	}
}

function side_tunnel(tunnel,canvas=1) {

	ctx[canvas].lineCap = "square";
	ctx[canvas].strokeStyle = '#444444';
	ctx[canvas].lineWidth =  4*scale;

	ctx[canvas].beginPath();
	for (j=0;j<tunnel.length;j++) {
		if (j==0) {
			ctx[canvas].moveTo(tunnel[j][0]*scale+xShim, tunnel[j][1]*scale+yShim);
		} else {
			ctx[canvas].lineTo(tunnel[j][0]*scale+xShim, tunnel[j][1]*scale+yShim)
		}
	}
	ctx[canvas].stroke();
}

function tunnel_entrance(canvas=1) {

	ctx[canvas].lineCap = "butt";
	ctx[canvas].strokeStyle = '#000000';
	ctx[canvas].lineWidth =  3*scale;

	for (i=0;i<tunnel_entrances.length;i++) {
		thisEntrance = tunnel_entrances[i];

		sX = (thisEntrance[1]*scale)+xShim;
		sY = (thisEntrance[2]*scale)+yShim;

		ctx[canvas].beginPath();
		switch(thisEntrance[0]) {
			case 0:
				ctx[canvas].moveTo(sX, sY-8*scale);
				ctx[canvas].lineTo(sX+2*scale, sY-10*scale);
				ctx[canvas].lineTo(sX, sY-10*scale);
				ctx[canvas].lineTo(sX, sY+10*scale);
				ctx[canvas].lineTo(sX+2*scale, sY+10*scale);
				ctx[canvas].lineTo(sX, sY+8*scale);
			break;

			case 45:
				ctx[canvas].moveTo(sX+7*scale, sY-7*scale);
				ctx[canvas].lineTo(sX+9*scale, sY-7*scale);
				ctx[canvas].lineTo(sX+8*scale, sY-8*scale);
				ctx[canvas].lineTo(sX-8*scale, sY+8*scale);
				ctx[canvas].lineTo(sX-7*scale, sY+9*scale);
				ctx[canvas].lineTo(sX-7*scale, sY+7*scale);
			break;

			case 90:
				ctx[canvas].moveTo(sX-8*scale, sY);
				ctx[canvas].lineTo(sX-10*scale, sY+2*scale);
				ctx[canvas].lineTo(sX-10*scale, sY);
				ctx[canvas].lineTo(sX+10*scale, sY);
				ctx[canvas].lineTo(sX+10*scale, sY+2*scale);
				ctx[canvas].lineTo(sX+8*scale, sY);
			break;

			case 135:
				ctx[canvas].moveTo(sX-7*scale, sY-7*scale);
				ctx[canvas].lineTo(sX-9*scale, sY-7*scale);
				ctx[canvas].lineTo(sX-8*scale, sY-8*scale);
				ctx[canvas].lineTo(sX+8*scale, sY+8*scale);
				ctx[canvas].lineTo(sX+7*scale, sY+9*scale);
				ctx[canvas].lineTo(sX+7*scale, sY+7*scale);
			break;

			case 180:
				ctx[canvas].moveTo(sX, sY-8*scale);
				ctx[canvas].lineTo(sX-2*scale, sY-10*scale);
				ctx[canvas].lineTo(sX, sY-10*scale);
				ctx[canvas].lineTo(sX, sY+10*scale);
				ctx[canvas].lineTo(sX-2*scale, sY+10*scale);
				ctx[canvas].lineTo(sX, sY+8*scale);
			break;

			case 225:
				ctx[canvas].moveTo(sX+7*scale, sY-7*scale);
				ctx[canvas].lineTo(sX+7*scale, sY-9*scale);
				ctx[canvas].lineTo(sX+8*scale, sY-8*scale);
				ctx[canvas].lineTo(sX-8*scale, sY+8*scale);
				ctx[canvas].lineTo(sX-9*scale, sY+7*scale);
				ctx[canvas].lineTo(sX-7*scale, sY+7*scale);
			break;

			case 270:
				ctx[canvas].moveTo(sX-8*scale, sY);
				ctx[canvas].lineTo(sX-10*scale, sY-2*scale);
				ctx[canvas].lineTo(sX-10*scale, sY);
				ctx[canvas].lineTo(sX+10*scale, sY);
				ctx[canvas].lineTo(sX+10*scale, sY-2*scale);
				ctx[canvas].lineTo(sX+8*scale, sY);
			break;

			case 315:
				ctx[canvas].moveTo(sX-7*scale, sY-7*scale);
				ctx[canvas].lineTo(sX-7*scale, sY-9*scale);
				ctx[canvas].lineTo(sX-8*scale, sY-8*scale);
				ctx[canvas].lineTo(sX+8*scale, sY+8*scale);
				ctx[canvas].lineTo(sX+9*scale, sY+7*scale);
				ctx[canvas].lineTo(sX+7*scale, sY+7*scale);						
			break;
		}
		ctx[canvas].stroke();

	}
}

function surface_link(angle, sX,sY, canvas=1) {

	sX = (sX*scale)+xShim;
	sY = (sY*scale)+yShim;
	ctx[canvas].lineCap = "butt";
	ctx[canvas].strokeStyle = '#444444';
	ctx[canvas].lineWidth =  4*scale;

	straightLength = 27*scale;
	capLength = 7*scale;
	
	slantLength = 17*scale;
	capLengthSlant = 4*scale;

	ctx[canvas].moveTo(sX, sY);

	switch(angle) {

		case 0:
			ctx[canvas].lineTo(sX+straightLength, sY);
			ctx[canvas].lineTo(sX+straightLength, sY-capLength);
			ctx[canvas].lineTo(sX+straightLength, sY+capLength);
		break;

		case 45:
			ctx[canvas].lineTo(sX+slantLength, sY+slantLength);
			ctx[canvas].lineTo(sX+slantLength+capLengthSlant, sY+slantLength-capLengthSlant);
			ctx[canvas].lineTo(sX+slantLength-capLengthSlant, sY+slantLength+capLengthSlant);
		break;

		case 90:
			ctx[canvas].lineTo(sX,     			sY+straightLength);
			ctx[canvas].lineTo(sX-capLength,	sY+straightLength);
			ctx[canvas].lineTo(sX+capLength,	sY+straightLength);
		break;

		case 135:
			ctx[canvas].lineTo(sX-slantLength, sY+slantLength);		
			ctx[canvas].lineTo(sX-slantLength-capLengthSlant, sY+slantLength-capLengthSlant);
			ctx[canvas].lineTo(sX-slantLength+capLengthSlant, sY+slantLength+capLengthSlant);
		break;

		case 180:
			ctx[canvas].lineTo(sX-straightLength, sY);
			ctx[canvas].lineTo(sX-straightLength, sY-capLength);
			ctx[canvas].lineTo(sX-straightLength, sY+capLength);
		break;

		case 225:
			ctx[canvas].lineTo(sX-slantLength, sY-slantLength);
			ctx[canvas].lineTo(sX-slantLength+capLengthSlant, sY-slantLength-capLengthSlant);
			ctx[canvas].lineTo(sX-slantLength-capLengthSlant, sY-slantLength+capLengthSlant);
		break;

		case 270:
			ctx[canvas].lineTo(sX, 				sY-straightLength);
			ctx[canvas].lineTo(sX-capLength,	sY-straightLength);
			ctx[canvas].lineTo(sX+capLength,	sY-straightLength);
		break;

		case 315:
			ctx[canvas].lineTo(sX+slantLength, sY-slantLength);
			ctx[canvas].lineTo(sX+slantLength-capLengthSlant, sY-slantLength-capLengthSlant);
			ctx[canvas].lineTo(sX+slantLength+capLengthSlant, sY-slantLength+capLengthSlant);
		break;

	}

	ctx[canvas].stroke();
}

function break_line(sX,sY, canvas=1) {

	sX = sX*scale;
	sY = sY*scale;
	breakSize = 9*scale;

	// breaks a line to indicate damaged or blocked tunnel
	//ctx[canvas].fillStyle = '#880000';
	 ctx[canvas].fillStyle = '#ede9dd';
	ctx[canvas].beginPath();

	ctx[canvas].moveTo((sX-breakSize)+xShim,(sY-breakSize)+yShim);

	ctx[canvas].lineTo((sX-(breakSize/2))+xShim,(sY-breakSize)+yShim);
	ctx[canvas].lineTo((sX)+xShim,(sY-(breakSize/2))+yShim);
	ctx[canvas].lineTo((sX+(breakSize/2))+xShim,(sY-breakSize)+yShim);

	ctx[canvas].lineTo((sX+breakSize)+xShim,(sY-breakSize)+yShim); 

	ctx[canvas].lineTo((sX+breakSize)+xShim,(sY-breakSize/2)+yShim);
	ctx[canvas].lineTo((sX+(breakSize/2))+xShim,(sY)+yShim);
	ctx[canvas].lineTo((sX+breakSize)+xShim,(sY+breakSize/2)+yShim);

	ctx[canvas].lineTo((sX+(breakSize/2))+xShim,(sY+(breakSize/2))+yShim); 

	ctx[canvas].lineTo((sX+(breakSize/2))+xShim,(sY+breakSize)+yShim);
	ctx[canvas].lineTo((sX)+xShim,(sY+(breakSize*1.5))+yShim);
	ctx[canvas].lineTo((sX-(breakSize/2))+xShim,(sY+breakSize)+yShim);

	ctx[canvas].lineTo((sX-(breakSize/2))+xShim,(sY+(breakSize/2))+yShim); 

	ctx[canvas].lineTo((sX-breakSize)+xShim,(sY+breakSize/2)+yShim);
	ctx[canvas].lineTo((sX-(breakSize*1.5))+xShim,(sY)+yShim);
	ctx[canvas].lineTo((sX-breakSize)+xShim,(sY-breakSize/2)+yShim);

	ctx[canvas].closePath();

	ctx[canvas].fill();
}


function highlight_station(stationID) {
	animHolder = stationID;
	animCurrentFrame = 0;
	animFrames = [16,15,14,13,12,11,10,9,9,9,9,16,15,14,13,12,11,10,9,9,9,9,16,15,14,13,12,11,10,9,9,9,9];
	animate_station();
}

function animate_station() {
	var searchResult = findRecord(stations,"station_id",animHolder);
	var thisStation = searchResult[0];
	ctx[5].clearRect(0, 0, 2200, 2200);
	ctx[5].lineWidth = 2*scale;
	ctx[5].strokeStyle = '#FF0000';
	circle((thisStation['x_position']*scale)+xShim,(thisStation['y_position']*scale)+yShim,animFrames[animCurrentFrame]*scale,3);
	ctx[5].stroke();
	animCurrentFrame++;
	if (animCurrentFrame<animFrames.length) {
		setTimeout(animate_station,20);
	} else {
		ctx[5].clearRect(0, 0, 2200, 2200);
	}
}

function draw_D6() {
	for (i = 0; i < d6_stations.length; i++) {
        thisStation = d6_stations[i];
        station(thisStation['x_position'], thisStation['y_position'], thisStation['faction_id'], thisStation['symbol_id'],4);
    }
}


// search object array
// must be a better way to do this!
function findRecord(source,property,value) {
	var newDataArray = [];
	for (k=0;k<source.length;k++) {
		item = source[k];
		if (item[property] == value) {
			newDataArray[newDataArray.length] = item;
		}
	}
	return newDataArray;
}
