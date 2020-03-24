/**
 * 
 */


var runes = parseInt(getCookie("runes"));
var mana = parseInt(getCookie("mana"));
var autoSpeed = parseInt(getCookie("autoSpeed"));
var upgradeCost = parseInt(getCookie("upgradeCost"));
var guildMates = parseInt(getCookie("guildMates"));
var sin1 = parseInt(getCookie("sin1"));
var sin2 = parseInt(getCookie("sin2"));
var sin3 = parseInt(getCookie("sin3"));
var sin4 = parseInt(getCookie("sin4"));
var sin5 = parseInt(getCookie("sin5"));
var sin6 = parseInt(getCookie("sin6"));
var sin7 = parseInt(getCookie("sin7"));
var sin8 = parseInt(getCookie("sin8"));



function save(){
	
	setCookie("runes", runes, 30);
	setCookie("mana", mana, 30);
	setCookie("autoSpeed", autoSpeed, 30);
	setCookie("upgradeCost", upgradeCost, 30);
	setCookie("guildMates", guildMates, 30);
	setCookie("sin1", sin1, 30);
	setCookie("sin2", sin2, 30);
	setCookie("sin3", sin3, 30);
	setCookie("sin4", sin4, 30);
	setCookie("sin5", sin5, 30);
	setCookie("sin6", sin6, 30);
	setCookie("sin7", sin7, 30);
	setCookie("sin8", sin8, 30);

}

function load(){
	runes = parseInt(getCookie("runes"));
	mana = parseInt(getCookie("mana"));
	autoSpeed = parseInt(getCookie("autoSpeed"));
	upgradeCost = parseInt(getCookie("upgradeCost"));
	guildMates = parseInt(getCookie("guildMates"));
	updateDisplay();
	
}


function newGame(){

	setCookie("runes", 0, 30);
	setCookie("mana", 0, 30);
	setCookie("autoSpeed", 20000, 30);
	setCookie("upgradeCost", 100, 30);
	setCookie("guildMates", 1, 30);
	setCookie("sin1", 0, 30);
	setCookie("sin2", 0, 30);
	setCookie("sin3", 0, 30);
	setCookie("sin4", 0, 30);
	setCookie("sin5", 0, 30);
	setCookie("sin6", 0, 30);
	setCookie("sin7", 0, 30);
	setCookie("sin8", 0, 30);					
	
}
 


function farm(){
	
	runes = runes + 1;
	updateDisplay();

}

function purchaseGuildMate(){
	if(guildMates < 30 && mana >= guildMates * 200){
		mana = mana - guildMates * 200;
		guildMates = guildMates + 1;
	
	updateDisplay();
	}
}

function sell(){
	
	mana = mana + 1;
	updateDisplay();

}

function sell2(){
	
	mana = mana + 2;
	updateDisplay();

}

function sell3(){
	
	mana = mana + 5;
	updateDisplay();

}




// setInterval(guildFarmMana, 10000);
var q = 0;
function guildFarmMana(){

	mana = mana + guildMates;
//	updateDisplay();
	
}



//function autoFarm() {
	
	//var myVar = setInterval(farm , autoSpeed);

//}


function upgradeAuto(){
	
	if(mana >= upgradeCost){
		mana = mana - upgradeCost;
		autoSpeed = autoSpeed * 0.9;
		upgradeCost = upgradeCost * 2;
		barReset = true;
	}
//	autoFarming = setInterval(farm, autoSpeed);
	updateDisplay();
	
	
}

var updateSpeed = 10;

setInterval(updateDisplay, updateSpeed);

function updateDisplay(){
   // move("AutoRune", autoSpeed);
    
	document.getElementById("demo").innerHTML = "Current Sin Count: " + runes;
	document.getElementById("mana").innerHTML = "Current Christian Deeds Count: " + mana;
	document.getElementById("difference").innerHTML = "Balanced Score/Total: " + (mana - runes);
	document.getElementById("AutoUpgradeButton").innerHTML = "Upgrade Auto Farming Speed (" + upgradeCost + ")";
	document.getElementById("GuildMateButton").innerHTML = "Buy GuildMate (" + (guildMates * 200) + ")";
	document.getElementById("speedStats").innerHTML = "AutoFarm Speed: " + (autoSpeed / 1000);
	document.getElementById("guildMates").innerHTML = "Guild Mates: " + guildMates;
		
	
	
}

function getAutoUpgradeCost(){
	return upgradeCost;
}

function startAutoFarm(){
	move();
}


