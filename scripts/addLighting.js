// Function to add lighting to the scene (Export to initScene.js)
export function addLighting(scene) {
   const createAmbientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(createAmbientLight);

// Directional white light to simulate sunlight
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 7.5); // Position the light above and to the side
    directionalLight.castShadow = true; // Enable shadows for the directional light
    directionalLight.shadow.mapSize.width = 1024; // Set shadow map size for better quality
    directionalLight.shadow.mapSize.height = 1024; // Set shadow map size for better quality
    scene.add(directionalLight);
}