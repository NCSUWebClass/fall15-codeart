//Cal
function Calculator (x,y,z,sound) {
    //parent call
    Shape.call(this,x,y,z,sound);
};

Calculator.prototype = Object.create(Shape.prototype);

Calculator.prototype.constructor = Calculator;

//draw shape
Calculator.prototype.render = function() {
    push();
    ambientMaterial(0, 204, 0);
    translate(this.x, this.y, this.z);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    cone(30, 30, 4);
    pop();
}
