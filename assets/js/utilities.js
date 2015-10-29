var baseScale = 1.5;  // scale factor for map. Should never be changed programatically
var scale=baseScale;
var station_radius=7; // radius os station circles

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
function station(sX,sY,faction,canvas=1,stationScale=1) {
	sX = scale*sX;
	sY = scale*sY;

	// change size of station graphic (if necessary)
	scale = scale*stationScale;

	ctx[canvas].shadowBlur=0;
	ctx[canvas].shadowColor="black";
	ctx[canvas].strokeStyle = '#000000';
	ctx[canvas].lineWidth = 2*scale;
	circle(sX,sY,station_radius*scale,canvas);
	ctx[canvas].stroke();

	var fillColour = aFactions[faction][0];
	ctx[canvas].fillStyle = fillColour;
	ctx[canvas].fill();

    ctx[canvas].lineCap = 'butt';
	ctx[canvas].lineWidth = 1;
	ctx[canvas].font = 'normal 12px sans-serif';
	ctx[canvas].textAlign = 'center';

    eval("pattern_"+faction+"("+sX+","+sY+")");

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
function changeNames() {
	name_set=document.getElementById('name_set_dd').options[document.getElementById('name_set_dd').selectedIndex].value;
	print_station_labels();
}

// print out station labels
function print_station_labels() {
	ctx[2].clearRect(0, 0, 1800, 2000);
	for (i=0;i<stations.length;i++) {
		thisStation = stations[i];
		name_station(thisStation['station_id'],thisStation['label_point'],thisStation['x_position'],thisStation['y_position']);
	}
}

// print out label for a specific station
function name_station(stationID,position,sX,sY) {
	var searchResult = findRecord(station_name,"station_id",stationID);
	searchResult = findRecord(searchResult,"name_set",name_set);
	if (searchResult.length>0) {

		switch(position) {
			case 1:  cX=7;   cY=-10; labelAlign="left";   break;
			case 2:  cX=10;  cY=-7;  labelAlign="left";   break;
			case 3:  cX=11;  cY=0;   labelAlign="left";   break;
			case 4:  cX=+10; cY=+7;  labelAlign="left";   break;
			case 5:  cX=+7;  cY=+11; labelAlign="left";   break;
			case 6:  cX=0;   cY=15;  labelAlign="center"; break;
			case 7:  cX=-7;  cY=+11; labelAlign="right";  break;
			case 8:  cX=-10; cY=+7;  labelAlign="right";  break;
			case 9:  cX=-11; cY=0;   labelAlign="right";  break;
			case 10: cX=-10; cY=-7;  labelAlign="right";  break;
			case 11: cX=-7;  cY=-10; labelAlign="right";  break;
			case 12: cX=0;   cY=-11; labelAlign="center"; break;
		}

		var stationName = searchResult[0]['station_name'];
		if (stationName.length>0) {
			ctx[2].lineCap = 'butt';
			var fontSize = 8*scale;
			ctx[2].font = 'bold '+fontSize+'px sans-serif';
			ctx[2].textAlign = 'left';
			ctx[2].fillStyle = '#000000';
			ctx[2].shadowBlur=4;
			ctx[2].shadowColor="#FFFFFF";
			ctx[2].textAlign = labelAlign;
			ctx[2].fillText(stationName,(sX+cX)*scale,(sY+cY)*scale);
		}
	}
}

// removes a station from the map
function clear_station(stationID,canvas=1) {
	var searchResult = findRecord(stations,"station_id",stationID);
	var thisStation = searchResult[0];
	var x1 = (thisStation['x_position']-9)*scale;
	var y1 = (thisStation['y_position']-9)*scale;
    ctx[1].clearRect(x1,y1, 18*scale,18*scale);
}

function draw_features() {
			// draw features
			for (i=0;i<features.length;i++) {
				thisFeature = features[i];
				ctx[1].fillStyle = '#FFFFFF';
				ctx[1].strokeStyle = '#000000';
      			ctx[1].lineWidth = 1*scale;

				sX = thisFeature['x_position']*scale;
				sY = thisFeature['y_position']*scale;
				sW = thisFeature['width']*scale;
				sH = thisFeature['height']*scale;
				sC = 4*scale; // corner size

				// draw box
				ctx[1].beginPath();
				ctx[1].moveTo(sX-(sW/2)+sC,sY-(sH/2));
				ctx[1].lineTo(sX+(sW/2)-sC,sY-(sH/2));
				ctx[1].quadraticCurveTo( sX+(sW/2),sY-(sH/2), sX+(sW/2),sY-(sH/2)+sC);
				ctx[1].lineTo(sX+(sW/2),sY+(sH/2)-sC);
				ctx[1].quadraticCurveTo( sX+(sW/2),sY+(sH/2), sX+(sW/2)-sC,sY+(sH/2));
				ctx[1].lineTo(sX-(sW/2)+sC,sY+(sH/2));
				ctx[1].quadraticCurveTo( sX-(sW/2),sY+(sH/2), sX-(sW/2),sY+(sH/2)-sC);
				ctx[1].lineTo(sX-(sW/2),sY-(sH/2)+sC);
				ctx[1].quadraticCurveTo( sX-(sW/2),sY-(sH/2), sX-(sW/2)+sC,sY-(sH/2));
				ctx[1].closePath();
      			ctx[1].fill();
      			ctx[1].stroke();

      			// label
      			var textlines = thisFeature['feature_name'];
      			if (textlines.indexOf("|")>0) {textlines = textlines.split('|'); } else { textlines = [textlines]; }
				var fontSize = 8*scale;
				ctx[1].font = "bold "+fontSize+"px 'trebuchet ms',sans-serif";
				ctx[1].textAlign = 'center';
				ctx[1].fillStyle = '#000000';
				lineCount=0;
				for (l=0;l<textlines.length;l++) {

					yPoint = sY;
					if (textlines.length>1) {
						if (lineCount==0) yPoint = yPoint-(5*scale);
						if (lineCount==1) yPoint = yPoint+(5*scale);
					}
					ctx[1].fillText(textlines[l],sX,yPoint);
					lineCount++;
				}

			}
		}


// interchange code - will need to be checked through and probably rewritten
function interchange_2(fX,fY, sX,sY, canvas=1) {

			fX = fX*scale;	fY = fY*scale;
			sX = sX*scale;	sY = sY*scale;


			ctx[canvas].strokeStyle = '#000000';
			ctx[canvas].fillStyle = '#FFFFFF';
			ctx[canvas].lineWidth = 2*scale;

			ctx[canvas].beginPath();
			circle(fX,fY,9*scale); ctx[canvas].stroke();
			ctx[canvas].closePath();
			ctx[canvas].fill();

			ctx[canvas].beginPath();
			circle(sX,sY,9*scale); ctx[canvas].stroke();
			ctx[canvas].closePath();
			ctx[canvas].fill();

			ctx[canvas].strokeStyle = '#000000';
			ctx[canvas].lineWidth = 10*scale;
      		ctx[canvas].beginPath();
      		ctx[canvas].moveTo(fX,fY);
			ctx[canvas].lineTo(sX,sY);
			ctx[canvas].closePath();
			ctx[canvas].stroke();

			ctx[canvas].strokeStyle = '#FFFFFF';
			ctx[canvas].lineWidth = 8*scale;
      		ctx[canvas].beginPath();
      		ctx[canvas].moveTo(fX,fY);
			ctx[canvas].lineTo(sX,sY);
			ctx[canvas].closePath();
			ctx[canvas].stroke();

			ctx[canvas].fillStyle = '#FFFFFF';

			ctx[canvas].beginPath();
			ctx[canvas].arc(fX,fY,9*scale,0,rad(360));
			ctx[canvas].closePath();
			ctx[canvas].fill();

			ctx[canvas].beginPath();
			ctx[canvas].arc(sX,sY,9*scale,0,rad(360));
			ctx[canvas].closePath();
			ctx[canvas].fill();
		}
function interchange_3(fX,fY, sX,sY, tX,tY, loop) {

			// Base circles
			ctx[0].strokeStyle = '#000000';
			ctx[0].fillStyle = '#FFFFFF';
			ctx[0].lineWidth = 2;
			ctx[0].beginPath(); circle(fX,fY,9); ctx[0].closePath(); ctx[0].stroke(); ctx[0].fill();
			ctx[0].beginPath(); circle(sX,sY,9); ctx[0].closePath(); ctx[0].stroke(); ctx[0].fill();
			ctx[0].beginPath(); circle(tX,tY,9); ctx[0].closePath(); ctx[0].stroke(); ctx[0].fill();

			// Black Connections
			ctx[0].strokeStyle = '#000000';
			ctx[0].lineWidth = 10;
      		ctx[0].beginPath(); ctx[0].moveTo(fX,fY); ctx[0].lineTo(sX,sY); ctx[0].closePath(); ctx[0].stroke();
      		ctx[0].beginPath(); ctx[0].moveTo(sX,sY); ctx[0].lineTo(tX,tY); ctx[0].closePath(); ctx[0].stroke();

      		if (loop) ctx[0].beginPath(); ctx[0].moveTo(tX,tY); ctx[0].lineTo(fX,fY); ctx[0].closePath(); ctx[0].stroke();

			// White Connections
			ctx[0].strokeStyle = '#FFFFFF';
			ctx[0].lineWidth = 8;
      		ctx[0].beginPath(); ctx[0].moveTo(fX,fY); ctx[0].lineTo(sX,sY); ctx[0].closePath(); ctx[0].stroke();
      		ctx[0].beginPath(); ctx[0].moveTo(sX,sY); ctx[0].lineTo(tX,tY); ctx[0].closePath(); ctx[0].stroke();

      		if (loop) ctx[0].beginPath(); ctx[0].moveTo(tX,tY); ctx[0].lineTo(fX,fY); ctx[0].closePath(); ctx[0].stroke();


			// Circle Overlays
			ctx[0].fillStyle = '#FFFFFF';
			ctx[0].beginPath(); ctx[0].arc(fX,fY,9,0,rad(360)); ctx[0].closePath(); ctx[0].fill();
			ctx[0].beginPath(); ctx[0].arc(sX,sY,9,0,rad(360)); ctx[0].closePath(); ctx[0].fill();
			ctx[0].beginPath(); ctx[0].arc(tX,tY,9,0,rad(360)); ctx[0].closePath(); ctx[0].fill();
		}
function interchange_4(fX,fY, sX,sY, tX,tY, rX,rY) {

			// Base circles
			ctx[0].strokeStyle = '#000000';
			ctx[0].fillStyle = '#FFFFFF';
			ctx[0].lineWidth = 2;
			ctx[0].beginPath(); circle(fX,fY,9); ctx[0].closePath(); ctx[0].stroke(); ctx[0].fill();
			ctx[0].beginPath(); circle(sX,sY,9); ctx[0].closePath(); ctx[0].stroke(); ctx[0].fill();
			ctx[0].beginPath(); circle(tX,tY,9); ctx[0].closePath(); ctx[0].stroke(); ctx[0].fill();
			ctx[0].beginPath(); circle(rX,rY,9); ctx[0].closePath(); ctx[0].stroke(); ctx[0].fill();

			// Black Connections
			ctx[0].strokeStyle = '#000000';
			ctx[0].lineWidth = 8;
      		ctx[0].beginPath(); ctx[0].moveTo(fX,fY); ctx[0].lineTo(sX,sY); ctx[0].closePath(); ctx[0].stroke();
      		ctx[0].beginPath(); ctx[0].moveTo(sX,sY); ctx[0].lineTo(tX,tY); ctx[0].closePath(); ctx[0].stroke();
      		ctx[0].beginPath(); ctx[0].moveTo(tX,tY); ctx[0].lineTo(rX,rY); ctx[0].closePath(); ctx[0].stroke();
			ctx[0].beginPath(); ctx[0].moveTo(rX,rY); ctx[0].lineTo(fX,fY); ctx[0].closePath(); ctx[0].stroke();

			ctx[0].beginPath(); ctx[0].moveTo(fX,fY); ctx[0].lineTo(tX,tY); ctx[0].closePath(); ctx[0].stroke();

			// White Connections
			ctx[0].strokeStyle = '#FFFFFF';
			ctx[0].lineWidth = 6;
      		ctx[0].beginPath(); ctx[0].moveTo(fX,fY); ctx[0].lineTo(sX,sY); ctx[0].closePath(); ctx[0].stroke();
      		ctx[0].beginPath(); ctx[0].moveTo(sX,sY); ctx[0].lineTo(tX,tY); ctx[0].closePath(); ctx[0].stroke();
      		ctx[0].beginPath(); ctx[0].moveTo(tX,tY); ctx[0].lineTo(rX,rY); ctx[0].closePath(); ctx[0].stroke();
      		ctx[0].beginPath(); ctx[0].moveTo(rX,rY); ctx[0].lineTo(fX,fY); ctx[0].closePath(); ctx[0].stroke();

			ctx[0].beginPath(); ctx[0].moveTo(fX,fY); ctx[0].lineTo(tX,tY); ctx[0].closePath(); ctx[0].stroke();

			// Circle Overlays
			ctx[0].fillStyle = '#FFFFFF';
			ctx[0].beginPath(); ctx[0].arc(fX,fY,9,0,rad(360)); ctx[0].closePath(); ctx[0].fill();
			ctx[0].beginPath(); ctx[0].arc(sX,sY,9,0,rad(360)); ctx[0].closePath(); ctx[0].fill();
			ctx[0].beginPath(); ctx[0].arc(tX,tY,9,0,rad(360)); ctx[0].closePath(); ctx[0].fill();
			ctx[0].beginPath(); ctx[0].arc(rX,rY,9,0,rad(360)); ctx[0].closePath(); ctx[0].fill();
}

// draw a rail line from coordinates
function drawLine(line) {

	var offset = 10; // larger offset equals more extreme curves

	ctx[0].lineCap = 'round';
	ctx[0].strokeStyle = line['line_colour'];
	nodes = line['line_nodes'];
	ctx[0].lineWidth = 3*scale;

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
				ctx[0].beginPath();
		    	ctx[0].moveTo(startNode[1]*scale,startNode[2]*scale);
		    	ctx[0].lineTo(endNode[1]*scale,endNode[2]*scale);
      			ctx[0].stroke();
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

				ctx[0].beginPath();
		      	ctx[0].moveTo(startNode[1]*scale,startNode[2]*scale);
		      	ctx[0].bezierCurveTo(controlNode1[0]*scale,controlNode1[1]*scale, controlNode2[0]*scale,controlNode2[1]*scale, endNode[1]*scale,endNode[2]*scale);
      			ctx[0].stroke();

			break;

			case 2: // circle section
				ctx[0].beginPath();
				ctx[0].arc(startNode[1]*scale,startNode[2]*scale,startNode[3]*scale,0,rad(360));
				ctx[0].stroke();
			break;

		}
	}
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
	ctx[3].clearRect(0, 0, 1800, 2000);
	ctx[3].lineWidth = 2*scale;
	ctx[3].strokeStyle = '#FF0000';
	circle(thisStation['x_position']*scale,thisStation['y_position']*scale,animFrames[animCurrentFrame]*scale,3);
	ctx[3].stroke();
	animCurrentFrame++;
	if (animCurrentFrame<animFrames.length) {
		setTimeout(animate_station,20);
	} else {
		ctx[3].clearRect(0, 0, 1800, 2000);
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

// array of factions - [station background color, faction name]
// will be rewritten into the factions object at some point
var aFactions  = Array();
aFactions[0]   = Array("#FFFFFF","Unexplored or No Info");
aFactions[1]   = Array("#8C9091","Community of the Ring Stations (Hansa)");
aFactions[2]   = Array("#FF0000","Red Line");
aFactions[3]   = Array("#0080C1","Polis");
aFactions[4]   = Array("#0080C1","Arbat Confederation");
aFactions[5]   = Array("#EFA508","VDNKh Commonwealth");
aFactions[6]   = Array("#A53E00","1905 Confederation");
aFactions[7]   = Array("#2E2A26","Fourth Reich");
aFactions[8]   = Array("#4DC11A","University/Emerald City (Rumoured)");
aFactions[9]   = Array("#C7DC23","Collective Farms and Factories");
aFactions[10]  = Array("#67C1D9","Baumansky Alliance");
aFactions[11]  = Array("#1D58FF","Pervomay Republic");
aFactions[12]  = Array("#FFFF08","Kalinin Confederation");
aFactions[13]  = Array("#B000BF","Pechatniki Confederation");
aFactions[14]  = Array("#00CBFF","Yasenevo Confederation");
aFactions[15]  = Array("#2E2A26","Technicians");
aFactions[16]  = Array("#323232","Commonwealth of Human Mutants");
aFactions[17]  = Array("#297EFF","Independent Station");
aFactions[18]  = Array("#FFFFFF","Gangsters"); // hearts
aFactions[19]  = Array("#FFFFFF","Gangsters"); // clubs
aFactions[20]  = Array("#FFFFFF","Gangsters"); // diamonds
aFactions[21]  = Array("#FFFFFF","Gangsters"); // spades
aFactions[22]  = Array("#FFFFFF","Gangsters"); // stars
aFactions[23]  = Array("#FF0000","Trotskyists");
aFactions[24]  = Array("#8C9091","Anarchists");
aFactions[25]  = Array("#FF6500","Hare Krishnas");
aFactions[26]  = Array("#B2B2B2","Transit Station");
aFactions[27]  = Array("#727272","Destroyed");
aFactions[28]  = Array("#B2B2B2","Abandoned");
aFactions[29]  = Array("#FFFF08","Irradiated");
aFactions[30]  = Array("#000000","Hazardous");
aFactions[31]  = Array("#323232","Occupied by Mutants");
aFactions[32]  = Array("#00BE00","Savage Cannibals of the Great Worm");
aFactions[33]  = Array("#000000","Satanists (Locations Conjectured)");
