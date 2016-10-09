//Creates the object that will be used as a source for the mission objectives
function createContainerObject() {
	var missionIndex = document.getElementById("missionselect");
	var mission = missionIndex.options[missionIndex.selectedIndex].value;
	var randomMissionList = [showstopper,wot,agc,icon,ahbos,c27,ff];
	
	for (var prop in generic) {
		if (generic.hasOwnProperty(prop)) {
			container[prop] = generic[prop];
		}
	}
	switch(mission) {
		case "RANDOM": 
		{
			randomMission = randomMissionList[Math.floor(Math.random()*randomMissionList.length)];
			for (var prop in randomMission) {
				if (showstopper.hasOwnProperty(prop)) {
					container[prop] = randomMission[prop];
				}
			}
			break;
		}
		case "TSS": 
		{
			for (var prop in showstopper) {
				if (showstopper.hasOwnProperty(prop)) {
					container[prop] = showstopper[prop];
				}
			}
			break;
		}
		case "WOT": 
		{
			for (var prop in wot) {
				if (wot.hasOwnProperty(prop)) {
					container[prop] = wot[prop];
				}
			}
			break;
		}
		case "ICON": 
		{
			for (var prop in icon) {
				if (agc.hasOwnProperty(prop)) {
					container[prop] = icon[prop];
				}
			}
			break;
		}
		case "AGC": 
		{
			for (var prop in agc) {
				if (icon.hasOwnProperty(prop)) {
					container[prop] = agc[prop];
				}
			}
			break;
		}
		case "AHBOS": 
		{
			for (var prop in ahbos) {
				if (ahbos.hasOwnProperty(prop)) {
					container[prop] = ahbos[prop];
				}
			}
			break;
		}
		case "C27": 
		{
			for (var prop in c27) {
				if (c27.hasOwnProperty(prop)) {
					container[prop] = c27[prop];
				}
			}
			break;
		}
		case "FF": 
		{
			for (var prop in ff) {
				if (ff.hasOwnProperty(prop)) {
					container[prop] = ff[prop];
				}
			}
			break;
		}
	}
};

//Makes sure old results are cleared when new objectives are randomized
function clearAll() {
	killList = [];
	container = {};
	result = {};
	document.getElementById("info").innerHTML = "";
};

//Hides unused html elements that appear in some results
function removeUndefined() {
	if ("undefined" === typeof result.target2) {
		document.getElementById("kill2").innerHTML = "";
	}
	if ("undefined" === typeof result.target3) {
		document.getElementById("kill3").innerHTML = "";
	}
	if ("undefined" === typeof result.target4) {
		document.getElementById("kill4").innerHTML = "";
	}
	if ("undefined" === typeof result.target5) {
		document.getElementById("kill5").innerHTML = "";
	}
	if ("undefined" === typeof result.extra1) {
		document.getElementById("extra1").innerHTML = "";
	}
	if ("undefined" === typeof result.extra2) {
		document.getElementById("extra2").innerHTML = "";
	}
	if ("undefined" === typeof result.extra3) {
		document.getElementById("extra3").innerHTML = "";
	}
	if ("undefined" === typeof result.extra4) {
		document.getElementById("extra4").innerHTML = "";
	}
	if ("undefined" === typeof result.extra5) {
		document.getElementById("extra5").innerHTML = "";
	}
	if ("undefined" === typeof result.extra6) {
		document.getElementById("extra6").innerHTML = "";
	}

};

//Randomizes extra variables for the result
function extras() {
	
if (Math.random() < 0.19) {
	result.extra1 = "Never change into a new disguise.";
}

if (Math.random() < 0.19) {
	result.extra2 = "Do not kill or subdue non-targets.";
}

if (Math.random() < 0.14) {
	result.extra3 = "Do not use throwable items as distractions.";
}

if (Math.random() < 0.19) {
	result.extra4 = "Do not miss any shots.";
}

if (Math.random() < 0.09) {
	result.extra5 = "Do not climb.";
}

if (Math.random() < 0.04) {
	result.extra6 = "Do not crouch.";
}

};