var i = 0;
function move() {
	if (i == 0) {
		i = 1;
		var elem = document.getElementById("AutoRune");
		var width = 0;
		var id = setInterval(frame, autoSpeed / 100);
		function frame() {
			if (width >= 100) {
				farm();
				sin1 = sin1 + 1;
				clearInterval(id);
				i = 0;
				move();
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
	
}

var q = 0;
function move2() {
	if (q == 0) {
		q = 1;
		var elem = document.getElementById("AutoMana");
		var width = 0;
		var id = setInterval(frame, autoSpeed / 100);
		function frame() {
			if (width >= 100) {
				farm();
				sin2 = sin2 + 1;
				clearInterval(id);
				q = 0;
				move2();
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
	
}

var a = 0;
function move3() {
	if (a == 0) {
		a = 1;
		var elem = document.getElementById("AutoExploit");
		var width = 0;
		var id = setInterval(frame, autoSpeed / 100);
		function frame() {
			if (width >= 100) {
				farm();
				sin3 = sin3 + 1;
				clearInterval(id);
				a = 0;
				move3();
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
	
}

var b = 0;
function move4() {
	if (b == 0) {
		b = 1;
		var elem = document.getElementById("AutoRage");
		var width = 0;
		var id = setInterval(frame, autoSpeed / 100);
		function frame() {
			if (width >= 100) {
				farm();
				sin4 = sin4 + 1;
				clearInterval(id);
				b = 0;
				move4();
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
	
}

var c = 0;
function move5() {
	if (c == 0) {
		c = 1;
		var elem = document.getElementById("AutoDenial");
		var width = 0;
		var id = setInterval(frame, autoSpeed / 100);
		function frame() {
			if (width >= 100) {
				farm();
				sin5 = sin5 + 1;
				clearInterval(id);
				c = 0;
				move5();
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
	
}


var d = 0;
function move6() {
	if (d == 0) {
		d = 1;
		var elem = document.getElementById("AutoHarming");
		var width = 0;
		var id = setInterval(frame, autoSpeed / 100);
		function frame() {
			if (width >= 100) {
				farm();
				sin6 = sin6 + 1;
				clearInterval(id);
				d = 0;
				move6();
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
	
}

var e = 0;
function move7() {
	if (e == 0) {
		e = 1;
		var elem = document.getElementById("AutoCorruption");
		var width = 0;
		var id = setInterval(frame, autoSpeed / 100);
		function frame() {
			if (width >= 100) {
				farm();
				sin7 = sin7 + 1;
				clearInterval(id);
				e = 0;
				move7();
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
	
}



var f = 0;
function move8() {
	if (f == 0) {
		f = 1;
		var elem = document.getElementById("AutoBetrayal");
		var width = 0;
		var id = setInterval(frame, autoSpeed / 100);
		function frame() {
			if (width >= 100) {
				farm();
				sin8 = sin8 + 1;
				clearInterval(id);
				f = 0;
				move8();
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
	
}



function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}



function die(){
	
	
  var txt = "Dante Alighieri's Divina Commedia";
  if (confirm("Are you sure you're ready to be judged? This will end the game!")) {
    	var totalSins = runes;
	var variedSins = [];
	for(var j = 0; j < sin1; j++){
		variedSins.push("Lust");		
	}
	for(var j = 0; j < sin2; j++){
		variedSins.push("Gluttony");		
	}
	for(var j = 0; j < sin3; j++){
		variedSins.push("Greed");		
	}
	for(var j = 0; j < sin4; j++){
		variedSins.push("Wrath");		
	}
	for(var j = 0; j < sin5; j++){
		variedSins.push("Heresy");		
	}
	for(var j = 0; j < sin6; j++){
		variedSins.push("Violence");		
	}
	for(var j = 0; j < sin7; j++){
		variedSins.push("Fraud");		
	}
	for(var j = 0; j < sin8; j++){
		variedSins.push("Treachery");		
	}
	
	var randomSin = variedSins[Math.floor(Math.random() * totalSins)];
	var pageName = "result" + randomSin + ".html";
	window.open(pageName);
	
	
/*	if(randomSin.equals("Lust")){
		window.open("resultLust.html");
	}
	else if(randomSin.equals("Gluttony")){
		window.open("resultGluttony.html");
	}
	else if(randomSin.equals("Greed")){
		window.open("resultGreed.html");
	}
	else if(randomSin.equals("Wrath")){
		window.open("resultWrath.html");
	}
	else if(randomSin.equals("Heresy")){
		window.open("resultHeresy.html");
	}
	else if(randomSin.equals("Violence")){
		window.open("resultViolence.html");
	}
	else if(randomSin.equals("Fraud")){
		window.open("resultFraud.html");
	}
	else if(randomSin.equals("Treachery")){
		window.open("resultTreachery.html");
	}  */
	

	
  } else {
    
  }
  document.getElementById("report").innerHTML = txt;

	
	
	
	
}






