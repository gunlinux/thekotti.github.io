var result = {};

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

function writeAll() {
document.getElementById("chosenmission").innerHTML = result.mission;
document.getElementById("start").innerHTML = result.start;
document.getElementById("kill1").innerHTML = result.kill1;
document.getElementById("kill2").innerHTML = result.kill2;
document.getElementById("kill3").innerHTML = result.kill3;
document.getElementById("kill4").innerHTML = result.kill4;
document.getElementById("kill5").innerHTML = result.kill5;
document.getElementById("exit").innerHTML = result.exit;

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

var allKills = [];

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

var mission = document.getElementById("missionselect").selectedIndex;
var missionList = [showstopper,wot];

	if ((document.getElementsByTagName("option")[mission].value) === "TSS") {
		showstopper();
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

}

function showstopper() {
	
var genericKills = ["Firearm (small)","Firearm (large)","Melee Weapon (small)","Melee Weapon (large)","Accident","Explosion","Poison"];
var melee = ["Screwdriver","Letter Opener","Scissors","Kitchen Knife","Fiber Wire","Fire Axe","Battle Axe","Saber","Hatchet"];
var firearms = ["Pistol","Sniper","Explosion","Any Large/Loud Weapon"];
var targetList = ["Viktor Novikov","Dalia Margolis"];
var contractTargets =["Sebastian Sato","Helmut Kruger","Max Decker","Sheik Salman Al-Ghazali","Liza McKenzie","Hailey Brennan","Kurt Donovan","Sophus Fatale"];
var entry = ["Main Entrance","Palace Garden","Pile-Driver Barge","Attic","Kitchen","Locker Room","IAGO Auction","AV Center","Dressing Area"];
var exit = ["Front Gates","Kitchen","Helicopter","Speedboat"];

function createKillList() {
	if (document.getElementById("melee").checked == 1) {
		for (i = 0; i < melee.length; i++) {
			allKills.push(melee[i])
		}
	}
	if (document.getElementById("firearm").checked == 1) {
		for (i = 0; i < firearms.length; i++) {
			allKills.push(firearms[i])
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

createKillList();

result.mission = "The Showstopper";
result.start = "<span id='blue'>Start: </span>".fontcolor("blue") + entry[Math.floor(Math.random()*entry.length)]
result.exit = "<span id='blue'>Escape: </span>".fontcolor("blue") + exit[Math.floor(Math.random()*exit.length)]

if (document.getElementById("contracts").checked == 0) {
	result.kill1 = targetList[0].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	result.kill2 = targetList[1].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
} else {
	for (i = 0; i < contractTargets.length; i++) {
		targetList.push(contractTargets[i]);
	}
	
	shuffle(targetList);
	var targetAmountCheck = Math.random()
	
		result.kill1 = targetList[0].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	if (targetAmountCheck > 0.19) {
		result.kill2 = targetList[1].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	}
	if (targetAmountCheck > 0.54) {
		result.kill3 = targetList[2].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	}
	if (targetAmountCheck > 0.84) {
		result.kill4 = targetList[3].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	}
	if (targetAmountCheck > 0.94) {
		result.kill5 = targetList[4].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	}
}

removeUndefined();

}

function wot() {
	
var genericKills = ["Firearm (small)","Firearm (large)","Melee Weapon (small)","Melee Weapon (large)","Accident","Explosion","Poison"];
var melee = ["Battle Axe","Old Axe","Katana","Fire Axe","Saber","Amputation Knife","Circumcision Knife","Combat Knife","Hatchet","Kitchen Knife","Letter Opener","Screwdriver"];
var firearms = ["Pistol","Sniper","Explosion","Any Large/Loud Weapon"];

var targetList = ["Silvio Caruso","Francesca De Santis"];
var contractTargets =["Terenzio Endrizzi","Roberto Vargas","Chef Marcello Ray","Luigi Saltatore","Dr. Oscar Lafayette","Torres Piombo","Sal Falcone","Viana Buccho","Fabio Pavione","Mario Saltatore"];

var entry = ["Main Square","ICA Safe House","Harbor","Sapienza Ruins","Main Square Tower","Church Morgue","Mansion Kitchen","Field Lab","Mansion Garden","Security Staff"];
var exit = ["Car","Speedboat (pier)","Plane","Speedboat (ruins)"];

function createKillList() {
	if (document.getElementById("melee").checked == 1) {
		for (i = 0; i < melee.length; i++) {
			allKills.push(melee[i])
		}
	}
	if (document.getElementById("firearm").checked == 1) {
		for (i = 0; i < firearms.length; i++) {
			allKills.push(firearms[i])
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
createKillList();

result.mission = "World of Tomorrow";
result.start = "<span id='blue'>Start: </span>".fontcolor("blue") + entry[Math.floor(Math.random()*entry.length)]
result.exit = "<span id='blue'>Escape: </span>".fontcolor("blue") + exit[Math.floor(Math.random()*exit.length)]

if (document.getElementById("contracts").checked == 0) {
	result.kill1 = targetList[0].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	result.kill2 = targetList[1].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
} else {
	for (i = 0; i < contractTargets.length; i++) {
		targetList.push(contractTargets[i]);
	}
	
	shuffle(targetList);
	var targetAmountCheck = Math.random()
	
		result.kill1 = targetList[0].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	if (targetAmountCheck > 0.19) {
		result.kill2 = targetList[1].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	}
	if (targetAmountCheck > 0.54) {
		result.kill3 = targetList[2].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	}
	if (targetAmountCheck > 0.84) {
		result.kill4 = targetList[3].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	}
	if (targetAmountCheck > 0.94) {
		result.kill5 = targetList[4].fontcolor("red") + ": " + allKills[Math.floor(Math.random()*allKills.length)];
	}
}

removeUndefined();

document.getElementById("chosenmission").innerHTML = result.mission;
document.getElementById("start").innerHTML = result.start;
document.getElementById("kill1").innerHTML = result.kill1;
document.getElementById("kill2").innerHTML = result.kill2;
document.getElementById("kill3").innerHTML = result.kill3;
document.getElementById("kill4").innerHTML = result.kill4;
document.getElementById("kill5").innerHTML = result.kill5;
document.getElementById("exit").innerHTML = result.exit;

}


function test() {
	console.log(allKills)
}
