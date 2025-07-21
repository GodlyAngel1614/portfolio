import { Canvas } from "@react-three/fiber";
import PlayerCube from "./PlayerCube";
import CameraController from "./CameraController";
import { EffectComposer, Bloom , Glitch} from '@react-three/postprocessing';
import {useSpring} from "@react-spring/three";
import {useState} from "react";


export default function TVScene() {

    const [hovered, setHovered] = useState(false);
    const handlePointerOver = () =>  setHovered(true);

    const handlePointerOut = () => setHovered(false);

    return (
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[10, 10, 10]} />

            <mesh position={[0, 0, 0]}
                  onPointerOver={handlePointerOver}
                  onPointerOut={handlePointerOut}
            >
               <torusGeometry args={[1, 0.4, 68, 120]} />
                <meshStandardMaterial color={'#ffffff'} intensity={0.5} />
            </mesh>

            {/* TV interior: white box room */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[10, 10, 10]} />
                <meshStandardMaterial color="#000000" side={2} />
            </mesh>

            <EffectComposer>
                <Bloom
                    luminanceThreshold={0.2}
                    luminanceSmoothing={0.9}
                    intensity={1.5} // feel free to tweak
                />
            </EffectComposer>


            <CameraController />
            <PlayerCube />
        </Canvas>
    );
}