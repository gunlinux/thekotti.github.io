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
var missionList = [showstopper];

	if ((document.getElementsByTagName("option")[mission].value) === "TSS") {
		showstopper();
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

}

function showstopper() {
	
var genericKills = ["Firearm (small)","Firearm (large)","Melee Weapon (small)","Melee Weapon (large)","Accident","Explosion"];
var melee = ["Screwdriver","Letter Opener","Scissors","Kitchen Knife","Fiber Wire","Fire Axe","Battle Axe","Saber"];
var accidents = ["Falling","Chandelier"];
var firearms = ["Pistol","Sniper","Explosion","Any Large/Loud Weapon"];

var entry = ["Main Entrance","Palace Garden","Pile-Driver Barge","Attic","Kitchen","Locker Room","IAGO Auction","AV Center","Dressing Area"];
var exit = ["Front Gates","Kitchen","Helicopter","Speedboat"];

function createKillList() {
	if (document.getElementById("melee").checked == 1) {
		for (i = 0; i < melee.length; i++) {
			allKills.push(melee[i])
		}
	}
	if (document.getElementById("accident").checked == 1) {
		for (i = 0; i < accidents.length; i++) {
			allKills.push(accidents[i])
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
}
createKillList();

result.mission = "The Showstopper";
result.start = "<span id='blue'>Start: </span>".fontcolor("blue") + entry[Math.floor(Math.random()*entry.length)]
result.kill1 = "Viktor Novikov: ".fontcolor("red") + allKills[Math.floor(Math.random()*allKills.length)];
result.kill2 = "Dalia Margolis: ".fontcolor("red") + allKills[Math.floor(Math.random()*allKills.length)];
result.exit = "<span id='blue'>Escape: </span>".fontcolor("blue") + exit[Math.floor(Math.random()*exit.length)]

document.getElementById("chosenmission").innerHTML = result.mission;
document.getElementById("start").innerHTML = result.start;
document.getElementById("kill1").innerHTML = result.kill1;
document.getElementById("kill2").innerHTML = result.kill2;
document.getElementById("exit").innerHTML = result.exit;

}

function test() {
	console.log(allKills)
}
