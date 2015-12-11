//windows
function WindowsLaptop (x,y,z,sound) {
    //parent call
    Shape.call(this,x,y,z,sound);
};

WindowsLaptop.prototype = Object.create(Shape.prototype);

WindowsLaptop.prototype.constructor = WindowsLaptop;

//draw shape
WindowsLaptop.prototype.render = function() {
    push();
    ambientMaterial(162,224,244);
    translate(this.x,this.y,this.z);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(30);
    pop();
}