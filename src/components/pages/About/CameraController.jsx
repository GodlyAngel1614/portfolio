import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from "three";

export default function CameraController() {
    const { camera, scene } = useThree();
    const targetRef = useRef();

    useFrame(() => {
        const player = scene.children.find((obj) => obj.geometry?.type === 'BoxGeometry');
        if (player) {
            const targetPos = player.position.clone().add(new THREE.Vector3(0, 2, 5));
            camera.position.lerp(targetPos, 0.1);
            camera.lookAt(player.position);
        }
    });

    return null;
}