var scene, camera, renderer, light;
var WIDTH  = window.innerWidth;
var HEIGHT = window.innerHeight;
book = new MacBook(0);
ipa = new iPad(0);
ti83 = new Calculator(0);
boo = new BambooTab(0);
lap = new WindowsLap(0);
ard = new Ardunio(0);
chrm = new ChromeBook(0);
winTab = new WindowsTab(0);
berry = new Raspberry(0);
lightIntense = 1.25; //normal = 1.25 sunset = 0.75 dark = 0.5


function init() {
    scene = new THREE.Scene();
    clock = new THREE.Clock();
    date = new Date(); //needed to do time stuff
    //add objects to scene methods
    book.add();
    ipa.add();
    ti83.add();
    boo.add();
    ard.add();
    chrm.add();
    winTab.add();
    lap.add();
    berry.add();
    initEscher();
    initCamera();
    initRenderer();
    initLights();
    document.body.appendChild(renderer.domElement);
}
function initEscher() {
    var loader = new THREE.ColladaLoader();
    loader.load('./models/lent.dae', function(result) {
        var dae = result.scene;
        dae.rotateY(-0.785398); //in rads
        dae.translateY(1);
        dae.rotation.x = 25;
        dae.scale.x = 0.25;
        dae.scale.y = 0.2;
        dae.scale.z = 0.25;
        scene.add(dae);
    });
}

function initLights() {

    light = new THREE.HemisphereLight( 0xffffbb, 0x080820, lightIntense );
    light.position.set( 0, 3.15, 4.5);
    scene.add( light );
    geometry = new THREE.SphereGeometry( 100, 8, 4 );
    material = new THREE.MeshBasicMaterial( { color: 0xffaa00 } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.scale.set( 0.0005, 0.0005, 0.0005 );
    //light.add( mesh );
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true  });
    renderer.setSize(5112, 2240);
}

function orbit(){
    if(camera.position.x < -3.5) {
        camera.position.x = Math.cos(clock.getElapsedTime() / 4) * 4;
        camera.position.z = -Math.sin(clock.getElapsedTime() / 4) * 4;
        camera.lookAt(scene.position);
    } else if (camera.position.x > 3,5) {
        camera.position.x = -Math.cos(clock.getElapsedTime() / 4) * 4;
        camera.position.z = Math.sin(clock.getElapsedTime() / 4) * 4;
        camera.lookAt(scene.position);
    }
    console.log(camera.position.x);
}

function render() {

    requestAnimationFrame(render);
    book.rot();
    book.move();
    ipa.rot();
    ipa.move();
    ti83.rot();
    ti83.move();
    boo.rot();
    boo.move();
    ard.rot();
    ard.move();
    chrm.rot();
    chrm.move();
    winTab.rot();
    winTab.move();
    berry.rot();
    berry.move();
    lap.rot();
    lap.move();
    //orbit();
    renderer.render(scene, camera);

}

init();
render();
