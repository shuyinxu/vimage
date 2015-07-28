
	void setup() { 

	  size(700, 400); 
	  background-color(255,255,255);

	  frameRate(30);

	} 
	var pColor = [254,233,14] ;

	//stroke (89,70,67);
	void draw () {
	//color = #EF0B0B
		
		if (mousePressed == true ) {
			strokeWeight(8);
			stroke(pColor[0],pColor[1],pColor[2]);
			line(mouseX, mouseY, pmouseX, pmouseY);
			
			
				   
		}
	}       
