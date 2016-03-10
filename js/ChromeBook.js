function ChromeBook(sound) {
    //Call the Shape parent constructor
    Shape.call(sound);
    this.obj = new Array();
    this.dur = new Array();
    this.dir = new Array();

};

ChromeBook.prototype = Object.create(Shape.prototype);

ChromeBook.prototype.constructor = ChromeBook;

//add to scene
ChromeBook.prototype.add = function() {

    var material = new THREE.MeshPhongMaterial( {color: 0xF16E1E,shading: THREE.FlatShading});
    var chrm = new THREE.Mesh( new THREE.IcosahedronGeometry(0.3),material);
    var duration = new THREE.Clock();
    duration.start();
    this.dur.push(duration);

    this.dir.push(Math.floor(Math.random() * 6) + 1);

    this.obj.push(chrm);
    scene.add(chrm);

}
ChromeBook.prototype.move = function() {

    for(var i = 0; i < this.obj.length; i++) {
        switch(this.dir[i]) {
            case 1:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.z = -Math.sin(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime()) * 1.5;
                break;
            case 2:
                this.obj[i].position.x = -Math.cos(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime()) * 1.5; //diagonal?
                break;
            case 3:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.y = Math.cos(this.dur[i].getElapsedTime()) * 1.5; //diagonal?
                break;
            case 4:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime()) * 1.5; //diagonal?
                break;
            case 5:
                this.obj[i].position.x = -Math.cos(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime()) * 4;
                break;
            case 6:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime()) * 4;
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime()) * 4;
                break;
        }
    }

}

