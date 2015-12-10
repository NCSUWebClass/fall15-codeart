function ActiveDevices(){
	this.active = new Array(NUM_OF_DEVICES);
	for(var i = 0; i < active.length; i++){
		active.push(new Array());
	}
}

ActiveDevices.prototype.render = function(){
	for (var i = 0; i < this.active.length; i++) {
		var difference = this.active[i].length - getNumCheckedOut(i);

		if(difference > 0){
			this.addDevices(i, difference);		//missing devices to active[i]
		}else if(difference < 0){
			this.removeDevices(i, difference);  //remove extra devices from active[i]
		}

		for(var j = 0; j < this.active[i].length; j++){
			var selectedDevice = this.active[i][j];
			selectedDevice.materialize();
		}
	}
}

ActiveDevices.prototype.addDevices = function(index, difference){
	for(var i = 0; i < difference; i++){
		// make a new device 
		//push onto this.active[index]
	}
}

ActiveDevices.prototype.removeDevices = function(index, difference){
	for(var i = 0; i < difference; i++){
		this.active[index].shift();
	}
}