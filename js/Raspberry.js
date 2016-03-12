function Raspberry(sound) {
    //Call the Shape parent constructor
    Shape.call(sound);
    this.obj = new Array();
    this.dur = new Array();
    this.dir = new Array();
    this.speed = new Array();
    this.ring = new Array();

};

Raspberry.prototype = Object.create(Shape.prototype);

Raspberry.prototype.constructor = Raspberry;

//add to scene
Raspberry.prototype.add = function() {

    var size = 0.05;
    var geometry = new THREE.SphereGeometry(size,32,32);
    var material = new THREE.MeshPhongMaterial( {color: 0xEA4B53,shading: THREE.SmoothShading});
    var berry = new THREE.Object3D();

    //CENTER ROW
    //left most blob in center row
    var mesh1 = new THREE.Mesh( geometry,material);
    mesh1.position.x -= size;
    berry.add(mesh1);
    //center in center row
    var mesh2 = new THREE.Mesh( geometry,material);
    mesh2.position.z += size*1.15;
    mesh2.position.y += size*0.15;
    berry.add(mesh2);
    //right blob in center row
    var mesh3 = new THREE.Mesh( geometry,material);
    mesh3.position.x += size;
    berry.add(mesh3);
    //inverse right
    var mesh4 = new THREE.Mesh( geometry,material);
    mesh4.position.x += size;
    mesh4.position.z -= size;
    berry.add(mesh4);
    //inverse center
    var mesh5 = new THREE.Mesh( geometry,material);
    mesh5.position.z -= size*2.15;
    mesh5.position.y += size*0.15;
    berry.add(mesh5);
    //inverse left
    var mesh6 = new THREE.Mesh( geometry,material);
    mesh6.position.x -= size;
    mesh6.position.z -= size;
    berry.add(mesh6);

    //BOTTOM ROW
    var mesh7 = new THREE.Mesh( geometry,material);
    mesh7.position.y -= size *0.75;
    mesh7.position.z -= size;
    berry.add(mesh7);

    var mesh8 = new THREE.Mesh( geometry,material);
    mesh8.position.y -= size * 0.75;
    mesh8.position.z += size*0.25;
    berry.add(mesh8);

    //TOP ROW
    //left most blob
    var mesh9 = new THREE.Mesh( geometry,material);
    mesh9.position.x -= size* 1.5;
    mesh9.position.y += size;
    berry.add(mesh9);
    //inbetween left blob
    var mesh10 = new THREE.Mesh( geometry,material);
    mesh10.position.x -= size;
    mesh10.position.y += size;
    mesh10.position.z += size* 0.5;
    berry.add(mesh10);
    //front left
    var mesh11 = new THREE.Mesh( geometry,material);
    mesh11.position.x -= size* 0.5;
    mesh11.position.y += size;
    mesh11.position.z += size;
    berry.add(mesh11);
    //front right
    var mesh12 = new THREE.Mesh( geometry,material);
    mesh12.position.x += size* 0.5;
    mesh12.position.y += size;
    mesh12.position.z += size;
    berry.add(mesh12);
    //inbetween right
    var mesh13 = new THREE.Mesh( geometry,material);
    mesh13.position.x += size;
    mesh13.position.y += size;
    mesh13.position.z += size *0.5;
    berry.add(mesh13);
    //right most
    var mesh13 = new THREE.Mesh( geometry,material);
    mesh13.position.x += size* 1.5;
    mesh13.position.y += size;
    berry.add(mesh13);
    //inverse right most
    var mesh14 = new THREE.Mesh( geometry,material);
    mesh14.position.x += size* 1.5;
    mesh14.position.y += size;
    mesh14.position.z -= size;
    berry.add(mesh14);
    //inverse inbetween right
    var mesh15 = new THREE.Mesh( geometry,material);
    mesh15.position.x += size;
    mesh15.position.y += size;
    mesh15.position.z -= size *1.5;
    berry.add(mesh15);
    //inverse front right
    var mesh16 = new THREE.Mesh( geometry,material);
    mesh16.position.x += size* 0.5;
    mesh16.position.y += size;
    mesh16.position.z -= size * 2;
    berry.add(mesh16);
    //inverse front left
    var mesh17 = new THREE.Mesh( geometry,material);
    mesh17.position.x -= size* 0.5;
    mesh17.position.y += size;
    mesh17.position.z -= size * 2;
    berry.add(mesh17);
    //inverse inbetween left blob
    var mesh18 = new THREE.Mesh( geometry,material);
    mesh18.position.x -= size;
    mesh18.position.y += size;
    mesh18.position.z -= size* 1.5;
    berry.add(mesh18);
    //inverse left most blob
    var mesh19 = new THREE.Mesh( geometry,material);
    mesh19.position.x -= size* 1.5;
    mesh19.position.y += size;
    mesh19.position.z -= size;
    berry.add(mesh19);

    var duration = new THREE.Clock();
    duration.start();
    this.dur.push(duration);
    this.speed.push(Math.random() * (1 - 0.1) + 0.1);
    this.ring.push(Math.random() * (4.75 - 4) + 4);
    this.dir.push(Math.floor(Math.random() * 6) + 1);

    this.obj.push(berry);

    scene.add(berry);

}
Raspberry.prototype.move = function() {

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

