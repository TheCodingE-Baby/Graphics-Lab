//Export the function createProduct to the initScene.js file
export function createProduct() {

   const chair = new THREE.Group(); // Create a group for the seat and backrest

    //Chair's Seat
    const seat = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0.2, 1),
        new THREE.MeshStandardMaterial({color: 0x654321})
    );
    seat.position.y = 1;

    //Now the legs of the chair
    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8)
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });

    //Then the leg Positions
    const legs = [];
    for (let i = 0; i < 4; i++) {
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.position.set((i % 2 === 0 ? -0.5 : 0.5), 0.5, (i < 2 ? -0.5 : 0.5));
        legs.push(leg);
    }

    // The chair's backrest
    const backrest = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x654321 })
        ); 
        backrest.position.set(0, 1.1, -0.5);
    
    //Add all to group and return
    chair.add(seat, backrest, ...legs); 
    return chair;
}