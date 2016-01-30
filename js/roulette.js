function extraVariables() {


if (Math.random() <= 0.30) {
    document.getElementById("getshotextra").innerHTML=("Do not get shot at by the guards. ");
} else {
	document.getElementById("getshotextra").innerHTML=("");
}

if (Math.random() <= 0.30) {
    document.getElementById("distractionsextra").innerHTML=("Do not use gunshots or explosives as distractions. ");
} else {
	document.getElementById("distractionsextra").innerHTML=("");
}

if (Math.random() <= 0.30) {
	document.getElementById("knockoutsextra").innerHTML=("Do not use any unnecessary knockouts or accidents. ");
} else {
	document.getElementById("knockoutsextra").innerHTML=("");
}

if (Math.random() <= 0.30) {
	document.getElementById("suitonlyextra").innerHTML=("Do not use any disguises. ");
} else {
	document.getElementById("suitonlyextra").innerHTML=("");
}

};

function chooseMission() {
	var mission = document.getElementById("missionselect").selectedIndex;
	if ((document.getElementsByTagName("option")[mission].value) === "ANL") {
		fullANL();
	} else if ((document.getElementsByTagName("option")[mission].value) === "TDDUP"){
		fullTDDUP();
	} else if ((document.getElementsByTagName("option")[mission].value) === "CD") {
		fullCD();
	} else if ((document.getElementsByTagName("option")[mission].value) === "AVY") {
		fullAVY();
	} else if ((document.getElementsByTagName("option")[mission].value) === "AXXV") {
		fullAXXV();
	} else {
		document.getElementById("mainresult").innerHTML = ("Selected mission is not ready for randomizing.");
	};

};

function fullAVY() {

//AVY starts, kills and exits

var entryAVY = ["Left from the beginning","Right from the beginning","Through the party to the cellar","Through the party to the main building"];
var killAVY = ["Fiber wire","RU-AP mine","Gun","Gravity","Falling object","Water/Wine","Kitchen knife","Hammer","Fire extinguisher"];
var exitAVY = ["Cliffside path","Elevator"];

document.getElementById("mainresult").innerHTML = ("Start by heading " + entryAVY[Math.floor(Math.random()*entryAVY.length)].toUpperCase().fontcolor("red") + 
". Kill Manuel using the " + killAVY[Math.floor(Math.random()*killAVY.length)].toUpperCase().fontcolor("red") + 
" and Don Fernando using the " + killAVY[Math.floor(Math.random()*killAVY.length)].toUpperCase().fontcolor("red") + 
". Use the " + exitAVY[Math.floor(Math.random()*exitAVY.length)].toUpperCase().fontcolor("red") + " to reach the exit.");
	
//AVY extra variables
	
if (Math.random() <= 0.49) {
	document.getElementById("extra1").innerHTML = ("Kill Manuel first.");
} else {
	document.getElementById("extra1").innerHTML = ("Kill Don Fernando first.");
};
	
};

function fullCD() {

//CD starts and kills

var entryCD = ["Left and down the stairs","Through the opera hall","Right of the hall and down the stairs"];
var killCD = ["Fiber wire","RU-AP Mine","Gun","Gravity","Falling object","Hammer","Screwdriver"];

document.getElementById("mainresult").innerHTML = ("Start by heading " + entryCD[Math.floor(Math.random()*entryCD.length)].toUpperCase().fontcolor("red") +
". Kill D'Alvade using the " + killCD[Math.floor(Math.random()*killCD.length)].toUpperCase().fontcolor("red") + 
" and Delahunt using the " + killCD[Math.floor(Math.random()*killCD.length)].toUpperCase().fontcolor("red") +". ");

//CD extra variables

if (Math.random() <= 0.20) {
	document.getElementById("extra1").innerHTML=("Kill Delahunt first.");
} else {
	document.getElementById("extra1").innerHTML=("");
};
	
if (Math.random() <= 0.20) {
	document.getElementById("extra2").innerHTML=("Retrieve the prop WW2 gun.");
} else {
	document.getElementById("extra2").innerHTML=("");
};

};

