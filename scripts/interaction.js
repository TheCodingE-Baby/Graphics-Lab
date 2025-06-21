export function setupInteraction (camera, scene, product){

    const raycaster = new THREE.Raycaster(); // Raycaster for detecting intersections
    const mouse = new THREE.Vector2(); // Mouse position in normalized device coordinates
    const highlighMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });// Function to handle mouse clicks


    window.addEventListener('click', (event) => {
        // Convert mouse position to normalized device coordinates (-1 to +1) for both components
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);
    
    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(product.children, true);

    // If there are intersections, log the first one
    if (intersects.length > 0) {
        const ClickedObject = intersects[0].object; // Get the first intersected object
        const originalColor = ClickedObject.material.color.clone(); // Clone the original color
        ClickedObject.material = highlighMaterial; // Change the material to highlight color
        setTimeout(() => {
            ClickedObject.material.color.copy(originalColor); // Change back to original color after 1 second
        }, 1000);
    }
});
scene.add(setupInteraction);
}