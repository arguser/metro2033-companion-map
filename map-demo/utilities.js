var scale=1.5;

function rad(deg) {
	deg = (Math.PI/180)*deg;
	return deg;
}

		function line(sX,sY,eX,eY) {
			ctx.beginPath();
      		ctx.moveTo(sX,sY);
      		ctx.lineTo(eX,eY);
      		ctx.stroke();
		}

		function circle(cX,cY,Rad) {
			ctx.beginPath();
			ctx.arc(cX,cY,Rad,0,rad(360));
		}

		function arc(cX,cY,Rad,start,end) {
			ctx.beginPath();
			ctx.arc(cX,cY,Rad,rad(start),rad(end));
			ctx.stroke();
		}

		function quad(sX,sY,cX,cY,eX,eY) {
			ctx.beginPath();
      		ctx.moveTo(sX,sY);     
      		ctx.quadraticCurveTo(eX,eY, cX,cY);
			ctx.stroke();			
		}
		function bezier(sX,sY,c1X,c1Y,c2X,c2Y,eX,eY) {
			ctx.beginPath();
      		ctx.moveTo(sX,sY);
      		ctx.bezierCurveTo(c1X,c1Y, c2X,c2Y, eX,eY);
			ctx.stroke();			
		}

		function station(sX,sY,faction) {

			sX = scale*sX;
			sY = scale*sY;

			ctx.strokeStyle = '#000000';
			ctx.lineWidth = 2*scale;
			circle(sX,sY,7*scale);
			ctx.stroke();

			var fillColour = aFactions[faction][0];
			ctx.fillStyle = fillColour;
      		ctx.fill();

      		ctx.lineCap = 'butt';
			ctx.lineWidth = 1;
			ctx.font = 'normal 12px sans-serif';
			ctx.textAlign = 'center';

      		eval("pattern_"+faction+"("+sX+","+sY+")");

		}

		function interchange_2(fX,fY, sX,sY) {

			ctx.strokeStyle = '#000000';
			ctx.fillStyle = '#FFFFFF';
			ctx.lineWidth = 2;

			ctx.beginPath();
			circle(fX,fY,9); ctx.stroke();
			ctx.closePath();
			ctx.fill();

			ctx.beginPath();
			circle(sX,sY,9); ctx.stroke();
			ctx.closePath();
			ctx.fill();

			ctx.strokeStyle = '#000000';
			ctx.lineWidth = 10;
      		ctx.beginPath();
      		ctx.moveTo(fX,fY);
			ctx.lineTo(sX,sY);
			ctx.closePath();
			ctx.stroke();

			ctx.strokeStyle = '#FFFFFF';
			ctx.lineWidth = 8;
      		ctx.beginPath();
      		ctx.moveTo(fX,fY);
			ctx.lineTo(sX,sY);
			ctx.closePath();
			ctx.stroke();

			ctx.fillStyle = '#FFFFFF';

			ctx.beginPath();
			ctx.arc(fX,fY,9,0,rad(360));
			ctx.closePath();
			ctx.fill();

			ctx.beginPath();
			ctx.arc(sX,sY,9,0,rad(360));
			ctx.closePath();
			ctx.fill();
		}

function interchange_3(fX,fY, sX,sY, tX,tY, loop) {

			// Base circles
			ctx.strokeStyle = '#000000';
			ctx.fillStyle = '#FFFFFF';
			ctx.lineWidth = 2;
			ctx.beginPath(); circle(fX,fY,9); ctx.closePath(); ctx.stroke(); ctx.fill();
			ctx.beginPath(); circle(sX,sY,9); ctx.closePath(); ctx.stroke(); ctx.fill();
			ctx.beginPath(); circle(tX,tY,9); ctx.closePath(); ctx.stroke(); ctx.fill();
			
			// Black Connections
			ctx.strokeStyle = '#000000';
			ctx.lineWidth = 10;
      		ctx.beginPath(); ctx.moveTo(fX,fY); ctx.lineTo(sX,sY); ctx.closePath(); ctx.stroke();
      		ctx.beginPath(); ctx.moveTo(sX,sY); ctx.lineTo(tX,tY); ctx.closePath(); ctx.stroke();

      		if (loop) ctx.beginPath(); ctx.moveTo(tX,tY); ctx.lineTo(fX,fY); ctx.closePath(); ctx.stroke();

			// White Connections
			ctx.strokeStyle = '#FFFFFF';
			ctx.lineWidth = 8;
      		ctx.beginPath(); ctx.moveTo(fX,fY); ctx.lineTo(sX,sY); ctx.closePath(); ctx.stroke();
      		ctx.beginPath(); ctx.moveTo(sX,sY); ctx.lineTo(tX,tY); ctx.closePath(); ctx.stroke();

      		if (loop) ctx.beginPath(); ctx.moveTo(tX,tY); ctx.lineTo(fX,fY); ctx.closePath(); ctx.stroke();


			// Circle Overlays
			ctx.fillStyle = '#FFFFFF';
			ctx.beginPath(); ctx.arc(fX,fY,9,0,rad(360)); ctx.closePath(); ctx.fill();
			ctx.beginPath(); ctx.arc(sX,sY,9,0,rad(360)); ctx.closePath(); ctx.fill();
			ctx.beginPath(); ctx.arc(tX,tY,9,0,rad(360)); ctx.closePath(); ctx.fill();
		}


