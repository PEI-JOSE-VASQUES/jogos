const option ={
    tarSelector:'#scene',
    width:window.innerWidth,
    height:window.innerHeight
    }
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(option.width,option.height);
  window.document.querySelector(option.tarSelector).appendChild(renderer.domElement);
  scene = new THREE.Scene();
  const scene_background = new THREE.TextureLoader();
  const scene_image = scene_background.load('fundo_scene.png');
  scene.background = scene_image;
  camera = new THREE.PerspectiveCamera(50, option.width/option.height);
  camera.position.z=5;
  const light_point = new THREE.PointLight(0xffffff,2);
  const light_Ambient = new THREE.AmbientLight(0xffffff,0.1);
  camera.position.z=19;
  camera.position.y=21;
  camera.rotation.z=-0;
  camera.rotation.x=-0.9;
