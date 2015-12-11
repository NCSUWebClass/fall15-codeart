function MacBook (x,y,z,sound) {
    //parent call
    Shape.call(this,x,y,z,sound);
};

MacBook.prototype = Object.create(Shape.prototype);

MacBook.prototype.constructor = MacBook;

//draw shape
MacBook.prototype.render = function() {
    push();
    ambientMaterial(0,193,181);
    translate(this.x, this.y, this.z);
    sphere(30);
    pop();
}