function fullANL() {

//ANL entrances, exits and kills

var entryANL = ["Garage","Basement","Front door","Backyard"];
var killANL = ["Kitchen knife","Fiber wire","Nailer","RU-AP Mine","Baseball bat","Gun","Glass ceiling","Car","Gravity","Swimming pool","Hedge Cutter"];
var exitANL = ["Garage","Front door"];

document.getElementById("mainresult").innerHTML = ("Enter through the " + entryANL[Math.floor(Math.random()*entryANL.length)].toUpperCase().fontcolor("red") +
 ", kill Vinnie using the " + killANL[Math.floor(Math.random()*killANL.length)].toUpperCase().fontcolor("red") +
 " and exit through the " + exitANL[Math.floor(Math.random()*exitANL.length)].toUpperCase().fontcolor("red") +". ");
	
//ANL extra variables

if (Math.random() <= 0.15) {
	document.getElementById("extra1").innerHTML=("Vinnie's wife must survive.");
} else {
	document.getElementById("extra1").innerHTML=("");
};

};

function fullTDDUP() {

//TDDUP entrances, exits and kills
var entryTDDUP = ["Left Door","Main Door","Right Door"];
var killTDDUP = ["Fiber Wire","RU-AP Mine","Gun","Gravity","Swamp","Shovel","Chandelier"];
var exitTDDUP = ["Your own boat","The priest's boat"];

document.getElementById("mainresult").innerHTML = ("Enter through the " + entryTDDUP[Math.floor(Math.random()*entryTDDUP.length)].toUpperCase().fontcolor("red") +
 ", kill Buddy using the " + killTDDUP[Math.floor(Math.random()*killTDDUP.length)].toUpperCase().fontcolor("red") +
 ", Pappy using the " + killTDDUP[Math.floor(Math.random()*killTDDUP.length)].toUpperCase().fontcolor("red") +
 " and exit using the " + exitTDDUP[Math.floor(Math.random()*exitTDDUP.length)].toUpperCase().fontcolor("red") +". ");

//TDDUP extra variables

if (Math.random() <= 0.49) {
	document.getElementById("extra1").innerHTML = ("Kill Pappy first.");
} else {
	document.getElementById("extra1").innerHTML = ("Kill Buddy first.");
};

if (Math.random() <= 0.30) {
	document.getElementById("extra2").innerHTML = ("Never go to the second floor.");
} else {
	document.getElementById("extra2").innerHTML = ("");
};

};

function fullAXXV() {

//AXXV main variables

var firstHalf = ["The roof","The hallway"];
var secondHalf = ["The roof","The courtyard"];
var killAXXV =  ["Fiber wire","RU-AP mine","Gun","Gravity","Kitchen Knife","Nailer"];

document.getElementById("mainresult").innerHTML = ("Enter the main building through the " + firstHalf[Math.floor(Math.random()*firstHalf.length)].toUpperCase().fontcolor("red") + 
" and the West Wing through " + secondHalf[Math.floor(Math.random()*secondHalf.length)].toUpperCase().fontcolor("red") + 
". Kill the vice president using the " + killAXXV[Math.floor(Math.random()*killAXXV.length)].toUpperCase().fontcolor("red") + 
" and Mark Parchezzi III using the " + killAXXV[Math.floor(Math.random()*killAXXV.length)].toUpperCase().fontcolor("red") + 
". Leave the West Wing through the " + secondHalf[Math.floor(Math.random()*secondHalf.length)].toUpperCase().fontcolor("red") + 
" and the main building through the " + firstHalf[Math.floor(Math.random()*firstHalf.length)].toUpperCase().fontcolor("red") + ".")

if (Math.random() <= 0.64) {
	document.getElementById("extra1").innerHTML = ("Kill the vice president first.");
} else {
	document.getElementById("extra1").innerHTML = ("Kill Mark Parchezzi III first.");
};

if (Math.random() <= 0.20) {
	document.getElementById("extra2").innerHTML=("Retrieve Parchezzi's Custom 1911.");
} else {
	document.getElementById("extra2").innerHTML=("");
};

if (Math.random() <= 0.05) {
	document.getElementById("extra3").innerHTML=("The fire alarm must not be triggered.");
} else {
	document.getElementById("extra3").innerHTML=("");
};

if (Math.random() <= 0.10) {
	document.getElementById("extra4").innerHTML=("The dog must survive.");
} else {
	document.getElementById("extra4").innerHTML=("");
};

}

