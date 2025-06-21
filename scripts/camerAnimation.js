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