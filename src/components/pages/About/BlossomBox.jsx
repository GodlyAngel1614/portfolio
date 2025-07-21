import { useSpring, a } from '@react-spring/three';
import { Text } from '@react-three/drei';
import {useState} from "react";

export default function BlossomBox({ visible , counter}) {
 //   const [hovered, setHovered] = useState(false);
    const { scale, opacity } = useSpring({
        scale: visible ? 1 : 0,
        opacity: visible ? 0 : 1,
        config: { tension: 200, friction: 18 },
    });

    return (
        <a.group position={[0, 1.2, 0]} scale={scale}>
            <a.mesh scale={scale}>
                <boxGeometry args={[1, 1, 1]} />
                <a.meshStandardMaterial
                    color='#ffc856'
                    transparent
                    opacity={opacity}
                    emissive="#ffc856"
                    emissiveIntensity={1.2}
                />
            </a.mesh>

            <a.group scale={scale} position={[0, 1.2, 0]}>
                <Text fontSize={0.25} color="white" anchorX="center" anchorY="middle">
                    Please... Help me escape this glitchy TV of doom! 💫
                </Text>
                <Text fontSize={0.25} color="white" anchorX="center" anchorY="top" position={[0, -0.25, 0]}>
                   Click counter = { counter }
                </Text>
            </a.group>
        </a.group>
    );
}
