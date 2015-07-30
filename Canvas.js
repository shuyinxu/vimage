function cRed () {
	pColor = [239,11,11];
	return pColor;
}
function cOrange () {
	pColor = [255,175,6];
	return pColor;
}
function cYellow () {
	pColor = [255,251,6]; 
	return pColor;
}
function cGreen () {
	pColor = [31,255,6]; 
	return pColor;
}
function cBlue () {
	pColor = [6,214,255]; 
	return pColor;
}
function cPurple () {
		pColor = [208,131,252]; 
		return pColor;
	}
function cBrown () {
	pColor = [190,117,47]; 
	return pColor;
}
function cBlack () {
	pColor = [0,0,0]; 
	return pColor;
	}
function erase () {
	pColor = [250,250,250]; 
	return pColor;
}
function setSmall(){
	penSize = 9;
	return penSize;
}
function setMedium(){
	penSize = 17;
	return penSize;
}
function setLarge(){
	penSize = 28;
	return penSize;
}

function getTheme(){
	var subject = ["ruler","apple","cat", "pencil", "cup"];
	var temp = subject[Math.floor(Math.random()*(subject.length))];
	document.getElementById("theme").innerHTML = temp;
}

//timer
var a = 30;
var t;
var timer_on = 0;
var z = "Time is up"; 

function count() {
    document.getElementById("txt").value = a;
    a = a - 1; 
    t = setTimeout(function(){ count() }, 1000);
	if (document.getElementById("txt").value < 1) {
		document.getElementById("txt").value = z;
	}
}

function startCount() {
    if (!timer_on) {
        timer_on = 1;
        count()
		
		}
    }