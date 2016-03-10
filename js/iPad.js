function iPad(sound) {
    //Call the Shape parent constructor
    Shape.call(sound);
    this.obj = new Array();
    this.dur = new Array();
    this.dir = new Array();
    this.speed = new Array();
};

iPad.prototype = Object.create(Shape.prototype);

iPad.prototype.constructor = iPad;

//add to scene
iPad.prototype.add = function() {

    var size = 0.25;
    var tub = 0.05;
    var geometry = new THREE.TorusGeometry(size, tub,32,32)
    var material = new THREE.MeshPhongMaterial( {color: 0x7F95CC,shading: THREE.SmoothShading});
    var mesh1 = new THREE.Mesh( geometry,material);
    var pad = new THREE.Object3D();
    pad.add(mesh1);
    var mesh2 = new THREE.Mesh(new THREE.SphereGeometry(0.15,32,32),material);
    pad.add(mesh2);

    var duration = new THREE.Clock();
    duration.start();
    this.dur.push(duration);
    this.speed.push(Math.random() * (1.25-.01) + .01);
    this.dir.push(Math.floor(Math.random() * 6) + 1);

    this.obj.push(pad);

    scene.add(pad);

}
iPad.prototype.move = function() {

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

