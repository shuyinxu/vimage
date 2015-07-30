//SETS PEN COLOR
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

//RANDOMIZES SUBJECT TO DRAW
function getTheme(){
	var subject = ["ruler","apple","cat", "pencil", "cup"]; //can manually add subjects to list
	var temp = subject[Math.floor(Math.random()*(subject.length))];
	document.getElementById("theme").innerHTML = temp;
}

<<<<<<< HEAD
//timer
var a = 3;
var t;
var timer_on = 0;
var z = "Time is Up"; 
var start = true;

//TIMER
var a = 30;
var t;
var timer_on = 0;
var z = "TIME IS UP!"; 


function count() {
	
	//do {
    document.getElementById("txt").value = a;

    a = a - 1; 
	
    t = setTimeout(function(){ count() }, 1000);
	if (document.getElementById("txt").value < 1) {
		document.getElementById("txt").value = z;
		alert("Next Player");
		a = 3; 
			
	}
	//while (start = true);
			
	
}




//var start == 'true' ; 


function startCount() {
	
    if (!timer_on ) {
        timer_on = 1;
        count()

		
		}
    }

var sTime = new Date().getTime();
var countDown = 30;

function UpdateTime() {
    var cTime = new Date().getTime();
    var diff = cTime - sTime;
    var seconds = countDown - Math.floor(diff / 1000);
    if (seconds >= 0) {
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
        $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);
    } else {
        $("#countdown").hide();
        $("#aftercount").show();
        clearInterval(counter);
    }
}
UpdateTime();
var counter = setInterval(UpdateTime, 500);	

function stopTimer () {
	start = false;
	return start;
	

	}

