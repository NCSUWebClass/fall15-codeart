const NUM_OF_DEVICES = 9;

function Shape(x,y,z,sound) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.sound = sound;

}

var len = 200;
var wid = 100;
var towerLen = 20;
var towerHei = 70;
var MACBOOKPRO = MACBOOKPRO || {};
var LAP = LAP || {};
var PAD = PAD || {};
var CAL = CAL || {};
var BAM = BAM || {};
var WNTAB = WNTAB || {};
var ARD = ARD || {};
var CHRM = CHRM || {};
var RAS = RAS || {};
var CASTLE = CASTLE || {};

MACBOOKPRO.materialize = function (x,y,z) {
    push();
    ambientMaterial(0,193,181);
    translate(x, y, z);
    sphere(30);
    pop();
}
LAP.materialize = function(x,y,z) {
    //rotate(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    push();
    ambientMaterial(162,224,244);
    //rotate(frameCount * 0.01);
    translate(x,y,z);
    //rotate(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(30);
    pop();
}
LAP.move = function() {
    push();
    rotateY(frameCount * 0.01);
    LAP.materialize(0,0,0);
    pop();
}
PAD.materialize = function (x,y,z) {
    push();
    ambientMaterial(127,149,204);
    translate(x,y,z);
    sphere(25);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    scale(0.5);
    torus(80, 15);
    pop();
}
CAL.materialize = function(x,y,z) {
    push();
    ambientMaterial(232,71,87);
    translate(x, y, z);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    cone(30, 30, 4);
    pop();
}
BAM.materialize = function(x,y,z) {
    push();
    ambientMaterial(249,222,87);
    translate(x, y, z);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(30, 30);
    pop();
}
ARD.materialize = function(x,y,z) {

    push();
    rotate(frameCount * 0.01);
    translate(x, y, z);
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
CHRM.materialize = function(x,y,z) {

    push();
    translate(x, y, z);
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
WNTAB.materialize = function(x,y,z) {
    push();
    translate(x, y, z);
    ambientMaterial(248,165,183);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(30,15,4);
    pop();
}
RAS.materialize = function(x,y,z) {
    push();
    translate(x, y, z);
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
CASTLE.materialize = function() {
    push();
    ambientMaterial(210,207,160);
    rotateY(120);
    translate(0,100,0);
    box(len,wid,len);

    //front towers
    push();
    translate(len - towerLen,towerHei - len, len- towerLen);
    box(towerLen,towerHei,towerLen);
    pop();

    push();
    translate(towerLen-len,towerHei-len,len- towerLen);
    box(towerLen,towerHei,towerLen);
    pop();


    //back towers
    push();
    translate(towerLen-len,towerHei-len,towerLen - len);
    box(towerLen,towerHei,towerLen);
    pop();

    push();
    translate(len - towerLen,towerHei-len, towerLen - len );
    box(towerLen,towerHei,towerLen);
    pop();


    //back plane

     /*
     //back plane maybe?
     push();
     translate(0,-200,50);
     rotateX(-45);
     plane(200,200);
     pop();
     */
    pop();
}

var space = (1300/2)/4;
var mac = new Shape(-space * 4,0,50,0);
var win = new Shape(-space * 3,0,50,0);
var pad = new Shape(-space * 2,0,50,0);
var TI = new Shape(-space * 1,0,50,0);
var boo = new Shape(-space * 0,0,50,0);
var unio = new Shape(space * 1,0,50,0);
var chr = new Shape(space * 2,0,50,0);
var tab = new Shape(space * 3,0,50,0);
var berry = new Shape(space * 4,0,50,0);

var drone;

function preload(){
    drone = loadSound("sound/Macbook.mp3");
}
function setup(){
     createCanvas(5112, 2240, WEBGL);
    drone.loop(0,1,1,random(0, drone.duration() * .8));
}

function draw(){

    background(250,250,250,0);
    //translate(-250 * 2.5, 0, 0);
    pointLight(250, 250, 250, 0, 0, 0);

    //floating Castle like thing?
    CASTLE.materialize();
    rotateY(frameCount * 0.005);
    rotateX(frameCount * 0.005);
    rotateZ(frameCount * 0.005);
    //MacBookPRO
    MACBOOKPRO.materialize(mac.x,mac.y,mac.z);
    //Windows
    LAP.materialize(win.x,win.y,win.z);
    //iPad
    PAD.materialize(pad.x,pad.y,pad.z);
    //Calculator
    CAL.materialize(TI.x,TI.y,TI.z);
    //Bamboo fun tablet
    BAM.materialize(boo.x,boo.y,boo.z);
    //Ardunio
    ARD.materialize(unio.x,unio.y, unio.z);
    //Chromebook
    CHRM.materialize(chr.x,chr.y,chr.z);
    //Window Tablet
    WNTAB.materialize(tab.x,tab.y,tab.z);
    //Rasberry
    RAS.materialize(berry.x,berry.y,berry.z);

    if(drone.currentTime() >= drone.duration() - 2){
        drone.jump(0);
    }

}