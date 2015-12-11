
const NUM_OF_DEVICES = 9;

var len = 200;
var wid = 100;
var towerLen = 20;
var towerHei = 70;
var CASTLE = CASTLE || {};

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

    /*
     //back plane naybe?
     push();
     translate(0,-200,50);
     rotateX(-45);
     plane(200,200);
     pop();
     */
    pop();
}

var space = (1300/2)/4;
var activeDevices = new ActiveDevices();
//var win = new WindowsLaptop(-space * 3,0,50,0);
//var pad = new iPad(-space * 2,0,50,0);
//var TI = new Calculator(-space * 1,0,50,0);
//var boo = new BambooTab(-space * 0,0,50,0);
//var unio = new Ardunio(space * 1,0,50,0);
//var chr = new ChromeBook(space * 2,0,50,0);
//var tab = new WindowsTab(space * 3,0,50,0);
//var rasp= new Raspberry(space * 4,0,50,0);

function preload(){
    /*loadSound("sound/Macbook.mp3");
    loadSound("sound/WinLaptop.mp3");
    loadSound("sound/WinSurface.mp3");
    loadSound("sound/RPi.mp3");
    loadSound("sound/Chromebook.mp3");
    loadSound("sound/Calculator.mp3");
    loadSound("sound/Bamboo.mp3");
    loadSound("sound/Arduino.mp3");
    loadSound("sound/iPad.mp3");*/
    getAll(responses);
}
function setup(){
     createCanvas(5112, 2240, WEBGL);
}
function draw(){
    background(250,250,250,0);
    pointLight(250, 250, 250, 0, 0, 0);

    //floating Castle like thing?
    CASTLE.materialize();
    activeDevices.render();


/*    win.render();
    pad.render();
    TI.render();
    boo.render();
    unio.render();
    chr.render();
    tab.render();
    rasp.render();
    */
    


    // if(mac.x < space * 4) {
    //    mac.x += 0.5;
    //} else if (mac.z < space * 4) {
    //   mac.z -= 5;
    //}

}