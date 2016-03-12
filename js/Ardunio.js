function Ardunio(sound) {
    //Call the Shape parent constructor
    Shape.call(sound);
    this.obj = new Array();
    this.dur = new Array();
    this.dir = new Array();
    this.speed = new Array();
    this.ring = new Array();

};

Ardunio.prototype = Object.create(Shape.prototype);

Ardunio.prototype.constructor = Ardunio;

//add to scene
Ardunio.prototype.add = function() {

    var size = 0.1;
    var tub = 0.05;
    var geometry = new THREE.TorusGeometry(size, tub,32,32);
    var material = new THREE.MeshPhongMaterial( {color: 0xBF74B4,shading: THREE.SmoothShading});
    var mesh1 = new THREE.Mesh( geometry,material);
    var ard = new THREE.Object3D();
    ard.add(mesh1);
    var mesh2 = new THREE.Mesh( geometry,material);
    mesh2.position.x = size * 2;
    ard.add(mesh2);

    var duration = new THREE.Clock();
    duration.start();
    this.dur.push(duration);
    this.ring.push(Math.random() * (4.75 - 4) + 4);
    this.speed.push(Math.random() * (1 - 0.1) + 0.1);
    this.dir.push(Math.floor(Math.random() * 6) + 1);

    this.obj.push(ard);

    scene.add(ard);

}
Ardunio.prototype.move = function() {
    //one of these 6 ways
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

