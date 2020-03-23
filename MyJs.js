/**
 * 
 */


var runes = parseInt(getCookie("runes"));
var mana = parseInt(getCookie("mana"));
var autoSpeed = parseInt(getCookie("autoSpeed"));
var upgradeCost = parseInt(getCookie("upgradeCost"));
var guildMates = parseInt(getCookie("guildMates"));;



function save(){
	
setCookie("runes", runes, 30);
setCookie("mana", mana, 30);
setCookie("autoSpeed", autoSpeed, 30);
setCookie("upgradeCost", upgradeCost, 30);
setCookie("guildMates", guildMates, 30);
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






