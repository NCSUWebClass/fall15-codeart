function WindowsTab(sound) {
    //Call the Shape parent constructor
    Shape.call(sound);
    this.obj = new Array();
    this.dur = new Array();
    this.dir = new Array();
    this.speed = new Array();
    this.ring = new Array();
};

WindowsTab.prototype = Object.create(Shape.prototype);

WindowsTab.prototype.constructor = WindowsTab;

//add to scene
WindowsTab.prototype.add = function() {

    var geometry = new THREE.CylinderGeometry( 0, 0.1, 0.2, 4 );
    var material = new THREE.MeshPhongMaterial( {color: 0xF8A5B7, shading: THREE.FlatShading} );
    var winTab = new THREE.Mesh( geometry, material );

    var duration = new THREE.Clock();
    duration.start();
    this.dur.push(duration);
    this.speed.push(Math.random() * (1 - 0.1) + 0.1);
    this.dir.push(Math.floor(Math.random() * 6) + 1);
    this.ring.push(Math.random() * (4.75 - 4) + 4);
    this.obj.push(winTab);

    scene.add( winTab );

}
WindowsTab.prototype.move = function() {
    for(var i = 0; i < this.obj.length; i++) {
        switch(this.dir[i]) {
            case 1:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = -Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5;
                break;
            case 2:
                this.obj[i].position.x = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5; //diagonal?
                break;
            case 3:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.y = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5; //diagonal?
                break;
            case this.ring[i]:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5; //diagonal?
                break;
            case 5:
                this.obj[i].position.x = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                break;
            case 6:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                break;
        }
    }

}

