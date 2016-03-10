//constructor
var Shape = function (sound) {
    this.sound = sound;
    this.obj = new Array();
}

//Draw function, to be implement in the child class
Shape.prototype.add = function() {}

//moves the object in one of 6 directions
Shape.prototype.move = function() {}

//rotates object
Shape.prototype.rot = function() {
    var SPEED = 0.01;
    for(var i = 0; i < this.obj.length; i++) {
        this.obj[i].rotation.x -= SPEED * 2;
        this.obj[i].rotation.y -= SPEED;
        this.obj[i].rotation.z -= SPEED * 3;
    }
}
