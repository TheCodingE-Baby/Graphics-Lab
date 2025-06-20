export function setupCameraAnimation(camera, scene) {
    // Initialize the camera animation
    let angle = 0; // Initial angle for camera rotation
    const radius = 5; // Radius of the circular path
    
    function animateCamera() {
        angle += 0.005;
        camera.position.x = radius * Math.sin(angle); // Update camera's x position
        camera.position.z = radius * Math.cos(angle); // Update camera's z position
        camera.lookAt(scene.position); // Make the camera look at the center of the scene
        requestAnimationFrame(animateCamera); // Call this function recursively for continuous animation
    }
    animateCamera(); // Start the camera animation
}

// let autoRotateSpeed = 0.01; // Speed of camera auto-rotation

// // Function to animate the camera around the scene
// function updateCameraRotation() {
//     requestAnimationFrame(updateCameraRotation); // Call this function recursively for continuous animation

//     // Update camera position to create a circular motion around the center of the scene
//     camera.position.x = 5 * Math.sin(autoRotateSpeed * Date.now()); // Adjust radius and speed as needed
//     camera.position.z = 5 * Math.cos(autoRotateSpeed * Date.now());

//     camera.lookAt(0, 1, 0); // Make the camera look at the center of the scene
// }

// // Call the function to start the camera animation
// export { updateCameraRotation };