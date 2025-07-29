import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function CameraController() {
    const { camera, scene } = useThree();
    const containerRef = useRef(null)

    const renderer = new THREE.WebGLRenderer( {antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xFFFFFF);

    useFrame(() => {
        const container = containerRef.current
        if (!container) return

        const player = scene.children.find((obj) => obj.geometry?.type === 'BoxGeometry');
        const controls = new OrbitControls(camera, renderer.domElement);

        if (player) {
            const targetPos = player.position.clone().add(new THREE.Vector3(0, 2, 5));
            camera.position.lerp(targetPos, 0.1);
            camera.lookAt(player.position);
            controls.update();
        }
    });

    return null;
}