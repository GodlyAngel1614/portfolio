import * as THREE from 'three';
import { useRef, useState, useEffect } from "react";
import { a, useSpring } from "@react-spring/three";
import { Html } from "@react-three/drei";
import {motion, transform} from "framer-motion";
import { useFrame } from "@react-three/fiber";
import {useNavigate} from "react-router-dom";


const buttonLabels = ["Combat Systems", "Abilities", "Leaderboard", "Cutscenes", "Horror", "Cozy", "Discord", "FPS", "Random"];
const radius = 2.5;

export default function Orb() {
    const orb = useRef();
    const buttonRefs = useRef([]);
    const [hovered, setHovered] = useState(false);
    const [currentColor, setCurrentColor] = useState('#ffffff');
    const angleRef = useRef(0);
    const orbPosition = [2, 5, 0.2];
    const lightRef = useRef(null);
    const navigate = useNavigate();

    const { color } = useSpring({
        color: hovered ? '#705808' : currentColor,
        config: { mass: 1, tension: 170, friction: 26 },
    });

    const handlePointerOver = () => setHovered(true);
    const handlePointerOut = () => setHovered(false);

    // Smooth rotation logic
    useFrame(() => {
        angleRef.current += 0.0025;

        buttonRefs.current.forEach((ref, i) => {
            if (!ref) return;

            const baseAngle = (i / buttonLabels.length) * Math.PI * 2;
            const angle = angleRef.current + baseAngle;

            const x = orbPosition[0] + Math.cos(angle) * radius;
            const y = orbPosition[1] + Math.sin(angle) * 2;
            const z = orbPosition[2] + Math.sin(angle) * 4; // Optional: orbiting depth

            ref.position.set(x, y, z);
            ref.rotation.set(Math.PI / 2, 0, 0);
        });
    });

    useFrame(() => {
        if (orb.current) {
            orb.current.rotation.y += 0.002
            orb.current.rotation.x  += 0.003
            orb.current.rotation.z  += 0.03

            orb.current.Opacity = 1
        }
    });

    return (
        <group>
            {/* Main Orb */}
            <a.mesh
                ref={orb}
                position={orbPosition}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onClick={() => console.log("displaying")}
            >
                <sphereGeometry args={[0.8, 8, 8]} />
                <a.meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={2}
                    roughness={1}
                    metalness={0.4}
                    side={THREE.DoubleSide}
                />
                <pointLight
                    ref={lightRef}
                    position={[0, 2, -.5]}
                    intensity={10}
                    distance={8}
                    color={'#ffffff'}
                    castShadow
                />
            </a.mesh>

            {/* Orbiting Buttons */}

            {buttonLabels.map((button, i) => (
                <group
                    key={button}
                    ref={el => (buttonRefs.current[i] = el)}
                >
                    <Html center >
                        <motion.button
                            whileHover={{
                                scale: 2,
                                boxShadow: '5px 10px 5rem #888888'
                              }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate(`/room/${button}`)}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '8px',
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '1px solid white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                backdropFilter: 'blur(4px)',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {button}
                        </motion.button>
                    </Html>
                </group>
            ))}
        </group>
    );
}