function difficultyCalc() {

var totalValue = 0;
var missionNumber = (document.getElementById("missionselect").selectedIndex);
var mission = (document.getElementsByTagName("option")[missionNumber].value);
var mainObjective = (document.getElementById("mainresult").textContent);
var shot = (document.getElementById("getshotextra").textContent);
var dist = (document.getElementById("distractionsextra").textContent);
var KO = (document.getElementById("knockoutsextra").textContent);
var SO = (document.getElementById("suitonlyextra").textContent);

//ANL
if ((document.getElementsByTagName("option")[missionNumber].value) === "ANL") {
	var wife = (document.getElementById("extra1").textContent);
	/*kills*/
	if (mainObjective.toLowerCase().indexOf("kitchen knife") >= 0) {
		totalValue += 1.0;
	} else if (mainObjective.toLowerCase().indexOf("fiber wire") >= 0) {
		totalValue += 1.0;
	} else if (mainObjective.toLowerCase().indexOf("nailer") >= 0) {
		totalValue += 2.5;
	} else if (mainObjective.toLowerCase().indexOf("ru-ap mine") >= 0) {
		totalValue += 2.5;
	} else if (mainObjective.toLowerCase().indexOf("baseball bat") >= 0) {
		totalValue += 3;
	} else if (mainObjective.toLowerCase().indexOf("the gun") >= 0) {
		totalValue += 0.5;
	} else if (mainObjective.toLowerCase().indexOf("glass ceiling") >= 0) {
		totalValue += 2.5;
	} else if (mainObjective.toLowerCase().indexOf("the car") >= 0) {
		totalValue += 3;
	} else if (mainObjective.toLowerCase().indexOf("gravity") >= 0) {
		totalValue += 3.5;
	} else if (mainObjective.toLowerCase().indexOf("swimming pool") >= 0) {
		totalValue += 3;
	} else if (mainObjective.toLowerCase().indexOf("hedge cutter") >= 0) {
		totalValue += 4.5;
	}
	/*entrances*/
	if (mainObjective.toLowerCase().indexOf("enter through the garage") >= 0) {
		totalValue += 0;
	} else if (mainObjective.toLowerCase().indexOf("enter through the front") >= 0) {
		totalValue += 0;
	} else if (mainObjective.toLowerCase().indexOf("basement") >= 0) {
		totalValue += 0;
	} else if (mainObjective.toLowerCase().indexOf("backyard") >= 0) {
		totalValue += 1.5;
	}
	/*exits*/
	if (mainObjective.toLowerCase().indexOf("exit through the garage") >= 0) {
		totalValue += 0;
	} else if (mainObjective.toLowerCase().indexOf("exit through the front") >= 0) {
		totalValue += 0.5;
	}
	/*extras*/
	if (wife.toLowerCase().indexOf("wife") >= 0) {
		totalValue += 3.0;
	}
	if (shot.toLowerCase().indexOf("shot") >= 0) {
		totalValue += 1;
	}
	if (dist.toLowerCase().indexOf("dist") >= 0) {
		totalValue += 1.0;
	}
	if (KO.toLowerCase().indexOf("knock") >= 0) {
		totalValue += 1.5;
	}
	if (SO.toLowerCase().indexOf("disg") >= 0) {
		totalValue += 0.5;
	}
	/*special*/
	if ((wife.toLowerCase().indexOf("wife") >= 0) && (mainObjective.toLowerCase().indexOf("backyard") >= 0)) {
		totalValue += 4.0;
	};
	if ((mainObjective.toLowerCase().indexOf("the car") >= 0) && (mainObjective.toLowerCase().indexOf("exit through the front") >= 0)) {
		totalValue += 4.5;
	};
	if ((mainObjective.toLowerCase().indexOf("exit through the front") >= 0) && (shot.toLowerCase().indexOf("shot") >= 0)) {
		totalValue += 3.5;
	};
	if ((mainObjective.toLowerCase().indexOf("exit through the front") >= 0) && (shot.toLowerCase().indexOf("shot") >= 0) && (SO.toLowerCase().indexOf("disg") >= 0)) {
		totalValue += 1.5;
	};
	if ((mainObjective.toLowerCase().indexOf("exit through the front") >= 0) && (shot.toLowerCase().indexOf("shot") >= 0) && (SO.toLowerCase().indexOf("disg") >= 0) && (dist.toLowerCase().indexOf("dist") >= 0)) {
		totalValue += 3.5;
	};
	if ((mainObjective.toLowerCase().indexOf("exit through the front") >= 0) && (shot.toLowerCase().indexOf("shot") >= 0) && (SO.toLowerCase().indexOf("disg") >= 0) && (dist.toLowerCase().indexOf("dist") >= 0) && (KO.toLowerCase().indexOf("knock") >= 0)){
		totalValue += 5.0;
	};





} /*anl loppu*/

document.getElementById("difficulty").innerHTML = ("Estimated difficulty: " + totalValue.toFixed(1));
};