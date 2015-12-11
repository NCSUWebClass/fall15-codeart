function WindowsTab (x,y,z,sound) {
    //parent call
    Shape.call(this,x,y,z,sound);
};

WindowsTab.prototype = Object.create(Shape.prototype);

WindowsTab.prototype.constructor = ChromeBook;

//draw shape
WindowsTab.prototype.render = function() {
    push();
    translate(this.x, this.y, this.z);
    ambientMaterial(248,165,183);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(30,15,4);
    pop();
}