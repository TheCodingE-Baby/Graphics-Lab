import * as THREE from '../node_modules/three/build/three.module.js'; // Use absolute path for HTTP GET
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'; // Use absolute path for HTTP GET
import { createProduct } from "./createProduct.js"; // Use absolute path for HTTP GET
import  './addLighting.js'; // Import the function to add lighting
import { updateCameraRotation } from './camerAnimation.js'; // Import the camera animation script
import './interaction.js'; // Import the interaction script for mouse events

//Let's insert a container for the 3D scene
const container = document.querySelector('#scene-container'); // Create a container for the 3D scene
if (!container) {    //Check for the existence of the container
    // If the container does not exist, create a new one
    const newContainer = document.createElement('div');
    newContainer.id = 'scene-container';
    document.body.appendChild(newContainer);
}

// create a Scene and set up its background.
const scene = new THREE.Scene();
scene.background = new THREE.Color('lightgray'); // Set the background color of the scene to light gray

//Create a Perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 0); // Adjust position as needed

// Create a WebGL renderer
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
    renderer.render(scene, camera);
}

animate(); // Start the animation loop
createProduct(); // Call the function to create the product model

// Export the scene, camera, and renderer for use in other modules
export { scene, camera, renderer };
