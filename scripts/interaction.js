import * as THREE from '../node_modules/three/build/three.module.js'; // Use absolute path for HTTP GET
import { camera, scene } from './initScene.js';

const raycaster = new THREE.Raycaster(); // Raycaster for detecting intersections
const mouse = new THREE.Vector2(); // Mouse position in normalized device coordinates

// Function to handle mouse clicks
window.addEventListener('click', (event) => {
    // Convert mouse position to normalized device coordinates (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);
    
    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children, true);

    // If there are intersections, log the first one
    if (intersects.length > 0) {
        const ClickedObject = intersects[0].object; // Get the first intersected object
        ClickedObject.material.color.setHex(0xff0000); // Change color to red
        setTimeout(() => {
            ClickedObject.material.color.setHex(0x0077ff); // Change back to original color after 1 second
        }, 1000);
    }
});