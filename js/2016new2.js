var result = {};

var container = {};

var killList = [];

var generic = {
	kills: ["Pistol","Firearm (large)","Melee Weapon (small)","Melee Weapon (large)","Accident","Explosion","Poison"],
	firearms: ["Pistol","Sniper","Explosive (Weapon)","Any Large/Loud Weapon"],
	accidents: ["Drowning","Falling Object","Fall","Fire","Electricity","Explosion (Accident)"],
};

var showstopper = {
	missionTitle: "The Showstopper",
	melee: ["Screwdriver","Letter Opener","Scissors","Kitchen Knife","Fiber Wire","Fire Axe","Battle Axe","Saber","Hatchet"],
	targetList: ["Viktor Novikov","Dalia Margolis"],
	contractTargets:["Viktor Novikov","Dalia Margolis","Sebastian Sato","Helmut Kruger","Max Decker","Sheik Salman Al-Ghazali","Liza McKenzie","Hailey Brennan","Kurt Donovan","Sophus Fatale"],
	entry: ["Main Entrance","Palace Garden","Pile-Driver Barge","Attic","Kitchen","Locker Room","IAGO Auction","AV Center","Dressing Area"],
	exit: ["Front Gates","Kitchen","Helicopter","Speedboat"],
};

var wot = {
	missionTitle: "World of Tomorrow",
	melee: ["Battle Axe","Old Axe","Katana","Fire Axe","Saber","Amputation Knife","Circumcision Knife","Combat Knife","Hatchet","Kitchen Knife","Letter Opener","Screwdriver","Fiber Wire"],
	targetList: ["Silvio Caruso","Francesca De Santis"],
	contractTargets: ["Silvio Caruso","Francesca De Santis","Terenzio Endrizzi","Roberto Vargas","Chef Marcello Ray","Luigi Saltatore","Dr. Oscar Lafayette","Torres Piombo","Sal Falcone","Viana Buccho","Fabio Pavione","Mario Saltatore"],
	entry: ["Main Square","ICA Safe House","Harbor","Sapienza Ruins","Main Square Tower","Church Morgue","Mansion Kitchen","Field Lab","Mansion Garden","Security Staff"],
	exit: ["Car","Speedboat (pier)","Plane","Speedboat (ruins)"],
};

var icon = {
	missionTitle: "The Icon",
	melee: ["Battle Axe","Cleaver","Fire axe","Knife","Screwdriver","Fiber Wire"],
	targetList: ["Dino Bosco"],
	contractTargets: ["Dino Bosco","Palmiro Russo","Enrico Nucci","Sophia Wilde","Giuseppe Monaldo","Amaranto 'Tony' Mazzi"],
	entry: ["City gates"],
	exit: ["Town gate","Bosco's car"],
};

var agc = {
	missionTitle: "A Gilded Cage",
	melee: ["Battle Axe","Fire Axe","Saber","Scissors","Screwdriver","Kitchen Knife","Cleaver","Letter Opener","Folding Knife","Fiber Wire"],
	targetList: ["Claus Hugo Strandberg","Reza Zaydan"],
	contractTargets: ["Claus Hugo Strandberg","Reza Zaydan","Ashraf Raghib Mustafa","Jeff Baker","Shahin Abdul-Barr Maalouf","Konny Engström","Jawwaad Reza","Hektor Lindberg","Zaki Diab","Shuaib Aly","Hilda Berg"],
	entry: ["Bazaar Entrance","Undercover at the Snail Stand","Undercover on the West Bazaar Rooftop","Undercover in the Courtyard Club","Undercover in Zaydan's Compound","Lamp Store Rooftop","Undercover in the Consulate","Scool Alley","Consulate Parking Garage"],
	exit: ["Bazaar gates","Armored vehicle","Car in the garage"],
};

var ahbos = {
	missionTitle: "A House Built on Sand",
	melee: ["Battle Axe","Cleaver","Folding knife","Kitchen knife","Scissors","Screwdriver","Fiber Wire"],
	targetList: ["Matthieu Mendola","Kong Tuo-Kwang"],
	contractTargets: ["Matthieu Mendola","Kong Tuo-Kwang","Yousef Shitrit","Jalal al Din Muti Said","Zaki Diab","Hussein Guirguis","Ahmed Aziz","Jewel Bourgeois"],
	entry: ["Consulate plaza"],
	exit: ["Bazaar gates","Truck","Door near the well","Door on the street"],
};

var c27 = {
	missionTitle: "Club 27",
	melee: ["Kitchen knife","Screwdriver","Fire axe","Cleaver","Hatchet","Letter opener","Katana","Fiber Wire"],
	targetList: ["Jordan Cross","Ken Morgan"],
	contractTargets: ["Jordan Cross","Ken Morgan","Dexy Barat","Max Liston","Heidi Santoro","Toby Hicks","Jackie Carrington","Abel De Silva","Mrs. Mookjai","Tharn Srisai","Julian","Benjamin Bertam","Otis Kaplan"],
	entry: ["Riverside landing","47's suite","Undercover in the restaurant kitchen","Undercover in the linen room","Undercover by the security shed","Undercover at the Himmapan bar","Undercover in the side garden","Undercoverin the 2nd floor hallway"],
	exit: ["Boat","Tuk-tuk","Tunnel"],
};

var ff = {
	missionTitle: "Freedom Fighters",
	melee: ["Cleaver","Old Axe","Kitchen Knife","Screwdriver","Fiber Wire"],
	targetList: ["Sean Rose","Penelope Graves","Ezra Berg","Maya Parvati"],
	contractTargets: ["Sean Rose","Penelope Graves","Ezra Berg","Maya Parvati","Quince Elliot","Robert Powell","Lloyd Burgess","Milton Geiger","Mario Thompson","Liam Butler","Albert Knarr"],
	entry: ["Undercover in the Garage","West Bridge","Undercover by the Greenhouse","Undercover on the Demolision Range","Old Orchard","Southern Farm Perimeter","Undercover in the Farmhouse","Water Tower"],
	exit: ["Bridge","Quad Bike","River","Front Gate","Tornado Shelter"],
};

/*
var landslide = {
	missionTitle: "Landslide",
	melee: [],
	targetList: [],
	contractTargets: [],
	entry: [],
	exit: [],
};

var si = {
	missionTitle: "Situs Inversus",
	melee: [],
	targetList: [],
	contractTargets: [],
	entry: [],
	exit: [],
};
*/