function interchange_4(fX,fY, sX,sY, tX,tY, rX,rY) {

			// Base circles
			ctx.strokeStyle = '#000000';
			ctx.fillStyle = '#FFFFFF';
			ctx.lineWidth = 2;
			ctx.beginPath(); circle(fX,fY,9); ctx.closePath(); ctx.stroke(); ctx.fill();
			ctx.beginPath(); circle(sX,sY,9); ctx.closePath(); ctx.stroke(); ctx.fill();
			ctx.beginPath(); circle(tX,tY,9); ctx.closePath(); ctx.stroke(); ctx.fill();
			ctx.beginPath(); circle(rX,rY,9); ctx.closePath(); ctx.stroke(); ctx.fill();

			// Black Connections
			ctx.strokeStyle = '#000000';
			ctx.lineWidth = 8;
      		ctx.beginPath(); ctx.moveTo(fX,fY); ctx.lineTo(sX,sY); ctx.closePath(); ctx.stroke();
      		ctx.beginPath(); ctx.moveTo(sX,sY); ctx.lineTo(tX,tY); ctx.closePath(); ctx.stroke();
      		ctx.beginPath(); ctx.moveTo(tX,tY); ctx.lineTo(rX,rY); ctx.closePath(); ctx.stroke();
			ctx.beginPath(); ctx.moveTo(rX,rY); ctx.lineTo(fX,fY); ctx.closePath(); ctx.stroke();

			ctx.beginPath(); ctx.moveTo(fX,fY); ctx.lineTo(tX,tY); ctx.closePath(); ctx.stroke();

			// White Connections
			ctx.strokeStyle = '#FFFFFF';
			ctx.lineWidth = 6;
      		ctx.beginPath(); ctx.moveTo(fX,fY); ctx.lineTo(sX,sY); ctx.closePath(); ctx.stroke();
      		ctx.beginPath(); ctx.moveTo(sX,sY); ctx.lineTo(tX,tY); ctx.closePath(); ctx.stroke();
      		ctx.beginPath(); ctx.moveTo(tX,tY); ctx.lineTo(rX,rY); ctx.closePath(); ctx.stroke();
      		ctx.beginPath(); ctx.moveTo(rX,rY); ctx.lineTo(fX,fY); ctx.closePath(); ctx.stroke();

			ctx.beginPath(); ctx.moveTo(fX,fY); ctx.lineTo(tX,tY); ctx.closePath(); ctx.stroke();

			// Circle Overlays
			ctx.fillStyle = '#FFFFFF';
			ctx.beginPath(); ctx.arc(fX,fY,9,0,rad(360)); ctx.closePath(); ctx.fill();
			ctx.beginPath(); ctx.arc(sX,sY,9,0,rad(360)); ctx.closePath(); ctx.fill();
			ctx.beginPath(); ctx.arc(tX,tY,9,0,rad(360)); ctx.closePath(); ctx.fill();
			ctx.beginPath(); ctx.arc(rX,rY,9,0,rad(360)); ctx.closePath(); ctx.fill();
		}


function drawLine(line) {

	var offset = 10; // larger offset equals more extreme curves

	ctx.lineCap = 'round';
	ctx.strokeStyle = line['line_colour'];
	nodes = line['line_nodes'];
	ctx.lineWidth = 3*scale;
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
				ctx.beginPath();
		    	ctx.moveTo(startNode[1]*scale,startNode[2]*scale);
		    	ctx.lineTo(endNode[1]*scale,endNode[2]*scale);
      			ctx.stroke();
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

				ctx.beginPath();
		      	ctx.moveTo(startNode[1]*scale,startNode[2]*scale);
		      	ctx.bezierCurveTo(controlNode1[0]*scale,controlNode1[1]*scale, controlNode2[0]*scale,controlNode2[1]*scale, endNode[1]*scale,endNode[2]*scale);
      			ctx.stroke();

			break;

			case 2: // circle section
				ctx.beginPath();
				ctx.arc(startNode[1]*scale,startNode[2]*scale,startNode[3]*scale,0,rad(360));
				ctx.stroke();
			break;

		}
	}
}

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