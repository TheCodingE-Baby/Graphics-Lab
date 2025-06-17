import {
    Mesh,
    MeshStandardMaterial,
    CylinderGeometry,
    BoxGeometry,
} from '../node_modules/three/build/three.module.js'; // Use absolute path for HTTP GET
import { scene } from './initScene';

//Let's insert a container for the 3D scene
const createProduct = () =>{        //This is a program for building a chair.
    //Chair's Seat.
    const seat= new Mesh(
        new BoxGeometry(1, 0, 0),
        new MeshStandardMaterial({color: 0x654221})
    );
    seat.position.y = 1;

    //Now the legs of the chair
    const legGeometry = new CylinderGeometry(0.1, 0.1, 1, 8)
    const legMaterial = new MeshStandardMaterial({ color: 0x333333 });

    //Then the leg Positions
    const legPositions = [
        [1, 0.5, 1], [-1, 0.5, 1],
        [1, 0.5, -1], [-1, 0.5, -1]
    ];

    legPositions.forEach((pos) => {
        const leg = new Mesh(legGeometry, legMaterial);
        leg.position.set(pos[0], pos[1], pos[2]);
        scene.add(leg);
    });
    
    scene.add(seat);
};
createProduct();