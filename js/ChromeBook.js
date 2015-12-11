function ChromeBook (x,y,z,sound) {
    //parent call
    Shape.call(this,x,y,z,sound);
};

ChromeBook.prototype = Object.create(Shape.prototype);

ChromeBook.prototype.constructor = ChromeBook;

//draw shape
ChromeBook.prototype.render = function() {
    push();
    translate(this.x, this.y, this.z);
    ambientMaterial(213,235,139);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    var size = 20;
    sphere(size);
    translate(0, -(size * 1.25) + 5, 0);
    cone(size-0, size);
    pop();
}