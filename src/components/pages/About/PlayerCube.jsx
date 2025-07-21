import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpring, a } from '@react-spring/three';
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { PerspectiveCamera, PositionalAudio } from '@react-three/drei'
import {Text} from "@react-three/drei"
import BlossomBox from './BlossomBox';
let running = true;
let intensity = 250

export default function PlayerCube() {
    const ref = useRef();
    const lightRef = useRef();
    const speed = 0.05;
    const [isBig, setIsBig] = useState(false);
    const [hovered, setHovered] = useState(false);
    const light = new THREE.PointLight(0xffffff, 1, 100);

    light.position.set(0, 0, 0);
    light.castShadow = true;
    light.scale.set(10)
    light.intensity = 100;
    light.color = new THREE.Color('#ffc856');

    const [isDeleted, setIsDeleted] = useState(false);
    const [currentColor, setCurrentColor] = useState('#69b4ff');
    const handlePointerOver = () => setHovered(true);
    const handlePointerOut = () => setHovered(false);
    const [clickCounter, setClickCounter] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [finished, setFinished] = useState(false); // For scene change trigger

    useEffect(() => {
        if (clickCounter >= 15) {
            running = false;
            setIsTransitioning(true);
        }
    }, [clickCounter]);

    useEffect(() => {
        if (!isTransitioning) return;
        intensity = 0

        let flicker = true;
        const interval = setInterval(() => {
            flicker = !flicker;
            if (lightRef.current) {
                lightRef.current.intensity = flicker ? 1 : 0.1;
            }
        }, 100);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            if (lightRef.current) lightRef.current.intensity = 0;
            setFinished(true);
        }, 1200);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isTransitioning]);

    const { scale } = useSpring({
        scale: isBig ? [1.5, 1.5, 1.5] : [0.5, 0.5, 0.5],
        config: { mass: 1, tension: 170, friction: 26 },
    });

    useFrame(() => {
        if (running && ref.current) {
            ref.current.rotation.y += clickCounter/1000; // or x/z too
            ref.current.rotation.x += clickCounter/1000;
            ref.current.rotation.z += clickCounter/1000;

            ref.current.Opacity = 1
        }
    });

    const { color } = useSpring({
        color: hovered ? '#ffc856' : currentColor,
        config: { mass: 1, tension: 170, friction: 26 },
    })

    useFrame(() => {
        direction.set(0, 0, 0);
        if (keys['w']) direction.z -= 1;
        if (keys['s']) direction.z += 1;
        if (keys['a']) direction.x -= 1;
        if (keys['d']) direction.x += 1;
        if (keys['q']) direction.y += 5;
        if (keys['e']) direction.y -= 5;

        direction.normalize().multiplyScalar(speed);
        ref.current.position.add(direction);

        const pos = ref.current.position;
        const halfRoomSize = 5;
        const buffer = 0.25;
        pos.x = THREE.MathUtils.clamp(pos.x, -halfRoomSize + buffer, halfRoomSize - buffer);
        pos.z = THREE.MathUtils.clamp(pos.z, -halfRoomSize + buffer, halfRoomSize - buffer);
        pos.y = THREE.MathUtils.clamp(pos.y, -1, 2);
    });

    useEffect(() => {
        if (finished) {
           console.log("switching scene");

        }
    })

    const handleClick = () => {
        setIsBig(prev => !prev);
        setClickCounter(prev => prev + 1);
    };

    return (
        <group>
            <EffectComposer>
                <Glitch delay={[2, 4]} duration={[0.3, 1]} strength={[0.1, 0.5]} />
            </EffectComposer>
            <a.mesh
                ref={ref}
                position={[0, 0.5, 0]}
                onClick={handleClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                scale={scale}
            >

                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <a.meshStandardMaterial color={color}
                    emissive = {color}
                    emissiveIntensity = {intensity/200}
                    roughness = {0.5}
                    metalness = {0.3}
                    side = {2}
                />
                <pointLight
                    ref={lightRef}
                    position={[0, 0, 0]}
                    intensity={intensity * clickCounter}
                    distance={10}
                    color={'#1f8fd0'}
                    castShadow
                />
            </a.mesh>

            <BlossomBox visible={isBig} counter={clickCounter} />
        </group>

    );
}

const direction = new THREE.Vector3();
const keys = {};
window.addEventListener('keydown', (e) => (keys[e.key.toLowerCase()] = true));
window.addEventListener('keyup', (e) => (keys[e.key.toLowerCase()] = false));
