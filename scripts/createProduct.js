import * as THREE from 'three';
import { scene } from './initScene';

// Function to create a 3D product model of an Icosahedron
function createIcosahedron() {
    const geometry = new THREE.IcosahedronGeometry(1, 1); // Create an Icosahedron geometry with radius 1 and detail level 1

    // Create a MeshStandardMaterial with a blue color
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x0077ff,
        roughness: 0.5, // Set roughness for a matte finish
        metalness: 0.8, // Set metalness for a metallic look
        flatShading: true // Enable flat shading for a faceted appearance

    });
    // Create a Mesh with the geometry and material, and add it to the scene
    const Icosahedron = new THREE.Mesh(geometry, material);
    scene.add(Icosahedron);

    // Add wireframe for better visibility
    const wireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry), // Create edges from the geometry
        new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2, transparent: true, opacity: 0.5 }) // White color for the wireframe
    );
    // Add the wireframe to the Icosahedron mesh
    Icosahedron.add(wireframe);
    return Icosahedron;
}
    window.addEventListener('click', () => {
        // Convert mouse position to normalized device coordinates (-1 to +1) for both components
        icosahedron.rotation.x += 0.1; // Rotate the Icosahedron on the X-axis
        icosahedron.rotation.y += 0.1; // Rotate the Icosahedron on the Y-axis
    });

// Use the function to create the Icosahedron and add it to the scene
createIcosahedron();
