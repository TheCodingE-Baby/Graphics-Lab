import * as THREE from 'three';
import { OrbirtControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createProduct } from './createProduct.js'; // Import the function to create the product model
import  './addLighting.js'; // Import the function to add lighting
import { updateCameraRotation } from './camerAnimation.js'; // Import the camera animation script
import './interaction.js'; // Import the interaction script for mouse events

// Get a reference to the container element that will hold our scene
createProduct(); // Call the function to create the product model
// create a Scene with camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5); // Adjust position as needed

const renderer = new THREE.WebGLRenderer({ antialias: true });  // Enable antialiasing for smoother edges
renderer.setSize(window.innerWidth, window.innerHeight);  
renderer.setPixelRatio(window.devicePixelRatio); // Set Pixel Ratio for better quality
renderer.setClearColor(0xf0f0f0); // Set background color as light gray
document.body.appendChild(renderer.domElement); // Append the renderer to the container

// Add OrbitControls for camera manipulation (disable rotations if autorotate is enabled)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable damping (inertia) for smoother controls
controls.enableZoom = true; // Allow zooming
controls.enablePan = true; // Allow panning

//Add an event listener for window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//Animate function to render the scene
function animate() {
    requestAnimationFrame(animate);
    updateCameraRotation(); // Call the camera animation function
    icosahedron.rotation.x += 0.01; // Rotate the Icosahedron on the X-axis
    icosahedron.scale.setScalar(1 + Math.sin(Date.now() * 0.001) * 0.1); // Scale the Icosahedron to half its size
    renderer.render(scene, camera);

}

animate(); // Start the animation loop

// Export the scene, camera, and renderer for use in other modules
export { scene, camera, renderer };