//Creates the list of weapons/accidents from which the kill methods are pulled
function createWeaponList() {
	if (document.getElementById("melee").checked == 1) {
		for (i = 0; i < container.melee.length; i++) {
			killList.push(container.melee[i])
		}
	}
	if (document.getElementById("firearm").checked == 1) {
		for (i = 0; i < container.firearms.length; i++) {
			killList.push(container.firearms[i])
		}
	}
	if (document.getElementById("accident").checked == 1) {
		for (i = 0; i < container.accidents.length; i++) {
			killList.push(container.accidents[i])
		}
	}
	if (document.getElementById("generic").checked == 0) {
		for (i = 0; i < container.kills.length; i++) {
			killList.push(container.kills[i])
		}
	}
	if (document.getElementById("melee").checked == 0 && document.getElementById("firearm").checked == 0 && document.getElementById("accident").checked == 0 && document.getElementById("generic").checked == 1) {
		killList.push("???");
	}
};

//Chooses targets and kill methods
function targetsAndKills() {
	if (document.getElementById("contracts").checked == 1) {
		container.targetList = container.contractTargets;
		shuffle(container.targetList);
	}
		result.target1 = container.targetList[0];
		result.weapon1 = killList[Math.floor(Math.random()*killList.length)];
		result.target2 = container.targetList[1];
		result.weapon2 = killList[Math.floor(Math.random()*killList.length)];
		result.target3 = container.targetList[2];
		result.weapon3 = killList[Math.floor(Math.random()*killList.length)];
		result.target4 = container.targetList[3];
		result.weapon4 = killList[Math.floor(Math.random()*killList.length)];
		result.target5 = container.targetList[4];
		result.weapon5 = killList[Math.floor(Math.random()*killList.length)];
		
	if (document.getElementById("contracts").checked == 1) {
		var targetAmountCheck = Math.random();
		if (targetAmountCheck < 0.84) {
			result.target5 = undefined;
		}
		if (targetAmountCheck < 0.69) {
			result.target4 = undefined;
		}
		if (targetAmountCheck < 0.39) {
			result.target3 = undefined;
		}
		if (targetAmountCheck < 0.04) {
			result.target2 = undefined;
		}
	}
};

//Adds properties from the container object to the result object
function containerToResult() {
	result.missionTitle = container.missionTitle;
	result.entry = container.entry[Math.floor(Math.random()*container.entry.length)];
	result.exit = container.exit[Math.floor(Math.random()*container.exit.length)];
};

//Makes text appear
function writeEverything() {
	document.getElementById("chosenmission").innerHTML = result.missionTitle;
	document.getElementById("start").innerHTML = "<p class='bluetext'>Start</p>: " + result.entry;
	document.getElementById("kill1").innerHTML = "<p class='redtext'>" + result.target1 + "</p>: " + result.weapon1;
	document.getElementById("kill2").innerHTML = "<p class='redtext'>" + result.target2 + "</p>: " + result.weapon2;
	document.getElementById("kill3").innerHTML = "<p class='redtext'>" + result.target3 + "</p>: " + result.weapon3;
	document.getElementById("kill4").innerHTML = "<p class='redtext'>" + result.target4 + "</p>: " + result.weapon4;
	document.getElementById("kill5").innerHTML = "<p class='redtext'>" + result.target5 + "</p>: " + result.weapon5;
	document.getElementById("exit").innerHTML = "<p class='bluetext'>Exit</p>: " + result.exit;
	document.getElementById("extra1").innerHTML = result.extra1;
	document.getElementById("extra2").innerHTML = result.extra2;
	document.getElementById("extra3").innerHTML = result.extra3;
	document.getElementById("extra4").innerHTML = result.extra4;
	document.getElementById("extra5").innerHTML = result.extra5;
	document.getElementById("extra6").innerHTML = result.extra6;
	if (result.missionTitle == "Freedom Fighters") {
		document.getElementById("info").innerHTML = "To gain access to the exits, recreate the mission in Contracts mode."
	}
};

//All the things that should happen when you make it go
function literallyEverything() {
	clearAll();
	createContainerObject();
	createWeaponList();
	targetsAndKills();
	containerToResult();
	extras();
	writeEverything();
	removeUndefined();
};

//Displays/hides the options
function showFilters() {
	var div = document.getElementById('filters');
	var nappi = document.getElementById('filterbutton');
	if (div.style.display !== "none") {
		div.style.display = "none";
		nappi.innerHTML = "Show options";
	} else {
		div.style.display = "block"
		nappi.innerHTML = "Hide options";
	}
};

//Shuffles an array
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};