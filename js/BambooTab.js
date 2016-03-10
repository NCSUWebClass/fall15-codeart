function BambooTab(sound) {
    //Call the Shape parent constructor
    Shape.call(sound);
    this.obj = new Array();
    this.dur = new Array();
    this.dir = new Array();
    this.speed = new Array();
};

BambooTab.prototype = Object.create(Shape.prototype);

BambooTab.prototype.constructor = BambooTab;

//add to scene
BambooTab.prototype.add = function() {

    var geometry = new THREE.CylinderGeometry( 0.2, 0.2, 0.6, 32 );
    var material = new THREE.MeshPhongMaterial( {color: 0xF9DE60, shading: THREE.SmoothShading} );
    var boo = new THREE.Mesh( geometry, material );

    var duration = new THREE.Clock();
    duration.start();
    this.dur.push(duration);
    this.speed.push(Math.random() * (1.25-.01) + .01);

    this.dir.push(Math.floor(Math.random() * 6) + 1);

    this.obj.push(boo);

    scene.add( boo );

}
BambooTab.prototype.move = function() {
    for(var i = 0; i < this.obj.length; i++) {
        switch(this.dir[i]) {
            case 1:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.z = -Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5;
                break;
            case 2:
                this.obj[i].position.x = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5; //diagonal?
                break;
            case 3:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.y = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5; //diagonal?
                break;
            case 4:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5; //diagonal?
                break;
            case 5:
                this.obj[i].position.x = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                break;
            case 6:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * 4;
                break;
        }
    }

}

