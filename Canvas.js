//SETS PEN COLOR
function cRed () {
	pColor = [239,11,11];
	return pColor;
}
function cOrange () {
	pColor = [255,175,6];
	return pColor;
}
function cRed () {
	pColor = [239,11,11];
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
function fillAll() {
	penSize = 2000000; 
	return penSize; 
}
function refresh () {
	location.reload();
}

//RANDOMIZES SUBJECT TO DRAW
var space = ["astronaut","moon","planets", "solar system","space ship","rocket", "aliens","stars"];
var food=["pizza","In-N-Out ", "french fries", "sandwiches","cake","ice cream","steak","noodles","rice","lasagna", "salad","milk tea"];
var fruits = ["bananas","oranges","peaches","pears","apple","tomato","pomegranate", "pineapple","cantaloupe","watermelon"]
var animals=["cat", "horse", "giraffe","hippopotamus","stingray","sloth","worm","dog","elephant","lion","tiger","lizard","bunny","owl","duck","zebra","fish","deer","pig","chicken","cow","bear","sea horse","peacock","sheep","flamingo","penguin"];
var park = ["tree","bench","pond","play structure","bush","flowers","birds","squirrels","humans","grass","leaves","fence","kids"];
var people = ["Jessica","Alana","Rachel","Shuyin","Tiffany"];
var school = ["pencil", "eraser", "notebook","marker","binder","chalk board", "homework", "globe","post its", ];
var celebrities = ["Kim Kardashian","Riley Curry","Beyonce","Nicki Minaj","Justin Bieber","Drake","Zac Efron","Jennifer Lawrence","Taylor Swift","Harry Styles","Zayn Malik","Kylie Jenner"];
var subject= [];


function getTheme(){
	var temp = subject[Math.floor(Math.random()*(subject.length))];
	document.getElementById("theme").innerHTML = temp;
}

function getSubjects () {
	$('select[name="subjects"]').change(function(){
  
    if ($(this).val() == "1"){
        subject = school;
		return subject;
		alert("hi");
	}
	else if ($(this).val() == "2"){
        subject = park;
		return subject;
	}
	else if ($(this).val() == "3"){
        subject = animals;
		return subject;
	}
	else if ($(this).val() == "4"){
        subject = food;
		return subject;
	}
	else if ($(this).val() == "5"){
        subject =space;
		return subject;
	}
	else if ($(this).val() == "7"){
        subject =fruits;
		return subject;
	}
	else if ($(this).val() == "8"){
        subject = celebrities;
		return subject;
	}
	else {
        subject = people;
		return subject;
	}
    
});
}

//TIMER
var a = 20;
var t;
var timer_on = 0;
var z = "TIME IS UP!"; 
var t;

function count() {
	//do {
    document.getElementById("txt").value = a;
    a = a - 1; 
    t = setTimeout(function(){ count();setTimeout(reset, 1750); }, 1000);
	if (document.getElementById("txt").value < 1) {
		document.getElementById("txt").value = z;
		alert("Next Player");
		getTheme();
		a = 20;
	}
}

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

function pauseTimer () {
	alert ("Game Paused");
}

function stopTimer (){
	 clearTimeout(t);
	 document.getElementById("txt").value = "Game Over"
	 
}

function reset(){
  $("img").removeClass("hinge");
  $(".status").text("");
  $("button.stop").prop("disabled", false);
}
