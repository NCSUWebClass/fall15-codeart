//Cal
function BambooTab (x,y,z,sound) {
    //parent call
    Shape.call(this,x,y,z,sound);
};

BambooTab.prototype = Object.create(Shape.prototype);

BambooTab.prototype.constructor = BambooTab;

//draw shape
BambooTab.prototype.render = function() {
    push();
    ambientMaterial(249, 222, 87);
    translate(this.x, this.y, this.z);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(30, 30);
    pop();
}