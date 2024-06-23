const sol_geometry = new THREE.SphereGeometry(1.5,50,50);
const d1 = new THREE.SphereGeometry(1.2,50,50);
const d2 = new THREE.SphereGeometry(1.2,50,50);
const d3 = new THREE.SphereGeometry(1.2,50,50);
const d4 = new THREE.SphereGeometry(1.2,50,50);
const d5 = new THREE.SphereGeometry(1.2,50,50);
const d6 = new THREE.SphereGeometry(1.2,50,50);
const d7 = new THREE.SphereGeometry(1.2,50,50);
const d8 = new THREE.SphereGeometry(1.2,50,50);

const sol_material = new THREE.MeshBasicMaterial({color:0xFFFF00});

const mercurio_geometry = new THREE.SphereGeometry(0.5,50,50);
const mercurio_Texture = new THREE.TextureLoader();
const mercurio_imagem = new mercurio_Texture.load('mercurio.jpg');
const mercurio_material = new THREE.MeshLambertMaterial({map:mercurio_imagem});


const venus_geometry = new THREE.SphereGeometry(0.5,50,50);
const venus_Texture = new THREE.TextureLoader();
const venus_imagem = new mercurio_Texture.load('venus.jpg');
const venus_material = new THREE.MeshLambertMaterial({map:venus_imagem});


const terra_geometry = new THREE.SphereGeometry(0.5,50,50);
const terra_Texture = new THREE.TextureLoader();
const terra_imagem = new mercurio_Texture.load('terra.jpg');
const terra_material = new THREE.MeshLambertMaterial({map:terra_imagem});


const marte_geometry = new THREE.SphereGeometry(0.5,50,50);
const marte_Texture = new THREE.TextureLoader();
const marte_imagem = new mercurio_Texture.load('marte.webp');
const marte_material = new THREE.MeshLambertMaterial({map:marte_imagem});


const jupiter_geometry = new THREE.SphereGeometry(0.5,50,50);
const jupiter_Texture = new THREE.TextureLoader();
const jupiter_imagem = new mercurio_Texture.load('jupiter.webp');
const jupiter_material = new THREE.MeshLambertMaterial({map:jupiter_imagem});


const saturno_geometry = new THREE.SphereGeometry(0.5,50,50);
const saturno_Texture = new THREE.TextureLoader();
const saturno_imagem = new mercurio_Texture.load('saturno.jpg');
const saturno_material = new THREE.MeshLambertMaterial({map:saturno_imagem});


const urano_geometry = new THREE.SphereGeometry(0.5,50,50);
const urano_Texture = new THREE.TextureLoader();
const urano_imagem = new mercurio_Texture.load('mercurio.jpg');
const urano_material = new THREE.MeshLambertMaterial({map:urano_imagem});


const netuno_geometry = new THREE.SphereGeometry(0.5,50,50);
const netuno_Texture = new THREE.TextureLoader();
const netuno_imagem = new mercurio_Texture.load('urano.webp');
const netuno_material = new THREE.MeshLambertMaterial({map:netuno_imagem});




const Obj_sol = new THREE.Mesh(sol_geometry, sol_material);
const d1P = new THREE.Mesh(d1, sol_material);
const d2P = new THREE.Mesh(d2, sol_material);
const d3P = new THREE.Mesh(d3, sol_material);
const d4P = new THREE.Mesh(d4, sol_material);
const d5P = new THREE.Mesh(d5, sol_material);
const d6P = new THREE.Mesh(d6, sol_material);
const d7P = new THREE.Mesh(d7, sol_material);
const d8P = new THREE.Mesh(d8, sol_material);



const Obj_mercurio = new THREE.Mesh(mercurio_geometry, mercurio_material);
const Obj_venus = new THREE.Mesh(venus_geometry, venus_material);
const Obj_terra = new THREE.Mesh(terra_geometry, terra_material);
const Obj_marte = new THREE.Mesh(marte_geometry, marte_material);
const Obj_jupiter = new THREE.Mesh(jupiter_geometry, jupiter_material);
const Obj_saturno = new THREE.Mesh(saturno_geometry, saturno_material);
const Obj_urano = new THREE.Mesh(urano_geometry, urano_material);
const Obj_netuno = new THREE.Mesh(netuno_geometry, netuno_material);

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
Obj_mercurio.position.x=5;
Obj_venus.position.x=7;
Obj_terra.position.x=10;
Obj_marte.position.x=13;
Obj_jupiter.position.x=15;
Obj_saturno.position.x=17;
Obj_urano.position.x=20;
Obj_netuno.position.x=22;




scene.add(d1P);
scene.add(d2P);
scene.add(d3P);
scene.add(d4P);
scene.add(d5P);
scene.add(d6P);
scene.add(d7P);
scene.add(d8P);


scene.add(Obj_mercurio);
scene.add(Obj_sol);
scene.add(Obj_venus);
scene.add(Obj_terra);
scene.add(Obj_marte);
scene.add(Obj_jupiter);
scene.add(Obj_saturno);
scene.add(Obj_urano);
scene.add(Obj_netuno);

scene.add(light_point);
scene.add(light_Ambient);


d1P.add(Obj_mercurio);
d2P.add(Obj_venus);
d3P.add(Obj_terra);
d4P.add(Obj_marte);
d5P.add(Obj_jupiter);
d6P.add(Obj_saturno);
d7P.add(Obj_urano);
d8P.add(Obj_netuno);


d1P.rotation.y=20
d2P.rotation.y=30
d3P.rotation.y=40
d4P.rotation.y=50
d5P.rotation.y=60
d6P.rotation.y=70
d7P.rotation.y=80
d8P.rotation.y=90
/*
const x3 = new THREEx3({
    OrbitControls:THREE.OrbitControls,
THREE,
camera,
scene,
renderer
}
);
*/ 
////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
const controls = new THREE.OrbitControls(camera, document.querySelector(option.tarSelector));
controls.zoomSpeed=0.50;
controls.rotateSpeed=0.50;
renderer.setAnimationLoop(()=>{
renderer.render(scene,camera);
Obj_mercurio.rotation.y+=0.01
Obj_venus.rotation.y+=0.01
Obj_terra.rotation.y+=0.01
Obj_marte.rotation.y+=0.01
Obj_jupiter.rotation.y+=0.01
Obj_saturno.rotation.y+=0.01
Obj_urano.rotation.y+=0.01
Obj_urano.rotation.y+=0.01
Obj_netuno.rotation.y+=0.01
camera.updateProjectionMatrix();
d1P.rotation.y+=0.008
d2P.rotation.y+=0.007
d3P.rotation.y+=0.006
d4P.rotation.y+=0.005
d5P.rotation.y+=0.004
d6P.rotation.y+=0.003
d7P.rotation.y+=0.002
d8P.rotation.y+=0.001


}
);
addEventListener('keydown',function(){
    camera.lookAt(Obj_sol.position);

camera.zoom+=0.07
if(camera.position.y > -700){
    camera.position.y-=2.1;

}
console.log("position: "+ camera.position.y);

});























/*
x3.add(Obj_sol);
x3.add(light_Ambient);
*/
