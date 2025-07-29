import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';



export default function Snow({ count = 100 }) {
    const snowflakes = useRef();

    const positions = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    THREE.MathUtils.randFloatSpread(8), // x
                    Math.random() * 10, // y
                    THREE.MathUtils.randFloatSpread(8)  // z
                ],
                speed: 0.01 + Math.random() * 0.03
            });
        }
        return temp;
    }, [count]);

    useFrame(() => {
        snowflakes.current.children.forEach((flake, i) => {
            flake.position.y -= positions[i].speed;
            const r = Math.random() > 0.5 ? 1 : 0;
            const g = Math.random() > 0.5 ? 1 : 0;
            const b = Math.random() > 0.5 ? 1 : 0;
            flake.material.color.setRGB(r, g, b);
            flake.material.emissive.setRGB(r, g, b);

            if (flake.position.y < -5) {
                flake.position.y = 19 + Math.random(); // reset to top
            }
        });
    });

    return (
        <group ref={snowflakes}>
            {positions.map((flake, i) => (
                <mesh key={i} position={flake.position}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" />
                </mesh>
            ))}
        </group>
    );
}
