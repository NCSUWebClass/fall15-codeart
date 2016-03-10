function ActiveDevices(){
	this.active = new Array();
	for(var i = 0; i < NUM_OF_DEVICES; i++){
		this.active.push(new Array());
	}
}

ActiveDevices.prototype.render = function(){
	for (var i = 0; i < this.active.length; i++) {
        var numCheckedOut = getNumCheckedOut(i);
		var difference = numCheckedOut - this.active[i].length;

		if(difference > 0){
			this.addDevices(i, difference);		//missing devices to active[i]
		}else if(difference < 0){
			this.removeDevices(i, difference);  //remove extra devices from active[i]
		}
	}
}

ActiveDevices.prototype.addDevices = function(index, difference){
	for(var i = 0; i < difference; i++){
		if(index == 0){
			//MacBook
			var device = new MacBook("sound/Macbook.mp3");
			this.active[index].push(device);
		}else if(index == 1){
			//Windows Laptop
			var xPos = random(500, 375);
			var yPos = random(-300, 300);
			var side = random(-1, 1);
			if(side >= 0){
				side = 1;
			}else{
				side = -1;
			}
			var device = new WindowsLaptop(xPos * side, yPos, 0, "sound/WinLaptop.mp3");
			this.active[index].push(device);
		}else if(index == 2){
			//iPad
			var xPos = random(500, 375);
			var yPos = random(-300, 300);
			var side = random(-1, 1);
			if(side >= 0){
				side = 1;
			}else{
				side = -1;
			}
			var device = new iPad(xPos * side, yPos, 0, "sound/iPad.mp3");
			this.active[index].push(device);
		}else if(index == 3){
			//TI-83
			var xPos = random(500, 375);
			var yPos = random(-300, 300);
			var side = random(-1, 1);
			if(side >= 0){
				side = 1;
			}else{
				side = -1;
			}
			var device = new Calculator(xPos * side, yPos, 0, "sound/Calculator.mp3");
			this.active[index].push(device);
		}else if(index == 4){
			//Windows Surface Tablet
			var xPos = random(600, 375);
			var yPos = random(-300, 300);
			var side = random(-1, 1);
			if(side >= 0){
				side = 1;
			}else{
				side = -1;
			}
			var device = new WindowsTab(xPos * side, yPos, 0, "sound/WinSurface.mp3");
			this.active[index].push(device);
		}else if(index == 5){
			//Bamboo
			var device = new BambooTab("sound/Bamboo.mp3");
			this.active[index].push(device);
		}else if(index == 6){
			//rpi
			var xPos = random(500, 375);
			var yPos = random(-300, 300);
			var side = random(-1, 1);
			if(side >= 0){
				side = 1;
			}else{
				side = -1;
			}
			var device = new Raspberry(xPos * side, yPos, 100, "sound/RPi.mp3");
			this.active[index].push(device);
		}else if(index == 7){
			//arduino
			var xPos = random(500, 375);
			var yPos = random(-300, 300);
			var side = random(-1, 1);
			if(side >= 0){
				side = 1;
			}else{
				side = -1;
			}
			var device = new Ardunio(xPos * side, yPos, -200, "sound/Arduino.mp3");
			this.active[index].push(device);
		}else if(index == 8){
			//chromebook
			var xPos = random(70, 375);
			var yPos = random(-300, 300);
			var side = random(-1, 1);
			if(side >= 0){
				side = 1;
			}else{
				side = -1;
			}
			var device = new ChromeBook(xPos * side, yPos, 0, "sound/Chromebook.mp3");
			this.active[index].push(device);
		}
	}
}

ActiveDevices.prototype.removeDevices = function(index, difference){
	for(var i = 0; i < difference; i++){
		this.active[index].shift();
	}
}
