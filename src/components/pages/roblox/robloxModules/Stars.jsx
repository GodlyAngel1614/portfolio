import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Stars({ count = 100 }) {
    const Stars = useRef();

    const positions = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    THREE.MathUtils.randFloatSpread(100), // x
                    Math.random() * 20, // y
                    THREE.MathUtils.randFloatSpread(100)  // z
                ],
            });
        }
        return temp;
    }, [count]);



    return (
        <group ref={Stars}>
            {positions.map((flake, i) => (
                <mesh key={i} position={flake.position}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" />
                </mesh>
            ))}
        </group>
    );
}
