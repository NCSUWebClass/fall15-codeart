function Raspberry (x,y,z,sound) {
    //parent call
    Shape.call(this,x,y,z,sound);
};

Raspberry.prototype = Object.create(Shape.prototype);

Raspberry.prototype.constructor = Raspberry;

//draw shape
Raspberry.prototype.render = function() {
    push();
    translate(this.x, this.y, this.z);
    //rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    ambientMaterial(234,75,83);
    var size = 10;

    push();
    //first half
    translate(-size,0,0);
    sphere(size);
    translate(size,0,size);
    sphere(size);
    translate(size,0,-size);
    sphere(size);
    //second half
    translate(0,0,-size);
    sphere(size);
    translate(-size,0,-size);
    sphere(size);
    translate(-size,0,size);
    sphere(size);
    pop();


    push();
    //first half
    translate(-size*1.5,-size,0);
    sphere(size);
    translate(size*0.5,0,size*0.5);
    sphere(size);
    translate(size*0.5,0,size*0.5);
    sphere(size);
    translate(size,0,0);
    sphere(size);
    translate(size*0.5,0,-size*0.5);
    sphere(size);
    translate(size*0.5,0,-size*0.5);
    sphere(size);
    //second half
    translate(0,0,-size);
    sphere(size);
    translate(-size*0.5,0,-size*0.5);
    sphere(size);
    translate(-size*0.5,0,-size*0.5);
    sphere(size);

    translate(-size,0,0);
    sphere(size);
    translate(-size,0,size);
    sphere(size);
    pop();

    push();
    //first half
    translate(-0.5*size,0.5*size,0);
    sphere(size);
    translate(size,0,0);
    sphere(size);
    //second half
    translate(0,0,-size);
    sphere(size);
    translate(-size,0,0);
    sphere(size);
    pop();

    pop();
}