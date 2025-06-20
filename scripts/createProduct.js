// import {
//     BoxGeometry,
//     CylinderGeometry,
//     Mesh,
//     MeshStandardMaterial,
//     Group
// } from '../node_modules/three/build/three.module.js'; // Use absolute path for HTTP GET
// import { scene } from './initScene.js';

//Let's insert a container for the 3D scene
export function createProduct (){        //This is a program for building a chair.

    const chair= new THREE.Group(); // Create a group for the seat and backrest

    //Chair's Seat
    const seat = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0, 0),
        new THREE.MeshStandardMaterial({color: 0x654221})
    );
    seat.position.y = 1;

    //Now the legs of the chair
    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8)
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });

    //Then the leg Positions
    const legs = [];
    for (let i = 0; i < 4; i++) {
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.position.set((i % 2 === 0 ? -0.4 : 0.4), 0.5, (i < 2 ? -0.4 : 0.4));
        legs.push(leg);
    }
    
    //Add all to group and return
    chair.add(seat, ...legs); 
    return chair;
}
