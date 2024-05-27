import * as THREE from 'https://threejs.org/build/three.module.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a domed house
const houseGeometry = new THREE.SphereGeometry(1, 32, 32);
const houseMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
const house = new THREE.Mesh(houseGeometry, houseMaterial);
house.position.x = -2;
scene.add(house);

// Create a windmill
const windmillGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32);
const windmillMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
const windmill = new THREE.Mesh(windmillGeometry, windmillMaterial);
windmill.position.x = 2;
scene.add(windmill);

// Create a ground plane
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, side: THREE.DoubleSide});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = Math.PI / 2;
scene.add(ground);

// Create the animation
function animate() {
    requestAnimationFrame(animate);

    // Rotate the windmill
    windmill.rotation.y += 0.01;

    // Render the scene with the camera
    renderer.render(scene, camera);
}

// Call the animate function
animate();