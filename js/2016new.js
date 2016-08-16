

function missionSelector() {
	return document.getElementsByTagName("option")[document.getElementById("missionselect").selectedIndex].value;
}

var selectedMission;
var result = {};
var allKills = [];
var genericKills = ["Firearm (small)","Firearm (large)","Melee Weapon (small)","Melee Weapon (large)","Accident","Explosion","Poison"];

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
}

function clearAll() {
	allKills = [];
	result = {};
	document.getElementById("extra1").innerHTML = "";
	document.getElementById("extra2").innerHTML = "";
	document.getElementById("extra3").innerHTML = "";
	document.getElementById("extra4").innerHTML = "";
	document.getElementById("extra5").innerHTML = "";

};

function removeUndefined() {
	if ("undefined" === typeof result.kill2) {
		result.kill2 = "";
	}
	if ("undefined" === typeof result.kill3) {
		result.kill3 = "";
	}
	if ("undefined" === typeof result.kill4) {
		result.kill4 = "";
	}
	if ("undefined" === typeof result.kill5) {
		result.kill5 = "";
	}
}

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
}

//For popout
document.getElementById("themeswitch").onclick = function(){
	var theme = document.getElementById("theme_css");
	if (theme.href.match("mini.css")) {
		theme.href = "css/minidark.css";
	} else if (theme.href.match = "minidark.css") {
		theme.href = "css/mini.css";
	}
}

function chooseMission() {

var mission = missionSelector();
var missionList = [TSS,WOT];

	if (mission === "TSS") {
		selectedMission = "TSS";
	} else if ((document.getElementsByTagName("option")[mission].value) === "WOT") {
		wot();
	} else if ((document.getElementsByTagName("option")[mission].value) === "RANDOM") {
		missionList[Math.floor(Math.random()*missionList.length)]();
	} else {
		document.getElementById("mainresult").innerHTML = ("Something seems to have gone wrong. Choose another mission and hope something goes right.");
	};

};

function extras() {
	
if (Math.random() < 0.19) {
	result.extra1 = (document.getElementById("extra1").innerHTML = "Never change into a new disguise.")
}

if (Math.random() < 0.19) {
	result.extra2 = (document.getElementById("extra2").innerHTML = "Do not kill or subdue non-targets.")
}

if (Math.random() < 0.19) {
	result.extra3 = (document.getElementById("extra3").innerHTML = "Do not use throwable items as distractions.")
}

if (Math.random() < 0.19) {
	result.extra4 = (document.getElementById("extra4").innerHTML = "Do not miss any shots.")
}

if (Math.random() < 0.09) {
	result.extra5 = (document.getElementById("extra5").innerHTML = "Do not climb pipes.")
}

if (Math.random() < 0.04) {
	result.extra5 = (document.getElementById("extra6").innerHTML = "Do not crouch.")
}

}

function contractsMode() {
	if (document.getElementById("contracts").checked == 0) {
		result.kill1 = selectedMission.targetList[0].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
		result.kill2 = selectedMission.targetList[1].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	} else {
		for (i = 0; i < contractTargets.length; i++) {
			targetList.push(contractTargets[i]);
		}
		
		shuffle(targetList);
		var targetAmountCheck = Math.random()
		
			result.kill1 = selectedMission.targetList[0].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
		if (targetAmountCheck > 0.19) {
			result.kill2 = selectedMission.targetList[1].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
		}
		if (targetAmountCheck > 0.54) {
			result.kill3 = selectedMission.targetList[2].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
		}
		if (targetAmountCheck > 0.84) {
			result.kill4 = selectedMission.targetList[3].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
		}
		if (targetAmountCheck > 0.94) {
			result.kill5 = selectedMission.targetList[4].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
		}
	}
}

function createKillList() {
	chooseMission()
	if (document.getElementById("melee").checked == 1) {
		for (i = 0; i < selectedMission.melee.length; i++) {
			allKills.push(selectedMission.melee[i])
		}
	}
	if (document.getElementById("firearm").checked == 1) {
		for (i = 0; i < selectedMission.firearms.length; i++) {
			allKills.push(selectedMission.firearms[i])
		}
	}
	if (document.getElementById("generic").checked == 0) {
		for (i = 0; i < genericKills.length; i++) {
			allKills.push(genericKills[i])
		}
	}
	if (document.getElementById("melee").checked == 0 && document.getElementById("firearm").checked == 0 && document.getElementById("generic").checked == 1) {
		allKills.push("???");
	}
}

function writeAll() {
document.getElementById("chosenmission").innerHTML = result.mission;
document.getElementById("start").innerHTML = "Start".fontcolor("blue") + ": " + result.start;
document.getElementById("kill1").innerHTML = result.kill1;
document.getElementById("kill2").innerHTML = result.kill2;
document.getElementById("kill3").innerHTML = result.kill3;
document.getElementById("kill4").innerHTML = result.kill4;
document.getElementById("kill5").innerHTML = result.kill5;
document.getElementById("exit").innerHTML = "Escape".fontcolor("blue") + ": " + result.exit;
}

function makeItGo() {
	clearAll();
	//chooseMission();
	extras();
	createKillList();
	contractsMode();	
	removeUndefined();
	writeAll();
}


var TSS = {
	melee: ["Screwdriver","Letter Opener","Scissors","Kitchen Knife","Fiber Wire","Fire Axe","Battle Axe","Saber","Hatchet"],
	firearms: ["Pistol","Sniper","Explosion","Any Large/Loud Weapon"],
	targetList: ["Viktor Novikov","Dalia Margolis"],
	contractTargets: ["Sebastian Sato","Helmut Kruger","Max Decker","Sheik Salman Al-Ghazali","Liza McKenzie","Hailey Brennan","Kurt Donovan","Sophus Fatale"],
	entry: ["Main Entrance","Palace Garden","Pile-Driver Barge","Attic","Kitchen","Locker Room","IAGO Auction","AV Center","Dressing Area"],
	exit: ["Front Gates","Kitchen","Helicopter","Speedboat"],
	mission: "The Showstopper",
}

var WOT = {
	melee: ["Battle Axe","Old Axe","Katana","Fire Axe","Saber","Amputation Knife","Circumcision Knife","Combat Knife","Hatchet","Kitchen Knife","Letter Opener","Screwdriver"],
	firearms: ["Pistol","Sniper","Explosion","Any Large/Loud Weapon"],
	targetList: ["Silvio Caruso","Francesca De Santis"],
	contractTargets: ["Terenzio Endrizzi","Roberto Vargas","Chef Marcello Ray","Luigi Saltatore","Dr. Oscar Lafayette","Torres Piombo","Sal Falcone","Viana Buccho","Fabio Pavione","Mario Saltatore"],
	entry: ["Main Square","ICA Safe House","Harbor","Sapienza Ruins","Main Square Tower","Church Morgue","Mansion Kitchen","Field Lab","Mansion Garden","Security Staff"],
	exit: ["Car","Speedboat (pier)","Plane","Speedboat (ruins)"],
	mission: "World of Tomorrow",
}



function test() {
	console.log(TSS.melee)
	console.log(allKills)
}
