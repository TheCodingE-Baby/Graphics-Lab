import { camera } from './initScene.js';

let autoRotateSpeed = 0.01; // Speed of auto-rotation

// Function to animate the camera around the scene
function updateCameraRotation() {
    requestAnimationFrame(updateCameraRotation); // Call this function recursively for continuous animation

    // Update camera position to create a circular motion around the center of the scene
    camera.position.x = 5 * Math.sin(autoRotateSpeed * Date.now()); // Adjust radius and speed as needed
    camera.position.z = 5 * Math.cos(autoRotateSpeed * Date.now());

    camera.lookAt(0, 1, 0); // Make the camera look at the center of the scene
}

// Call the function to start the camera animation
export { updateCameraRotation };