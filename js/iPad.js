function iPad (x,y,z,sound) {
    //parent call
    Shape.call(this,x,y,z,sound);

    this.maxVolume = .1;
};

iPad.prototype = Object.create(Shape.prototype);

iPad.prototype.constructor = iPad;

//draw shape
iPad.prototype.render = function() {
    push();
    ambientMaterial(127,149,204);
    translate(this.x,this.y,this.z);
    sphere(25);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    scale(0.5);
    torus(80, 15);
    pop();
}