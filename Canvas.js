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
	//localStorage.setItem("subject", subject);
	location.reload();
}

//RANDOMIZES SUBJECT TO DRAW
var space = ["Astronaut","Moon", "Solar System","Space Ship","Rocket", "Aliens","Stars","Saturn","Uranus","Earth","Comet","Asteroid","The Big Dipper","Black Hole","North Star", "Mily Way","Sun"];
var food=["Pizza","In-N-Out ", "French Fries", "Sandwiches","Cake","Ice Cream","Steak","Noodles","Rice","Lasagna", "Salad","Milk Tea","Hot dog","Hamburger","Lollipop","Broccoli","Carrot","Sushi","Fried Chicken","Potatoes","Tacos","Burritos"];
var fruits = ["Bananas","Oranges","Peaches","Pears","Apple","Tomato","Pomegranate", "Pineapple","Cantaloupe","Watermelon","Blue berries","Plums","Cherries","Kiwi","Raspberries","Cranberries","Lemon","Lime","Coconut","Honeydew",]
var animals=["Cat", "Horse", "Giraffe","Hippopotamus","Stingray","Sloth","Worm","Dog","Elephant","Lion","Tiger","Lizard","Bunny","Owl","Duck","Zebra","Fish","Deer","Pig","Chicken","Cow","Bear","Sea Horse","Peacock","Sheep","Flamingo","Penguin","Snail"];
var park = ["Tree","Bench","Pond","Play Structure","Bush","Flowers","Birds","Squirrels","Humans","Grass","Leaves","Fence","Kids","Butterfly","Rain","Campers","Deer","Fountain"];
var GWC_People = ["Jessica","Alana","Rachel","Shuyin","Tiffany","Julie","Gloria","Trisha","Emily","J_nics","Jenny","Allison","Melody","Gretal","Emiko","Vanessa","Daniella","Arshi","Jackie","Kachi","Serena","Ruby","Jags"];
var school = ["Pencil", "Eraser", "Notebook","Marker","Binder","Chalk Board", "Homework", "Globe","Post Its","Backpack","Pencil sharpeners","Computer","Paper","Folder","Calculator"];
var celebrities = ["Kim Kardashian","Riley Curry","Beyonce","Nicki Minaj","Justin Bieber","Drake","Zac Efron","Jennifer Lawrence","Taylor Swift","Harry Styles","Zayn Malik","Kylie Jenner","Beyonce","Sam Smith", "Brad Pitt","Angelina Jolie",];
var subject= [" "];
	

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
        subject = GWC_People;
		return subject;
	}
    
});
}

//TIMER
var a = 25;
var t;
var timer_on = 0;
var z = "TIME IS UP!"; 
var t;
var turn=1;

function count() {
    document.getElementById("txt").value = a;
    a = a - 1; 
    t = setTimeout(function(){ count();setTimeout(reset, 1750); }, 1000);
	if (document.getElementById("txt").value < 1) {
		document.getElementById("txt").value = z;
		alert("Next Player");
		turn=0;
		getTheme();
		a = 25;
	}
}

function startCount() {
    if (!timer_on ) {
        timer_on = 1;
        count();
	}
}

var sTime = new Date().getTime();
var countDown = 30;

function pauseTimer () {
	alert ("Game Paused");
}

function stopTimer (){
	 clearTimeout(t);
	 document.getElementById("txt").value = "Game Over"
	 
}