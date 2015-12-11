//Cal
function Ardunio (x,y,z,sound) {
    //parent call
    Shape.call(this,x,y,z,sound);
};

Ardunio.prototype = Object.create(Shape.prototype);

Ardunio.prototype.constructor = Ardunio;

//draw shape
Ardunio.prototype.render = function() {
    push();
    translate(this.x, this.y, this.z);
    ambientMaterial(191,116,180);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    var size = 15;
    var rad = 7;
    torus(size, rad);
    translate(-(size * 2), 0, 0);
    torus(size, rad);
    pop();

}
