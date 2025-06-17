import * as THREE from '../node_modules/three/build/three.module.js'; // Use absolute path for HTTP GET
import { scene } from './initScene.js'; // Import the scene from the initialization script

// Function to add lighting to the scene
const createAmbientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
scene.add(createAmbientLight);

// Directional light to simulate sunlight
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Bright white light
directionalLight.position.set(5, 10, 7.5); // Position the light above and to the side
directionalLight.castShadow = true; // Enable shadows for the directional light
directionalLight.shadow.mapSize.width = 1024; // Set shadow map size for better quality
directionalLight.shadow.mapSize.height = 1024; // Set shadow map size for better quality
scene.add(directionalLight);