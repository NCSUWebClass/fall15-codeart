const START_PERCENT = .8;		//farther it can start in a sample
const TIME_LEFT_RESTART = 2;	//seconds from end before restarting sample
const DEFAULT_MAX_VOLUME = .25;	//default max volume. specific shape can override

//constructor
var Shape = function (x,y,z,soundPath) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.ring = Math.abs(x);
    this.xDir = 1;
    this.zDir = 1;
    this.sound;
    this.soundActive = false;
    this.active = false;
    this.willPlay = false;			//to lower number of sounds playing, only a chance this shape's sound will play
    var playChance = random(0, 10);
    if(playChance > 7){
    	this.willPlay = true;
    	this.sound = loadSound(soundPath);
    }
    this.maxVolume = DEFAULT_MAX_VOLUME;
}

//Draw function, to be implement in the child class
Shape.prototype.render = function() {}

//moves the object
Shape.prototype.move = function() {
    if(this.x <= -this.ring) {
        this.xDir = 1;
    } else if(this.x >= this.ring) {
        this.xDir = -1;
    }

    if(this.z <= -this.ring) {
        this.zDir = 1;
    } else if(this.z >= this.ring) {
        this.zDir = -1;
    }

    this.x += this.xDir * 2;
    this.z += this.zDir * 2;

    if(this.willPlay){
	   	if(this.sound && this.sound.isLoaded() && !this.soundActive){
	    	this.startSound();
	    }else if(this.soundActive){
	    	this.updateSound();
	    }
    }else{
    	this.active = true;
    }

}

//Starts the sound at a random position in the 
//audio between 0 and START_PERCENT
Shape.prototype.startSound = function() {
	if(this.willPlay){
		//first 3 params are default values from p5.sound
		var duration = this.sound.duration();
		var jumpTime = random(0, duration * START_PERCENT); //how far to jump into sample
		this.sound.loop(0,1,1,jumpTime);
		//console.log(this.sound.currentTime());
		this.soundActive = true;

		this.updateSound();
	}
}

//Checks if the sample is at the 
Shape.prototype.updateSound = function() {
	if(this.sound.currentTime() >= this.sound.duration() - TIME_LEFT_RESTART){
        this.sound.jump(0);		//jump back to begining of sample
    }
    this.updatePan();
    this.updateVolume();
}

//Updates the sample's pan
Shape.prototype.updatePan = function() {
	var panAmount = map(this.x, -800, 800, -1, 1);
	this.sound.pan(panAmount);
}

//Updates the sample's volume
Shape.prototype.updateVolume = function() {
	var volumeAmount = map(this.z, -this.ring, this.ring, 0, this.maxVolume);
	this.sound.setVolume(volumeAmount);
}

